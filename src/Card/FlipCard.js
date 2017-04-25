import React, {Component} from 'react';
import propTypes from 'prop-types';
import Card from './Card';
import './FlipCard.css';
import 'animate.css';
import {guid} from "../helpers";

export default class FlipCard extends Component {
    static defaultProps = {
        Width: "400px",
        Height: "400px",
        AnimateIn: "slideInDown",
        AnimateOut: "SlideOutUp",
        InboxAnimation:true
    }

    static propTypes = {
        children: function (props, propName, componentName) {
            if (React.Children.count(props.children) !== 2) 
                Error("This component should have only two cards");
            React
                .Children
                .forEach(props.children, function (element) {
                    if (element.type.name !== "Card") 
                        Error("The children should be instance of Card")
                }, this);
        }

    }
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // this.Front = this.props.children[0]; this.Back = this.props.children[1];
    }

    Flip(front) {
        if (front) {
            this.refs.Front.Hide();
            this.refs.Back.Show();
        } else {
            this.refs.Back.Hide();
            this.refs.Front.Show();
        }
    }

    render() {
        const children = [
        <Card  {...this.props.children[1].props } ref="Back" key={guid()} > { this.props.children[1].props.children} </Card>
       ,<Card  {...this.props.children[0].props } ref="Front" key={guid()}> {this.props.children[0].props.children} </Card>
     ]

        return <div
            className="FlipCard"
            style={{

            width: this.props.Width,
            height: this.props.Height,
            position: "relative",
            overflow:this.props.InboxAnimation? "hidden":"",
            float:"left"
        }}
            onMouseOver={this
            .Flip
            .bind(this, true)}
            onMouseLeave={this
            .Flip
            .bind(this, false)}>

            {children}

        </div>;

    }


}
