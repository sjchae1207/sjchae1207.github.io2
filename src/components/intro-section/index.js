import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';
import './style.scss';


function IntroSection({intros}) {
  if (!intros || intros.length < 2) return null;
  return (
    <div className="intro-section">
      {intros.map((intro, index) =>
        index === 0 ? null : (
          <div className="intro" key={index}>
              <div className="description">
                {intro.description_before_link}{' '}
                <a href={intro.link} target="_blank" rel="noopener noreferrer">
                  {intro.linkText}
                </a>
                {intro.description_after_link}{' '}
              </div>
          </div>
        ),
      )}
    </div>
  );
}

export default IntroSection;
