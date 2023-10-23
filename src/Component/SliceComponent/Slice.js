import { createSlice } from "@reduxjs/toolkit";

const stuData=[
    {name:"Niyaz",age:22,course:"MERN",batch:"February"},
    {name:"Doe",age:25,course:"MERN",batch:"November"},
    {name:"Biden",age:26,course:"MERN",batch:"September"},
    {name:"Barar",age:22,course:"MERN",batch:"September"},
    {name:"Christ",age:23,course:"MERN",batch:"October"},
    {name:"Elent",age:24,course:"MERN",batch:"November"},
]
const MySlice=createSlice({
    name:"Student-data",
    initialState:stuData,
    reducers:{
        editStudent:(state,action)=>{
               state[action.payload.Index]=action.payload.info
        },
        addStudent:(state,action)=>{
                 state.push(action.payload.tempObj);
        }
    }
})
export const {editStudent,addStudent}=MySlice.actions;
export default MySlice.reducer;