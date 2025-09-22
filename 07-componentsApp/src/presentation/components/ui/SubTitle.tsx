import { Text, View } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    text: string;
    safe?: boolean;
}

export const SubTitle = ({text, safe}:Props) => {

    const  { colors } = useContext(ThemeContext);

    const {top} = useSafeAreaInsets();

  return (
    <View>
        <Text style={{
            ...globalStyles.subTitle,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            backgroundColor: colors.cardBackground,
            color: colors.text
            
        }}>
            {text}
        </Text>
    </View>
  )
}
