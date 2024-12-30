import { StyleSheet } from "react-native";
import themeColors from "../themes/themeColors";



const floatActionButtonStyle = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        backgroundColor: themeColors.GREEN,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        position: "absolute",
        bottom: 20,
        right: 20
    }
})
export default floatActionButtonStyle;

