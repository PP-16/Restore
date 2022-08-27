import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import Slider from "react-slick";
import { setContainer } from './reduxs/containerSlice';
import { useAppDispatch } from './reduxs/store';
export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(setContainer())
    console.log("1111111111")

    return()=>{
      dispatch(setContainer())
      console.log("222222222")
    }
  },[dispatch])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const data=[1,2,3,4,5]

  return (
    <div>
    <Slider {...settings}>
      {data.map(item=>(
        <img src ={`https://picsum.photos/200/300?${Math.random()}`} height={500}/>
      ))}
    </Slider>
    <Box display="flex" justifyContent="center" sx={{mt:2}}>
    <Typography variant='h2'>Home Page</Typography>
    </Box>
  </div>
  )
}
