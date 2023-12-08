import React from 'react'

const IconContainer = ({sx, t, l, r, b, size, color, icon, absolute}) => {
    const pos = absolute? 'absolute' : ''
    return (
        <span class="material-symbols-outlined" style={{
            position: pos,
            right: r || '',
            bottom: b || '',
            top: t || '',
            left: l || '',
            fontSize: size,
            color: color,
            ...sx
        }}>
            {icon}
        </span>
    )
}

export default IconContainer