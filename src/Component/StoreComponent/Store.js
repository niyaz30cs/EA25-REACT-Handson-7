import {configureStore} from"@reduxjs/toolkit"

import MySlice from "../SliceComponent/Slice"
const MyStore=configureStore({
    reducer:{
          student:MySlice
    }
})
export default MyStore