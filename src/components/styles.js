import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    position: "relative",
  },
  cardContainer: {
    marginBottom: 17,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    color: "#257157",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  cardText: {
    color: "#444",
    fontSize: 15,
    marginBottom: 7,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 6,
  },
  logo: {
    width: 150,
    height: 100,
    alignSelf: "center",
    marginBottom: 5,
  },
  showMoreText: {
    width: "60%",
    backgroundColor: "#257157",
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 15,
    padding: 12,
    borderRadius: 7,
  },
});
export default styles;
