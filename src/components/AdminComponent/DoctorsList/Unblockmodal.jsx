
import { Button, Modal, message } from 'antd';
import { useState } from 'react';
import { unBlockDoctor } from '../../../Api/services/AdminReq';


const Unblockmodal = ({Id,token,setRefresh}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk =async () => {
    setIsModalOpen(false);
    const response = await unBlockDoctor(Id,token)
    if(response.data.success){
      setRefresh(state => !state)
    }else{
      message.error('some thing went wrong')
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


export default Unblockmodal
