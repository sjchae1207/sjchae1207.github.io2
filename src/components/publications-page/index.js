import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function PublicationsPage({ publications }) {
  if (!publications || publications.length < 2) return null;
  return (
    <div className="Publication-page">
      <SectionHeader title="Publications" />
      {publications.map((publication, index) =>
        index === 0 ? null : (
          <div className="publication" key={index}>
            <div className="head">
              {publication.title}&nbsp;&nbsp;
              {publication.links && (
                <IconButtonBar links={publication.links} style={{ color: '#a8a8a8', fontSize: 24 }} />
              )}
            </div>
            <div className="body">
              <Image className="thumbnail" src={publication.thumbnailUrl} />

              {publication.techStack && (
                <div className="tech-stack">
                  {publication.techStack.map((tech, index) => (
                    <div key={index} className="tech">
                      {tech}
                    </div>
                  ))}
                </div>
              )}
              <div className="description">{publication.description}</div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default PublicationsPage;
