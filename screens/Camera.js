import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

export default Camera = () => {
  return (
    <View style={styles.dashboard}>
      {
        <ImageBackground
          style={[styles.imageIcon, styles.barLayout]}
          source={require("../assets/image1.png")}
        ></ImageBackground>
      }
      {
        <ImageBackground
          style={[styles.imageIconRadio, styles.barLayoutRadio]}
          source={require("../assets/radioButton.png")}
          resizeMode="contain"
        ></ImageBackground>
      }

      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.iconchevronLeft, styles.cameraPosition]}
          contentFit="center"
          source={require("../assets/iconchevron-left.png")}
        />
        <Text style={[styles.camera, styles.cameraPosition]}>Camera</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barLayout: {
    width: "100%",
    position: "absolute",
  },
  barLayoutRadio: {
    width: "100%",
    position: "absolute",
  },
  iconPosition1: {
    display: "none",
    position: "absolute",
  },
  iconPosition: {
    top: 12,
    position: "absolute",
  },
  tabItemPosition: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_xs,
    paddingHorizontal: Padding.p_7xl,
    flexDirection: "row",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  containerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerPosition: {
    borderBottomWidth: 0.5,
    borderColor: Color.borderBorderDefault,
    borderStyle: "solid",
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  cameraPosition: {
    marginTop: -12,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    right: 78,
    bottom: 16,
    left: 78,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    left: 21,
    width: 54,
    height: 21,
  },
  statusBar: {
    height: 44,
    left: 0,
    width: 375,
    top: 0,
    overflow: "hidden",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    width: 134,
    height: 5,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -187.5,
    bottom: 0,
    height: 34,
    left: "50%",
  },
  iconperson: {
    overflow: "hidden",
  },
  tabBarItem: {
    marginLeft: 111.5,
  },
  stateLayer: {
    padding: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  stTrailingIcon: {
    marginTop: -27,
    left: 100,
    opacity: 0.5,
    top: "50%",
    alignItems: "center",
    height: 24,
    width: 24,
    position: "absolute",
  },
  camera01Icon: {
    left: 249,
    top: 12,
    position: "absolute",
  },
  iconhome: {
    left: 34,
    top: 12,
    position: "absolute",
    overflow: "hidden",
  },
  tabBarItem1: {
    marginLeft: -39.5,
    opacity: 0.0,
  },
  tabBar: {
    top: 756,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 78,
    left: 0,
    width: 375,
    backgroundColor: Color.colorWhite,
  },
  imageIcon: {
    top: "9.3%",
    height: 760,
    position: "absolute",
    bottom: "3%",
    overflow: "hidden",
    alignItems: "center",
  },
  imageIconRadio: {
    top: "79.5%",
    height: "34%",
    position: "absolute",
  },
  iconchevronLeft: {
    left: 16,
    height: 24,
    width: 24,
  },
  camera: {
    marginLeft: 0,
    fontSize: FontSize.size_mid,
    letterSpacing: -0.3,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    left: "50%",
  },
  header: {
    top: 44,
    height: 42,
    backgroundColor: Color.colorWhite,
  },
  dashboard: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});
