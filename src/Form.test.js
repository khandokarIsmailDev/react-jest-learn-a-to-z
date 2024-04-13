import {fireEvent,screen,render} from '@testing-library/react'
import Form from './Form'


test('on change event testing',()=>{
    render(<Form/>)

    let input = screen.getByRole('textbox')
    fireEvent.change(input,{target:{value:'a'}})

    expect(input.value).toBe('a')
})