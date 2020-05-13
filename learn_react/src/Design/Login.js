import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid  from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {List, ListItem,Button} from '@material-ui/core';

/*const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 0,
      overflow: 'hidden',
    padding: theme.spacing(0, 18)
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }));*/
const txtchange =(e)=>  e.target.value;
const Affichage =()=>{
    alert('Vous êtes:'+txtchange)
}
//const message="Hello world"
function Autontification(props)
{
    //const classes = useStyles();
const t = <h1>Hello{props.taille}</h1>
  return(

 
    <Grid   container xs={9}>
     <Grid item xs={4}>
       </Grid>
        <Grid item lg={9}>

    <form noValidate autoComplete="off">
      <List>
          <ListItem>
      <TextField  variant="standard"  color="primary" required="true" id="standard-basic" label="Nom" />
      </ListItem>
      <ListItem>
      <TextField  onChange={txtchange.bind(this)} size='medium' id="standard-basic" label="Prénom"  value={props.val}/>
      
      </ListItem>
      <ListItem color="primary">
          <Button onClick={Affichage} variant="contained" color="primary">Entrée</Button>
      </ListItem>
      
      </List>
    </form> 
    </Grid> 
    
    <Grid item xs>
        </Grid>
    
    {t}
    </Grid>
   
  )


}
export default Autontification;