import React from 'react';

import JsonGraph from '../components/JsonGraph';

import Splatter from '../js/Splatter';

function HomeGraph (props) {
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

    let splatter = new Splatter();

    if (props.jsons.selected) {
        let x = splatter.json2GraphData(props.jsons.selected.contents);
        console.log(x);
    }

    return (
        <div style={style.root}>
          <JsonGraph />
        </div>
    );
}

export default HomeGraph;
