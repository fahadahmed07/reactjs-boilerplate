// @Fahad Code

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas";
import { rootReducer } from '../reducers';


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)
  return store;
}

// @Salahuddin Code

// import { createStore, applyMiddleware, compose } from 'redux';
// import * as storage from "redux-storage";
// import createSagaMiddleware from "redux-saga";

// import { rootReducer } from '../reducers';
// import rootSaga from "../sagas";
// import { createLogger } from "redux-logger";
// import createEngine from "redux-storage-engine-reactnativeasyncstorage";



// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

// const logger = createLogger({
//   predicate: () => isDebuggingInChrome,
//   collapsed: true,
//   duration: true,
//   diff: true
// });

// const engine = createEngine("AppTree");

// const storeMiddleware = storage.createMiddleware(engine);

// const sagaMiddleware = createSagaMiddleware();

// export default function configureStore() {
//   const store = createStore(
//     storage.reducer(rootReducer),
//     composeEnhancers(applyMiddleware(sagaMiddleware, storeMiddleware, logger))
//   );

//   sagaMiddleware.run(rootSaga);

//   return store;
// }
