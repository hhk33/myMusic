import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import store from "../store";

type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

type DispatchType = typeof store.dispatch;
export const useAppDispatch: () => DispatchType = useDispatch;
