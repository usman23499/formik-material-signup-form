import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft:'-30px',
      textAlign:'center',
      display:'flex',
      justifyContent:'center',
     
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      
      },

    },
  }),
);

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      
      <div>
{/*        
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        /> */}
       <br/>
       <Paper style={{width:'120%'}} elevation={3} >
         <br/>
        <TextField id="outlined-search" label="Phone Number" type="Number" variant="outlined" className="FName" />
        <br/>
        <TextField id="outlined-search" label="Country" type="search" variant="outlined" className="FName" />
        <br/>
        <TextField id="outlined-search" label="Address" type="search" variant="outlined" className="FName" />
        <br/>
        <br/>
        </Paper>
        <br/><br/>
      </div>
    </form>
  );
}
