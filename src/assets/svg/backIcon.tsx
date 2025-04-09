import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const BackIcon = (props: SvgProps) => (
  <Svg width={12} height={18} fill="none" {...props}>
    <Path stroke="#0F172A" strokeWidth={2} d="m11 16.782-9-9 9-7" />
  </Svg>
);
export default BackIcon;
