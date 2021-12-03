import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 7vh;
    background: #FFF;
    float: left
`

const Quotes = styled.h2`
    margin-left: 47%
`

function Blank() {
    return <Container >
        <Quotes>Loading...</Quotes>
    </Container>
}

export default Blank