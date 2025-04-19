import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ProfileFocus = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#767676"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 15.75v-1.5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1.5m9-10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </Svg>
);
export default ProfileFocus;
