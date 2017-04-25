import React, {Component} from 'react';
import './Toolbar.css';
import Marquee from './Marquee/Marquee'

class Toolbar extends Component {
    render() {
        return <nav className="Toolbar">
            <ul>
                <li className="ToolbarItem button">
                    <a className=" fa fa-home"></a>
                </li>
                <li className="ToolbarItem button">
                    <a className=" fa fa-chevron-left"></a>
                </li>

                <li className="ToolbarItem button">
                    <a className="fa fa-chevron-right"></a>
                </li>

                <li >
                    <a className=" spliter"></a>
                </li>

            </ul>
            <span
                className=" fa fa-line-chart"
                style={{
                color: "blue",
                padding: "10px",
                fontSize: "30px"
            }}></span>
            RECENT ACTIVITY:
            <Marquee>
                <span > salam  divuneh...</span>
                <span > this is a test Text... </span>
                <span > How are you?....</span>

            </Marquee>

        </nav>;

    }

}

export default Toolbar;