import { call, delay, put, take } from "redux-saga/effects";
// take stops execution until you get the defined dispatch message

function double(number){
    return number*2;
}

export function* testSaga() {
    while (true) {
        console.log("starting loop");
        const state = yield take("TEST_MESSAGE");
        const a = yield call(double, 2);
        console.log(a);
        const b = yield double(3);
        console.log(b);
        console.log("finish loop", state);
    }
}

export function* dispatchTest() {
    while (true) {
        yield delay(1000);
        yield put({ type: "TEST_MESSAGE", payload: 1000 });
    }
}
