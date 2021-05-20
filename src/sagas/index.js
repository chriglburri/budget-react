// import * as testSaga from './testSaga'
import * as entriesSaga from "./entriesSaga";
import * as entiesDeletionSaga from "./entiesDeletionSaga";

function initSagas(sagaMiddleware) {
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entiesDeletionSaga).forEach(
        sagaMiddleware.run.bind(sagaMiddleware)
    );
}

export default initSagas;
