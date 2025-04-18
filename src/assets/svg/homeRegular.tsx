import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const HomeRegular = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#757575"
      strokeWidth={1.5}
      d="M2 12.204c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715.519.949.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.656 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2.001 19.576 2 17.626 2 13.725v-1.521Z"
    />
    <Path
      stroke="#757575"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 15v3"
    />
  </Svg>
);
export default HomeRegular;
