import { Action } from "@ngrx/store";

export interface appState{
  texto: string
}

export const initialState = {
  texto: 'Codigo Mentor'
}

export function miReducer(state: appState = initialState, action: Action): any {
  console.log(action);
}
