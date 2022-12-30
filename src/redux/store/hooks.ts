import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./index";

/* 
  * useAppSelector
  Цель данного хука, избавить нас, от постоянной аннотиции аргумента "state" при использовании 
  хука useSelector.
  Определив тут пользовательский хук, теперь он всегда будет знать о том, какое актуальное состояние
  у нашего приложения.
*/
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* 
  * useAppDispatch
  По умолчанию, хук useDispatch ничего не знает о Thunk.
  Определив тут пользовательский хук, мы его об этом уведомляем.
*/
export const useAppDispatch: () => AppDispatch = useDispatch;
