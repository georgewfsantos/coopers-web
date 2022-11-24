import { default as SlickSlider, Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../styles/slider.css";

import { Card } from "./Card";

import firstSlideImage from "../../assets/first-slide-image.png";
import secondSlideImage from "../../assets/second-slide-image.png";
import thirdSlideImage from "../../assets/third-slide-image.png";

const slides = [
  {
    image: firstSlideImage,
    description: "Organize your daily job enhance your life performance",
  },
  {
    image: secondSlideImage,
    description:
      "Mark one activity as done makes your brain understands the power of doing.",
  },
  {
    image: thirdSlideImage,
    description:
      "Careful with missunderstanding the difference between a list of things and a list of desires.",
  },
  {
    image: firstSlideImage,
    description: "Organize your daily job enhance your life performance",
  },
  {
    image: secondSlideImage,
    description:
      "Mark one activity as done makes your brain understands the power of doing.",
  },
  {
    image: thirdSlideImage,
    description:
      "Careful with missunderstanding the difference between a list of things and a list of desires.",
  },
  {
    image: firstSlideImage,
    description: "Organize your daily job enhance your life performance",
  },
  {
    image: secondSlideImage,
    description:
      "Mark one activity as done makes your brain understands the power of doing.",
  },
  {
    image: thirdSlideImage,
    description:
      "Careful with missunderstanding the difference between a list of things and a list of desires.",
  },
];

export function Slider() {
  const sliderSettings: Settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <SlickSlider {...sliderSettings}>
      {slides.map((slide, index) => (
        <Card
          source={slide.image}
          key={index}
          description={slide.description}
        />
      ))}
    </SlickSlider>
  );
}
