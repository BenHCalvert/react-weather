import styled from 'styled-components';

const teal = '#A0A0A0';

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