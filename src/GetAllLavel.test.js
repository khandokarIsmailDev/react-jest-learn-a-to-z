import { render,screen } from "@testing-library/react";
import GetAllLavel from "./GetAllLavel";

test('get all lavel by text',()=>{
    render(<GetAllLavel/>)

    const inputs = screen.getAllByLabelText('User Name')
    for(let i=0; i<inputs.length; i++){
        expect(inputs[i]).toBeInTheDocument()
    }

    //last element test korbo
    expect(inputs[inputs.length-1]).toBeInTheDocument()

    
})


test('get all level input checkbox',()=>{
    render(<GetAllLavel/>)

    const checkboxes = screen.getAllByLabelText('Skills')
    for(let i=0; i<checkboxes.length; i++){
        expect(checkboxes[i]).toBeInTheDocument()
    }
})