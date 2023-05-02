import { Button, Modal, message } from 'antd';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { blockUser } from '../../../Api/services/AdminReq';




const BlockModal = ({Id,setRefresh}) => {
    const { token } = useSelector((state) => state.adminLogin);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async() => {
    setIsModalOpen(false);

    const response = await blockUser(Id,token)
    if(response.data.success){
        console.log("bloked")
        setRefresh((state)=> !state)
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
export default BlockModal;