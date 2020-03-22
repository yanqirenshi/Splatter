import D3ForceNode from '../libs/D3ForceNode';

class GraphIDManeger {
    initIdCounter () {
        this.id_counter = 0;
    }
    numberingID () {
        return ++this.id_counter;
    }
}

class GraphDataManeger extends GraphIDManeger{
    constructor () {
        super();

        this.initIdCounter();
        this.nodes = [];
        this.edges = [];

        this.node = new D3ForceNode();
    }
    addNode (node) {
        this.nodes.push(node);
    }
    addEdge (edge) {
        this.edges.push(edge);
    }
    makeNodeNull () {
        let node = this.node.makeData({
            _id: this.numberingID(),
            _class: 'NULL',
            label: 'NULL',
            value: { text: null },
        });

        this.addNode(node);

        return node;
    }
    makeNodeString (v) {
        let node = this.node.makeData({
            _id: this.numberingID(),
            _class: 'STRING',
            label: 'Str',
            value: { text: v },
        });

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
        let node = this.node.makeData({
            _id: this.numberingID(),
            _class: 'ARRAY',
            label: { text: 'len=' },
        });

        this.addNode(node);

        let len = 0;
        for (let i in v) {
            len++;

            let value = v[i];
            let child_node = this.makeNode(value);

            this.makeEdge(node, child_node, i);
        }

        node.label.text += len;

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
        let node = this.node.makeData({
            _id: this.numberingID(),
            _class: 'HASH-TABLE',
            label:  { text: "size=" },
        });

        this.addNode(node);

        let i = 0;
        for (let key in v) {
            i++;

            let value = v[key];
            let value_node = this.makeNode(value);

            this.makeEdge(node, value_node, key);
        }

        node.label.text += i;

        return node;
    }
    makeNodeBoolean(v) {
        let node = this.node.makeData({
            _id: this.numberingID(),
            _class: 'BOOLEAN',
            label:  { text: v },
        });

        this.addNode(node);

        return node;
    }
    makeNodeNumber(v) {
        let node = this.node.makeData({
            _id: this.numberingID(),
            _class: 'NUMBER',
            label: { text: v },
        });

        this.addNode(node);

        return node;
    }
    makeNode (value) {
        if (value!==0 && !value)
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

export default GraphDataManeger;
