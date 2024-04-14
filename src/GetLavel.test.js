import { render,screen } from "@testing-library/react";
import GetLavel from "./GetLavel";


test('get by lavel text',()=>{
    render(<GetLavel/>)

    const input = screen.getByLabelText('User Name')
    const checkbox = screen.getByLabelText('User Skills')

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('ismail')

    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeChecked()
})

