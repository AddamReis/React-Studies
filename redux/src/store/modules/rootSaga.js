import reserve from './reserve/sagas';
import { all } from 'redux-saga/effects';

export default function* rootSaga(){
    return yield all([
        reserve
    ])
}