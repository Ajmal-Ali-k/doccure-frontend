import { Button, Modal } from 'antd';
import { useState } from 'react';
const Blockmodal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="danger" className="bg-red-500 text-white rounded-2xl hover:bg-red-800 shadow-md"  onClick={showModal}>
       Block
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  okButtonProps={{ style: { backgroundColor: 'red' } }} >
        Are you sure ?
      </Modal>
    </>
  );
};
export default Blockmodal;