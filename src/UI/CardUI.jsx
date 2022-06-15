import React from 'react'
import '../UI/StyleUi.css'

const CardUI = (props) => {
    const classes = 'card ' + props.className;
  return (
      <div>
          <div className={classes}>
            {props.children}
          </div>
    </div>
  )
}

export default CardUI