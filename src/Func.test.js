
import { fireEvent, render ,screen} from "@testing-library/react";
import Func from "./Func";
import handleOtherFunc from "./helper";

test('method testing case 1',()=>{
    render(<Func/>)

    const btn = screen.getByTestId('btn1')
    fireEvent.click(btn)

    expect(screen.getByText('hello')).toBeInTheDocument()
})


test('method testin case 2',()=>{
    expect(handleOtherFunc()).toMatch('hi')
})