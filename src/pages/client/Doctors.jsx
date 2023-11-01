
import DoctorCard from "../../components/doctorsListComponent/DoctorCard";
import Layout from "../../components/layout/Layout";

function Doctors() {
  return (
    <main>
      <Layout>
        <section className="bg-slate-100 h-full">
          <DoctorCard />
        </section>
      </Layout>
    </main>
  );
}

export default Doctors;
