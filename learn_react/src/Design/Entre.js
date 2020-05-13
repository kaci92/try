import React from 'react';
import {Grid, Paper, ListItem,List,Button,form} from '@material-ui/core';
function Open (props){
    const islogin = props.islogin
    
return(
    <div className={classes.root}>
    <Grid item m spacing={6}>
    <Paper className={classes.paper}><form className={classes.root} noValidate autoComplete="off">
      <List>
          <ListItem>
      <TextField onChange={txtchange} name={props.prenom} id="standard-basic" label="Nom" />
      </ListItem>
      <ListItem>
      <TextField name={props.nom} onChange={txtchange.bind(this)} id="standard-basic" label="Prénom" />
      
      </ListItem>
      <ListItem color="primary">
          <Button onClick={Affichage}  variant="contained" color="primary">Entrée</Button>
      </ListItem>
      
      </List>
    </form> 
    </Paper>
    </Grid>
   
   </div>
)

}
export default Open;