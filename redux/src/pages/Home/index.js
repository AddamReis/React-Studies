import React, { useEffect, useState } from 'react';
import api from '../../server/api';

export default function Home() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        async function loadApi() {
            const response = await api.get('trips');
            setTrips(response.data);
        }

        loadApi();

    }, []);

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}