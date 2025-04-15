import React from "react";
import {
  Modal,
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type DrawerModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const DrawerModal: React.FC<DrawerModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <TouchableOpacity
          onPress={onClose}
          style={styles.drawerContentTop}
        ></TouchableOpacity>
        <Animated.ScrollView
          scrollEventThrottle={16}
          style={styles.drawerContent}
        >
          <View
            className="w-full flex justify-between bg-red-500 items-center"
            style={{ height: 19, position:"absolute", }}
          >
            <View
              className="w-1/4 rounded-lg"
              style={{ height: 5, width: "15%", backgroundColor: "#E5E5E5" }}
            ></View>
          </View>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <Text>Application</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>Close Drawer</Text>
          </TouchableOpacity>
        </Animated.ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    zIndex: 40,
    width: "100%",
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  drawerContentTop: {
    width: "100%",
    height: "10%",
    // padding: 20,
  },
  drawerContent: {
    width: "100%",
    height: "90%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
    padding: 20,
  },
  closeButton: {
    color: "blue",
    marginTop: 20,
  },
});

export default DrawerModal;
