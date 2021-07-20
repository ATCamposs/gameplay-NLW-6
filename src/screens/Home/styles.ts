import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //Margem no IO's conta a partir do topo da tela
        //Margem no android conta a partir da parte "mais baixa"
        //o react-native-iphone-x cuida disso.
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42
    }
})