import React from 'react'
import classes from './convinced.module.css'
import El from "../../images/el.png";
import { Link } from 'react-router-dom';

const Convinced = () => {
  return (
    <div className={classes.con}>
        <p>Are you convinced yet?</p>
        <Link to={'/order'}><button>Place Order</button></Link>
        <img src={El} />
    </div>
  )
}

export default Convinced