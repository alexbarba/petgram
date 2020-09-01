import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width:75px;
    text-decoration: none;
    
`

export const Image = styled.img`
    border:1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    height:75px;
    width:75px;
    overflow: hidden;
    object-fit: cover;
`
