import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const LeftArrowFill = (props: SvgProps) => (
  <Svg width={9} height={14} fill="none" {...props}>
    <Path
      fill="#00365C"
      d="M7.542.93.15 7.099a.363.363 0 0 0 0 .52l7.392 6.169a.288.288 0 0 0 .324.037.319.319 0 0 0 .126-.122.351.351 0 0 0 .046-.175V1.19a.351.351 0 0 0-.046-.175.32.32 0 0 0-.126-.123.288.288 0 0 0-.324.038Z"
    />
  </Svg>
);
export default LeftArrowFill;
