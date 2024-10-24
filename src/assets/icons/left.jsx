import * as React from "react"
import Svg, { Path } from "react-native-svg"
const left = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#FFFF"
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
  </Svg>
)
export default left
