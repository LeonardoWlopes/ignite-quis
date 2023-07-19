import { StyleSheet } from 'react-native'

import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  history: {
    padding: 32,
    flexGrow: 1,
  },
  SwipeableContainer: {
    width: '100%',
    height: 90,
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    borderRadius: 6,
    marginBottom: 12,
  },
  SwipeableRemove: {
    width: 90,
    height: 90,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
