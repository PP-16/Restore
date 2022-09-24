import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import basketSlice from "../../features/basket/basketSlice";
import catalogSlice from "../../features/catalog/catalogSlice";
import { counterSlice } from "../../features/contact/counterSlice";
import { homeSlice } from "../../features/home/homeSlice";

export const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
    screen: homeSlice.reducer,
    basket: basketSlice,
    catalog: catalogSlice
  }
})

//เป็นค่ำ Default ที่มีอยู่ใน store คือ store.getState, store.dispatch (ใช้ตามรูปแบบเขาเลย)
export type RootState = ReturnType<typeof store.getState> // ค่าของ state ทั้งหมด
export type AppDispatch = typeof store.dispatch; // dispatch ส าหรับเรียก action

//ส ำหรับเรียกใข้dispatch และ state (ใช้ตามรูปแบบเขาเลย)
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
