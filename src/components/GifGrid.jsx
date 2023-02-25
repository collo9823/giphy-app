import React from "react";
import {GifGridItem} from './GifGridItem'
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types'


export const GifGrid=({cat})=>{

    //Extrae los states images e isLoading de useFetchGifs, pasandolé como argumento lo recibido en la propiedad cat
    const {images, isLoading} = useFetchGifs(cat);

    return(
        <>
            <h3>{cat}</h3>

            {
                isLoading && (<h2>Cargando...</h2>) 
            }
            

            <div className="card-grid" >

                {
                    images.map((image)=>(
                        <GifGridItem 
                            key={ image.id }
                            {...image}
                        />
                    ))
                        
                }
            </div>
        
        </>
    )
}

GifGrid.porpTypes = {
    category: PropTypes.string.isRequired,
}