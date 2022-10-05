import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { State } from "./index";

export const COUNTER_KEY = 'counter'

export const increase = createAction('[COUNTER] increase')
export const decrease = createAction('[COUNTER] decrease')
export const clear = createAction('[COUNTER] clear')
export const changeUpdatedAt = createAction(
  '[COUNTER] change updated at',
  props<{updatedAt: number}>()
)

export interface CounterState {
  count: number
  updatedAt?: number
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

  on(changeUpdatedAt, (state, action): CounterState => ({
    ...state,
    updatedAt: action.updatedAt,
  }) )
)

export const selectFeature = createFeatureSelector<CounterState>(COUNTER_KEY)
export const selectCount = createSelector(
  selectFeature,
  state => state.count,
)
export const selectUpdatedAt = createSelector(
  selectFeature,
  state => state.updatedAt,
)
