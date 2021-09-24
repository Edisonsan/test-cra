import { ReactElement, useState } from 'react';
import { CardType, Card, directions } from '../../containers/Card/Card';
import { CardColumn } from '../../containers/CardColumn';
import { Footer } from '../../containers/Footer';
import { Layout } from '../../containers/layouts/Layout'
import { ColumnType, columns } from './Home.service';
import { ColumnsContainer } from './Home.styles';

type CardsType = Array<CardType>;


export const HomePage: React.FC = (): ReactElement => {
    const [cards, setCards] = useState<CardsType>([{ columnId: 0, id: 0, text: 'Numero 1'},
    { columnId: 0, id: 1, text: 'Empleade'}, { columnId: 1, id: 2, text: 'HAciendo'}, { columnId: 2, id: 3, text: 'Hecho'}]);

    const handleMovement = (cardId: number, direction: number) => {
        const newCards = cards.map((card) => {
            return (card.id === cardId) 
                ? { ...card, columnId: direction === directions.moveLeft ? card.columnId - 1 : card.columnId + 1 }
                : card;
        })

        setCards(newCards);
    }

    // 
    const handleNew = ( text: string ) => {
        const newCard : CardType = { id: cards.length, text: text, columnId: 0 };

        const newCards = [...cards, newCard];

        setCards(newCards);
    }

    const renderCards = (columnId: number) => {
        return cards.filter(
            (columnCard) => columnCard.columnId === columnId ).map(
                (card)=> <Card key={`${card.id}-${card.columnId}-${card.text}`} id={card.id} columnId={card.columnId} onClick={handleMovement} maxColumn={2}>
                    { card.text }
                    </Card>)
    }

    const renderColumns = () => {
        return columns.map(
            (column: ColumnType, index) => 
                <CardColumn key={`${column.title}`} title={column.title}>
                    { renderCards(index) }
                </CardColumn>);
    }

    return (
        <Layout>
            <ColumnsContainer>
            { renderColumns() }
            </ColumnsContainer>
            <Footer onAddNew={handleNew}/>
        </Layout>
    )
}