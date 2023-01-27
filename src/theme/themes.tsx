import { StyleSheet } from "react-native";

export const loginstyles = StyleSheet.create({
    containerForm: {
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        height: 600
    },
    title: {
        color: 'yellow',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20
    },
    label: {
        color: 'white',
        // paddingHorizontal: 20,
        marginHorizontal: 20
    },
    input: {
        color: 'white',
        fontSize: 16,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        borderWidth: 0.5,
        borderColor: 'white',
        borderRadius: 5,
        height: 50
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        height: 50
    },
    buttonText: {
        color: 'yellow',
        fontSize: 18
    }
})