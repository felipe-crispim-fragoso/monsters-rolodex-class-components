import { Component } from 'react';
import './CardList.css'
import MonsterCard from '../card/MonsterCard';

class CardList extends Component {

    render() {
        const { cards } = this.props;
        return <div className='card-list'>
            {
                cards.map((card)=> <MonsterCard card={card} />)
            }
        </div>
    }
};

export default CardList;