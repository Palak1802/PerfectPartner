import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';
const Boy = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 50 50" {...props}>
    <Path d="M18 47c0 1.233.768 2 2 2 1.235 0 2-.767 2-2V28h2v19c0 1.231.767 2 2 2s2-.767 2-2V15h1v11.814c0 2.395 3.006 2.395 3 0V14.661C32 12.015 30.094 10 27 10h-8c-2.82 0-5 1.719-5 4.587V27c0 2 3 2 3 0V15h1v32z" />
    <Circle cx={22.875} cy={4.625} r={4.125} />
  </Svg>
);
export default Boy;
