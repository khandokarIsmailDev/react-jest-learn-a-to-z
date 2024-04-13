import { render } from "@testing-library/react";
import App from "./App";

test("ar maddome snapshot create korbo",()=>{
    const container = render(<App/>) 
    expect(container).toMatchSnapshot()
})