import { createReducer, on } from '@ngrx/store';
import { changeURL } from './url.action';

export const initialState = '';

const _counterReducer = createReducer(
  initialState,
  on(changeURL, (state, { url }) => url)
);

export function urlReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
