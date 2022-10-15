import React from 'react'

export const Buttom = ({bgColor,text,size,color,borderRadius}) => {
  return (
    <button type='buttom' 
      style={{backgroundColor: bgColor, color, borderRadius}} 
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}
