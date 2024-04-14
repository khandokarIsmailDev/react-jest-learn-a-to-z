import { render,screen } from "@testing-library/react";
import GetByAlt from "./GetByAlt";

test('test image alter text',()=>{
    render(<GetByAlt/>)

    const img = screen.getByAltText('dummy image')
    expect(img).toBeInTheDocument() 
})

test('test multiple same alter text name',()=>{
    render(<GetByAlt/>)

    const imgs = screen.getAllByAltText("cat image")
    for(let i=0; i<imgs.length; i++){
        expect(imgs[i]).toBeInTheDocument() 
    }
})