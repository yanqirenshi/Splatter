import * as d3 from 'd3';

export default class D3Svg {
    constructor(params) {
        this._d3_selection = params.d3_selection;

        this._scale = params.scale || 1;

        this._look = params.look || { at: { x:0, y:0 } };

        this._callbacks = {
            moveEndSvg: null,
            clickSvg: null,
            zoomSvg: null,
        };

        this.init();
    }
    init () {
        let svg = this._d3_selection;

        let self = this;
        svg.call(d3
                 .drag()
                 .on('start', function () {
                     self.setSvgGrabMoveStart(d3.event);
                 })
                 .on("drag", function (d, i) {
                     self.setSvgGrabMoveDrag(d3.event);
                 })
                 .on('end', function (d, i) {
                     self.setSvgGrabMoveEnd();
                 }));

        svg.call(d3
                 .zoom()
                 .on("zoom", function () {
                     self.setSvgGrabZoom(d3.event);
                 }));

        svg.on('click', () => {
            if(this._callbacks.clickSvg)
                this._callbacks.clickSvg();
        });

        this.refreshViewBox();
    }
    d3Element () {
        return this._d3_selection;
    }
    /** **************************************************************** *
     * ViewBox
     * **************************************************************** */
    refreshViewBox () {
        let d3_selection = this._d3_selection;

        var scale = this._scale;
        var look = this._look;

        var x = look.at.x,
            y = look.at.y;

        var orgW = window.innerWidth,
            orgH = window.innerHeight;

        var w = Math.floor(orgW * scale),
            h = Math.floor(orgH * scale);

        var viewbox = ''
            + (x - Math.floor(w/2)) + ' '
            + (y - Math.floor(h/2)) + ' '
            + w + ' '
            + h;

        d3_selection.attr('viewBox', viewbox);
    }
    /** **************************************************************** *
     * MOOVE Camera
     * **************************************************************** */
    setSvgGrabMoveStart (event) {
        this._drag = {
            x: event.x * this._scale,
            y: event.y * this._scale
        };
    }
    setSvgGrabMoveDrag (event) {
        var start_x = this._drag.x,
            start_y = this._drag.y;

        var x = event.x * this._scale,
            y = event.y * this._scale;

        this._look.at.x -= (x - start_x);
        this._look.at.y -= (y - start_y);

        this._drag.x = x;
        this._drag.y = y;

        this.refreshViewBox();
    }
    setSvgGrabMoveEnd () {
        this._drag = null;

        if(this._callbacks.moveEndSvg)
            this._callbacks.moveEndSvg({
                x: this._x,
                y: this._y,
                z: 0
            });

    }
    /** **************************************************************** *
     * ZOOM Camera
     * **************************************************************** */
    setSvgGrabZoom (event) {
        let transform = event.transform;

        this._scale = transform.k;
        this.refreshViewBox();

        if(this._callbacks.zoomSvg)
            this._callbacks.zoomSvg(this._scale);
    }
}
