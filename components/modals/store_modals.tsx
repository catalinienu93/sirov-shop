'use client';

import { useStoreModalStore } from '@/hooks/use_store_modal';
import { Modal } from '@/components/ui/modal';

export const StoreModal = () => {
  const storeModal = useStoreModalStore();
  return (
    <Modal
      title='Create Store'
      desc='Add new Store'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};
