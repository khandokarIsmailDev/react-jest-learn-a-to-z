import { render,screen } from "@testing-library/react";
import App from './App'

test('learn react namer kono text ase ni',()=>{
  render(<App/>)
  const checkLearnReact = screen.getByText(/learn react/i)  //i use korsi mane case sensitive, choto,boro hater hole no problem
  const checkImgTitle = screen.getByTitle('this is react oficial logo') //chile upore learn react er moto likha jabe, no problem
  const checkMyName = screen.getByText('I Am ISMAIL')

  expect(checkLearnReact).toBeInTheDocument() 
  expect(checkImgTitle).toBeInTheDocument()
  expect(checkMyName).toBeInTheDocument()
})