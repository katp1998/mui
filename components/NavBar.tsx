import React from 'react'
import styles from '../styles/Default.module.css'
import  {useRouter} from 'next/router' 

//need to add logout
import  useAuth  from '../hooks/useAuth';

import { useMutation } from '@apollo/client';
import { LOG_OUT } from '../mutations/userMutations';
import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';

function NavBar() {
  const router = useRouter()
  const { auth, setAuth } = useAuth();


  const [logout] = useMutation(LOG_OUT,{
    update(proxy) {
      
    }
  })

  const logOut = () =>{
    logout();
    setAuth({accessToken:'', isLoggedIn:false});
    router.push('/login')
  }

  return (
    <AppBar position='static'>
      <Toolbar className={styles.bg}>
      <Typography>
          <Link href={"/welcome"} style={{ textDecoration: "none", color: "white", marginRight: "10px" }}>SURGE</Link>
        </Typography>
        <Box sx={{ flexGrow: 1, display: "flex-right", float: "right", alignContent:"right", textAlign: "right"}}>
        <Typography sx={{textDecoration: "none", color: "white", display:"inline-block"}}>
          <Link href={"/welcome"} style={{ textDecoration: "none", color: "white", marginRight: "10px" }}>Home</Link>
        </Typography>
         {/** {auth.isAuthenticated ? ( */}
          

            <Typography style={{ textDecoration: "none", color: "white", display:"inline-block" }}>
              <Link href="/login" style={{ textDecoration: "none", color: "white", marginRight: "10px", }} onClick={logOut} >Logout</Link>
            </Typography>
          {/** ) : ( */}
              <Typography style={{ textDecoration: "none", color: "white",display:"inline-block" }}>
                <Link href={'/login'} style={{ textDecoration: "none", color: "white", marginRight: "10px"}} >
                  Login
                </Link>
                </Typography>
                <Typography style={{ textDecoration: "none", color: "white", display:"inline-block"}}>
                <Link href={'/register'} style={{ textDecoration: "none", color: "white", marginRight: "10px" }}>
                  Register
                </Link>
              </Typography>
    
          {/** )} */}
        </Box> 
      </Toolbar>
    </AppBar>
  )
}

export default NavBar