import React, { useEffect, useState } from 'react'
import { GetUsers } from '../../actions/usersaction';
import  UpdateIcon from '../../assets/pen-solid.svg';
import  DeleteIcon from '../../assets/trash-alt-solid.svg';

function TableUsers(){
  
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let resp = await GetUsers('user/');
      setData(resp);
    }
    fetchData();
  }, []); 

  const getDataUser = () => {

  }

  const deletehandler = () => {
    
  }

  const updatehandler = () => {
    
  }

  const mapeo = data.map((column)=>
    <tr key={column.usuarioid } className="rowtable" onClick={ getDataUser }>
      <td>{column.nombre}</td>
      <td>{column.email}</td>
      <td>
        <button className="updatebtn" onClick={updatehandler}> <img src={UpdateIcon} height={20} alt="React Logo"/> </button>
        <button className="deletebtn" onClick={deletehandler}> <img src={DeleteIcon} height={20} alt="React Logo" /> </button>
      </td>
    </tr>
  );
  
  return(
    <>
      <table id="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mapeo}
        </tbody>
      </table>
    </>
  );
}

export default TableUsers;