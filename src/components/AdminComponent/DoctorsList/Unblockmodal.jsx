
import { Button, Modal } from 'antd';
import { useState } from 'react';


const Unblockmodal = () => {
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
      <Button type="danger" className="bg-green-500 text-white rounded-2xl hover:bg-green-800 shadow-md"  onClick={showModal}>
       Unblock
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  okButtonProps={{ style: { backgroundColor: 'green' } }} >
        Are you sure ?
      </Modal>
    </>
  );
};


export default Unblockmodal
