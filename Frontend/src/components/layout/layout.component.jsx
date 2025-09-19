import { useLocation } from "react-router";

export const Layout = ({ children }) => {
  const location = useLocation().pathname;

  return (
    <main className={`min-h-screen bg-off-white relative z-10 ${location === '/' ? 'mb-0' : 'pb-60 pt-8'}`}>
      <div className=" mx-auto">
        {children}
      </div>
    </main>
  );
};
