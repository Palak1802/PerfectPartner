import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const Close = (props: SvgProps) => (
  <Svg width={16} height={17} fill="none" {...props}>
    <G fill="#000" fillOpacity={0.5} clipPath="url(#a)">
      <Path d="M.781 16.237a.782.782 0 0 1-.552-1.333L14.666.465a.781.781 0 1 1 1.105 1.105L1.334 16.009a.777.777 0 0 1-.553.228Z" />
      <Path d="M15.219 16.237a.779.779 0 0 1-.553-.228L.23 1.57A.781.781 0 0 1 1.334.466L15.77 14.903a.782.782 0 0 1-.552 1.334Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .237h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Close;
