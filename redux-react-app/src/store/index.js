import { createSlice, configureStore} from '@reduxjs/toolkit'

import counteReducer from './counter'
import authReducer from './auth'



const store = configureStore({
    reducer: {counter: counteReducer, auth: authReducer} 
});


export default store;


// export default store;