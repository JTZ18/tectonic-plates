import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <Wrap>
                <Logo>
                    React JS
                </Logo>
                <Label>
                    Ep 1
                </Label>
            </Wrap>
        </Container>
    )
}

export default Header

const Container = styled.div`

`
const Wrap = styled.div`
    padding: 50px;
    display: flex;
    justify-content: space-between;
    
`
const Logo = styled.div`
    text-transform: uppercase;
    font-weight: 600
    
`
const Label = styled.div`
    text-transform: uppercase;
    font-weight: 600
`