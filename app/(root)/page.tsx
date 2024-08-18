'use client';
import { useStoreModalStore } from '@/hooks/use_store_modal';
import { useEffect } from 'react';
const SetupPage = () => {
  const onOpen = useStoreModalStore((state) => state.onOpen);
  const isOpen = useStoreModalStore((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div></div>;
};

export default SetupPage;
