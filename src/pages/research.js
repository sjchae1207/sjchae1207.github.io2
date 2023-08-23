import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import TimeStampSection from '../components/timestamp-section';
import PublicationSection from '../components/publication-section';
import ProjectSection from '../components/project-section';

function ResearchPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { timestamps, projects, publications } = about;
  return (
    <Layout>
      <Seo title="SJ Chae - Research" /> 
      <PublicationSection publications={publications} />
      <ProjectSection projects={projects} />
    </Layout>
  );
}

export default ResearchPage;

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
        publications {
          date
          title
          authors
          techStack
          thumbnailUrl
          links {
            post
            github
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