import {configureStore} from '@reduxjs/toolkit'
import reducer from '../Slice/page'

const Store = configureStore({
    reducer : {
        todo : reducer
    }
})

export default Store