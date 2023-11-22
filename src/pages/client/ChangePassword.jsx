import React from "react";
import ChangePasswordComponent from "../../components/ClientComponent/ChangePassword/ChangePasswordComponent";
import Layout from "../../components/layout/Layout";

function ChangePassword() {
  return (
    <div>
      <Layout>
        <section className="bg-slate-100">
          <ChangePasswordComponent />
        </section>
      </Layout>
    </div>
  );
}

export default ChangePassword;
