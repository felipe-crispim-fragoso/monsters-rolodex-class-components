import { Component } from "react";
import './MonsterCard.css';

class MonsterCard extends Component {
    render() {
        const { id, name, email } = this.props.card;
        return <div className='monster-card'>
            <img key={id} alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    }
};

export default MonsterCard;