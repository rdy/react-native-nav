import React from 'react'
import PropTypes from 'prop-types';
import { Platform, TouchableOpacity, View, ViewPropTypes } from 'react-native'
import styles from '../styles'

function NavButton({ style, onPress, children, disabled, disabledStyle, accessibilityLabel, platform = Platform.OS }) {
  let navButtonStyles = []
  if (platform === 'ios') {
    navButtonStyles = [styles.navBarButtonIOS]
  } else if (platform === 'android') {
    navButtonStyles = [styles.navBarButtonAndroid]
  }
  if (disabled) {
    navButtonStyles.push(disabledStyle)
  } else {
    navButtonStyles.push(style)
  }

  const getTouchable = () => {
    if (disabled) {
      return (
        <TouchableOpacity accessibilityLabel={accessibilityLabel} accessibilityTraits={['button', 'disabled']}>
          <View style={navButtonStyles}>
            {children}
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity accessibilityLabel={accessibilityLabel} onPress={onPress} accessibilityTraits="button">
        <View style={navButtonStyles}>
          {children}
        </View>
      </TouchableOpacity>
    )
  }

  return getTouchable()
}

NavButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
  platform: PropTypes.string
}

NavButton.defaultProps = {
  style: {},
  disabledStyle: {},
  disabled: false,
}

export { NavButton }
