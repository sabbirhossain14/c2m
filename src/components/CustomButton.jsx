import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({variant, text, style}) => {
    return (
        <Button className={style} variant={variant}>{text}</Button>
        
    )
}

export default CustomButton