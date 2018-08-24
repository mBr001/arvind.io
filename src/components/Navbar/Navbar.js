import React from 'react';
import { TimelineLite, Power2 } from 'gsap';

import ParticlesConfig from './particles.json';
import Sidebar from '../Sidebar';
import './styles.scss';

class Navbar extends React.Component {
    componentDidMount() {
        // Issue with gatsby not understanding the 'window' object while building,
        // hence, the wrapper and dynamic import
        if (typeof window !== 'undefined') {
            require('particles.js');
            window.particlesJS('navbar', ParticlesConfig);
            if (this.props.firstLoad) {
                const sitename = document.getElementById('sitename');
                const fullname = document.getElementById('fullname');
                const interimOne = document.getElementById('interim-one');
                const interimTwo = document.getElementById('interim-two');
                const interimThree = document.getElementById('interim-three');
                const navbar = document.getElementById('navbar');
                const animationSpeed = 0.25; // Change this to control how fast the first page load animation goes
                new TimelineLite()
                    .to(sitename, animationSpeed, {
                        css: { width: '0' },
                        delay: 1,
                        onComplete: () => {
                            sitename.style.display = 'none';
                        },
                        ease: Power2.easeInOut,
                    })
                    .to(interimOne, animationSpeed, {
                        css: { width: '3em' },
                        onStart: () => {
                            interimOne.style.display = 'inline-block';
                        },
                        ease: Power2.easeInOut,
                    })
                    .to(interimOne, animationSpeed, {
                        css: { width: '0' },
                        delay: animationSpeed / 2,
                        onComplete: () => {
                            interimOne.style.display = 'none';
                        },
                        ease: Power2.easeInOut,
                    })
                    .to(interimTwo, animationSpeed, {
                        css: { width: '3.5em' },
                        onStart: () => {
                            interimTwo.style.display = 'inline-block';
                        },
                        ease: Power2.easeInOut,
                    })
                    .to(interimTwo, animationSpeed, {
                        css: { width: '0' },
                        delay: animationSpeed / 2,
                        onComplete: () => {
                            interimTwo.style.display = 'none';
                        },
                        ease: Power2.easeInOut,
                    })
                    .to(interimThree, animationSpeed, {
                        css: { width: '4.5em' },
                        onStart: () => {
                            interimThree.style.display = 'inline-block';
                        },
                        ease: Power2.easeInOut,
                    })
                    .to(interimThree, animationSpeed, {
                        css: { width: '0' },
                        delay: animationSpeed / 2,
                        onComplete: () => {
                            interimThree.style.display = 'none';
                        },
                        ease: Power2.easeInOut,
                    })
                    .to(fullname, animationSpeed, {
                        css: { width: '6em' },
                        onStart: () => {
                            fullname.style.display = 'inline-block';
                        },
                        ease: Power2.easeInOut,
                    })
                    .to(navbar, animationSpeed * 2, {
                        css: { height: '1.23em', paddingTop: '0.25em' },
                        onComplete: () => {
                            this.props.unsetFirstLoad();
                            window.dispatchEvent(new Event('resize'));
                        },
                        ease: Power2.easeInOut,
                    });
            }
        }
    }

    render() {
        return (
            <div
                id="navbar"
                className={this.props.firstLoad ? 'firstload' : ''}
            >
                <Sidebar />
                <div id="fullname">
                    <a href="https://arvind.io" className="naturalLink">
                        <span id="firstname">arvind </span>
                        <span id="lastname">kumar</span>
                    </a>
                </div>
                <div id="interim-three">
                    <span id="lastname">developer</span>
                </div>
                <div id="interim-two">
                    <span id="firstname">hacker</span>
                </div>
                <div id="interim-one">
                    <span id="lastname">coder</span>
                </div>
                <div id="sitename">
                    <span id="firstname">arvind</span>
                    <span id="lastname">&#8202;.&#8202;io</span>
                </div>
                <div id="toggleTheme">
                    <i
                        className={[
                            'fa fa-moon-o',
                            this.props.theme == 'dark' ? 'hide' : '',
                        ]
                            .join(' ')
                            .trim()}
                        aria-hidden="true"
                        onClick={this.props.toggleTheme.bind(this, 'dark')}
                    />
                    <i
                        className={[
                            'fa fa-sun-o',
                            this.props.theme == 'light' ? 'hide' : '',
                        ]
                            .join(' ')
                            .trim()}
                        aria-hidden="true"
                        onClick={this.props.toggleTheme.bind(this, 'light')}
                    />
                </div>
            </div>
        );
    }
}

export default Navbar;