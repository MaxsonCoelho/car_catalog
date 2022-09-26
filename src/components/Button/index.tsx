import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import theme from '../../screens/styles/theme';

import { 
    Container,
    Title
} from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    color?: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export default function Button({ 
    title, 
    color, 
    onPress,
    disabled = false,
    loading = false,
 }: Props) {


    return (
        <Container 
            color={color ? color : theme.colors.main}
            onPress={onPress}
            activeOpacity={0.5}    
            disabled={disabled}
        >
            {loading ?
                <ActivityIndicator color={theme.colors.shape} size='small' />
                :
                <Title>{title}</Title>
            }
            
        </Container>
    )
}
