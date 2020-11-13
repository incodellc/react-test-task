/* eslint-disable react/prop-types */
import React from 'react';
import './List.scss';

const List = ({items, listHeader = null}) => {
    const [listVisible, setListVisible] = React.useState(false);
    const toggleList = () => setListVisible(!listVisible);
    return (
        <div className="list__block">
            <h3 onClick={toggleList}>{listHeader}</h3>
            <ul onClick={toggleList} className={`list${listVisible ? ' list-visible' : ''}`} data-testid="list">
                {items}
            </ul>
        </div>
    );
};

export default List;
