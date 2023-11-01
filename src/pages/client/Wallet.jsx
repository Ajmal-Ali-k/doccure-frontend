import React from "react";
import WalletComponent from "../../components/ClientComponent/userProfile/WalletComponent";
import Layout from "../../components/layout/Layout";


function Wallet() {
  return (
    <>
      <Layout>
        <section className="bg-slate-100">
          <WalletComponent />
        </section>
      </Layout>
    </>
  );
}

export default Wallet;
