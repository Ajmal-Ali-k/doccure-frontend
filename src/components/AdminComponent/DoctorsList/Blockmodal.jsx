import { Button, Modal, message } from 'antd';
import { useState } from 'react';
import { blockDoctor } from '../../../Api/services/AdminReq';
const Blockmodal = ({Id,token,setRefresh}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk =async () => {
    setIsModalOpen(false);
    const response = await blockDoctor(Id,token)
    if(response.data.success){
      setRefresh(state=> !state)
    }else{
      message.error("something went wrong")
    }
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