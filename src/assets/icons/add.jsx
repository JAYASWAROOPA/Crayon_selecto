import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Add = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="red"
    {...props}
  >
    <Path
      fill="#4E585E"
      d="M8 0a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8Zm0 1.2A6.8 6.8 0 1 1 1.2 8 6.79 6.79 0 0 1 8 1.2Zm-.01 2.792a.6.6 0 0 0-.59.608v2.8H4.6a.6.6 0 1 0 0 1.2h2.8v2.8a.6.6 0 0 0 1.2 0V8.6h2.8a.6.6 0 0 0 0-1.2H8.6V4.6a.6.6 0 0 0-.61-.608Z"
    />
  </Svg>
)
export default Add
