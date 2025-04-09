import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const Chat = (props: SvgProps) => (
  <Svg width={512} height={512} {...props}>
    <Path d="M456 48H56a24 24 0 0 0-24 24v288a24 24 0 0 0 24 24h72v80l117.74-80H456a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24ZM160 248a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32ZM456 80Z" />
  </Svg>
);
export default Chat;
