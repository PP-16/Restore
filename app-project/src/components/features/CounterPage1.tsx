import { Card, Box, CardContent, Typography, IconButton, CardMedia, useTheme, Grid, Divider } from '@mui/material'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

import SquareIcon from '@mui/icons-material/Square';
import { RootState, useAppDispatch, useAppSelector } from '../reduxs/store';
import { decrement, increment,incrementByAmount,reset } from '../reduxs/counterSlice';


export default function ConterPage1() {
const{value} = useAppSelector((state:RootState)=>state.mycoun)
const dispatch = useAppDispatch()



 const theme = useTheme();
 
  return (
    <Grid container  justifyContent="center" grid-xs-4>
            <Card sx={{ display: 'flex'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Counter {value}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
             
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            total price :
          </Typography>
          <Divider/>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            total price :
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={()=>dispatch(incrementByAmount(5))} >
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={()=>dispatch(reset())} >
            <SquareIcon sx={{ height: 30, width: 30 }} />
          </IconButton>
          <IconButton aria-label="next" onClick={()=>dispatch(decrement())}>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image="https://i.pinimg.com/originals/b0/69/75/b0697526e8d438777adc89c9591a0d34.gif"
        alt="Live from space album cover"
      />
    </Card>
    </Grid>
  )
}



