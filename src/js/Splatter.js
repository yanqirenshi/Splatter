class IDManeger {
    initIdCounter () {
        this.id_counter = 0;
    }
    numberingID () {
        return ++this.id_counter;
    }
}

class GraphDataManeger extends IDManeger{
    constructor () {
        super();

        this.initIdCounter();
        this.nodes = [];
        this.edges = [];
    }
    addNode (node) {
        this.nodes.push(node);
    }
    addEdge (edge) {
        this.edges.push(edge);
    }
    makeNodeNull () {
        let node = {
            _id: this.numberingID(),
            _class: 'NULL',
            label: 'NULL',
            value: null,

        };

        this.addNode(node);

        return node;
    }
    makeNodeString (v) {
        let node = {
            _id: this.numberingID(),
            _class: 'STRING',
            label: 'Str',
            value: v,
        };

        this.addNode(node);

        return node;
    }
    makeNodeArrayIndex (v) {
        let node = {
            _id: this.numberingID(),
            _class: 'ARRAY-INDEX',
            label: v,
        };

        this.addNode(node);

        return node;
    }
    makeNodeArray(v) {
        let node = {
            _id: this.numberingID(),
            _class: 'ARRAY',
            label: 'len=',
        };

        this.addNode(node);

        let len = 0;
        for (let i in v) {
            len++;

            let value = v[i];
            let child_node = this.makeNode(value);

            this.makeEdge(node, child_node, i);
        }

        node.label += len;

        return node;
    }
    makeNodeHashTableKey (v) {
        let node = {
            _id: this.numberingID(),
            _class: 'HASH-TABLE-KEY',
            label: v,
        };

        this.addNode(node);

        return node;
    }
    makeNodeHashTable(v) {
        let node = {
            _id: this.numberingID(),
            _class: 'HASH-TABLE',
            label: "size=",
        };

        this.addNode(node);

        let i = 0;
        for (let key in v) {
            i++;

            let value = v[key];
            let value_node = this.makeNode(value);

            this.makeEdge(node, value_node, key);
        }

        node.label += i;

        return node;
    }
    makeNodeBoolean(v) {
        let node = {
            _id: this.numberingID(),
            _class: 'BOOLEAN',
            label: v,
        };

        this.addNode(node);

        return node;
    }
    makeNodeNumber(v) {
        let node = {
            _id: this.numberingID(),
            _class: 'NUMBER',
            label: v,
        };

        this.addNode(node);

        return node;
    }
    makeNode (value) {
        // Null
        // Undefined
        if (!value)
            return this.makeNodeNull();

        let type = typeof value;

        // String
        if (type==='string')
            return this.makeNodeString(value);

        // Boolean
        if (type==='boolean')
            return this.makeNodeBoolean(value);

        // Number
        if (Number(value))
            return this.makeNodeNumber(value);

        // Object
        if (type==='object')
            if (Array.isArray(value))
                return this.makeNodeArray(value);
            else
                return this.makeNodeHashTable(value);

        throw new Error();
    }
    makeEdge (parent, child, indicator) {
        let edge = {
            from: parent,
            to: child,
            indicator: indicator,
        };

        this.addEdge(edge);
    }
    getGraphData() {
        return {
            nodes: this.nodes,
            edges: this.edges,
        };
    }
}


class Splatter {
    json2GraphData (json) {
        if (!json)
            return null;

        let gdm = new GraphDataManeger();

        gdm.makeNode(json);

        return gdm.getGraphData();
    }
}

export default Splatter;
