import { StyleSheet } from "react-native";
import themeColors from "../themes/themeColors";
import { getRandomColor } from "../utils/functions";

const userDetailStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 200,
        borderBottomWidth: 0.5,
        borderColor: themeColors.GRAY,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: getRandomColor()


    },
    avatarTitle: {
        fontSize: 20,
        fontWeight: "bold"


    },
    nameTitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold"

    },
    emailContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20


    },
    email: {
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 15

    },
    button: {
        marginTop: 30
    }



})


export default userDetailStyle;