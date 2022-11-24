import { ModalContent } from "./ModalContent";

type Props = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

export function Modal({ showModal, setShowModal }: Props) {
  return (
    <div
      className={`${
        showModal ? "flex justify-center" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 p-4 w-full md:inset-0 h-full bg-[#0C0C0C] bg-opacity-80`}
    >
      <div className="relative w-full max-w-[932px] h-full md:h-auto">
        <ModalContent setShowModal={setShowModal} />
      </div>
    </div>
  );
}
