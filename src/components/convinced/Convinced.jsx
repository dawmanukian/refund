import React from 'react'
import classes from './convinced.module.css'
import El from "../../images/el.png";

const Convinced = () => {
  return (
    <div className={classes.con}>
        <p>Are you convinced yet?</p>
        <button>Place Order</button>
        <img src={El} />
    </div>
  )
}

export default Convinced