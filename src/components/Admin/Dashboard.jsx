import Sidebar from "../DashboardComponents/Sidebar.jsx";
import Ebooks from "../DasboardPages/Ebooks.jsx";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <main className="p-4 sm:ml-64">
        <div className="m-6">
          <Ebooks />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
