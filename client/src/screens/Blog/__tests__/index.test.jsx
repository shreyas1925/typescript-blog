import { render, screen } from "@testing-library/react"
import Blog from ".."

describe('Blog', () => {
    it('renders blog component without crashing', () => {
        render(<Blog/>)
        const blogElement = screen.getByTestId('blog-card')
        expect(blogElement).toBeInTheDocument()
    })
})