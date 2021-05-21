import { call, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import types from "../actions/entries.actions";
import settings from "../configuration/application";

export function* addEntrySaga() {
    yield takeLatest(types.ADD_ENTRY, addEntryToDb);
}

function* addEntryToDb({ payload }) {
    yield call(addEntry, payload);
    yield call(addEntryDetails, payload);
}

function addEntry({ id, description }) {
    axios.post(`${settings.apiUrl}entries`, {
        id,
        description,
    });
}
function addEntryDetails({ id, isExpense, value }) {
    axios.post(`${settings.apiUrl}values`, {
        id,
        isExpense,
        value,
    });
}
