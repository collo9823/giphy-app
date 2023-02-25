import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewValue })=>{

    const [inputValue, setInputValue] = useState('');

    //Del input recibe el onChange y lo pasa al setInputValue
    const onChangeInput=(event)=>{
        setInputValue(event.target.value);
    }

    //Del form recibe el inputValue del input, trimea y si es may a 1 lo envía al valor a onNewValue
        //que es la propiedad. Resetea el setInputValue
    const onSubmit=(event)=>{
        event.preventDefault()

        if(inputValue.trim().length<=1)return; 
        onNewValue(inputValue.trim())
        setInputValue('')
    }

    return(
        <form onSubmit={(event)=>onSubmit(event)} aria-label='form'>
            <input
                type='text'
                placeholder="Buscar GIFs"
                value={inputValue}
                onChange={onChangeInput}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired,
}