import { Button, Modal, message } from "antd";
import { useSelector } from "react-redux";

import { useState } from "react";
import { addDepartment } from "../../../Api/services/AdminReq";

function AddDepartmentmodal(props) {
  const toBase64 = (image) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  }).catch((err) => {
    console.log(err);
  })
  const { token } = useSelector((state) => state.adminLogin);
  const [department,setDepartment] =useState('');
  const [depphoto,setDepphoto]=useState(null)
  const [discription,setDiscription] = useState('') 
   const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
    setDepartment('')
    setDiscription('')
    setDepphoto(null)
  };
  const handleOk = async() => {
    setIsModalOpen(false);
    console.log(department,depphoto)
    const image = await toBase64(depphoto)
    const data ={department,image,discription}
    const response = await addDepartment(data,token)
    if(response.data.success){
      props.setRefresh(state => !state)
      setDepartment('')
     
      message.success(response.data.message)
    }else{
      message.error(response.data.message)
    }

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <>
        <Button type="primary bg-blue-600" onClick={showModal}>
          Add Department
        </Button>
        <Modal
          title="Add department"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ style: { backgroundColor: 'Blue' } }} 
   
          
        >
  
          <div className="sm:col-span-2">
                <label
                  htmlFor="certificate"
                  className="block my-3 text-sm font-medium text-gray-900 dark:text-white"
                >
             Department name
                </label>
                <input
                  id="certificate"
                  name="certificate"
                  type="text"
                  value={department}
                  className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Department name"
                  onChange={(e)=>setDepartment(e.target.value)}
                />
          
              </div>
          <div className="sm:col-span-2">
                <label
                  htmlFor="certificate"
                  className="block my-3 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Upload department photo
                </label>
                <input
                  id="certificate"
                  name="certificate"
                 
                  type="file"
                  className="block p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  onChange={(e)=>setDepphoto(e.target.files[0])}
                />
          
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="certificate"
                  className="block my-3 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Discription
                </label>
                <input
                  id="certificate"
                  name="certificate"
                 value={discription}
                  type="text"
                  className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  onChange={(e)=>setDiscription(e.target.value)}
                />
          
              </div>
        </Modal>
      </>
    </div>
  );
}

export default AddDepartmentmodal;
