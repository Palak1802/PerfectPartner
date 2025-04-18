import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Favourite = (props: SvgProps) => (
  <Svg width={800} height={800} viewBox="0 0 15 15" {...props}>
    <Path d="M13.91 6.75c-1.17 2.25-4.3 5.31-6.07 6.94a.5.5 0 0 1-.67 0C5.39 12.06 2.26 9 1.09 6.75-1.48 1.8 5-1.5 7.5 3.45c2.5-4.95 8.98-1.65 6.41 3.3z" />
  </Svg>
);
export default Favourite;
