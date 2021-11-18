import React, { Component } from 'react';

import TopLayerSvg from '../assets/images/layers/topLayerSvg';

import GraphicDesignIcon from '../assets/images/icons/GraphicDesignIcon';
import RefSeoIcon from '../assets/images/icons/RefSeoIcon';
import UxUiDesign from '../assets/images/icons/UxUiDesign';
import WebDev from '../assets/images/icons/WebDev';

import videoIntro from '../assets/animations/intro.mov'

export default class Home extends Component {

    componentDidMount() {
        this._parallaxAnimation = this._parallaxAnimation.bind(this);

        window.addEventListener('scroll', this._parallaxAnimation)

        const htmlNode = document.querySelector('html')
        htmlNode.style.overflowY = "hidden"
        htmlNode.scrollTo(0, 0)
    
        setTimeout(() => {
            htmlNode.style.overflowY = "visible"
            document.querySelector('.intro').style.top = "-150%"
        }, 4e3)
    }

    async _parallaxAnimation() {
        const { scrollY } = window,
            MIN_VEL = 0.05, MID_VEL = 0.15, MAX_VEL = 0.30

        // ELEMENTS
        let groupe36 = document.getElementById('prefix__Groupe_36'),
            groupe33 = document.getElementById('prefix__Groupe_33'),
            groupe14 = document.getElementById('prefix__Groupe_14'),
            groupe18 = document.getElementById('prefix__Groupe_18'),
            groupe19 = document.getElementById('prefix__Groupe_19'),
            groupe20 = document.getElementById('prefix__Groupe_20'),
            groupe38 = document.getElementById('prefix__Groupe_38'),
            groupe25 = document.getElementById('prefix__Groupe_25'),
            trace49 = document.getElementById("prefix__Trace_49"),
            line6 = document.getElementById('prefix__Ligne_6'),
            line7 = document.getElementById('prefix__Ligne_7'),
            line5 = document.getElementById('prefix__Ligne_5'),
            elipse17 = document.getElementById('prefix__Ellipse_17');

        // ANIMATIONS
        line5.style.transform = `translate(${821.574+(scrollY*MIN_VEL)}px, ${501.134+(scrollY*MIN_VEL)}px)`
        line7.style.transform = `translate(${845.616+(scrollY*MIN_VEL)}px, ${554.478+(scrollY*MIN_VEL)}px)`
        line6.style.transform = `translate(968.082px, ${476.34+(scrollY*-MID_VEL)}px)`
        groupe25.style.transform = `translate(-32.086px, ${552.895+(scrollY*MIN_VEL)}px)`
        groupe38.style.transform = `translateY(${scrollY*-MID_VEL}px)`
        groupe14.style.transform = `translate(${339.117+(scrollY*MID_VEL)}px, 92.764px)`
        groupe20.style.transform = `translate(${404.08+(scrollY*-MID_VEL)}px, ${154.913+(scrollY*-MID_VEL)}px)`
        groupe19.style.transform = `translate(${432.533+(scrollY*MIN_VEL)}px, ${520.515+(scrollY*MIN_VEL)}px)`
        groupe33.style.transform = `translate(${228.508+(scrollY*MIN_VEL)}px, ${400.474+(scrollY*MIN_VEL)}px)`
        groupe18.style.transform = `translate(${203.463+(scrollY*MID_VEL)}px, ${225.791+(scrollY*MID_VEL)}px)`
        groupe36.style.transform = `translateY(${scrollY*-MAX_VEL}px)`
        trace49.style.transform = `translate(-300.513px, ${-100.86+(scrollY*-MAX_VEL)}px)`
        elipse17.style.transform = `translate(178.883px, ${592.754+(scrollY*-MAX_VEL)}px)`
    }

    _openBrand(step) {
        document.querySelector(`[step="${step}"]>.brand`).classList.add('activate')
    }

    _closeBrand(step) {
        const brand = document.querySelector(`[step="${step}"]>.brand`)
        brand.style.animation = ".3s brand-disapear alternate";
        setTimeout(() => {
            brand.setAttribute('style', brand.getAttribute('style').replace(/animation: (.*)/g, ''))
            brand.classList.remove('activate')
        }, 280)
    }
      
