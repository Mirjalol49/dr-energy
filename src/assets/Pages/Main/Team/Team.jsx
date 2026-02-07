import React from 'react';
import './Team.css';
import { useLanguage } from '../../../../context/LanguageContext';

// Import images from Presentation folder
import xurshid from '../Presentation/collegues/Xurshid_Misliddinov.png';
import yunus from '../Presentation/collegues/Kasimov_Yunus.jpg';
import umid from '../Presentation/collegues/umid_mirzayev.png';
import bobur from '../Presentation/collegues/bobur_xalikov.jpg';
import farxod from '../Presentation/collegues/farxod_abduraximov.jpg';
import jabir from '../Presentation/collegues/jabir_xalikov.jpg';
import sevara from '../Presentation/collegues/sevara_tamilova.png';

const Team = () => {
    const { t } = useLanguage();

    const teamMembers = [
        { id: '1', img: xurshid },
        { id: '2', img: yunus },
        { id: '3', img: umid },
        { id: '4', img: bobur },
        { id: '5', img: farxod },
        { id: '6', img: jabir },
        { id: '7', img: sevara }
    ];

    return (
        <section className="team-section" id="team">
            <div className="container">
                <h2 className="team-title">{t('presentation.slides.41.title')}</h2>
                <div className="team-grid">
                    {teamMembers.map((member, idx) => {
                        const memberData = t(`presentation.slides.41.members.${member.id}`);
                        return (
                            <div key={idx} className="team-member-card">
                                <div className="team-member-img-wrapper">
                                    <img
                                        src={member.img}
                                        alt={memberData.name}
                                        className="team-member-img"
                                    />
                                </div>
                                <div className="team-member-info">
                                    <h3 className="team-member-name">
                                        {memberData.name}
                                    </h3>
                                    <p className="team-member-role">
                                        {memberData.role}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Team;
