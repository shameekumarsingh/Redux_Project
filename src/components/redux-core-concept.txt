const redux=require('redux');
const reducerFunction =(state={votes=0},action)=>{
    if(action.type==="Increment"){
        return {votes:state.votes+1}
    }
    else if(action.type==="Decrement"){
        return {votes:state.votes-1}
    }
}
const store = redux.createStore(reducerFunction); //state will update to votes:1
const subscriberFunction=()=>{
    console.log(store.getState())
}
store.subscribe(subscriberFunction)
store.dispatch({type:"Increment"});
store.dispatch({type:"Decrement"})