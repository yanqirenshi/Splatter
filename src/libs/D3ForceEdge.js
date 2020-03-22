export default class D3ForceEdge {
    constructor () {
        this.elements = null;
    }
    draw (canvas, data) {
        return canvas
            .selectAll("line")
            .data(data, (d) => { return d._id; })
            .enter()
            .append("line")
            .attr("stroke-width", 8)
            .attr("stroke", "#aacf53");
    }
}
