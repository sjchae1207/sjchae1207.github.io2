import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';
import './style.scss';

function IntroSection({ intros }) {
  if (!intros || intros.length < 2) return null;
  return (
    <div className="intro-section">
      <div className="body">
        asdf
      </div>
    </div>
  );
}

export default IntroSection;
