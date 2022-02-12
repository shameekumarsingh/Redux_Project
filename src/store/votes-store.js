
import {createSlice,configureStore} from '@reduxjs/toolkit';


const initialState = {votes:0,toggle:true}

 const reducer={
    Increment(state)
    {state.votes++
    },
    Decrement(state)
    {state.votes--},
    Increase(state,action)
    {state.votes= state.votes+action.payload},
    Toggle(state)
    {state.toggle =!state.toggle}
}
const voteSlice = createSlice({name:"votes",initialState,reducers:reducer})
const voteStore=configureStore({reducer:voteSlice.reducer})

export const actions = voteSlice.actions
export default voteStore;