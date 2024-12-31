import { StyleSheet } from "react-native";
import themeColors from "../themes/themeColors";

const inputStyle = StyleSheet.create({
    container: {
        margin: 10,
    },
    title: {
        fontSize: 18,
        color: themeColors.BLACK,
        marginBottom: 5,
        fontWeight: '600',
    },
    input: {
        padding: 10,
        backgroundColor: themeColors.INPUT,
        fontSize: 16,
        borderRadius: 8,
        fontWeight: '400',
    },


})

export default inputStyle;