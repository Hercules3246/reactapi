import { api } from '../config/Axios';

export async function fetchData (nombre: string) {
    const response = await api.get(`clans?name=${nombre}`);
    return response.data;
}