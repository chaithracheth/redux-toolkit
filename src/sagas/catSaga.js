import {call,put,takeEvery,takeLatest} from 'redux-saga/effects'
import {getCatsFetchSuccess,getCatsFailure} from "../actions/actions";
export function* workCatsFetch(action) {
    console.log('workCatsFetch',action)
    try {
        const cats = yield call( fetch,'https://api.thecatapi.com/v1/breeds')
        const formattedCats = yield cats.json()
        console.log('formattedCats',formattedCats)
        const formattedShortHand = formattedCats.slice(0,10)
        console.log('formattedShortHand',formattedShortHand)
        yield put(getCatsFetchSuccess(formattedShortHand))
    } catch (e) {
        yield put(getCatsFailure(e))
    }
    finally {
        yield put(getCatsFailure())
    }

}

function* CatSaga() {
    yield takeEvery('cats/getCatsFetch', workCatsFetch)
}

export default CatSaga
