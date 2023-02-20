import NavBar from ".."
import {render,screen} from '@testing-library/react'
describe('Navbar',()=>{
    it('should render correctly without crashing',()=>{
        render(<NavBar/>)
        const navbarElement = screen.getByTestId('navbar')
        expect(navbarElement).toBeTruthy()
    })
    it('should render correctly without crashing forming a snapshot',()=>{
        const {asFragment} = render(<NavBar/>)
        expect(asFragment()).toMatchSnapshot()   
    })  
})