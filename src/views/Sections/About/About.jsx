import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Image from "content/assets/images/team/profile.jpg";
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
          <Col lg={9} className="mx-auto text-left" style={{ marginTop: "35px"}}>
            <p className="large text-muted" margin-top="100px">{rootContent}</p>
          </Col>
        </div>
      </Row>
      <Col style={{ marginTop: "50px", marginLeft: "140px", marginBottom: "-100px" }}>
        <Row>
          <p className="text-center" style={{ textDecoration: "underline", fontWeight: "bold", marginTop: "100px" }}>Hey, That&apos;s Me! &#40;Features&#41;</p>
        </Row><ul>
          <Row><li>
            <a href="https://www.hrc.org/news/hrc-foundation-announces-class-of-2021-youth-ambassadors">HRC Foundation Announces Class of 2021 Youth Ambassadors</a><br />
          </li></Row>
          <Row><li>
            <a href="https://www.youtube.com/watch?v=EZIwxoe3dZw">HRC Youth Ambassador, Jalen Smith, Speaks at HRC&apos;s 8th Annual Time to THRIVE Conference!</a><br />
          </li></Row>
         <Row><li>
            <a href="https://uproxx.com/music/brockhampton-gay-clothing-zumiez/">Brockhampton Relaunches Their ‘Gay’ Clothing Collection At Zumiez</a><br />
          </li></Row>
          <Row><li>
            <a href="https://www.hrc.org/news/celebrating-apahm-with-hrc-youth-ambassadors">Celebrating APAHM with HRC Youth Ambassadors</a><br />
          </li></Row>
          <Row><li>
            <a href="https://www.glaad.org/amp/transmen-and-trans-masc-people-share-their-favorite-part-being-trans-offer-advice-youth-and-allies">Trans Men and Trans Masculine People Share Advice to Youth and Allies</a><br />
          </li></Row>
          <Row><li>
            <a href="https://www.hrc.org/magazine/2021-early-fall/online-communities-early-fall-2021">Ensuring Positive Digital Spaces For LGBTQ+ Youth – Equality Magazine Early Fall 2021</a><br />
          </li></Row>
          <Row><li>
            <a href="https://www.hrc.org/magazine/2021-winter/up-front">Up Front – Equality Magazine Winter 2021</a><br />
          </li></Row>
          </ul >
      </Col >
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
