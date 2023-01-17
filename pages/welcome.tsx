import React from 'react'
import { Typography } from '@mui/material'
import styles from '../styles/Default.module.css'

function welcome() {
  return (
    <>
    <div className={styles.wrapper}>
        <h1 className={styles.heading}> Welcome! </h1>
      </div>
    </>
  )
}

export default welcome