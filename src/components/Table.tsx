import React from 'react';
interface Idata {
  datos: any,
}


const Table = ({ datos }: Idata) => {
  
  return (
  
    <table className="table  table-striped table-bordered">
      <thead className="table-dark">
        <tr>
          <th>TAG</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Nivel de clan</th>
          <th>Puntos</th>
          <th>Miembros</th>
        </tr>
      </thead>
      <tbody>
   
      {datos.map((items:any, i:number) => {
            return (
              <tr key={i} >
                <td>{items.tag}</td>
                <td>{items.name}</td>
                <td>{items.type}</td>
                <td>{items.clanLevel}</td>
                <td>{items.clanPoints}</td>
                <td>{items.members}</td>
              </tr>
            )
          })}
      </tbody>
    </table>

  )
}

export default Table