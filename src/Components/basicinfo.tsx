import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useFormik } from "formik";
import * as yup from 'yup';

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
    cssLabel: {
      color : 'red'
    },
  
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: `${theme.palette.primary.main} !important`,
      }
    },
  
    cssFocused: {
      borderColor: 'green !important'

    },

    notchedOutline: {
      borderWidth: '1px',
      borderColor: 'red !important'
    },


  }),
);

export default function FormPropsTextFields(prop:any) {
  
  const formik=useFormik({

    initialValues:{
        email:"",// here we set initial value
        
    },
    onSubmit:(value)=>{
        console.log(value)
      // for save data or call api here 
    },
     // now set here validation  as yup
     // SET UP OF YUP AND ASLO SEE WEBSITE FOR MORE
     validationSchema: yup.object({
         email:yup.string()
         .max(12,"Too long")
         .required('Requied*'),
       
     })
    
})
const formik2=useFormik({

  initialValues:{
     
      lname:""
  },
  onSubmit:(value)=>{
      console.log(value)
    // for save data or call api here 
  },
   // now set here validation  as yup
   // SET UP OF YUP AND ASLO SEE WEBSITE FOR MORE
   validationSchema: yup.object({
      

      lname:yup.string()
      .max(12,"Too long")
      .required('Requied*'),
   })
  
})
const formik3=useFormik({

  initialValues:{
     
      Fname:""
  },
  onSubmit:(value)=>{
      console.log(value)
    // for save data or call api here 
  },
   // now set here validation  as yup
   // SET UP OF YUP AND ASLO SEE WEBSITE FOR MORE
   validationSchema: yup.object({
      

      Fname:yup.string()
      .max(12,"Too long")
      .required('Requied*'),
   })
  
})


  const classes = useStyles();
if(formik.values.email!="" && formik2.values.lname!="" && formik3.values.Fname!="" && !formik.errors.email && !formik2.errors.lname &&!formik3.errors.Fname){
  prop.setnext("DONES1");
}else{
  prop.setnext("NODONES1");
}
  return (
    <form className={classes.root} >
      
      
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
        <TextField id="email" 
         onChange={formik.handleChange}
         value={formik.values.email}
      
        label="First Name" type="search" variant="outlined" 
        InputLabelProps={{
          classes: {
            root:  formik.values.email==="" && prop.submitnext===1 || formik.errors.email ? classes.cssLabel :"" ,
            focused: classes.cssFocused,
          },

          
        }}
        
        InputProps={{
          classes: {
            root: formik.values.email==="" && prop.submitnext===1 || formik.errors.email ? classes.cssOutlinedInput:"",
            focused: formik.values.email==="" && prop.submitnext===1 || formik.errors.email ? classes.cssFocused :"",
            notchedOutline:formik.values.email==="" && prop.submitnext===1 || formik.errors.email ? classes.notchedOutline :"",
          },
          
        }}
        
        />
         
       {/* if email is empty then */}
       { formik.errors.email ? <div style={{color:"red",textAlign:"left",marginLeft:"30px"}}>{formik.errors.email}</div>:""}
       {formik.values.email==="" && prop.submitnext===1  && !formik.errors.email ? <div style={{color:"red",textAlign:"left",marginLeft:"30px"}}>*requied</div>:""}

        <br/>




        <TextField id="lname" 
         onChange={formik2.handleChange}
         value={formik2.values.lname}
      
        label="Last Name" type="search" variant="outlined" 
        InputLabelProps={{
          classes: {
            root:  formik2.values.lname==="" && prop.submitnext===1 || formik2.errors.lname ? classes.cssLabel :"" ,
            focused: classes.cssFocused,
          },

          
        }}
        
        InputProps={{
          classes: {
            root: formik2.values.lname==="" && prop.submitnext===1 || formik2.errors.lname ? classes.cssOutlinedInput:"",
            focused: formik2.values.lname==="" && prop.submitnext===1 || formik2.errors.lname ? classes.cssFocused :"",
            notchedOutline:formik2.values.lname==="" && prop.submitnext===1 || formik2.errors.lname ? classes.notchedOutline :"",
          },
          
        }}
        
        />
         
       {/* if email is empty then */}
       {  formik2.errors.lname ? <div style={{color:"red",textAlign:"left",marginLeft:"30px"}}>{formik2.errors.lname}</div>:""}
       {formik2.values.lname==="" && prop.submitnext===1 &&!formik2.errors.lname    ? <div style={{color:"red",textAlign:"left",marginLeft:"30px"}}>*requied</div>:""}

     
        <br/>
        <TextField id="Fname" 
         onChange={formik3.handleChange}
         value={formik3.values.Fname}
      
        label="Father Name" type="search" variant="outlined" 
        InputLabelProps={{
          classes: {
            root:  formik3.values.Fname==="" && prop.submitnext===1 || formik3.errors.Fname ? classes.cssLabel :"" ,
            focused: classes.cssFocused,
          },

          
        }}
        
        InputProps={{
          classes: {
            root:  formik3.values.Fname==="" && prop.submitnext===1 || formik3.errors.Fname ? classes.cssOutlinedInput:"",
            focused:  formik3.values.Fname==="" && prop.submitnext===1 || formik3.errors.Fname ? classes.cssFocused :"",
            notchedOutline: formik3.values.Fname==="" && prop.submitnext===1 || formik3.errors.Fname ? classes.notchedOutline :"",
          },
          
        }}
      
        />
         
       {/* if email is empty then */}
       {formik3.errors.Fname ? <div style={{color:"red",textAlign:"left",marginLeft:"30px"}}>{formik3.errors.Fname}</div>:""}
       {formik3.values.Fname==="" && prop.submitnext===1  && !formik3.errors.Fname  ? <div style={{color:"red",textAlign:"left",marginLeft:"30px"}}>*requied</div>:""}

        <br/>
        <br/>
        </Paper>
        <br/><br/>
      </div>
    </form>
  );
}
