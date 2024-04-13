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



describe('akadik test group akare likha jabe, jemon uporer 2 ta test ai describe er bitor korbo',()=>{
 
  test('test case 1:learn react',()=>{
    render(<App/>)

    const checkLearnText = screen.getByText(/learn react/i)
    const checkImageTitle = screen.getByTitle('this is react oficial logo')
    const checkMyName = screen.getByText('I Am ISMAIL')
    
    expect(checkLearnText).toBeInTheDocument()
    expect(checkImageTitle).toBeInTheDocument()
    expect(checkMyName).toBeInTheDocument()
  })
  
  test('test 2: input test check ',()=>{
    render(<App/>)

    const inputCheck = screen.getByRole('textbox')
    const inputPlaceholder = screen.getByPlaceholderText(/enter user name/i)
    

    expect(inputCheck).toBeInTheDocument()
    expect(inputPlaceholder).toBeInTheDocument()
    expect(inputCheck).toHaveAttribute('name','username')
    expect(inputCheck).toHaveAttribute('type','text')
    expect(inputCheck).toHaveAttribute('id','userId')
  })
  
})





describe('akadik test group akare likha jabe, jemon uporer 2 ta test ai describe er bitor korbo',()=>{
 
  test('test case 1:learn react',()=>{
    render(<App/>)

    const checkLearnText = screen.getByText(/learn react/i)
    const checkImageTitle = screen.getByTitle('this is react oficial logo')
    const checkMyName = screen.getByText('I Am ISMAIL')
    
    expect(checkLearnText).toBeInTheDocument()
    expect(checkImageTitle).toBeInTheDocument()
    expect(checkMyName).toBeInTheDocument()
  })
  
  test('test 2: input test check ',()=>{
    render(<App/>)

    const inputCheck = screen.getByRole('textbox')
    const inputPlaceholder = screen.getByPlaceholderText(/enter user name/i)
    

    expect(inputCheck).toBeInTheDocument()
    expect(inputPlaceholder).toBeInTheDocument()
    expect(inputCheck).toHaveAttribute('name','username')
    expect(inputCheck).toHaveAttribute('type','text')
    expect(inputCheck).toHaveAttribute('id','userId')
  })

  describe('this is inner describe groupd test',()=>{
    test('nested describe aibabe kaj kore',()=>{
      render(<App/>)
  
      const checkLearnText = screen.getByText(/learn react/i)
      const checkImageTitle = screen.getByTitle('this is react oficial logo')
      const checkMyName = screen.getByText('I Am ISMAIL')
      
      expect(checkLearnText).toBeInTheDocument()
      expect(checkImageTitle).toBeInTheDocument()
      expect(checkMyName).toBeInTheDocument()
    })
  })
  
})