import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs=(cat)=>{

    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true)

    //Hace un llamado a la función getGifs (fetch) la que envía objetos con los datos requeridos,
        //al llamar a tal función recibe en newImages esos objetos y se los pasa al state setImages 
        //al recibir el fetch isLoading pasa a ser falso
    const getImages=async()=>{
        const newImages = await getGifs(cat);
        setImages(newImages)
        setIsLoading(false)
    }


    useEffect(()=>{
        getImages()
    }, [ ])

    return{
        images,
        isLoading
    }
}