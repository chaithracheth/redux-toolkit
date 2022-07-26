import {put,call,takeEvery} from 'redux-saga/effects'
import {getUsersFetchSuccess,getUsersFetchFailure} from "../Reducer/userSliceReducer";

function* getUsers() {
    try {
        const users = yield call(() => fetch('https://jsonplaceholder.typicode.com/todos'))
        const formattedUser = yield users.json()
        console.log('formattedUser',formattedUser)
        const shortHandUser = formattedUser.slice(0,10)
        yield put(getUsersFetchSuccess(shortHandUser))
    }
    catch (e) {
        yield put(getUsersFetchFailure())
    }
 finally {
        yield put(getUsersFetchFailure())
    }


}

function* userSaga() {
    yield takeEvery('users/getUsersFetch', getUsers)
}

export default userSaga
