import React, { useState } from 'react'
import Filters from './Filters';
import * as ClashApi from '../api/Clash';
import Table from './Table';
import Swal from "sweetalert2"; 
import withReactContent from 'sweetalert2-react-content'
const View = () => {
    interface IFilters {
        nombre: string,
        nivel: number,
        puntos: number,
        
    }

const showMsg = (type:number, msg:string) => {
        if (type === 2) {
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>{msg}</i>,
                icon: 'error'
              })
        } 
 }

    const [filters, setFilters] = useState<IFilters>({
        nombre: "",
        nivel: 0,
        puntos: 0
    });
    const MySwal = withReactContent(Swal)
 
    interface IClan {
        nombre: string,
        nivel: number,
        puntos: number
    };

    const [data, setData] = useState<IClan>([] as any);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;

        setFilters(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const { nombre, nivel, puntos } = filters;

    const fetchData =  () => {
    //   MySwal.showLoading();
    MySwal.fire({
        title: 'Cargando...',
        html: 'Por favor espera, estamos buscando la informacion...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      });
        ClashApi.fetchData(nombre, nivel,puntos)
        .then((response) => {
            MySwal.close();
            const { items } = response;
            setData(items);
        })
        .catch((error) => {
            MySwal.close();
            if(error.response.status === 400){
                if(error.response.data.reason === "badRequest"){
                    // console.log(error.response.data.message);
                    showMsg(2, error.response.data.message);
                }
            }
        })
    }
    const borrarData = () => {
        setData([] as any);
        setFilters({
            nombre: "",
            nivel: 0,
            puntos: 0
        })
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <div className='card d-flex justify-content-center'>
                    <div className="card-header">
                        <h4>Listado de clanes</h4>
                    </div>
                    <Filters
                        nombre={nombre}
                        nivel={nivel}
                        puntos={puntos}
                        onChange={handleChange}
                        fetchData={fetchData}
                        borrar={borrarData}
                    />
                      <div className="card-body">
                    <Table datos={data} />
                    </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default View