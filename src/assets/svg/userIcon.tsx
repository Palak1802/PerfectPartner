import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const UserIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" viewBox="0 0 15 15" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="square"
      d="M10.5 3.498a2.999 2.999 0 0 1-3 2.998 2.999 2.999 0 1 1 3-2.998ZM12.5 14.49h-10v-1.996a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1.997Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default UserIcon;
