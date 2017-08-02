import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from '../styles';

function NavButtonText({ style, children, ...props }) {
  return (
    <Text style={[styles.navBarButtonText, style]} {...props}>
      {children}
    </Text>
  )
}

NavButtonText.propTypes = {
  ...Text.PropTypes,
  style: Text.propTypes.style,
  children: PropTypes.node,
}

NavButtonText.defaultProps = {
  style: {},
}

export { NavButtonText }
