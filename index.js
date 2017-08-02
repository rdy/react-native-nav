import React from 'react'
import PropTypes from 'prop-types';
import { View, Platform,} from 'react-native';
import { StatusBarEnhanced } from './components/StatusBarEnhanced'
export { NavGroup } from './components/NavGroup'
export { NavButton } from './components/NavButton'
export { NavButtonText } from './components/NavButtonText'
export { NavTitle } from './components/NavTitle'
import styles from './styles'

function NavigationBar({ style, children, noStatusBar, statusBar, platform = Platform.OS}) {
  let navBar = null
  if (platform === 'ios') {
    navBar = (
      <View style={[styles.navBar, styles.navBarIOS, style.navBar]}>
        {children}
      </View>
    )
  } else if (platform === 'android') {
    navBar = (
      <View style={[styles.navBar, styles.navBarAndroid, style.navBar]}>
        {children}
      </View>
    )
  }

  return (
    <View style={[styles.navBarContainer, style.navBarContainer]}>
      {!noStatusBar && <StatusBarEnhanced style={style.statusBar}
        statusBar={statusBar} platform={platform}
      />}
      {navBar}
    </View>
  )
}

NavigationBar.propTypes = {
  noStatusBar: PropTypes.bool,
  statusBar: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node,
  platform: PropTypes.string
}

NavigationBar.defaultProps = {
  style: {},
  statusBar: {}
}

export default NavigationBar
