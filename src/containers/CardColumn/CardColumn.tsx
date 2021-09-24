import { ReactElement, ReactNode } from 'react';
import { CardColumnBox, CardColumnBody } from './CardColumn.styles';
import { Subtitle  } from '../../components/typography/Subtitle';

type CardColumnProps = { children: ReactNode; title: string };

export const CardColumn: React.FC<CardColumnProps> = ({ children, title }: CardColumnProps ) : ReactElement => {

    return <CardColumnBox>
        <Subtitle>{ title }</Subtitle>
        <CardColumnBody>{children}</CardColumnBody>
    </CardColumnBox>
}
