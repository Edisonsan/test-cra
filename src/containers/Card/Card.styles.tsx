import styled from "styled-components";
import { Container } from "../../components/layouts/Container";
import Text from "../../components/typography/Text";
import { colors } from '../../styles/colors'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button } from '../../components/buttons/Button';


export const CardBox = styled(Container)`
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    border-radius: 5px;
    margin-bottom: 15px;
`

export const CardText = styled(Text)`
    text-align: center;
    width: 60%;
`

export const CardButton = styled(Button)<{ next?: boolean, disabled?: boolean}>`
    background-color: ${({next})=> next? colors.buttonGreen : colors.buttonRed };
    visibility: ${({disabled})=> disabled? 'hidden' : 'visible'};

    width: 40px;
    height: 50px;
`

export const IconArrowLeft = styled(FaArrowLeft)`
    color: ${colors.white};
`;

export const IconArrowRight = styled(FaArrowRight)`
    color: ${colors.white};
`;