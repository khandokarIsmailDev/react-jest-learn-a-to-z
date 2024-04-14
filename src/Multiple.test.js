import { render,screen } from "@testing-library/react";
import MultipleElements from "./MultipleElements";


test('Multiple elements and Custom Role',() =>{
    render(<MultipleElements/>)

    const btn1 = screen.getByRole("button",{name:"button 1"})
    const btn2 = screen.getByRole("button",{name:"button 2"})
    const input1 = screen.getByRole("textbox",{name:"User Name"})
    const input2 = screen.getByRole('textbox',{name:"User Email"})
    const dv1 = screen.getByRole('dummy')

    expect(btn1).toBeInTheDocument()
    expect(btn2).toBeInTheDocument()
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
    expect(dv1).toBeInTheDocument()
})