import {getGifs} from '../../src/helpers/getGifs'

describe('Pruebas en getGifs()', ()=>{
    test('Retornar un array de gifs', async()=>{
        const gifs = await getGifs('Leonardo');
        console.log(gifs)
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            src: expect.any(String),
        })
    })
})