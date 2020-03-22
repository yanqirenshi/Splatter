import * as d3 from 'd3';

import D3Svg from '../libs/D3Svg';
import D3ForceNode from '../libs/D3ForceNode';

class GraphPainter {
    constructor () {
        this._d3svg = null;
        this._graph_data = {
            nodes: [],
            edges: {},
        };
        this._callbacks = null;

        this._simulation = this.makeSimulation();

        this.node = new D3ForceNode();
    }
    makeSimulation () {
        return d3
            .forceSimulation()
            .alphaMin(0.001)
            .alphaTarget(0.002)
            .force(
                "collide",
                d3.forceCollide(88).radius(function(d) { return 111; })
            )
            .force("link", d3.forceLink().id(function(d) {
                return d._id;
            }))
            .force("charge", d3.forceManyBody());
    }
    svg (v) {
        let type = v.constructor.name;

        if ('String'===type)
            return this.svg(d3.select('#json-graph'));


        if ('object'===(typeof v)) {
            if ('D3Svg'===type)
                return this._d3svg = v;


            if ('Selection'===type) {
                let d3svg = new D3Svg({
                    d3: d3,
                    d3_selection: v,
                    look: {
                        at: { x:0, y:0 },
                    },
                    scale: 2,
                });

                return this.svg(d3svg);
            }
        }

        throw new Error('Not Supported type. type=' + type);
    }
    data (data) {
        this._graph_data = data;

        return this;
    }
    callbacks (callbacks) {
        this._callbacks = callbacks;

        return this;
    }
    draw () {
        let data = this._graph_data;
        let callback = this._callbacks;

        let nodes_selection = this.node.draw(
            this._d3svg.d3Element(),
            data.nodes,
            callback);

        this._simulation
            .nodes(data.nodes)
            .on("tick", () => {
                // link
                //     .attr("x1", function(d) { return d.source.x; })
                //     .attr("y1", function(d) { return d.source.y; })
                //     .attr("x2", function(d) { return d.target.x; })
                //     .attr("y2", function(d) { return d.target.y; });

                nodes_selection
                    .attr("transform", (d) => {
                        return `translate(${d.x}, ${d.y})`;
                    });
            });

        return this;
    }
}

export default GraphPainter;
