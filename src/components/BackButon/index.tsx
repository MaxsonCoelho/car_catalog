
import React from 'react';
import { Container } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  color?: string;
}

export default function BackButton({ color, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
        <Icon 
          name='chevron-left' 
          size={24} 
          color={color ? color : theme.colors.text} 
        />
    </Container>
  )
}

