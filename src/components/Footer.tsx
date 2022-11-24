import barImage from "../assets/bar-graphism-big.png";

export function Footer() {
  return (
    <footer className="mt-[36px] bg-footer bg-no-repeat bg-cover w-full min-h-[246px] flex flex-col justify-center items-center relative">
      <h6 className="text-white text-2xl font-semibold">Need help?</h6>
      <div className="text-center mt-5">
        <p className="text-white text-2xl font-semibold  mb-3">
          coopers@coopers.pro
        </p>
        <small className="text-white text-center">
          © 2021 Coopers. All rights reserved.
        </small>
      </div>
      <div className="absolute bottom-0">
        <img src={barImage} alt="Bar graphism" />
      </div>
    </footer>
  );
}
