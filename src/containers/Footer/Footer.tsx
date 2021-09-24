import { KeyboardEvent, ReactElement, useState } from "react";
import { ButtonAdd, FooterContainer, FooterInput, IconAdd } from "./Footer.styles";

type FooterProps = {
    onAddNew: ( text: string ) => void
}

export const Footer: React.FC<FooterProps> = ({ onAddNew }: FooterProps): ReactElement => {
    const [value, setValue] = useState<string>('')


    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }
    
    const handleNew = () => {
        onAddNew( value );
        setValue('');
    }

    const handleEnter = (e: KeyboardEvent<HTMLDivElement>) => {
        if( e.key === 'Enter')
            handleNew();
    }


    return (
        <FooterContainer id='FooterContainer'>
            <FooterInput placeholder='Add Text' onChange={handleChange} value={value} onKeyDown={handleEnter}/>
            <ButtonAdd onClick={handleNew}><IconAdd size={22}/></ButtonAdd>
        </FooterContainer>
    )
} 