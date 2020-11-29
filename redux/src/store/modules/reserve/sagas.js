import {call, put, all, takeLatest} from 'redux-saga/effects';
import {addReserveSucess} from './actions';
import api from '../../../server/api';

function* addToReserve({ id }){
    const response = yield call(api.get, `trips/${id}`);

    yield put(addReserveSucess(response.data))
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
]);
