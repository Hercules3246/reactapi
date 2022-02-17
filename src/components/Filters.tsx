import React from 'react';

interface IFilters {
    nombre: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    fetchData: React.MouseEventHandler<HTMLButtonElement>
}

const Filters = ({ nombre, onChange, fetchData }: IFilters) => {
    return (
        <div>
            <div className='container '>
             
                   
                    <div className='row p-5'>
                        <div className='col-lg-3 col-md-6 col-sm-12  mt-1' >
                            <input type="text" name='nombre' value={nombre} onChange={onChange} className="form-control" id="nombre" placeholder="Ingresa el nombre del clan"></input>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mt-1' >
                            {/* <input type="text" name='nombre' value={nombre} onChange={onChange} className="form-control" id="exampleFormControlInput1" placeholder="Tipo del clan"></input> */}
                        <div className="form-group">
                         
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>Open</option>
                            <option>Closed</option>
                         
                            </select>
                        </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12  mt-1' >
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="puntos del clan"></input>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 d-flex justify-content-md-start justify-content-sm-start  mt-1' >
                            <button type='button' className='btn btn-success' onClick={fetchData}>Buscar</button>
                            <button type='button' className='btn btn-danger ml-2'>Borrar</button>
                        </div>
                    </div>
                    
                        
                  

                </div>
            
        </div>
    )
}

export default Filters