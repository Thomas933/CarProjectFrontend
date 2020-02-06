import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const middle = {
    margin: '0 auto'
}

const Loader = props => {
    return <div style={{middle}}><CircularProgress size={100}/></div>;
};

export default Loader;
