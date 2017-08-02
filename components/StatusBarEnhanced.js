import React from 'react'
import PropTypes from 'prop-types';
import { Platform, View, StatusBar, ViewPropTypes } from 'react-native'
import styles from '../styles'

function StatusBarEnhanced({ statusBar, style, platform = Platform.OS }) {
  let statusBarConfig = {}
  if (platform === 'ios') {
    statusBarConfig = {
      animated: true,
      hidden: false,
      barStyle: 'default',
      networkActivityIndicatorVisible: false,
      showHideTransition: 'fade',
    }
  } else if (platform === 'android') {
    statusBarConfig = {
      animated: true,
      hidden: false,
      showHideTransition: 'fade',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      translucent: true,
    }
  }
  const config = Object.assign({}, statusBarConfig, statusBar)

  let statusBarStyles = []
  if (platform === 'ios') {
    statusBarStyles = [
      styles.statusBarIOS,
      style,
    ]
  } else if (platform === 'android') {
    statusBarStyles = [
      styles.statusBarAndroid,
      style,
    ]
  }

  return (
    <View style={statusBarStyles}>
      <StatusBar {...config} />
    </View>
  )
}

StatusBarEnhanced.propTypes = {
  statusBar: PropTypes.object,
  style: ViewPropTypes.style,
  platform: PropTypes.string
}

StatusBarEnhanced.defaultProps = {
  style: {},
  statusBar: {},
}

export { StatusBarEnhanced }
