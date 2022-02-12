import { useSelector,useDispatch } from "react-redux";
import {actions} from '../store/votes-store';
const Votes=()=>{
    const initialState={votes:0,toggle:true}
    const votes = useSelector((state=initialState)=>state.votes);
    const showVotes= useSelector((state=initialState)=>state.toggle)
    const dispatch=useDispatch();


    const incrementHandler=()=>{
        dispatch(actions.Increment())
    }


    const decrementHandler=()=>{
        dispatch(actions.Decrement())
    }


    const addBy10Handler=()=>{
        dispatch(actions.Increase(10))
    }

    
    const toggleVotesHandler=()=>{
       dispatch(actions.Toggle())
    }

    
    return (
        <div className="votes">
            <h1>Redux Votes</h1>
            {showVotes && <div className="value">{votes}</div>}
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={addBy10Handler}>Add 10 votes</button>
            <button onClick={toggleVotesHandler}>Show/hide Votes</button>
        </div>
    )
}
export default Votes