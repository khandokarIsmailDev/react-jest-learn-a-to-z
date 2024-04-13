import {fireEvent,render,screen} from '@testing-library/react'
import Button from './Button'

test('click event test case',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})


//sob test excute howare age akbarei excute hoy.
beforeAll(()=>{
    console.log('*** befor all execute ***')
})


test('test case 1 for check beforeAll execute',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})


test('test case 2 for check beforeAll execute',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})


test('test case 3 for check beforeAll execute',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})



//poti ta test er por por e execute hoy
beforeEach(()=>{
    console.log('*** befor Each execute ***')
})


test('test case 4 for check beforeAll execute',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})


test('test case 5 for check beforeAll execute',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})


test('test case 6 for check beforeAll execute',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})



//akbare sob test execute hoy akbarei
afterAll(()=>{
    console.log('*** after all execute ***')
})


test('test case 4 for check beforeAll execute',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})


test('test case 5 for check beforeAll execute',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})


test('test case 6 for check beforeAll execute',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})




// poti ta test er por execute hoy
afterEach(()=>{
    console.log('*** after Each execute ***')
})


test('test case 4 for check beforeAll execute',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})


test('test case 5 for check beforeAll execute',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})


test('test case 6 for check beforeAll execute',() =>{
    render(<Button/>)

    const btn = screen.getByRole("button")
    fireEvent.click(btn)

    expect(screen.getByText('updated data')).toBeInTheDocument()
})

