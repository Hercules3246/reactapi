import React, { useState } from 'react'
import Filters from './Filters';
import Pagination from './Pagination';
import * as ClashApi from '../api/Clash';
import Table from './Table';
import Swal from "sweetalert2"; 
import withReactContent from 'sweetalert2-react-content'
const View = () => {
//instancia de swal para utilizar la libreria dentro de la aplicacion 
const MySwal = withReactContent(Swal)
     
//funcion para mostrar los mensajes de error que devuleve el backend
const showMsg = (type:number, msg:string) => {
        if (type === 2) {
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>{msg}</i>,
                icon: 'error'
              })
        } 
 }
     //inicializacion de los tipos de variable del state 
    interface IFilters {
        nombre: string,
        nivel: number,
        puntos: number,
    }

    //inicializacion de las variables del state con la definicion del filtro 
    const [filters, setFilters] = useState<IFilters>({
        nombre: "",
        nivel: 0,
        puntos: 0
    });
    // definicion de los states que van a manejar la paginacion de los datos de la tabla
    const [datos, setDatos] = useState<any>([] as any);
    const [currentPage, setCurrentPage] = useState<number>(1 as number);
    const [postsPerPage] = useState<number>(10 as number);

    //funcion para setear los valores del state 
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        //destructuring de las propiedades 
        const { name, value } = e.currentTarget;

        // segun el name del input se va a actualizar con cada uno de los valor del input 
        setFilters(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }
    //destructuring de cada uno de los campos del state de los inputs 
    const { nombre, nivel, puntos } = filters;

    //funcion para consultar la api y obtener la informacion
    const fetchData =  () => {

    //   MySwal.showLoading(); ejecuta el loading de sweetalert 
    MySwal.fire({
        title: 'Cargando...',
        html: 'Por favor espera, estamos buscando la informacion...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      });
      // llamdo de funcion fetchdata que recibira 3 valores en los parametros 
        ClashApi.fetchData(nombre, nivel,puntos)
        .then((response) => {
            //MySwal.close(); pausa la ejecucion del metodo loading de sweetAlert2
            MySwal.close();
            //destructuring de los datos que devuelve el response 
            const { items } = response;
            //se asignan los valores al state datos
            setDatos(items);
            // reiniciamos la pagina actual de la tabla
            setCurrentPage(1);
            
        })
        // captura los errores devuletos por el backend
        .catch((error) => {
            //MySwal.close(); pausa la ejecucion del metodo loading de sweetAlert2
            MySwal.close();
            // condicional para determinar el status de la respuesta del backend
            if(error.response.status === 400){
                // condicional para llamar el metodo showMsg() enviandole los parametros requeridos
                if(error.response.data.reason === "badRequest"){
                    showMsg(2, error.response.data.message);
                }
            }
        })
    }   
    //funcion para borrar y asignar los nuevos datos del state 
    const borrarData = () => {
        setDatos([] as any);
        setFilters({
            nombre: "",
            nivel: 0,
            puntos: 0
        })
    }

     // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = datos.slice(indexOfFirstPost, indexOfLastPost);
    // Change page

// metodo que captura el numero de la pagina y lo asigna al state
    const paginate = (pageNumber:any) => setCurrentPage(pageNumber);
    
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
                    <Table datos={currentPosts} />
                    <Pagination  postsPerPage={postsPerPage}
                                totalPosts={datos.length}
                                paginate={paginate}
                                />
                    </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default View