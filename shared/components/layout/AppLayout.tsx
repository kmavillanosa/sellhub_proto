import { ReactNode } from "react";
import Header from "./AppHeader";

import styles from "styles/Home.module.css";
interface LayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
