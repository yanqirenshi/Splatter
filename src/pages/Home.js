import React from 'react';

import HomeTabs from './HomeTabs';
import HomeGraph from './HomeGraph';

function Home () {
    let style = {
        root: {
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100vw',
            height: '100vh',
            background: '#d57c6b',
        },
    };

    return (
        <div style={style.root}>
          <HomeTabs />
          <HomeGraph />
        </div>
    );
}

export default Home;
