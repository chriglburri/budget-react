import { call, put, take } from "@redux-saga/core/effects";
import axios from "axios";
import types from "../actions/entries.actions";
import settings from "../configuration/application";

export function* deleteEntrySaga() {
    while (true) {
        // hack to prevent multiple execution
        const { payload } = yield take(types.REMOVE_ENTRY);
        yield call(deleteEntry, payload.id);
        yield put({type:types.REMOVE_ENTRY_RESULT, payload});
    }
}

function deleteEntry(id) {
    axios.delete(`${settings.apiUrl}entries/${id}`);
}
