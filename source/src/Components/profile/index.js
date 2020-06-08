import React, {Component} from 'react';
import './index.css';
import profileBg from './profileBG.jpg';

export class Profile extends Component
{
    render() {
        return (
            <aside
                className="profile-card"
                style={{
                background: `url(${profileBg})`
            }}>
                <header>

                    <a>
                        <img alt="" src="images/portrait.jpg"/>
                    </a>

                    <h1>AliAkbar Salehi</h1>

                    <h2>Software Developer</h2>
                </header>

                <div className="profile-bio">
                    <p>Welcome ...</p>
                    <p>I am a full stack Software Developer. I mainly work with HTML, CSS, JS, React and
                        NodeJS
                        <br/>I also play well with Photoshop and other cool stuff.</p>

                    <ul className="profile-social-links">

                        <li>
                            <a href="http://codepen.io/salehi186/" target="_blank">
                                <span className="fa fa-codepen"></span>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/pub/aliakbar-salehi/37/508/249" target="_blank">
                                <span className="fa fa-linkedin-square"></span>
                            </a>
                        </li>

                    </ul>

                </div>

            </aside>
        );

    }

}

