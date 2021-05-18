import { call, fork, put, take } from "redux-saga/effects";
import types from "../actions/entries.actions";
import axios from "axios";

export function* gettAllEntries() {
    yield take(types.GET_ENTRIES);
    const result = yield call(axios, "http://localhost:3001/entries");
    yield put({ type: types.POPULATE_ENTRIES, payload: result.data });
}

export function* getEntryDetails(id) {
    const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
    yield put({
        type: types.POPULATE_ENTRY_DETAILS,
        payload: { id, entry: data },
    });
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(types.POPULATE_ENTRIES);
    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        yield fork(getEntryDetails, entry.id);
    }
}
