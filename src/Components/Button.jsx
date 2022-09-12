import React from 'react'

import './Button.scss'

function Button(props) {
  return (
<button className="button">{props.content}</button>
  )
}

export default Button
