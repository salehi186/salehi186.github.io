import React, {Component} from 'react';
import './Section.css';

class Section extends Component {

    render() {
        return (
            <div className="Section" id={this.props.Id}>
                
                {this.props.Name || "test"}
                {this.props.children}
                </div>
        );
    }
    // constructor(props) {
    //     super(props);
    // }

    // getDefaultProps() {
    //     return {
    //         Id: "fff" + Math.random() * 100
    //     };
    // }

}

export default Section;