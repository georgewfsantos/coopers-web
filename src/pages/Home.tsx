import { useState } from "react";

import { ContactSession } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Modal } from "../components/Modal";
import { SliderSection } from "../components/SliderSection";
import { ToDoListSection } from "../components/ToDoListSection";
import { TopSection } from "../components/TopSection";

export function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TopSection setShowModal={setShowModal} />
      <ToDoListSection />
      <SliderSection />
      <ContactSession />
      <Footer />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
