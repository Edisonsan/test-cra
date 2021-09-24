import { ReactElement, ReactNode } from 'react';
import { CardButton, CardBox, CardText, IconArrowLeft, IconArrowRight } from './Card.styles';

type CardProps = { children: ReactNode; id: number, columnId: number, onClick: ( id: number, direction: number ) => void, maxColumn: number };
export type CardType = { id: number, columnId: number, text: string };
export const directions = {
    moveLeft: 1,
    moveRight: 2
};

export const Card: React.FC<CardProps> = ({ children, id, columnId, onClick, maxColumn }: CardProps ) : ReactElement => {

    const handlePrevious = () => {
        onClick(id, directions.moveLeft);
    }

    const handleNext = () => {
        onClick(id, directions.moveRight);
    }


    return <CardBox id={`CardBox_${id}`}>
        <CardButton disabled={ columnId === 0 } onClick={handlePrevious}>
            <IconArrowLeft size={22}/>
        </CardButton>
        <CardText>
            {children}
        </CardText>
        <CardButton next disabled={ columnId === maxColumn } onClick={handleNext}>
            <IconArrowRight size={22}/>
        </CardButton>

    </CardBox>
}
