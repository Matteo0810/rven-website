import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import Home from './Home';

export default class Layout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            responsive: false
        }

        this._toggleNavBar = this._toggleNavBar.bind(this)
    }

    _toggleNavBar() {
        this.setState({
            responsive: !this.state.responsive
        })
    }

    render() {
        return (
            <Router>
                <header>
                    <div className="responsive">
                        <div className="menu">
                            <div onClick={this._toggleNavBar} className="burger">
                                <div className="line" />
                                <div className="line" />
                                <div className="line" />
                            </div>
                            <nav className={this.state.responsive ? "activated" : null}>
                                <ul>
                                    <li>
                                        <Link 
                                            activeclassname="activated" 
                                            exact="true"
                                        to="/#">Accueil</Link>
                                    </li>
                                    <li>
                                        <Link 
                                            activeclassname="activated" 
                                        to="/#who">Qui sommes-nous ?</Link>
                                    </li>
                                    <li>
                                        <Link 
                                            activeclassname="activated" 
                                        to="/#solves">Solutions</Link>
                                    </li>
                                    <li>
                                        <Link
                                            activeclassname="activated" 
                                        to="/#proceedings">Démarche</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="responsive-image">
                            <Link to="/#">
                                <img src={require('../assets/images/logo/logo.svg').default} alt="logo" />
                            </Link>
                        </div>
                    </div>

                    <Link to="/#">
                        <img src={require('../assets/images/logo/logo.svg').default} alt="logo" />
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Link 
                                    activeclassname="activated" 
                                    exact="true"
                                to="/#">Accueil</Link>
                            </li>
                            <li>
                                <Link 
                                    activeclassname="activated" 
                                to="/#who">Qui sommes-nous ?</Link>
                            </li>
                            <li>
                                <Link 
                                    activeclassname="activated" 
                                to="/#solves">Solutions</Link>
                            </li>
                            <li>
                                <Link
                                    activeclassname="activated" 
                                to="/#proceedings">Démarche</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="right">
                        <Link to="/#contact-us">Contactez-nous</Link>
                    </div>
                </header>

                <main>
                    <Route render={({ location }) => (
                        <Switch location={location}>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    )} />
                </main>

                <footer>
                    <div id="contact-us" className="contact-us">
                        <h1>Contactez-nous</h1>
                        <div className="middle">
                            <div className="line" />    
                        </div>

                        <div className="infos">
                            <p>contact@rven.fr</p>
                            <p className="phone">
                                <span className="country">+33</span>681435058
                            </p>
                        </div>
                    </div>

                    <div className="wrapper">
                        <div className="left">
                            <img src={require('../assets/images/logo/logo_white.svg').default} alt="Logo white" />
                            <p></p>
                        </div>
                        <div className="middle">
                            <div className="left">
                                <h4>Où nous trouver ?</h4>
                                <p>16 allée Eugène Belgrand</p>
                            </div>
                            <div className="right">
                                <h4>Liens utiles</h4>
                                <Link to="/">Mentions légales</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </Router>
        )
    }

}