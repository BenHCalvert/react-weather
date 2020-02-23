import styled from 'styled-components';
import {Card, Form} from 'reactstrap'

const teal = '#A0A0A0';
const tealBorder = `2px solid ${teal}`;

export const CardWrapper = styled.article`
    :hover {
        cursor: pointer;
        .card {
            border-color: ${teal};
        }
    }
    text-align: center;
    img {
        width: 80px;
    }

    .card{
        background-color: #F5F5F5;
    }

    .card-body{
        padding: 1.25rem 0.5rem;
    }
    .card-header{
        font-weight: bold;
        background-color: ${props => props.isSelected ? teal : null};
    }
`

export const DetailsWrapper = styled(Card)`
    border: ${tealBorder};
    text-align: center;
    padding: 1rem;
    margin 1.5rem 0;
    img {
        width: 110px;
        margin: 0 auto;
    }    
`

export const FormWrapper = styled(Form)`
    input.form-control {
        width: 300px;
        padding: 5px
    }
    button {
        background: teal;
        padding: 5px
    }
`