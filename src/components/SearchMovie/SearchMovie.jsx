import { Container } from "./SearchMovie.styled"

export const SearchMovie = ({ onSubmit }) => {
    return (
        <Container>
            <form onSubmit={onSubmit}>
            <input 
            name="query"
            type="text" 
            ></input>
            <button type="submit">Search</button>
            </form>
        </Container>
    )
}