import { useState } from "react";

import { Button } from "../Button";
import { Field } from "../Form/Field";
import { Input } from "../Form/Input";
import { useAuth } from "../../hooks/auth";

import signInIllustration from "../../assets/sign-in-image.png";

type Props = {
  setShowModal: (value: boolean) => void;
};

export function ModalContent({ setShowModal }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    signIn({ email, password });
    setShowModal(false);
  }

  return (
    <div className="relative md:top-28 bg-white rounded-lg shadow pb-11">
      <button
        type="button"
        className="absolute top-3 right-2.5 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm md:text-xl font-bold p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={() => setShowModal(false)}
      >
        close
      </button>
      <div className="py-6 px-6 lg:px-8">
        <div className="md:flex items-center md:mt-[76px]">
          <img
            className="mx-auto md:ml-0 md:mr-10"
            src={signInIllustration}
            alt="Sign in illustration"
          />
          <hgroup className="text-center md:text-left">
            <h1 className="leading-snug text-black text-5xl md:text-[80px] font-bold">
              Sign in
            </h1>
            <p className="text-green-500 text-4xl md:text-[50px]">
              to access your list
            </p>
          </hgroup>
        </div>
        <div className="w-full flex justify-center">
          <form className="space-y-6 max-w-[342px]" onSubmit={handleSubmit}>
            <div>
              <Field
                label="User:"
                customLabelClass="text-black text-2xl font-semibold"
              >
                <Input
                  type="email"
                  borderColor="input-500"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Field>
            </div>
            <div>
              <Field
                label="Password:"
                customLabelClass="text-black text-2xl font-semibold"
              >
                <Input
                  type="password"
                  borderColor="input-500"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Field>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full h-16 bg-green-500 text-white text-2xl font-semibold rounded-[4px] hover:bg-green-400 mt-9"
                title="Sign in"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
