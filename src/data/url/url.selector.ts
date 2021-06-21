import { createSelector } from '@ngrx/store';

export interface FeatureState {
  url: string;
}

export interface AppState {
  url: FeatureState;
}

export const selectFeature = (state: AppState) => state.url;

export const selectURL = createSelector(
  selectFeature,
  (state: FeatureState) => state.url
);
