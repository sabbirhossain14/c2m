import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({variant, text, style, onClick}) => {
    return (
        <Button onClick={onClick} className={style} variant={variant}>{text}</Button>
        
    )
}

export default CustomButton