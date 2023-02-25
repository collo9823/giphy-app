import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('<AddCategory />', ()=>{
    test('debe cambiar el valor de la caja de texto', ()=>{
        render(
            <AddCategory onNewValue={()=>{}}/>
        );
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Programing'}})
        expect(input.value).toBe('Programing')
    })

    test('debe llamar onNewValue si el input tinene un valor', ()=>{
        const inputValue = 'Programing';
        // TODO: ????
        const onNewValue = jest.fn()
        render(
            <AddCategory onNewValue={onNewValue}/>
        );
            const input = screen.getByRole('textbox');
            const form = screen.getByRole('form');

            fireEvent.input(input, {target: {value: inputValue} });
            screen.debug()
            fireEvent.submit( form );
            screen.debug()

            expect( input.value ).toBe('')

            expect ( onNewValue ).toHaveBeenCalled();
            expect ( onNewValue ).toHaveBeenCalledTimes(1);
            expect ( onNewValue ).toHaveBeenCalledWith(inputValue);
    
    })
    test('no debe llamar onNewValue si el input está vacio', ()=>{
        const onNewValue = jest.fn()
        render(<AddCategory onNewValue={onNewValue}/>);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewValue).toHaveBeenCalledTimes(0)

        
    })
})