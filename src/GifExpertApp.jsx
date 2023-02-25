import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp=()=>{
    const [ categories, setCategories ] = useState(['Leo'])

    //Recibe el argumento de <AddCategory/> que es el parametro event en la propiedad onNewValue.
        //Luego actualiza el state de categories con cada argumento que recibe
        //Se filtra viendo que el argumento recibido no coincida con los datos acrgados en el state categories;
        //En caso de existir en el state, este sube sobre los otros; 
    const onAddCategory=(value)=>{
        setCategories([ value,...categories.filter(val=> val!=value) ])
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory 
                onNewValue={ event=>onAddCategory(event)}
            />
            
            { categories.map((cat)=>(
                <GifGrid cat={cat} key={cat}/>
            )) }
        </>
    )
}