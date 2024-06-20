import React from "react";
import { ConfigProvider } from "antd";
import AntButton from "antd/lib/button";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ style, children }: { style: "primary" | "secondary" | "tertiary"; children: React.ReactNode }) => {
	return <div className={`${styles[style]} ${styles.Button}`}>
    <ConfigProvider theme={{ token: { colorPrimary: "#FBFF30" } }}>
      <AntButton type="default">
        {children}
      </AntButton>
    </ConfigProvider>
  </div>;
};

Button.propTypes = {
	style: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
	children: PropTypes.node.isRequired,
};

export default Button;
