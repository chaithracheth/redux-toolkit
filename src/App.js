import './App.css';
import {useEffect} from "react";
import {useDispatch,useSelector,connect} from "react-redux";
// import {getCatsFetch} from "./Reducer/catSliceReducer";
import {getCatsFetch,getCatsIndex,getCatsFetchSuccess} from "./actions/actions";
import {getUsersFetch} from "./Reducer/userSliceReducer";
import globalSelector from './globalSelector'
import {workCatsFetch} from "./sagas/catSaga";

function App() {
    useEffect(() => {

    },[])
    const dispatch = useDispatch()
  return (
    <div className="App">
        <div>
            <button onClick={() => {
                dispatch(getCatsFetch({payload:20}))
                // dispatch(getCatsIndex(2))
            }}>Cat Click</button>
        </div>
        <div>
            <button onClick={() => {
                dispatch(getUsersFetch())
            }}>
                User click
            </button>
        </div>

    </div>
  );
}

export default connect(globalSelector)(App);
