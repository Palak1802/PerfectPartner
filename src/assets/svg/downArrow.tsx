import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const DownArrow = (props: SvgProps) => (
  <Svg width={25} height={25} viewBox="0 0 64 64" {...props}>
    <Path
      fill="none"
      stroke="#000"
      strokeLinejoin="bevel"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m15 24 17 17 17-17"
      {...props}
    />
  </Svg>
);
export default DownArrow;
