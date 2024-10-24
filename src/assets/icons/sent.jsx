import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#4E585E"
      d="M.815.334a.5.5 0 0 0-.445.688L2.794 7 .37 12.98a.5.5 0 0 0 .687.635L13.39 7.448a.5.5 0 0 0 0-.895L1.057.386A.5.5 0 0 0 .815.334Zm.98 1.54L12.048 7 1.794 12.127 3.671 7.5h4.496a.5.5 0 1 0 0-1H3.67L1.794 1.873Z"
    />
  </Svg>
)
export default SvgComponent
