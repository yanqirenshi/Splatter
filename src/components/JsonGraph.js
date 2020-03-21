import React, { useRef, useEffect } from 'react';

import * as d3 from 'd3';
import D3Svg from '../libs/D3Svg';

function JsonGraph () {
    let style = {
        root: {
            width: '100vw',
            height: '100vh',
        },
    };

    useEffect(() => {
        let svg_d3_selection = d3.select('#json-graph');


        let d3svg = new D3Svg({
            d3: d3,
            d3_element: svg_d3_selection,
            look: {
                at: { x:0, y:0 },
            },
            scale: 2,
        });

        // let force = new D3Force(d3, svg, {
        //     node: {
        //         click: (d) => {
        //             if (d._class==="ROOT") {
        //                 if (this.props.inspectors.profile)
        //                     this.props.closeInspectorProfile();
        //                 else
        //                     this.props.openInspectorProfile();

        //                 return;
        //             }
        //         },
        //     },
        // });

        // force.draw(this.props.source);

        // this.setState({
        //     d3svg: d3svg,
        //     force: force,
        // });
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
