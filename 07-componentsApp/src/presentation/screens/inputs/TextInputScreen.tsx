import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Card } from '../../components/ui/Card'
import { TextInput } from 'react-native-gesture-handler'
import { useState } from 'react'

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    })

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <ScrollView>
            <CustomView margin>
                <Title text='Text inputs' safe />
                <Card>
                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Nombre Completo'
                        autoCapitalize={'words'}
                        autoCorrect={false}
                        onChangeText={ value => setForm({...form, name:value})}
                    />
                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Correo electronico'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType='email-address'
                        onChangeText={ value => setForm({...form, email:value})}
                    />
                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Telefono'                                
                        keyboardType='phone-pad'
                        onChangeText={ value => setForm({...form, phone:value})}
                    />
                </Card>

                <View style= {{height: 10}} />

                <Card>
                    <Text> {JSON.stringify(form, null, 2)}</Text>
                    <Text> {JSON.stringify(form, null, 2)}</Text>
                    <Text> {JSON.stringify(form, null, 2)}</Text>
                    <Text> {JSON.stringify(form, null, 2)}</Text>
                    <Text> {JSON.stringify(form, null, 2)}</Text>
                    <Text> {JSON.stringify(form, null, 2)}</Text>
                    <Text> {JSON.stringify(form, null, 2)}</Text>
                    <Text> {JSON.stringify(form, null, 2)}</Text>
                    <Text> {JSON.stringify(form, null, 2)}</Text>
                </Card>
                <View  style={{height: 20}} />
                <Card>
                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Apellido Completo'
                        autoCapitalize={'words'}
                        autoCorrect={false}
                        onChangeText={ value => setForm({...form, name:value})}
                    />
                </Card>

            </CustomView>
            <View  style={{height: 20}} />
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
