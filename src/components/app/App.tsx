import React from "react";
import Header from "../header/Header";
import Sidebar from "../main/sidebar/Sidebar";
import Content from "../main/content/Content";
import s from "./styles.module.css";

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <Header />
      <main className={s.main}>
        <Sidebar />
        <Content />
      </main>
    </div>
  );
};

export default App;
