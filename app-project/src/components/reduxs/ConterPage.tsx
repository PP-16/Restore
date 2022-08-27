import { Card, Box, CardContent, Typography, IconButton, CardMedia, useTheme, Grid, Divider } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, Counterstate, minusCount, resetCount } from './ReducerCounter'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

import SquareIcon from '@mui/icons-material/Square';


export default function ConterPage() {
 const dispatch = useDispatch()
 const {count,price} = useSelector((state : Counterstate)=>state.ReducerCounter)
 const {testsum} = useSelector((state : any)=>state.TestReducer)
 const theme = useTheme();
 
  return (
    <Grid container  justifyContent="center" grid-xs-4>
            <Card sx={{ display: 'flex'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Counter
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {count} 
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            total price : {price} 
          </Typography>
          <Divider/>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            total price : {testsum} 
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={()=>dispatch(addCount(5))}>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={()=>dispatch(resetCount(0))}>
            <SquareIcon sx={{ height: 30, width: 30 }} />
          </IconButton>
          <IconButton aria-label="next" onClick={()=>dispatch(minusCount(5))}>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image="https://i.pinimg.com/originals/f6/a4/fc/f6a4fc97b95f9225557f4b139c687560.gif"
        alt="Live from space album cover"
      />
    </Card>
    </Grid>
  )
}
