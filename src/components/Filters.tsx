import React from 'react';

interface IFilters {
    nombre: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Filters = ({ nombre, onChange }: IFilters) => {
    return (
        <div>
            <div className='container '>
                <div className='card d-flex justify-content-center'>
                    <div className='row p-5'>
                        <div className='col-6' >
                            <input type="text" name='nombre' value={nombre} onChange={onChange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>

                        </div>
                    </div>
                    <div className='row p-5'>
                        <div className='col-6' >
                            <button type='button' className='btn btn-success'>Buscar</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Filters