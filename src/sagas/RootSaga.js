import {all,fork} from 'redux-saga/effects'
import CatSaga from "./catSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
    yield all(
        [
             fork(CatSaga),
            fork(userSaga)
    ]
    )
}
