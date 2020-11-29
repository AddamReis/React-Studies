import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { addReserveSucess, updateAmount } from './actions';
import api from '../../../server/api';

function* addToReserve({ id }) {

    const tripExists = yield select(
        state => state.reserve.find(trip => trip.id === id)
    );

    const myStock = yield call(api.get, `/stock/${id}`);
    const stockAmount = myStock.data.amount;
    const currentStock = tripExists ? tripExists.amount : 0;
    const amount = tripExists.amount +1;

    if(amount > stockAmount){
        alert('Quantidade Máxima Atingida.');
        return;
    }

    if (tripExists) {
        yield put(updateAmount(id, amount));
    } else {
        const response = yield call(api.get, `trips/${id}`);
        
        const data = {
            ...response.data,
            amount: 1
        };
        
        yield put(addReserveSucess(data))
    }
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
]);
