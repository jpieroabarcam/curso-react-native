import { Alert, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Button } from '../../components/ui/Button'
import { showPrompt } from '../../../config/adapters/promt.adapter'

export const AlertScreen = () => {

    const createTwoButtonAlert = () => {        
        Alert.alert('Alert Title', 'My Alert Msg', [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'destructive',

        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    }
  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
    ],{
        cancelable: true,
        onDismiss() {
            console.log('onDismiss')
        }
    });

    const onShowPromt = () => {
        showPrompt({
            title: 'Lorem ipsum',
            subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sequi odio ipsum laudantium. Dolorum odio, debitis voluptas veritatis soluta labore asperiores deleniti corporis quasi nulla quae veniam nobis, totam molestias?",
            buttons: [
                { text: 'Ok', onPress: () => console.log('Ok')}
            ],
            promptType: 'plain-text',
            placeHolder: 'Placeholder'
        })
        
        // solo en iOS - codigo nativo
        // Alert.prompt(
        //     '¿Cual es tu correo Electronico?',
        //     'lorem ipsum',
        //     (value:string) => console.log({value}),
        //     'secure-text',
        //     'Soy el valor por defecto',
        //     'number-pad'
        // )
    }

  return (
    <CustomView style={globalStyles.globalMargin}>
        <Title safe text="Alertas"/>

        <Button 
            text='Alerta - 2 Botones'
            onPress={createTwoButtonAlert}
        />
        <View style={{height:10}} />
        <Button 
            text='Alerta - 3 Botones'
            onPress={createThreeButtonAlert}
        />
        <View style={{height:10}} />
        <Button 
            text='Promt - Input'
            onPress={onShowPromt}
        />
    </CustomView>
  )
}
