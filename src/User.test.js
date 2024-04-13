import Users from "./Users";
import renderer from 'react-test-renderer'


test('class component test',() =>{
    const componentData = renderer.create(<Users/>).getInstance()

    const myName = 'ismail'
    
    expect(componentData.getUserList()).toMatch("user list")
    expect(componentData.getUserInfo("test argument korlam")).toMatch("test argument korlam")
    expect(componentData.myInfo(myName)).toMatch('my name is'+myName)

})