import coopersIcon from "../../assets/coopers-icon.png";

type Props = {
  source: string;
  description: string;
};

export function Card({ source, description }: Props) {
  return (
    <div className="bg-white flex flex-col w-full max-w-[360px] drop-shadow-[1px_1px_4px_rgba(12,41,208,0.16)] rounded-2xl">
      <div className="relative">
        <img src={source} alt="" />
        <img
          className="absolute -bottom-[28px] right-[5%]"
          src={coopersIcon}
          alt="Coopers logo icon"
        />
      </div>
      <div className="px-8 flex flex-col justify-end grow">
        <div className="mt-6 mb-4">
          <small className="w-[86px] py-[6px] px-3 text-gray-500 text-base border border-gray-500 rounded-2xl">
            function
          </small>
        </div>

        <div className="flex m-auto flex-col grow">
          <div className="grow">
            <p className="text-gray-700 text-lg font-medium">{description}</p>
          </div>

          <div className="mb-5 mt-5">
            <a className="text-green-400 text-base font-bold" href="aaa">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
