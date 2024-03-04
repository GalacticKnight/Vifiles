import React from 'react';
const fund = require('../images/TrustFund.jpg')
const BCCC = require('../images/BCCC.jpg')
const Esports = require('../images/Esports.jpg');
const OmniEvents = require('../images/OmniEvents.jpg');
const CareGiver = require('../images/CareGiver.jpg');
const websiteIcon = require('../images/website.png');
const githubIcon = require('../images/github.png');


const Freelance = () => {
    return (
        <section className='darkSection'>
            <div className='freelanceBox'>
                <h3 className='siteTitles siteHeadings '>Freelance Projects</h3>
                <div className='freelancefix'>
                <div className='freelanceProjects'>
                    <div className='freelanceCard'>
                        <img src={BCCC}  alt="website image" />
                        <div>
                            <h6>Brooklyn Community Christian Church</h6>
                            <span className='wordpress'>HTML / CSS / JavaScript </span>
                            <div className='projectIcons'>
                                <img src={websiteIcon} onClick={() => window.open('http://bccc-ny.org/')} alt="web icon" />
                            </div>
                        </div>
                    </div>
                    <div className='freelanceCard'>
                        <img src={fund}  alt="website image" />
                        <div>
                            <h6>Trust Fund Registry</h6>
                            <span className='wordpress'>Wordpress / Figma / Flask / Python</span>
                            <div className='projectIcons'>
                                <img src={websiteIcon} onClick={() => window.open('https://trustfundregistry.com/')} alt="web icon" />
                            </div>
                        </div>
                    </div>
                
                    <div className='freelanceCard'>
                        <img src={Esports}  alt="website image" />
                        <div>
                            <h6>Brooklyn College Esports Website</h6>
                            <span className='wordpress'>HTML / CSS / JavaScript/ React.js </span>
                            <div className='projectIcons'>
                                <img src={githubIcon} onClick={() => window.open('https://github.com/GalacticKnight/Deploy-React-Esports-Site')} alt="web icon" />
                                <img src={websiteIcon} onClick={() => window.open('https://cunybcesports.onrender.com/')} alt="web icon" />
                            </div>
                        </div>
                    </div>
                    <div className='freelanceCard'>
                        <img src={OmniEvents}  alt="website image" />
                        <div>
                            <h6>OmniEvents Website</h6>
                            <span className='wordpress'>TypeScript / React.js / Node.js / Express/ MongoDB</span>
                            <div className='projectIcons'>
                                <img src={githubIcon} onClick={() => window.open('https://github.com/chingu-voyages/v47-tier3-team-33')} alt="web icon" />
                                <img src={websiteIcon} onClick={() => window.open('https://omni-events.vercel.app/')} alt="web icon" />
                            </div>
                        </div>
                    </div>
                    <div className='freelanceCard'>
                        <img src={CareGiver}  alt="website image" />
                        <div>
                            <h6>OmniEvents Website</h6>
                            <span className='wordpress'>JavaScript / React.js / Node.js / Express/ MongoDB</span>
                            <div className='projectIcons'>
                                <img src={githubIcon} onClick={() => window.open('https://github.com/chingu-voyages/v45-tier3-team-48')} alt="web icon" />
                                <img src={websiteIcon} onClick={() => window.open('https://caregiver-app.onrender.com/')} alt="web icon" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='freelanceProjects'>
                    
                </div>
                </div>
            </div>
        </section>
    );
}

export default Freelance;
