import React from "react";
import Header from "./assets/Pages/Header/Header";
import Main from "./assets/Pages/Main/Main";
// import TestPage from "./assets/Pages/testpage/TestPage";
import Footer from "./assets/Pages/Footer/Footer";

import Presentation from "./assets/Pages/Main/Presentation/Presentation";

function App() {
  const [isPresentationMode, setIsPresentationMode] = React.useState(window.location.pathname === '/presentation');

  React.useEffect(() => {
    const handlePopState = () => {
      setIsPresentationMode(window.location.pathname === '/presentation');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (isPresentationMode) {
    return <Presentation standalone={true} />;
  }

  return (
    <>
      {/* <TestPage /> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
