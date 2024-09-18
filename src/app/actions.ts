'use server';

import { createStreamableValue } from 'ai/rsc';
import { CoreMessage, streamText } from 'ai';

import { google } from '@ai-sdk/google';

export async function continueConversation(messages: CoreMessage[]) {
  const model = google('gemini-1.5-pro-latest');
  const result = await streamText({
    model,
    messages,
  });

  const data = { test: 'hello' };
  const stream = createStreamableValue(result.textStream);
  return { message: stream.value, data };

}