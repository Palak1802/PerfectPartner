import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Search = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="#0D0D0D"
      d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z"
    />
  </Svg>
);
export default Search;
