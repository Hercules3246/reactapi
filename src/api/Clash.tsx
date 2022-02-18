import { api } from '../config/Axios';

export async function fetchData (nombre: string, nivel:number, puntos:number) {
    let query = '';
    if (nombre !== "") {
        query += `name=${nombre}`;
    }

    if (nivel >= 2) {
        query += `&minClanLevel=${nivel}`;
    }

    if(puntos >= 1){
        query += `&minClanPoints=${puntos}`;
    }
    const response = await api.get(`clans?${query}`); 
    return response.data;
}