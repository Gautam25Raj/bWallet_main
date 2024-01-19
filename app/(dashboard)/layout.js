import QrModal from "@/components/modal/QrModal";
import Sidebar from "@/components/sidebar/Sidebar";
import PageHeader from "@/components/pageHeader/PageHeader";

export const metadata = {
  title: "B-Wallet",
  description: "By Bankless DAO",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <QrModal />

      <div className="hero-bg relative flex gap-5 bg-fixed">
        <Sidebar />

        <main className="relative w-full space-y-5 pr-5">
          <PageHeader />
          {children}
        </main>
      </div>
    </>
  );
}
