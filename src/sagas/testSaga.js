import { take } from "redux-saga/effects";
// take stops execution until you get the defined dispatch message

export function* testSaga() {
    while (true) {
        console.log("starting loop");
        yield take('TEST_MESSAGE');
        console.log("finish loop");
    }
}

export function* count() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
