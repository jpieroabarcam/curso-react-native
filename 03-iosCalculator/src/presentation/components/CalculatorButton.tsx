import { Pressable, Text } from "react-native"
import { colors, styles } from "../../config/theme/app-theme"
import babelConfig from "../../../babel.config";

interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: ()=>void;
}

export const CalculatorButton = ({
    label, 
    color = colors.darkGray,
    doubleSize= false,
    blackText=false,
    onPress,
}: Props) => {
  return (
      <Pressable 
        onPress={ () => onPress() }
        style={({pressed}) => ({
          ...styles.button,
          backgroundColor: color,
          width:(doubleSize) ? 155 : 70, 
          opacity: (pressed) ? 0.8 : 1
      })}>
          <Text style={{
            ...styles.buttonText,
            color: (blackText) ? 'black': 'white'
            }}>{label}</Text>
      </Pressable>
  )
}
