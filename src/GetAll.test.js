import { render,screen } from "@testing-library/react";

import GetAll from "./GetAll";


test('get all by role',()=>{
    render(<GetAll/>)

    const btns = screen.getAllByRole("button") 
    const options = screen.getAllByRole("option")

    for(let i=0; i<btns.length; i++){
        expect(btns[i]).toBeInTheDocument() 
    }

    for(let i=0; i<options.length; i++){
        expect(options[i]).toBeInTheDocument()
    }

    
})