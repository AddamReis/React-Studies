import React from 'react';
import { MdDelete } from 'react-icons/md'
import './style.css';
import { useSelector, useDispatch } from 'react-redux';

export default function Reservas() {
    const reserves = useSelector(state => state.reserve);
    const dispath = useDispatch();

    function handleRemove(id){
        dispath({
            type: 'REMOVE_RESERVE',
            id
        });
    }


    return (
        <div>
            <h1 className="title">Você solicitou {reserves.length} reserva</h1>
            {reserves.map(reserve => (
                <div className="reservas" key={reserve.id}>
                    <img
                        src={reserve.image}
                        alt={reserve.title}
                    />
                    <strong>{reserve.title}</strong>
                    <span>Quantidade: {reserve.amount}</span>
                    <button
                        type="button"
                        onClick={() => handleRemove(reserve.id)}>
                        <MdDelete size={20} color="#191919" />
                    </button>
                </div>
            ))}
            <footer>
                <button type="button">Solicitar Reservas</button>
            </footer>
        </div>
    );
}