import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import GetAppIcon from '@material-ui/icons/GetApp';
import Header from './Header';
// import {Button} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// or
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
   
    table: {
      minWidth: 650,
    },
  });

// const useStyles = makeStyles((theme) => ({
    
//   }));
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const DownloadButton = ()=>{
      return(<Button variant="contained" color="primary">
      DOWNLOAD <GetAppIcon />
    </Button>)
  }
  
  const rows = [
    createData(<p style={{paddingLeft:"20%"}}>MERN Development</p>, <center>Pending</center>, <center><DownloadButton /></center>),
    createData(<p style={{paddingLeft:"20%"}}>Django</p>, <center>Pending</center>, <center><DownloadButton /></center>),
    createData(<p style={{paddingLeft:"20%"}}>VueJS</p>, <center>Pending</center>, <center><DownloadButton /></center>),
    createData(<p style={{paddingLeft:"20%"}}>AngularJS</p>, <center>Pending</center>, <center><DownloadButton /></center>),
    createData(<p style={{paddingLeft:"20%"}}>Gingerbread</p>, <center>Pending</center>, <center><DownloadButton /></center>),
  ];

const Assignments = () => {
    const classes = useStyles();

  return (
    <div style={{padding: "5%", backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"}}>
    <Header />
    <h1 style={{paddingTop:"30px"}}>Assignments</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><h1>Course Name</h1></TableCell>
            <TableCell align="center"><h1>Status</h1></TableCell>
            <TableCell align="center"><h1>Download Certificate</h1></TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Assignments
