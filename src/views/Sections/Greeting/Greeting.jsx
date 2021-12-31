import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Image from "content/assets/images/team/me.jpg"

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Greeting.scss";

const Greeting = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <div className="info-panel">
          <div className="info-heading">
            <h4 style={{ fontSize: "35pt" }}>Hi! I&apos;m Jalen.</h4>
          </div>
          <div className="info-body">
            <p className="text-muted">
              <br />Aspiring storyteller, queer rights activist, narrative game enthusiast,<br />
              and huge nerd to all-things Marvel!<br /><br />
              From overgrown world in The Last of Us to the diverse landscapes in League of Legends's Runterra, I enjoy entertainment that<br />captivates and only hope someday I&apos;ll be able to create the same.

            </p>
          </div>
        </div>
        <Col lg={6} className="text-center">
          <div>
            <img src={Image} alt="Me and Pierre" width="70%" height="auto" style={{ borderRadius: "100%" }} />
          </div>
        </Col>
      </Row>
    </PageSection >
  );
};

Greeting.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Greeting.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Greeting;
