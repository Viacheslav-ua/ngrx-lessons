import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { State } from "./index";

export const increase = createAction('[COUNTER] increase')
export const decrease = createAction('[COUNTER] decrease')
export const clear = createAction('[COUNTER] clear')

export interface CounterState {
  count: number
}

export const initialState: CounterState = {
  count: 0,
}

export const counterReducer = createReducer(
  initialState,
  on(increase, (state): CounterState => ({
    ...state,
    count: state.count + 1,
  })),
  on(decrease, (state): CounterState => ({
    ...state,
    count: state.count - 1,
  })),
  on(clear, (state): CounterState => ({
    ...state,
    count: 0
  })),
)

export const selectFeature = createFeatureSelector<CounterState>('counter')
export const selectCount = createSelector(
  selectFeature,
  state => state.count,
)
