import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Empty = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 10}  // Width set to 50, adjustable via props
    height={props.height || 10}  // Height set to 10, adjustable via props
    fill="none"
    viewBox="-23 1 65 8"  // Set viewBox to "0 0 50 10"
    preserveAspectRatio="xMidYMid"  // Centers the content both horizontally and vertically
    {...props}
  >
    <Path
      fill="#4E585E"
      d="M3.274.75a2.531 2.531 0 0 0-2.52 2.52v11.46a2.531 2.531 0 0 0 2.52 2.52h11.459a2.531 2.531 0 0 0 2.52-2.52V3.27a2.531 2.531 0 0 0-2.52-2.52H3.274Zm0 1.375h11.459c.64 0 1.145.505 1.145 1.146v9.375L13.123 9.98a1.857 1.857 0 0 0-2.578 0l-.94.909-2.832-2.74a1.856 1.856 0 0 0-1.29-.524c-.467 0-.934.18-1.29.523l-2.065 1.998V3.27c0-.641.505-1.146 1.146-1.146Zm8.709 1.833c-.63 0-1.19.261-1.546.661-.355.4-.517.905-.517 1.402 0 .496.162 1.002.518 1.402.355.4.914.66 1.545.66.63 0 1.19-.26 1.545-.66s.517-.906.517-1.402c0-.497-.162-1.002-.517-1.402-.356-.4-.915-.66-1.545-.66Zm0 1.375c.286 0 .414.083.517.2.103.115.17.297.17.488a.752.752 0 0 1-.17.489c-.103.116-.231.198-.517.198-.287 0-.415-.082-.518-.198a.752.752 0 0 1-.17-.49c0-.19.067-.372.17-.488.103-.116.231-.199.518-.199ZM5.483 9c.119 0 .237.043.333.136v.001l2.8 2.708-4.166 4.03H3.274c-.64 0-1.146-.505-1.146-1.146v-2.67l3.02-2.922A.474.474 0 0 1 5.484 9Zm6.35 1.833a.47.47 0 0 1 .334.136l3.711 3.59v.17c0 .641-.505 1.146-1.145 1.146H6.428l5.072-4.906a.471.471 0 0 1 .333-.136Z"
    />
  </Svg>
);

export default Empty;
