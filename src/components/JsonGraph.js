import React, { useState, useEffect } from 'react';

import * as d3 from 'd3';
import D3Svg from '../libs/D3Svg';
import Splatter from '../js/Splatter';

function JsonGraph (props) {
    const [splatter, setSplatter] = useState(new Splatter());

    let style = {
        root: {
            width: '100vw',
            height: '100vh',
        },
    };

    useEffect(() => {
        let json = props.json;

        if (!json)
            return;

        let callbacks = {
            node: {
                click: (d) => {
                    if (d._class==="ROOT") {
                        if (this.props.inspectors.profile)
                            this.props.closeInspectorProfile();
                        else
                            this.props.openInspectorProfile();

                        return;
                    }
                },
            },
        };

        let graph_data = splatter.json2GraphData(props.json.contents);

        splatter
            .svg('#json-graph')
            .data(graph_data)
            .callbacks(callbacks)
            .draw();
    });

    let w = window.innerWidth;
    let h = window.innerHeight;

    return (
        <div style={style.root} id="json-graph">
          <svg id="json-graph"
                 width={w}
                 height={h}></svg>
        </div>
    );
}

export default JsonGraph;
