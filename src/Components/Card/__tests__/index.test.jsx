import { fireEvent, render, screen } from "@testing-library/react"
import Card from ".."
import NavBar from "../../Navbar";
import Footer from "../../Footer";

describe('Card',()=>{
    
    it("should render correctly forming a snapshot", () => {
        const { asFragment } = render(<Card />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render correctly without crashing',()=>{   
        render(<Card />)
        const cardText  = screen.getByTestId('card',{exact:false})
        expect(cardText).toBeTruthy()
    })

    describe('Heart', () => {
        it('should be black heart before clicking heart icon',()=>{   
            render(<Card/>);
            const ImageEvent = screen.getByTestId('img');
            expect(ImageEvent).toHaveAttribute('src', 'heart-black.svg');
        })
        it('should be red heart after clicking heart icon',()=>{   
            render(<Card/>);
            const ImageEvent = screen.getByTestId('img');
            fireEvent.click(ImageEvent);
            expect(ImageEvent).toHaveAttribute('src', 'heart-red.svg');
        })
    })

    describe('Claps Counter', () => {
        it('should be 0 before clicking clap icon',()=>{   
            render(<Card/>);
            const countEvent = screen.getByTestId('count');
            expect(countEvent).toHaveTextContent('0'); 
        })
        it('should be 1 when claps icon clicked once',()=>{   
            render(<Card/>);
            const countImageEvent = screen.getByTestId('count-img');
            const countEvent = screen.getByTestId('count');
            fireEvent.click(countImageEvent);
            expect(countEvent).toHaveTextContent('1');
        })
        it('should be 2 when claps icon clicked twice',()=>{   
            render(<Card/>);
            const countImageEvent = screen.getByTestId('count-img');
            const countEvent = screen.getByTestId('count');
            fireEvent.click(countImageEvent);
            fireEvent.click(countImageEvent);
            expect(countEvent).toHaveTextContent('2');
        })

        // it will check for 100,1000's also
        it('should be more than 1 when claps icon clicked more than once',()=>{   
            render(<Card/>);
            const countImageEvent = screen.getByTestId('count-img');
            const countEvent = screen.getByTestId('count');
            fireEvent.click(countImageEvent);
            fireEvent.click(countImageEvent);
            fireEvent.click(countImageEvent);
            expect(countEvent).toHaveTextContent('3');
        })
    })  
})

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

describe('Footer',()=>{
    it('should render correctly without crashing',()=>{
        render(<Footer/>)
        const footerElement = screen.getByTestId('footer')
        expect(footerElement).toBeTruthy()
    })
    it('should render correctly without crashing forming a snapshot',()=>{
        const {asFragment} = render(<Footer/>)
        expect(asFragment()).toMatchSnapshot()   
    })
})