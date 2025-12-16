import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Laws from "./pages/Laws";
import LawPage from "./pages/LawPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");
  const [currentLaw, setCurrentLaw] = useState(null);

  const renderPage = () => {
    switch(page) {
      case "home": return <Home goTo={setPage} />;
      case "laws": return <Laws onOpenLaw={(law) => { setCurrentLaw(law); setPage("law"); }} />;
      case "law": return <LawPage law={currentLaw} onBack={() => setPage("laws")} />;
      case "about": return <About />;
      case "contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setPage} />
      <main className="flex-1 pt-24 px-4 sm:px-8">{renderPage()}</main>
      <Footer />
    </div>
  );
}
