import React from 'react';

import JsonGraph from '../components/JsonGraph';

function HomeGraph () {
    let style = {
        root: {
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100vw',
            height: '100vh',
            background: '#ffffff',
            zIndex: 10,
        },
    };

    return (
        <div style={style.root}>
          <JsonGraph />
        </div>
    );
}

export default HomeGraph;
