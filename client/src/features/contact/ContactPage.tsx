import { Button, ButtonGroup } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";

export default function ContactPage() {
  const dispatch = useAppDispatch();
  const { num } = useAppSelector((state) => state.count);

  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => dispatch(decrement(5))}>-</Button>
        <Button>{num}</Button>
        <Button onClick={() => dispatch(increment(5))}>+</Button>
      </ButtonGroup>
    </>
  );
}
