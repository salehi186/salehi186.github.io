import React, {Component} from 'react';
import './SideBar.css';
import Profile from './Profile';
import 'animate.css';


class SideBar extends Component {
    render() {
        return (
            <div className="SideBar">
                <Profile/>
                <aside className="hs-menu" id="hs-menu">

                    <div className="profile_info">
                        <h1>AliAkbar Salehi</h1>
                        <h4>WEB DESIGNER</h4>
                        <h6>
                            <span className="fa fa-location-arrow"></span>&nbsp;&nbsp;&nbsp;IRAN , Isfahan</h6>
                    </div>
                    <div className="separator-aside"></div>
                    {/* menu */}
                    <nav>
                        <a href="#ProfileSection">
                            <span className="fa fa-home"></span>
                            <span className="menu_name">ABOUT</span>
                        </a>
                        <a href="#resumeSection">
                            <span className="fa fa-newspaper-o"></span>
                            <span className="menu_name">RESUME</span>
                        </a>
                        <a href="#TeamSection">
                            <span className="fa fa-users"></span>
                            <span className="menu_name">Friends\Colleague</span>
                        </a>
                        <a href="#SkillSection">
                            <span className="fa fa-diamond"></span>
                            <span className="menu_name">SKILLS</span>
                        </a>
                        <a href="#ContactSection">
                            <span className="fa fa-paper-plane"></span>
                            <span className="menu_name">CONTACT</span>
                        </a>
                    </nav>
                    {/* end menu*/}
                    {/* social icons */}
                    <div className="aside-footer">
                        <a href="https://www.facebook.com/aliakbar.salehi.56" target="_blank">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/pub/aliakbar-salehi/37/508/249"
                            target="_blank">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                    {/* end social icons */}
                </aside>

            </div>
        );
    }
}

export default SideBar;