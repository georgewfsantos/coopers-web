import { ContactForm } from "../ContactForm";

import avatarImage from "../../assets/form-avatar.png";

export function ContactSession() {
  return (
    <section className="mt-40 flex flex-col items-center">
      <div className="bg-bar-graphism-small bg-no-repeat bg-[left_top_50%] w-[300px] flex justify-center items-center">
        <img src={avatarImage} alt="User avatar" />
      </div>

      <ContactForm />
    </section>
  );
}
