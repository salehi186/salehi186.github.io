import React, {Component} from 'react';
import './Profile.css';

class Profile extends Component
{
    render() {
        return (
            <aside className="profile-card">
                <header>

                    <a href="http://tutsplus.com">
                        <img alt="" src="images/portrait.jpg"/>
                    </a>

                    <h1>AliAkbar Salehi</h1>

                    <h2>Web Developer</h2>
                </header>

                <div className="profile-bio">
                    <p>Welcome ...</p>
                    <p>I am a full stack web developer. I mainly work with HTML, CSS, JS, React and
                        Asp.net.
                        <br/>I also play well with Photoshop, After Effects and other cool stuff.</p>

                    <ul className="profile-social-links">

                        <li>
                            <a href="http://twitter.com/tutsplus">
                                <img alt=""
                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg"/>
                            </a>
                        </li>

                        <li>
                            <a href="http://envato.com">
                                <img alt=""
                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg"/>
                            </a>
                        </li>

                        <li>
                            <a href="http://codepen.io/tutsplus">
                                <img alt=""
                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg"/>
                            </a>
                        </li>

                    </ul>

                </div>

            </aside>
        );

    }

}

export default Profile;