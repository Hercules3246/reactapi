import React, { useState } from 'react'
import Filters from './Filters';

const View = () => {
    interface IFilters {
        nombre: string
    }

    const [filters, setFilters] = useState<IFilters>({
        nombre: ""
    });

    interface IClan {
        nombre: string,
        nivel: number,
        puntos: number
    };

    interface IClans {
        array: IClan[]
    }

    const [data, setData] = useState<IClans>([]);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;

        setFilters(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const { nombre } = filters;

    return (
        <div>
            <Filters
                nombre={nombre}
                onChange={handleChange}
            />
        </div>
    )
}

export default View