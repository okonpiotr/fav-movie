import { createReducer } from "@ngrx/store";

interface AppData {
  name: string;
}

export interface State {
  appData: AppData;
}

export const  appReducer = createReducer<State>(
  {
    appData: {name: "myApp"}
  }
)
