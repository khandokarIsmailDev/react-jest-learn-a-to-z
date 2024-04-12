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

test('input test check korbo',()=>{
  render(<App/>)

  const checkInput = screen.getByRole("textbox")    //text box ase ki na, sodo tai check korbe
  const checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name")    //placeholder er name check korbe sodo

  expect(checkInput).toBeInTheDocument()
  expect(checkInputPlaceHolder).toBeInTheDocument()
  expect(checkInput).toHaveAttribute('name','username') // oi input box er name ki username? ta check korbe
  expect(checkInput).toHaveAttribute('id','userId')  // id er value userId ki na , ta check korlam
  expect(checkInput).toHaveAttribute('type','text')
})