import React from 'react'
import classes from './error.module.css'
import ErrorImg from "../../images/Error-4042.gif";

const Error = () => {
  return (
    <div className={classes.error}>
        <div className={classes.data}>
            <p className={classes.page_name}>Error 404</p>
            <p className={classes.info}>This page does not exist or is inaccessible</p>
            <img src={ErrorImg} className={classes.er}/>
        </div>
    </div>
  )
}

export default Error