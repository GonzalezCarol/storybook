import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonTeste = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${(props) => (props.primary ? "#B0A4EE" : "#333")};
  font-size: ${(props) => props.size};
`;

export const ButtonTeste1 = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  return (
    <ButtonTeste primary={primary} size={size}>
      {label}
    </ButtonTeste>
  );
};

ButtonTeste1.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ButtonTeste1.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
