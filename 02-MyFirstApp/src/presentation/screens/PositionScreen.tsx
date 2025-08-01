import { StyleSheet, Text, View } from "react-native"


export const PositionScreen = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.greenBox}></Text> 
        <Text style={styles.purpleBox}></Text> 
        <Text style={styles.orangeBox}></Text> 
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 150,
        // width: 300,
        backgroundColor: '#28C4D9',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    //todo relativo al padre
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0
    },    
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position:'absolute',        
        right: 0
    },
    greenBox: {
        // flex:1,
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position:'absolute',
        // bottom: 0,
        // right: 0,
        // top: 0,
        // left: 0
        ...StyleSheet.absoluteFillObject
    }

})