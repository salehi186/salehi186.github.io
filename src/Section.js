import React, {Component} from 'react';
import './Section.css';

class Section extends Component {

    render() {
        return (
            <div className="Section" id={this.props.Id}>
                <span className={"sectionIcon fa "+ (this.props.icon||"fa-address-card-o")}> </span>
                <h2 className="Title">
                    {this.props.Name || "test"}
                </h2>
                {this.props.children}
            </div>
        );
    }
}

export default Section;