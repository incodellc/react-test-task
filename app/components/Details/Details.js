import React from 'react';
import { useSelector } from 'react-redux';
import List from '../List/List';
import './Details.scss';


const Details = () => {
    const data = useSelector(state => state.stockTicker.payload);
    const probel = /_/gi;
    const listItems = Object.keys(data).map((el, i) => (
        <li key={i} className="details__list-item">
            <span className="list__parameter">{el.replace(probel, ' ')}:</span>
            <span className="list__value">{data[el]}</span>
        </li>
    ));

    return (
        <section className="details">
            <List items={listItems} listHeader={'Details'}/>
        </section>
    );
};

export default Details;
