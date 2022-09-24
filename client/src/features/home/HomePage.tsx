import React, { useEffect } from "react";
import Slider from "react-slick";
import { useAppDispatch } from "../../app/store/configureStore";
import { setscreen } from "./homeSlice";

export default function HomePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setscreen())
    return () => {
      dispatch(setscreen())
    };
  }, [dispatch]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <img
          src="https://i.pinimg.com/originals/67/71/3f/67713f6f2db869d8dda38385a04b2789.gif"
          height={350}
          width={500}
        />
        <img
          src="https://i.pinimg.com/originals/4f/a2/5f/4fa25fc1b73cd845cc25ad4a0b36f32a.gif"
          height={350}
          width={500}
        />

        <img
          src="https://i.pinimg.com/originals/d7/97/1d/d7971d294282f717b45e1239e19a3cc8.gif"
          height={350}
          width={500}
        />
      </Slider>
    </>
  );
}
