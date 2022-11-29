import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from 'app/redux/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function useAuth() {
  return useAppSelector(state => state.user, shallowEqual);
}

export default useAuth;
