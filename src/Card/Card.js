import React, {Component} from 'react';
import 'animate.css';

export default class Card extends Component {

    static defaultProps = {
        ShowAnimation: "flipInX",
        HideAnimation: "flipOutX"
    }
    animationEnd(display) {
       
        //this.Container.style.display = display;
    }



    componentDidMount() {
        //this.originalDisplay = this.Container.style.display || "block";
        //this.Container.Card=this;
        this.Container
            .addEventListener("animationend", this.animationEnd.bind(this, this.DisplayMode))
    }
    Hide() {
       // this.DisplayMode = "none";
        this.Container.classList.remove( this.props.HideAnimation, this.props.ShowAnimation);
        this.Container.classList.add("animated", this.props.HideAnimation);

    }
    Show() {
        //this.DisplayMode = this.originalDisplay;
         this.Container.classList.remove( this.props.HideAnimation, this.props.ShowAnimation);
         this.Container.classList.add("animated", this.props.ShowAnimation);
    }

    render() {
        return <div  className={"Card " + (this.props.baseClass || "")}
            ref={(p) => {
            this.Container = p;
           
           if(this.props.CloseButton)
                document.querySelector(this.props.CloseButton).addEventListener("click",this.Hide.bind(this));
           if(this.props.OpenButton)
                document.querySelector(this.props.OpenButton).addEventListener("click",this.Show.bind(this));
        }}
            style={{
            width: this.props.Width,
            height: this.props.Height
        }}>
            {this.props.children}
        </div>;
    }
}