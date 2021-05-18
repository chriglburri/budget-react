import { call, put, take } from "redux-saga/effects";
import types from "../actions/entries.actions";
import axios from "axios";

export function* gettAllEntries() {
    yield take(types.GET_ENTRIES);
    const result = yield call(axios, "http://localhost:3001/entries");
    yield put({ type: types.POPULATE_ENTRIES, payload: result.data });
}
