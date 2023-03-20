import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';
import './style.scss';

function IntroSection({intros}) {
  if (!intros) return null; 
  return (
    <div className="intro-section">
    {intros.map((intro, index) =>
      index === 0 ? null : (
        <div className="intro" key={index}>
            <div className="description">{intro.description}</div>
        </div>
      ),
    )}
    </div>
  );
}

export default IntroSection;
