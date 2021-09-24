import styled from 'styled-components';
import { Button } from '../../components/buttons/Button';
import { Box } from '../../components/layouts/Box';
import { colors } from '../../styles/colors';
import { FaPlus } from 'react-icons/fa';
import { TextInput } from '../../components/inputs/TextInput';
import { fontSize } from '../../styles/fonts';


export const FooterContainer = styled(Box)`
    flex-direction: row;
    justify-content: flex-start;
    border: none;
    height: 10%;
    padding-left: 30px;
`

export const ButtonAdd = styled(Button)`
    background-color: ${colors.buttonBlue};
    width: 80px;
    height: calc(100% - 10px);
`

export const IconAdd = styled(FaPlus)`
    color: ${colors.white};
`
export const FooterInput = styled(TextInput)`
    height: 40px;
    margin-right: 10px;
    padding: 5px 10px 5px 20px;
    font-size: ${fontSize.subtitle};
`