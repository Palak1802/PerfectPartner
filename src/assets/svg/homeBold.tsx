import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const HomeBold = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063C4.344 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212C21.999 19.576 22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2c-1.108 0-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.039 6.874 2.52 7.823ZM11.25 18a.75.75 0 1 0 1.5 0v-3a.75.75 0 1 0-1.5 0v3Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HomeBold;
