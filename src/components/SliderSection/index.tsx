import { Slider } from "./Slider";

export function SliderSection() {
  return (
    <section className="lg:pl-[140px] mt-16">
      <div className="w-full xl:w-[1080px] bg-green-500 md:pl-20 md:pt-20 min-h-[520px] lg:rounded-[10px]">
        <h1 className="text-white font-bold text-4xl md:text-5xl text-center md:text-left pt-10 md:pt-0">
          good things
        </h1>
      </div>

      <div className="-mt-[420px] md:-mt-[360px] md:ml-20 border-0">
        <Slider />
      </div>
    </section>
  );
}
