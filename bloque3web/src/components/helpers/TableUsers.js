import React, { useEffect, useState } from 'react'
import { GetUsers } from '../../actions/usersaction';
import  UpdateIcon from '../../assets/pen-solid.svg';
import  DeleteIcon from '../../assets/trash-alt-solid.svg';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ModalUpdate from './modal.js'


// import EditUser from '../components/helpers/modal.js'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



const TableUsers=()=> {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [data, setData] = useState([]);
  const [select, setSelect]= useState({})
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await GetUsers('user/');
      console.log(resp)
      setData(resp);
      
    }
    fetchData();
  }, []); 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  const getDataUser = (idUser) => {
     const found = data.find(e=>e.usuarioid==idUser)
     setSelect(found)
     handleOpen()

  }
  const onSubmit = async(datos) =>  {
    console.log(datos)
    // const resp = await GetUsers('user/8');
    // console.log(resp)
 }
  const deletehandler = () => {
    
  }

  const updatehandler = () => {
    
  }

  // const mapeo = data.map((column, index)=>
    
  // );
        const body =(

          <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <div>
          <ModalUpdate select={select}/>
          </div>
        </div>
        )
  return(

     <>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <table id="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {
           data.map((column, index) => (
           <>
          <tr key={index} className="rowtable">
            <td>{column.nombre}</td>
            <td>{column.email}</td>
            <td>
              <button className="updatebtn" onClick={e=>getDataUser(column.usuarioid)} > <img src={UpdateIcon} height={20} alt="React Logo"/> </button>
              <button className="deletebtn"   onClick={deletehandler}> <img src={DeleteIcon} height={20} alt="React Logo" /> </button>
            </td>
          </tr>                
          </> 
          ))
          }
        </tbody>
      </table>
      </>
  );
}

export default TableUsers;