import Leftbar from "./Leftbar";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <Leftbar />
      <main className="mx-auto max-w-[1400px] px-4 pt-6" style={{ paddingLeft: 260 }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
