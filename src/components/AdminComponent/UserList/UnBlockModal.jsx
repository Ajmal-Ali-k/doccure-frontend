import { Button, Modal, message } from 'antd';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { UnblockUser } from '../../../Api/services/AdminReq';


const UnBlockModal = ({Id,setRefresh}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token } = useSelector((state) => state.adminLogin);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk =async () => {
    setIsModalOpen(false);
    const response = await UnblockUser(Id,token)
    console.log(response)

    if(response.data.success){
      console.log("unbloked")
      setRefresh((state) => !state)
    }else{
      message.error("something went wrong")
    }


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


export default UnBlockModal
