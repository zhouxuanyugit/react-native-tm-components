import React from 'react';
import { TouchableOpacity } from 'react-native';

const Button = React.memo((props) => ( <TouchableOpacity { ...props } activeOpacity={0.8} /> ));

export default Button;