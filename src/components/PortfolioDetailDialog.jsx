import React from "react";
import PropTypes from "prop-types";

// import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
// import sample from 'content/assets/images/portfolio/docs/pickle rick.pdf'
import { Modal, Button } from "react-bootstrap";

import Image from "components/Image";
// import Icon from "./Icon"; use it for a Read More arrow -> 

const PortfolioDetailDialog = ({
  onHide,
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  docName,
  extraInfo,
  ...restProps
}) => {
  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Title id="contained-modal-title-vcenter" style={{ textAlign: "center", marginTop: "40px", marginBottom: "15px" }}>{header}</Modal.Title>
      <Modal.Body style={{ marginLeft: "50px", marginRight: "50px" }}>

        {/* <p className="item-intro text-muted">{subheader}</p> */}
        <Image style={{ marginBottom: "40px" }}
          className="img-fluid d-block"
          fileName={imageFileName}
          alt={imageAlt || header || subheader}
        />


        {extraInfo}
        <p className="text-muted" style={{ fontSize: "12pt", fontFamily: "arial", textAlign: "left", whiteSpace: 'break-spaces', letterSpacing: "3px", marginTop: "50px" }}>{content}</p>


      </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
          <Button variant="primary" onClick={onHide}>
            &nbsp; View More | COMING SOON
          </Button>
        </div>
      </Modal.Footer>
    </Modal >
  );
};

PortfolioDetailDialog.propTypes = {
  onHide: PropTypes.func,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  docName: PropTypes.string,
  extraInfo: PropTypes.any,
};

PortfolioDetailDialog.defaultProps = {
  onHide: null,
  imageFileName: "",
  imageAlt: null,
  header: "",
  subheader: "",
  content: "",
  docName: "",
  extraInfo: null,
};

export default PortfolioDetailDialog;
