import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
/* delete this on fix */ import Image from "content/assets/images/logos/phone.png";
/* delete this on fix */ import Image2 from "content/assets/images/logos/email.png";
import Icon from "components/Icon";
import PageSection from "components/PageSection";

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, telephone, email } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <p className="text-muted mb-5">{subheader}</p>
        </Col>
      </Row>
      <Row style={{ marginTop: "80px", marginBottom: "20px" }}>
        <Col lg={4} className="ml-auto text-center">
        <img src={Image} alt="Phone" width="20%" height="auto"/>
          {/* Delete above img then re-add on fix -> <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" /> */}
          <a className="d-block" href={`tel:${telephone}`}>
            {telephone}
          </a>
        </Col>
        <Col lg={4} className="mr-auto text-center">
        <img src={Image2} alt="Email" width="20%" height="auto"/>
         {/*  Delete above img then re-add on fix -> <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" /> */}
          <a className="d-block" href={`mailto:${email}`}>
            {email}
          </a>
        </Col>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
