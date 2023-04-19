
import { Button, Modal, Space, message } from "antd";
import { useState } from "react";
import { deleteDepartment } from "../../../Api/services/AdminReq";
import { useSelector } from "react-redux";

const DeleteModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token } = useSelector((state) => state.adminLogin);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    setIsModalOpen(false);
    console.log(props.id,"this is props")
    const response = await deleteDepartment(props.id,token)
    if(response.data.success){
      props.setRefresh(state => !state)
      message.success(response.data.message)
    }else{
      message.error(response.data.message)
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="danger" className="bg-red-500 text-white" onClick={showModal}>
        delete
      </Button>
      <Modal
        title="Delete"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: 'red' } }} 
     
      >
      
        <p>Are you sure ?</p>

      </Modal>
    </>
  );
};

export default DeleteModal;
