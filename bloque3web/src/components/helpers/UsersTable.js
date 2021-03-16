import React from 'react'

function TableUsers(){
    const [data, setData]=React.useState();
    const columns = [
        {
          nombre: "RFC",
          usuario: "RFC",
          acciones: "prueba/error"
        },
        {
          nombre: "Cliente",
          usuario: "Cliente",
          acciones: ""
        },
        {
          nombre: "Celular",
          usuario: "Celular",
          acciones: ""
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