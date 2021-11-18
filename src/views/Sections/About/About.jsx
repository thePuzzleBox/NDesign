import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Image from "content/assets/images/team/profile.jpg"
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./About.scss";

const About = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <div>
          <img src={Image} alt="me" width="50%" height="auto" className="center" />
        </div>
      </Row>
      <Row>
        <div>
          <Col lg={9} className="mx-auto text-left">
            <p className="large text-muted" margin-top="100px">{rootContent}</p>
          </Col>
        </div>
      </Row>
      <Row>
        {/* <Col lg={9} className="mx-auto text-left"> <p className="large text-muted">
          My Top 5 Favorites of All Time: <br />
          1. Life is Strange + Before the Storm <br />
          2. Detroit: Become Human <br />
          3. Telltale&apos;s The Walking Dead<br />
          4. The Last of Us Part I and II <br />
          5. Until Dawn</p>
        </Col>  */}
      </Row>
    </PageSection >
  );
};

About.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

About.defaultProps = {
  className: null,
  frontmatter: null,
};

export default About;
