'use client';

import AIChatContent from '@/components/ai-chat-content';
import { NavigationBar } from '@/components/navigation-bar';
import { NewGroup } from '@/components/new-group';

const Calls = () => {
  return (
    <>
      <NavigationBar trigger={<NewGroup />} />
      <AIChatContent />
    </>
  );
};

export default Calls;
