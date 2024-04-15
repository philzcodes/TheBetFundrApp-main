import { StyleSheet } from "react-native";
import Colors from "./Colors";
export const defaultStyles = StyleSheet.create({
  inputField: {
    height: 48,
    // borderWidth: 2,
    // borderColor: Colors.welcomeText,
    opacity: .8,
    padding: 10,
    fontSize: 13.5,
    backgroundColor: "transparent",
    color: Colors.welcomeText,
    flex: 1,
    fontWeight: "800"
  },
  btn: {
    backgroundColor: Colors.default1,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginTop: 10
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontFamily: "mon-b",
  },
});