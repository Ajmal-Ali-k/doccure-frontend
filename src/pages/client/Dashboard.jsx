
import Loader from "../../components/HomeComponents/Loader";
import DashBoardComponents from "../../components/ClientComponent/userProfile/DashBoardComponents";
import Layout from "../../components/layout/Layout";

function Dashboard() {
  return (
    <>
      <Layout>
        <section className="bg-slate-100">
          <DashBoardComponents />
        </section>
      </Layout>
    </>
  );
}

export default Dashboard;
