import React from 'react';
import PropTypes from 'prop-types';

function PendingGuest(props) {
    if(props.name){
        return (
        <li className="pendingGuest">
            <span>
                {props.name}
            </span>
        </li>);
    }
    return null;
}

PendingGuest.propTypes = {
    name: PropTypes.string.isRequired,
}

export default PendingGuest;
