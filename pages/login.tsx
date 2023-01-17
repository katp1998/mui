import React from 'react'
import {Box, Typography, TextField, Button} from '@mui/material';
import styles from '../styles/Default.module.css'


function login() {
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
        padding={'50px'} 
        borderRadius={5} 
        marginBottom = {5}
        boxShadow={'2px 2px 2px #ccc'}
        >
          <Typography 
          variant='h3'
          padding= {3}
          textAlign = "center" className={styles.heading}>Login</Typography>
          <TextField className={styles.textFields} type='email' name="email"  required label="Email" variant="outlined" multiline margin='normal' fullWidth />
          <TextField className={styles.textFields} type="password" name="password"  required label="Password" variant="outlined" multiline  margin="normal" fullWidth />
          <Button sx={{marginTop: 3}} variant ="contained"  type="submit" color="error" size="large" fullWidth>Login</Button>  
          
        </Box>

        </form>
    </div>
    </>
  )
}

export default login