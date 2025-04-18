import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Male = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    preserveAspectRatio="xMinYMin"
    viewBox="-2.5 -2.5 24 24"
    {...props}>
    <Path d="M4.364 14.636a5 5 0 1 0 7.071-7.071 5 5 0 0 0-7.071 7.071zm7.728-9.142 2.553-2.553h-1.517a1 1 0 0 1 0-2h4a.997.997 0 0 1 1 1v4a1 1 0 1 1-2 0V4.286l-2.622 2.622A7.002 7.002 0 0 1 2.95 16.05a7 7 0 0 1 9.142-10.556z" />
  </Svg>
);
export default Male;
