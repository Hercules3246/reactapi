import React from 'react';

interface IFilters {
    nombre: string,
    nivel : number,
    puntos:number,
    borrar: React.MouseEventHandler<HTMLButtonElement>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    fetchData: React.MouseEventHandler<HTMLButtonElement>
}

const Filters = ({ nombre, nivel, puntos , onChange, fetchData, borrar }: IFilters) => {
    return (
        <div>
            <div className='container '>
             
                   
                    <div className='row p-5'>
                        <div className='col-lg-3 col-md-6 col-sm-12  mt-1' >
                            <label htmlFor="nombre">Ingresa el nombre del clan</label>
                            <input type="text" name='nombre' value={nombre} onChange={onChange} className="form-control" id="nombre" placeholder="nombre del clan"></input>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mt-1' >
                        <label htmlFor="nivel">Ingresa el nivel minimo del clan</label>
                          <input type="text" name='nivel' value={nivel} onChange={onChange} className="form-control" id="nivel" placeholder="nivel minimo del clan"></input>                      
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12  mt-1' >
                            <label htmlFor="nivel">Ingresa los puntos minimos</label>
                            <input type="text"  name='puntos' value={puntos} onChange={onChange} className="form-control"  placeholder="total minimo de puntos"></input>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 d-flex align-items-end mt-1' >
                            <button type='button' className='btn  btn-success' onClick={fetchData}>Buscar</button>
                            <button type='button' className='btn  btn-danger ml-2' onClick={borrar}>Borrar</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Filters