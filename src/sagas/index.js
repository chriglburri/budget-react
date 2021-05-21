// import * as testSaga from './testSaga'
import * as entriesSaga from "./entriesSaga";
import * as entriesDeletionSaga from "./entriesDeletionSaga";
import * as entriesAddSaga from "./entriesAddSaga";

function initSagas(sagaMiddleware) {
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesDeletionSaga).forEach(
        sagaMiddleware.run.bind(sagaMiddleware)
    );
    Object.values(entriesAddSaga).forEach(
        sagaMiddleware.run.bind(sagaMiddleware)
    );
}

export default initSagas;
