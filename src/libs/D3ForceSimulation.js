import * as d3 from 'd3';

export default class D3ForceSimulation {
    constructor () {
        this.simulation = d3
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
            .force("charge", d3.forceManyBody())
        ;

    }
    makeDragAndDropCallbacks (callback) {
        let simulation = this.simulation;

        let dragStarted = (d) => {
            if (d.move==='freeze')
                return;

            if (d.move==='support') {
                d.fx_keep = d.fx;
                d.fy_keep = d.fy;
            }

            if(!d3.event.active)
                simulation.alphaTarget(0.3).restart();

            d.fx = d.x;
            d.fy = d.y;
        };

        let dragged = (d) => {
            if (d.move==='freeze')
                return;

            d.fx = d3.event.x;
            d.fy = d3.event.y;
        };

        let dragEnded = (d) => {
            if (d.move==='freeze')
                return;

            if(!d3.event.active)
                simulation.alphaTarget(0);

            if (d.move!=='support') {
                d.fx = null;
                d.fy = null;
            }
        };

        let out = {
            dragStarted: dragStarted,
            dragged: dragged,
            dragEnded: dragEnded,
            node: {
                click: null,
            }
        };

        if (callback && callback.node && callback.node.click)
            out.node.click = callback.node.click;

        return out;
    }
    settingNodes (nodes_data, link, node) {
        this.simulation
            .nodes(nodes_data)
            .on("tick", () => {
                link
                    .attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });
                node
                    .attr("transform", (d) => {
                        return `translate(${d.x}, ${d.y})`;
                    });
            });
    }
    settingEdges (links_data) {
        this.simulation
            .force("link")
            .links(links_data);
    }
}
