import { Canvas, Rect, BlurMask } from '@shopify/react-native-skia'
import React, { useEffect } from 'react'
import { useWindowDimensions } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import { THEME } from '../../styles/theme'

const STATUS = [
  'transparent',
  THEME.COLORS.BRAND_LIGHT,
  THEME.COLORS.DANGER_LIGHT,
]

interface Props {
  status: number
}

export function OverlayFeedback({ status }: Props) {
  const color = STATUS[status]

  const { height, width } = useWindowDimensions()

  const opacity = useSharedValue(0)

  const styledAnimated = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }))

  useEffect(() => {
    opacity.value = withSequence(
      withTiming(1, { duration: 400, easing: Easing.bounce }),
      withTiming(0),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  return (
    <Animated.View
      style={[{ height, width, position: 'absolute' }, styledAnimated]}
    >
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height} color={color}>
          <BlurMask blur={50} style={'inner'} />
        </Rect>
      </Canvas>
    </Animated.View>
  )
}
