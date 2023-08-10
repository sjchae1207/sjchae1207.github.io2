import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import TimeStampSection from '../components/timestamp-section';
import ProjectSection from '../components/project-section';
import PublicationSection from '../components/publication-section';

function PublicationPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { timestamps, projects, publications } = about;
  return (
    <Layout>
      <Seo title="SJ Chae - Publications" /> 
      <PublicationSection publication={publications} />
    </Layout>
  );
}

export default PublicationPage;

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
      description
      language
      author {
        name
        bio {
          role
          description
          thumbnail
        }
        social {
          github
          linkedIn
          email
        }
      }

      about {
        intros {
          description_before_link
          description_after_link
          link
          linkText
        }
        timestamps {
          date
          activity
          links {
            post
            github
            demo
            googlePlay
            appStore
          }
        }

        projects {
          title
          description
          techStack
          thumbnailUrl
          links {
            post
            github
            demo
            googlePlay
            appStore
          }
        }
      }
    }
  }
}
`;