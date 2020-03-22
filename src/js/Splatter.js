import GraphDataManeger from './GraphDataManeger';
import GraphPainter from './GraphPainter';

class Splatter {
    constructor () {
        this.graph_data_maneger = new GraphDataManeger();
        this.painter = new GraphPainter();
    }
    json2GraphData (json) {
        if (!json)
            return null;

        let gdm = this.graph_data_maneger;

        gdm.makeNode(json);

        return gdm.getGraphData();
    }
    /////
    ///// GraphPainter
    /////
    svg (v) {
        this.painter.svg(v);
        return this;
    }
    data (data) {
        this.painter.data(data);
        return this;
    }
    callbacks (callbacks) {
        this.painter.callbacks(callbacks);
        return this;
    }
    draw () {
        this.painter.draw();
    }
}

export default Splatter;
