import mailIcon from "../assets/mail-icon.svg";
import { Button } from "./Button";
import { Field } from "./Form/Field";
import { Input } from "./Form/Input";

export function ContactForm() {
  return (
    <div className="shadow-[0_8px_16px_rgba(6,21,43,0.08)] md:w-[700px] py-4 px-[60px]">
      <div className="flex items-center justify-center md:justify-start">
        <img src={mailIcon} alt="" />
        <div className="flex flex-col ml-6">
          <p className="tracking-[0.08rem] text-2xl text-gray-900 font-medium">
            GET IN
          </p>
          <p className="tracking-[0.08rem] text-2xl text-gray-900 font-bold">
            TOUCH
          </p>
        </div>
      </div>

      <fieldset>
        <Field label="Your name">
          <Input
            type="text"
            borderColor="slate-900"
            placeholder="type your name here..."
          />
        </Field>

        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-[48%]">
            <Field label="Email*">
              <Input
                type="email"
                borderColor="slate-900"
                placeholder="example@example.com"
              />
            </Field>
          </div>
          <div className="md:w-[48%]">
            <Field label="Telefone*">
              <Input
                type="phone"
                borderColor="slate-900"
                placeholder="(  ) ____-____"
              />
            </Field>
          </div>
        </div>

        <Field label="Message*">
          <textarea
            className="w-full min-h-[150px] border border-slate-900 px-4 rounded-[4px] resize-none p-4 focus:outline-gray-500"
            placeholder="type what you want to say to us"
            rows={4}
            maxLength={400}
          />
        </Field>

        <Button
          className="w-full h-[52px] bg-green-600 hover:bg-green-500 text-white font-bold rounded-[4px] mt-[40px] mb-[60px]"
          title="SEND NOW"
        />
      </fieldset>
    </div>
  );
}
