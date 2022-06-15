import React from 'react'
import '../wrapper/WrapperStyle.css'

const Wrapper = (props) => {
    const classes = 'wrapperCard ' + props.className;
  return (
      <div>
          <div className={classes}>
            {props.children}
          </div>
    </div>
  )
}

export default Wrapper