import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import LoadingDots from "react-native-loading-dots";

const Loading = (props) => {
  const { custom, color, key } = props;
  let style = { paddingTop: 6 };

  if (custom) {
    style = {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    };
  }

  return (
    <View style={style}>
      <LoadingDots size={3} />
    </View>
  );
};

Loading.propTypes = {
  color: PropTypes.string.isRequired,
  custom: PropTypes.bool,
};

Loading.defaultProps = {
  custom: false,
};

export default Loading;
