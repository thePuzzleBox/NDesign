import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, teamMember } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <div className="info-panel">
          <div className="info-heading">
            <h4>Hi! I&apos;m Jalen.</h4>
          </div>
          <div className="info-body">
            <p className="text-muted">
              Aspiring storyteller, queer rights activist, narrative game enthusiast,<br />
              and huge nerd to all-things Marvel!
            </p>
          </div>
        </div>
        <div>
          {teamMember.map(({ header, ...tmProps }) => (
            <Col sm={10} key={header} width="500%" height="auto">
              <TeamMember header={header} {...tmProps} />
            </Col>
          ))}
        </div>
      </Row>
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;
