import React from 'react'
import classes from './error.module.css'
import { ReactComponent as ErrorImg } from "../../images/error.svg";

const Error = () => {
  return (
    <div className={classes.error}>
        <div className={classes.data}>
            <p className={classes.page_name}>Error 404</p>
            <p className={classes.info}>This page does not exist or is inaccessible</p>
            <ErrorImg />
        </div>
    </div>
  )
}

export default Error