    render() {

        return (
            <div>
                <div className="intro">
                    <video src={videoIntro} playsInline autoPlay muted />
                </div>
                <div id="top" className="boxes">
                    <div className="top-box" />
                    <div className="middle-box">
                        <div className="left">
                            <h1>Vous avez un projet,</h1>
                            <h1>Rven le réalise</h1>
                            <p>Offrez à votre entreprise une <span>identité numérique</span></p>
                        </div>
                        <div className="layer">
                            <TopLayerSvg />
                        </div>
                    </div>
                    <div className="bottom-box"></div>
                </div>
                <div className="who">
                    <h1>Qui sommes-nous ?</h1>
                    <p id="solves">
                        Une équipe jeune et dynamique qui met à votre disposition toute son expertise pour
                        concevoir des solutions technologiques sur mesure.
                        Nous vous accompagnons dans la création de sites internet : design UX et UI, design
                        graphique, développement web et mobile, marketing digital, référencement SEO.
                        Notre agence adopte une politique de travail basée sur la conception de solutions
                        efficaces, économiques et appropriées aux activités de nos clients.
                        Notre objectif de mener à bien votre projet de A à Z est possible, grâce à une constante
                        communication entre nos différentes équipes.
                        Chez RVEN, notre procédé empirique nous permet de déterminer les tarifs appliqués à
                        chaque projet ainsi que leur délai de réalisation.
                    </p>
                </div>
                <div className="solves">
                    <h1>Les solutions</h1>
                    <div className="plates">
                        <div id="plate-1" className="plate">
                            <UxUiDesign />
                            <h1>ux et ui design</h1>
                        </div>
                        <div id="plate-2" className="plate middle">
                            <GraphicDesignIcon />
                            <h1>design graphique</h1>
                        </div>
                        <div id="plate-3" className="plate">
                            <WebDev />
                            <h1>dev web et mobile</h1>
                        </div>
                        <div id="plate-4" className="plate">
                            <RefSeoIcon />
                            <h1>ref seo</h1>
                        </div>
                    </div>
                </div>
                <div id="proceedings" className="steps">
                    <h1>notre démarche</h1>

                    <div className="middle">
                        <img className="steps-background" src={require('../assets/images/layers/pathLayer.svg').default} alt="path layer" />
                        <div className="steps-responsive" />
                        <div className="eclipse" />

                        <div className="step" step="1">
                            <div
                                onMouseEnter={() => this._openBrand("1")} 
                                onMouseLeave={() => this._closeBrand("1")}
                                className="case"
                            >
                                <div className="filter" />
                                <div className="middle">
                                    <h1>Identification</h1>
                                    <h1>du besoin</h1>
                                </div>
                            </div>
                            <div className="brand">
                                <p>
                                    Notre agence vous accompagnera tout le long de votre
                                    processus de détermination d’objectifs pour l’identité numérique de votre entreprise et
                                    oeuvrera pour trouver une solution répondant à vos besoins . Nous gardons l’esprit ouvert
                                    pour pouvoir répondre au mieux à vos attentes.
                                </p>
                            </div>
                        </div>

                        <div className="step" step="2">
                            <div 
                                onMouseEnter={() => this._openBrand("2")} 
                                onMouseLeave={() => this._closeBrand("2")}
                                className="case"
                            >
                                <div className="filter" />
                                <div className="middle">
                                    <h1>Production</h1>
                                </div>
                            </div>
                            <div className="brand">
                                <p> 
                                    Nous définissons avec vous l’expérience utilisateur de vos produits, leur
                                    ergonomie et réalisons vos interfaces grâce aux nombreux outils numériques maîtrisés
                                    par nos équipes, allant de la production ou de la refonte de votre site et de son design,
                                    jusqu’à son référencement.
                                </p>
                            </div>
                        </div>
                        
                        <div className="step" step="3">
                            <div 
                                onMouseEnter={() => this._openBrand("3")} 
                                onMouseLeave={() => this._closeBrand("3")}
                                className="case"
                            >
                                <div className="filter" />
                                <div className="middle">
                                    <h1>Déploiement de</h1>
                                    <h1>la solution</h1>
                                </div>
                            </div>
                            <div className="brand">
                                <p>
                                    Afin d’augmenter la visibilité de votre site en ligne, notre
                                    équipe développement web se charge du référencement (SIO) du site internet, pour
                                    ensuite passer le relais à nos responsables marketing digital, qui sont également chargés
                                    de la réalisation des supports audiovisuels (prestations photo et video corporate),
                                    toujours dans l’optique d’augmenter la visibilité de vos activités. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}