import React from 'react'

function TableUsers(){
    const [data, setData]=React.useState();
    const columns = [
        {
          nombre: "Bryan",
          usuario: "RFC",
          acciones: "SuperAdmin"
        },
        {
          nombre: "Efren",
          usuario: "Cliente",
          acciones: "Eliminar"
        },
        {
          nombre: "Luis",
          usuario: "Loopy@hotmail.com",
          acciones: "Ver"
        }
      ];
      const mapeo =columns.map((column)=>
      <tr>
      <td>{column.nombre}</td>
      <td>{column.usuario}</td>
      <td>{column.acciones}</td>
      </tr>
      )
    return(
        <div>
        <table>
        <tr >
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Acciones</th>
        </tr>
            {mapeo}
        </table>
        </div>
    )
}

export default TableUsers;