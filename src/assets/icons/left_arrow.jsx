import * as React from "react"
import Svg, { Path } from "react-native-svg"
const left_arrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill={'#0C356A'}
    viewBox="0 0 64 64"
    {...props}
  >
    <Path d="M22.3 1.8C11.4 5.7 4.5 13 1.3 23.9c-2.9 10.2.4 22.8 8.2 30.6 12.2 12.1 32.8 12.1 45 0 9.1-9.2 11.8-24.1 6.4-35.6C54 4.3 36.8-3.4 22.3 1.8zM40 17.3c0 .6-3 4.2-6.7 7.9L26.6 32l6.7 6.8c3.7 3.7 6.7 7.3 6.7 7.9 0 .7-1 1.7-2.1 2.4-2 1-2.9.4-9.5-6.7-9.7-10.4-9.7-11.2 0-21.1 6.6-6.7 7.6-7.4 9.5-6.4 1.1.7 2.1 1.7 2.1 2.4z" />
  </Svg>
)
export default left_arrow
