import { render,screen } from "@testing-library/react";
import Role from "./Role";

test('input field test',()=>{
    render(<Role/>)

    const input = screen.getByRole('textbox')
    const btn = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('helloValid')
    expect(input).toBeDisabled()
    expect(btn).toBeInTheDocument()
})