import React from 'react';
import colors from './colors.json';

function ProjectCard({title, description, url, image, languages, responsive}) {
    const processLanguages = (languages) => {
        return languages.map(lang => {
            return (<div className="projects__card__languages__lang">
                <span className="projects__card__languages__dot" style={{"background": colors[lang].color}}/>
                <span className="projects__card__languages__title">
                    {lang}
                </span>
            </div>)
        })
    };
    return (<div className="projects__card"
                 onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}>
        <div className="projects__card__title">{title}</div>
        <div className="projects__card__body">
            <div className="projects__card__body__main">
                <p className="projects__card__description">
                    {description}
                </p>
                <div className="projects__card__languages">
                    {processLanguages(languages)}
                </div>
            </div>
            {!responsive &&
                <div className="projects__card__image">
                    <img src={image}/>
                </div>
            }
        </div>
    </div>);
}

export default ProjectCard;
