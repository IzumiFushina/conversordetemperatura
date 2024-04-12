// Importa os conteúdos necessários para o funcionamento correto do site
import { StyleSheet } from "react-native";

// Exporta o style para ser usado por todo o código

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbdeff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: "#000752",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    fontFamily: 'Roboto-Black',
  },
  txtinput: {
    backgroundColor: "#7f83b8",
    color: "#000000",
    opacity: "90%",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'Roboto-Black',
    borderRadius: 10,
    borderColor: "#000000",
    width: 200,
    height: 50,
    marginTop: 20,
  },
  touchable: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    fontSize: 20,
    backgroundColor: "#1d257d",
    width: 100,
    height: 40,
    fontFamily: 'Roboto-Black',
  },
  modal: {
    backgroundColor: "#dbdeff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modaltext: {
    fontFamily: 'Roboto-Black',
    fontSize: 25,
    marginTop: 20,
    color: "#000752",
    alignItems: "center",
    justifyContent: "center",
  },
  touchabletext: {
    fontFamily: 'Roboto-Black',
    fontSize: 15,
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
