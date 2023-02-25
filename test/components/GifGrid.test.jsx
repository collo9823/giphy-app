import { render, screen } from "@testing-library/react";
import {GifGrid} from '../../src/components/GifGrid';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs')
describe('Pruebas en <GifGrid/>', ()=>{
    const cat = 'Programing';

    test('Debe de mostrar el loading inicial', ()=>{
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })
        render( <GifGrid cat = {cat}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(cat));
    })
    test('Debe de mostrar items que se cargan las imagenes useFetchGifs', ()=>{
        const gifs = [{
            id: 'abc', title: 'programing',
            src: 'https://leobjavhdbilakd/gdahklkad.jpg'
        },{
            id: 'abcd', title: 'proagraming',
            src: 'https://leobjavhdbDasdailakd/gdahklkad.jpg'
        }]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })
        render( <GifGrid cat = {cat}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})