'use client';

import { FaSignalMessenger } from 'react-icons/fa6';
import { TbMessageChatbot } from "react-icons/tb";

import { NavigationBar } from '@/components/navigation-bar';
import { NewGroup } from '@/components/new-group';
import { MobileChatContent } from '@/components/mobile-chat-content';

const ChatPage = () => {
  return (
    <>
      <NavigationBar trigger={<NewGroup />} />
      <div className='hidden md:grid h-full max-w-56 text-center mx-auto place-content-center'>
        <TbMessageChatbot className='mx-auto text-primary-main' size={200} />
        <p className='text-md mt-5 dark:text-white text-black'>
          <span className='font-semibold text-primary-main text-xl'>Welcome to Chat io 😄</span> <br/> Happy chatting with your loved ones! 🎉
        </p>
      </div>
      <div className='md:hidden flex flex-col space-y-2'>
        <MobileChatContent />
      </div>
    </>
  );
};

export default ChatPage;
