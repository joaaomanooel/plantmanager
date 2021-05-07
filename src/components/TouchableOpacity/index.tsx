import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export default React.memo((props: TouchableOpacityProps) => {
  return <TouchableOpacity activeOpacity={0.8} {...props} />
});
