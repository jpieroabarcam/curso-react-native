import { StyleSheet, View } from "react-native"

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]}></View>
      <View style={[styles.box, styles.orangeBox]}></View>
      <View style={[styles.box, styles.greenBox]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1,     
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#28425B',                
  },
  box: {    
    width: 100,
    height: 100,
    borderWidth:10,
    borderColor: 'white',    
    
  },
  purpleBox: {
    backgroundColor: '#5856D6',    
    // bottom: 170,
    // left: 120 

  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    top: 50
    //flex:1 // solo para el 1    
  },
  greenBox: {
    backgroundColor: '#28C4D9',    
    // top: 170,
    // right: 120 
    
  }

})