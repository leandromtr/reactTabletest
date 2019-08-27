import React, {useContext,Fragment} from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Context from "../UserContext";

function createData(codigo, unidade, viatura, data, hora, tipo, evento, estado, observacoes, utilizador, actualizadoem) {
  return { codigo, unidade, viatura, data, hora, tipo, evento, estado, observacoes, utilizador, actualizadoem};
}

const rows = [
  createData(2222, 'M071', 'V410', '26-10-2012', '11:05:43', 'Alarme', 'Alerta de temperatura', 'Alerta de temperatura', 'observaçao', 'admin', '26-10-2012 11:05:43'),
  createData(3333, 'M072', 'V510', '27-05-2016', '02:11:43', 'Alarme', 'Alerta de temperatura', 'Alerta de temperatura', 'observaçao', 'admin', '26-10-2012 11:05:43'),
  createData(4444, 'M073', 'V610', '19-01-2004', '13:33:22', 'Alarme', 'Alerta de temperatura', 'Alerta de temperatura', 'observaçao', 'admin', '26-10-2012 11:05:43'),
  createData(5555, 'M074', 'V710', '13-10-2013', '04:45:55', 'Alarme', 'Alerta de temperatura', 'Alerta de temperatura', 'observaçao', 'admin', '26-10-2012 11:05:43'),
  createData(6666, 'M075', 'V810', '04-11-2017', '07:35:43', 'Alarme', 'Alerta de temperatura', 'Alerta de temperatura', 'observaçao', 'admin', '26-10-2012 11:05:43'),
  createData(7777, 'M076', 'V910', '15-03-2018', '07:35:43', 'Alarme', 'Alerta de temperatura', 'Alerta de temperatura', 'observaçao', 'admin', '26-10-2012 11:05:43'),
]


function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}


const headRows = 
[
  { id: 'codigo', numeric: true, disablePadding: false, label: 'Código' }, 
  { id: 'unidade', numeric: true, disablePadding: false, label: 'Unidade' }, 
  { id: 'viatura', numeric: true, disablePadding: false, label: 'Viatura' }, 
  { id: 'data', data: true, disablePadding: false, label: 'Data' }, 
  { id: 'hora', data: true, disablePadding: false, label: 'Hora' }, 
  { id: 'tipo', numeric: true, disablePadding: false, label: 'Tipo' }, 
  { id: 'evento', numeric: true, disablePadding: false, label: 'Evento' },
  { id: 'estado', numeric: true, disablePadding: false, label: 'Estado' }, 
  { id: 'observacoes', numeric: true, disablePadding: false, label: 'Observações' }, 
  { id: 'utilizador', numeric: true, disablePadding: false, label: 'Utilizador' }, 
  { id: 'actualizadoem', numeric: true, disablePadding: false, label: 'Actualizado em' }, 
]


function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <Fragment>

    <TableHead>
      <TableRow>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? 'right' : 'left'}
            padding={row.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === row.id ? order : false}
          >            
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    </Fragment>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  return (
    <Toolbar>
      <div className={classes.title}>
        <Typography variant="h6" id="tableTitle">
          Eventos
        </Typography>        
      </div>
      <div className={classes.spacer} />
    </Toolbar>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleChangeDense(event) {
    setDense(event.target.checked);
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Fragment>  
      
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.codigo}                      
                    >                      
                      <TableCell align="right">{row.codigo}</TableCell>
                      <TableCell align="right">{row.unidade}</TableCell>
                      <TableCell align="right">{row.viatura}</TableCell>
                      <TableCell align="left">{row.data}</TableCell>
                      <TableCell align="left">{row.hora}</TableCell>
                      <TableCell align="left">{row.tipo}</TableCell>
                      <TableCell align="left">{row.evento}</TableCell>
                      <TableCell align="left">{row.estado}</TableCell>
                      <TableCell align="left">{row.observacoes}</TableCell>
                      <TableCell align="left">{row.utilizador}</TableCell>
                      <TableCell align="left">{row.actualizadoem}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Compactar Linhas"
      />
    </div>
    </Fragment>
  )
}