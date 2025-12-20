import React from "react";
import Header from "./assets/Pages/Header/Header";
import Main from "./assets/Pages/Main/Main";
// import TestPage from "./assets/Pages/testpage/TestPage";
import Footer from "./assets/Pages/Footer/Footer";
import SnowEffect from "./components/SnowEffect";

function App() {
  return (
    <>
      <SnowEffect />
      {/* <TestPage /> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

