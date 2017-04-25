import React, {Component} from 'react';
import './SectionWrapper.css';

class SectionWrapper extends Component {
    render() {

        let myWidth = (React.Children.count(this.props.children) * 500 ) + "px";

        return <div className='SectionWrapper'>
            <div style={{
                width: myWidth
            }}>
                {this.props.children}
            </div>
        </div>;
    }
}

export default SectionWrapper;