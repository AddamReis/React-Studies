import React, { useEffect, useState } from 'react';
import api from '../../server/api';
import { MdFlightTakeoff } from 'react-icons/md';
import './style.css';
import { useDispatch } from 'react-redux';
import { addReserve } from '../../store/modules/reserve/actions';

export default function Home() {
    const dispath = useDispatch();
    const [trips, setTrips] = useState([]);

    function handleAdd(trip) {
        dispath(addReserve(trip));
    };

    useEffect(() => {
        async function loadApi() {
            const response = await api.get('trips');
            setTrips(response.data);
        }

        loadApi();

    }, []);

    return (
        <div className="box">
            {trips.map(trip => (
                <li key={trip.id}>
                    <img src={trip.image} alt={trip.title} />
                    <strong>{trip.title}</strong>
                    <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>

                    <button
                        type="button"
                        onClick={() => handleAdd(trip)}
                    >
                        <div>
                            <MdFlightTakeoff size={16} color="#FFF" />
                        </div>
                        <span>SOLICITAR RESERVA</span>
                    </button>
                </li>
            ))}

        </div>
    );
}