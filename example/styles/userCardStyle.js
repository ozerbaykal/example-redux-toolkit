import { StyleSheet } from "react-native";
import themeColors from "../themes/themeColors";
import { getRandomColor } from "../utils/functions";

const userCardStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: themeColors.WHİTE,
        padding: 10,
        marginTop: 5





    },
    avatarContainer: {
        width: 70,
        height: 70,
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
    nameContainer: {
        padding: 10,
        flex: 1,

    },
    name: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 2

    },
    icon: {
        justifyContent: "center",
        alignItems: "center"
    }

})

export default userCardStyle;