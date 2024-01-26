import React from 'react'

const NextArrow = (props) => {
    const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#D3D3D3",
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'4px',
        width: "34px",
        height: "34px"
        }}
        onClick={onClick}
        >
    </div>
  )
}

export default NextArrow
