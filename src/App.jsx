import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./assets/Pages/Header/Header";
import Main from "./assets/Pages/Main/Main";
// import TestPage from "./assets/Pages/testpage/TestPage";
import Footer from "./assets/Pages/Footer/Footer";
import { useLanguage } from "./context/LanguageContext";

import Presentation from "./assets/Pages/Main/Presentation/VerticalPresentation";
import { SecureRoute } from "./components/SecureRoute";

// We'll import these lazily so they don't block the main bundle
const PdfVerificationScreen = React.lazy(() => import("./assets/Pages/Viewer/PdfVerificationScreen"));
const PdfViewer = React.lazy(() => import("./assets/Pages/Viewer/PdfViewer"));

function AppLayout() {
  return (
    <>
      {/* <TestPage /> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

import verifiedDocPdf from "./assets/Verify/verified_doc.pdf";

function App() {
  const { t } = useLanguage();

  React.useEffect(() => {
    document.title = t('hero.title');
  }, [t]);

  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50/50">Loading...</div>}>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/presentation" element={<Presentation standalone={true} />} />
        <Route path="/verify-pdf" element={<PdfVerificationScreen />} />
        <Route 
          path="/verify" 
          element={
            <PdfViewer 
              pdfUrl={verifiedDocPdf} 
              isSecure={false} 
              title="Verified Document" 
            />
          } 
        />
        <Route 
          path="/secure-document" 
          element={
            <SecureRoute>
              <PdfViewer />
            </SecureRoute>
          } 
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
