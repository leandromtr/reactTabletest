import React, {Fragment, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Context from "../UserContext";

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

  

  export default function Relatorios() {
    const { count, setCount } = useContext(Context)
    const classes = useStyles();
  
    return (      
        <Fragment>
{/* 
    <div>
      <h1 style={{ color: "red" }}>-: {count}</h1>
      <button onClick={() => setCount(0)}>zerar</button>      
      <button onClick={() => setCount(count + 1)}>^</button>
      <button onClick={() => setCount(count - 1)}>v</button>
    </div> */}

            <Button variant="contained" href="#contained-buttons" className={classes.button}>
                Relatório de Viagens
            </Button>
            <Button variant="contained" href="#contained-buttons" className={classes.button}>
                Relatório de Veículo
            </Button>
            <Button variant="contained" href="#contained-buttons" className={classes.button}>
                Relatório de Deslocação
            </Button>
        </Fragment>
    )
  }
  
