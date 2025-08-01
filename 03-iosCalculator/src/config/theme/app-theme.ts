import { StyleSheet } from "react-native";

export const colors = {
    darkGray: '#2D2D2D',
    lightGray: '#9B9B9B',
    orange: '#FF9527',

    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000',
}

export const styles = StyleSheet.create({
    background : {
        flex:1,
        backgroundColor: colors.background,
    },
    calculatorContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end',
    },
    mainResult: {
        color: colors.textPrimary,
        fontSize: 40,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '400'        
    },
    subResult: {
        color: colors.textSecondary,
        fontSize: 15,
        textAlign: 'right',
        fontWeight: '300'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10

    },
    button: {
        height: 70,
        width: 70,        
        backgroundColor: colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 26,
        color: 'white',
        fontWeight: '400'
    }
})