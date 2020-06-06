import React, {Component} from 'react';
import './index.css';
import 'animate.css';

export default class Marquee extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    static defaultProps = {
        Interval: 5000,
        animateIn: "lightSpeedIn",
        animateOut: "lightSpeedOut"
    };

    componentDidMount() {

        this.currentIndex = 0;
        this
            .Span
            .addEventListener("animationend", (function () {

                let csslist = this.Span.classList;
                csslist.remove(this.props.animateIn);
                if (csslist.contains(this.props.animateOut)) {
                    csslist.add(this.props.animateIn);
                    this.Span.innerText = this.texts[this.currentIndex];
                }
                csslist.remove(this.props.animateOut);
            }).bind(this));

        //this.ChangeText();
        this.IntervalId = setInterval(this.Tick.bind(this), this.props.Interval);

    }

    Tick() {

        this.currentIndex = (this.currentIndex < this.length)
            ? this.currentIndex + 1
            : 0;
        let csslist = this.Span.classList;
        csslist.add(this.props.animateOut);

    }

    render() {

        this.texts = React
            .Children
            .map(this.props.children, (p) => {
                return p.props.children;
            });

        this.length = React
            .Children
            .count(this.props.children) - 1;
        return <span
            className="Marquee animated"
            ref={(p) => {
            this.Span = p;
        }}>
            {this.props.children[0]}

        </span>;

    }

}