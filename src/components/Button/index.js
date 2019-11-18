import React from 'react'
import { connect } from 'react-redux';
import { makeAPICall } from '../../actions';

const Button = ({makeAPICall}) => {
        return (
            <button id="getDetails" onClick={makeAPICall}>Get Weather Info</button>
        )
}

const mapDispatchToProps = {
    makeAPICall: makeAPICall,
};

export default connect(null,mapDispatchToProps)(Button);

