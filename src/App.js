import "./App.css";
import About from "./components/about/About";
import Download from "./components/download/Download";
import EndSection from "./components/endSection/EndSection";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Testimonials from "./components/testimonials/Testimonials";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {

  const [show, setShow] = useState(false);

  const handleShow = (value) => {
    console.log(value)

    setShow(value);
  };

  return (<>
    <div className="container-large">
      <Header handleShow={handleShow}/>
      <HeroSection />
      <About />
      <Features />
      <Download />
      <Testimonials />
      <EndSection />
    </div>
    {show ? <Modal handleShow={handleShow} /> : <></>}
  </>);
}

export default App;
