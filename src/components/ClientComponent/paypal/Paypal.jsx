import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import ModalSuccess from "../modal/Successmodal";
import { AxiosClient} from "../../../Axios/Axios"

function Paypal({ amount, checkedValues,timing,date,documentId }) {
  const navigate = useNavigate()
  const [order, setOrder] = useState("");
  const [modal, setmodal] = useState(false);
  const [appoinmentId,setAppoinmentId]= useState("");

  const totalAmount =  amount;
  const {token} = useSelector(state=>state.clientLogin)

  console.log(totalAmount, "totl amount");

  // const {client} = useSelector((state) => state.student._id);
  let { id } = useParams();
  console.log(id,"this is use params id")
  const createOrder = (order_id) => {
    AxiosClient
      .post(
        "/create_booking",
        { slot: checkedValues,totalAmount, doctor: id, order_id,timing,date,documentId },
        {
          headers: {
            Authorization:"Bearer"+token
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          // setOrder(res.data.result);
          setAppoinmentId(res.data.appoinmentId)
          navigate('/booking_success/'+res.data.appoinmentId);
        }
      });
  };

  return (
    <div>
      {modal ? (
        <ModalSuccess modal={modal} setModal={setmodal} />
      ) : (
        <PayPalScriptProvider
          options={{
            "client-id":"AajWG1Y8tGI190qkzd_6HfPnl96EEc1xWKXVYZvYYe-pivjr0nJMqyfRiSxRXbqhwi7a_7ZlR7kd77Oa",
          }}
        >
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={async (data, actions) => {
              const orderId = await actions.order
                .create({
                  purchase_units: [
                    {
                      amount: {
                        value: totalAmount,
                      },
                    },
                  ],
                });
              return orderId;
            }}
            onApprove={async function (data, actions) {
              await actions.order.capture();
              // Your code here after capture the order
              if (data.orderID) {
                createOrder(data.orderID);
                // setmodal(true);
              } else {
              }
            }}
          />
        </PayPalScriptProvider>
      )}
    </div>
  );
}

export default Paypal;
