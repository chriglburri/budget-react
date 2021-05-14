import * as testSaga from "./testSaga";

function initSagas(sagaMiddleware) {
    Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}

export default initSagas;