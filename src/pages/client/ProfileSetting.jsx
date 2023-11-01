import React from "react";
import NavbarComponent from "../../components/HomeComponents/NavbarComponent";
import ProfileUpdateForm from "../../components/ClientComponent/userProfile/ProfileUpdateForm";
import Layout from "../../components/layout/Layout";

function ProfileSetting() {
  return (
    <>
      <Layout>
        <section className="bg-slate-100">
          <ProfileUpdateForm />
        </section>
      </Layout>
    </>
  );
}

export default ProfileSetting;
