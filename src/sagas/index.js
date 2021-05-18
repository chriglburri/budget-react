import * as entriesSaga from './entriesSaga'

function initSagas(sagaMiddleware) {
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}

export default initSagas;