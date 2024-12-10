import Header from "./components/Header";
import Navbar from "./components/Navbar";
// eslint-disable-next-line react/prop-types
function AdminLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-50 px-4 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
