import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Pruebas en <GifGridItem/>', ()=>{
    const title= 'Programing';
    const src = 'https://media3.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=83efc29fkosirvby0d0dy978twd4mj8pbtadgysbnn0671vp&rid=giphy.gif&ct=g'

    test('matchear con el snapshot', ()=>{
        const {container} = render(<GifGridItem title={title} src={src}/> );

        expect (container).toMatchSnapshot()
    })

    // test('Debe mostrar la imagen con el url y el alt indicado', ()=>{
    //     render( <GifGridItem title={title} src={src}/>);
    //     // screen.debug()
    //     // expect(screen.getByRole('img').src).toBe(src);

    //     const {src, alt} = screen.getByRole('img');
    //     // expect(src).toBe(src);
    //     expect(alt).toBe(title);
    // })

    test('Debe mostrar el título en el componente', ()=>{
        render( <GifGridItem title={title} src={src}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
});