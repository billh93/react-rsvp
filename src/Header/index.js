import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

function Header(props){
    return(
        <header>
          <h1>RSVP</h1>
          <GuestInputForm
            newGuestSubmitHandler={props.newGuestSubmitHandler}
            pendingGuest={props.pendingGuest}
            handleNameInput={props.handleNameInput}
          />
        </header>
    );
}

Header.propTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
}

export default Header;
