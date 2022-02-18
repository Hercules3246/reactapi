import React, { useState } from 'react'
import Filters from './Filters';
import * as ClashApi from '../api/Clash';
import Table from './Table';
import Swal from "sweetalert2"; 
import withReactContent from 'sweetalert2-react-content'
const View = () => {
    interface IFilters {
        nombre: string
    }
const showMsg = (type:number, msg:string) => {
        if (type == 1) {
            return(
            <div className="alert alert-success" role="alert">
             msg   
            </div>
            )
        } else {
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>{msg}</i>,
                icon: 'error'
              })
        }
 }

    const [filters, setFilters] = useState<IFilters>({
        nombre: ""
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
            [name]: value
        }));
    }

    const { nombre } = filters;

    const fetchData =  () => {
        ClashApi.fetchData(nombre)
        .then((response) => {
            const { items } = response;
            setData(items);
        })
        .catch((error) => {
            if(error.response.status == 400){
                if(error.response.data.reason == "badRequest"){
                    // console.log(error.response.data.message);
                    showMsg(2, error.response.data.message);
                }
            }
           
                
        })
        .finally(() => {

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
                        onChange={handleChange}
                        fetchData={fetchData}
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