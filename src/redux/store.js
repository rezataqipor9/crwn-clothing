 import {createStore,applyMiddleware} from 'redux'
 import rootReducer  from '../redux/root-reducer'
 import { persistStore, persistReducer } from 'redux-persist'
 import logger from 'redux-logger'
 import storage from 'redux-persist/lib/storage' 
 const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'] 
};

  const persistedReducer = persistReducer(persistConfig, rootReducer)
 const store = createStore(
  persistedReducer ,
  applyMiddleware(logger)
)
const persistor = persistStore(store);
export { persistor, store };