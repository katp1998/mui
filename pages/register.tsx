import React from 'react'
import {Box, Typography, TextField, Button} from '@mui/material';
import styles from '../styles/Default.module.css'


function register() {
  return (
    <>
    <div>
      <form >
        <Box 
        className={styles.card}
        display = "flex" 
        flexDirection={"column"} 
        maxWidth = {400} 
        alignItems="center" 
        justifyContent={"center"} 
        margin="auto" 
        marginTop={5} 
        marginBottom = {5}
        padding={'50px'}  
        boxShadow={'5px 5px 10px #ccc'}
        >
          <Typography 
          variant='h3'
          padding= {3}
          textAlign = "center" className={styles.heading}>Register</Typography>
          <TextField className={styles.textFields} type='text' name="name"  required label="Name" variant="outlined" multiline margin='normal' fullWidth />
          <TextField className={styles.textFields} type='email' name="email" required label="Email" variant="outlined" multiline margin='normal' fullWidth />
          <TextField className={styles.textFields} type="password" name="password"  required label="Password" variant="outlined" multiline margin="normal" fullWidth id="outlined-password-input" />
          <Button sx={{marginTop: 3}} variant ="contained"  type="submit" color="error" size="large" fullWidth>Register</Button>  
          
        </Box>
        </form>
    </div>
    </>
    
    
    
    
 
  )
}

export default register