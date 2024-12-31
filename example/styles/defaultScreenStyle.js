import { StyleSheet } from "react-native";
import themeColors from "../themes/themeColors";


const defaultSreenStyle = StyleSheet.create({


    container: {
        flex: 1,
        padding: 10,
        backgroundColor: themeColors.WHİTE


    },
    flatlistEmtyText: {
        textAlign: "center",
        backgroundColor: themeColors.GRAY,
        padding: 20,
        fontSize: 20,
        fontWeight: "500",
        marginTop: 20




    },



})

export default defaultSreenStyle;