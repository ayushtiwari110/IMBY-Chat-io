'use client';

import { type CoreMessage } from 'ai';
import { useState, useEffect, useRef } from 'react';
import { continueConversation } from '../app/actions';
import { readStreamableValue } from 'ai/rsc';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Mic, Paperclip, Sparkle, User, Send } from 'lucide-react'
import Markdown from 'react-markdown'

export const maxDuration = 30;

const Message = ({message}: {message: CoreMessage}) => (
  <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
    {message.role === 'assistant' && <Sparkle size={32} className="text-blue-500 bg-white dark:bg-gray-800 px-2 py-2 mr-1 rounded-full" />}
    <div className={`max-w-[70%] rounded-lg p-3 ${
      message.role === 'user' 
        ? 'bg-blue-500 text-white' 
        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
    }`}>
      {/* {String(message.content)} */}
      <Markdown>{String(message.content)}</Markdown>
    </div>
    {message.role === 'user' && <User size={32} className="text-blue-500 bg-white dark:bg-gray-800 px-2 py-2 ml-1 rounded-full" />}
  </div>
);

export default function AIChatContent() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState('');
  const [data, setData] = useState<any>();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages: CoreMessage[] = [
      ...messages,
      { content: input, role: 'user' },
    ];

    setMessages(newMessages);
    setInput('');

    const result = await continueConversation(newMessages);
    setData(result.data);

    for await (const content of readStreamableValue(result.message)) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: content as string,
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col items-center pb-24 md:pb-4 mb-16 mt-10">
        <div className="w-full max-w-2xl">
          {messages.map((m, i) => (
            <Message key={i} message={m} />
          ))}
          {messages.length === 0 && (
            <div className="flex items-start space-x-2">
              <Sparkle size={36} className="text-blue-500 bg-white dark:bg-gray-800 px-2 py-2 rounded-full" />
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 max-w-[70%]">
                Hi there! 👋 I can help you plan a trip based on books you love. What are some of your favorite books? I can suggest some destinations based on their settings.
              </div>
            </div>
          )}
          <div ref={messagesEndRef}/>
        </div>
      </div>
      <div className="w-full flex justify-center bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 fixed bottom-20 md:bottom-0 left-0 right-0">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl p-4">
          <div className="flex items-center space-x-2">
          <Sparkle size={36} className="text-blue-500 bg-gray-100 dark:bg-gray-800 px-2 py-2 mr-1 rounded-full" />
            <Input
              className="flex-1 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="Send a message."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button type="button" size="icon" variant="ghost" className="text-gray-500 dark:text-gray-400" onClick={handleSubmit}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}