import React from "react";
import ChatComponets from "../../components/ClientComponent/Chat/ChatComponets";
import Layout from "../../components/layout/Layout";

function Messenger() {
  return (
    <>
      <Layout>
        <section className="bg-slate-100">
          <ChatComponets />
        </section>
      </Layout>
    </>
  );
}

export default Messenger;
