import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Twitch = ({ userName }) => (
    <CircleIcon href={`https://twitch.tv/${userName}`} iconName="TwitchIcon" />
);

Twitch.propTypes = {
    userName: PropTypes.string.isRequired,
};

export default Twitch;
