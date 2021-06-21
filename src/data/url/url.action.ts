import { createAction, props } from '@ngrx/store';

export const changeURL = createAction('Update URL', props<{ url: string }>());
