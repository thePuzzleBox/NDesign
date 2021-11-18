import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const YouTube = ({ userName }) => (
    <CircleIcon href={`https://youtube.com/${userName}`} iconName="YouTubeIcon" />
);

YouTube.propTypes = {
    userName: PropTypes.string.isRequired,
};

export default YouTube;
