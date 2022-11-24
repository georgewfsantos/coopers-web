import { useNavigate } from "react-router-dom";

import { Button } from "./Button";
import { useAuth } from "../hooks/auth";

import logo from "../assets/logo.png";
import roomImage from "../assets/room.png";
import scrollIcon from "../assets/scroll-icon.svg";

type Props = {
  setShowModal: (value: boolean) => void;
};

export function TopSection({ setShowModal }: Props) {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function handleNavigationToList() {
    if (user?.id) {
      return navigate("/myList");
    }

    setShowModal(true);
  }

  function handleAuthenticationButtonClick() {
    if (user?.id) {
      return signOut();
    }

    return setShowModal(true);
  }

  return (
    <section className="flex flex-col  mt-6 md:px-20 min-[1200px]:bg-logo bg-no-repeat bg-right-top min-h-[734px]">
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between mt-[30px]">
        <img className="mb-4 md:m-0" src={logo} alt="Logo" />
        <Button
          className="w-[120px] h-10 bg-black hover:bg-slate-900 text-white text-sm font-semibold items-center"
          title={user?.id ? "sign out" : "sign in"}
          onClick={handleAuthenticationButtonClick}
        />
      </div>

      <div className="flex flex-col md:flex-row md:mt-[52px] md:justify-center lg:justify-between lg:text-start">
        <div className="mt-6 text-center lg:text-start md:mt-[52px]">
          <hgroup>
            <h1 className="text-black font-bold text-5xl md:text-[80px]">
              Organize
            </h1>
            <p className="text-green-500 text-3xl md:text-[60px] leading-tight">
              your daily jobs
            </p>
          </hgroup>

          <p className="text-black text-xl font-semibold md:text-2xl my-8 md:mt-[56px] md:mb-11">
            The only way to get things done
          </p>

          <Button
            className="w-56 h-16 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-[10px] md:w-[300px] md:text-2xl"
            title="Go to To-do list"
            onClick={handleNavigationToList}
          />
        </div>
        <img
          className="hidden lg:block"
          src={roomImage}
          alt="Imagem de uma sala"
        />
      </div>
      <div className="flex justify-center items-center mt-11">
        <img src={scrollIcon} alt="Scroll icon" />
      </div>
    </section>
  );
}
