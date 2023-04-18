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
            <p className="text-muted" style={{ marginRight: "0px" }}>
              <br />Storyteller, queer rights activist, narrative enthusiast,<br />
              and huge nerd to all-things Marvel!<br /><br />
              Welcome to my humble abode. Here, you&apos;ll get to learn a thing or two<br />
              about me, my interests, and what I&apos;m currently working on at the<br />
              moment. Hopefully you&apos;ll find a good read (or even a laugh) here.<br /><br />
              So from the overgrown, infected world of The Last of Us to the vast<br />
              and elaborate universe(s) shown in A24's Everything Everywhere All At Once,
              I enjoy the experience that comes with immersive storytelling, and only
              hope someday I can tell powerful stories of my own.<br />

            </p>
          </div>
        </div>
        <Col lg={6} className="text-center">
          <div>
            <img src={Image} alt="Me and Pierre" width="70%" height="auto" style={{ borderRadius: "100%", marginTop: "25px" }} />
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
