import { combineReducers } from "redux";
 import {all} from "redux-saga/effects";

import * as auth from "../app/modules/_auth/_redux/authRedux";
import * as layout from "../app/layout/_redux/layoutRedux";
import * as demo from "../app/modules/_demo/_redux/demoRedux";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  layout: layout.reducer,
  demo: demo.reducer,
});

export function* rootSaga() {
  //  yield all([cart.saga()]);
}
