import DoctorDetailComponent from "../../components/ClientComponent/DoctorDynamic/DoctorDetailComponent";
import Layout from "../../components/layout/Layout";

function DoctorDynamic() {
  return (
    <>
      <Layout>
        <section className="bg-slate-100">
          <DoctorDetailComponent />
        </section>
      </Layout>
    </>
  );
}

export default DoctorDynamic;
