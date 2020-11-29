export function addReserveRequest(id) {
    return {
        type: 'ADD_RESERVE_REQUEST',
        id
    }
}

export function addReserveSucess(trip) {
    return {
        type: 'ADD_RESERVE_SUCESS',
        trip
    }
}

export function removeReserve(id) {
    return {
        type: 'REMOVE_RESERVE',
        id
    }
}

export function updateAmount(id, amount){
    return {
        type: 'UPDATE_AMOUNT',
        id, 
        amount
    }
}