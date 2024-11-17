import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Padding,
  Color,
  Gap,
  Border,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

const StartingPage = () => {
  return (
    <View style={styles.startingPage}>
      <View style={styles.search}>
        <View style={[styles.leadingIcon, styles.iconFlexBox]}>
          <View style={[styles.container, styles.iconFlexBox]}>
            <View style={[styles.stateLayer, styles.iconFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
        </View>
        <Text style={styles.label} numberOfLines={1}>
          Model
        </Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.advancedFilters}>Advanced Filters</Text>
        <Image
          style={[styles.iconchevronRight, styles.iconchevronLayout]}
          contentFit="cover"
          source={require("../assets/iconchevron-right.png")}
        />
      </View>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={styles.checkoutInfo}>
        <View style={[styles.shipping, styles.shippingBorder]}>
          <Text style={styles.modelTypo}>MODEL</Text>
          <View style={styles.info1}>
            <Text style={styles.advancedFilters}>Add shipping address</Text>
            <Image
              style={[styles.iconchevronRight1, styles.iconchevronLayout]}
              contentFit="cover"
              source={require("../assets/iconchevron-right1.png")}
            />
          </View>
        </View>
        <View style={[styles.delivery, styles.shippingBorder]}>
          <Text style={styles.modelTypo}>YEAR</Text>
          <View style={styles.info2}>
            <View style={[styles.text, styles.textPosition]}>
              <Text style={styles.text1}>2025</Text>
            </View>
            <Image
              style={[styles.iconchevronRight1, styles.iconchevronLayout]}
              contentFit="cover"
              source={require("../assets/iconchevron-right2.png")}
            />
          </View>
        </View>
        <View style={styles.payment}>
          <Text style={[styles.class, styles.classPosition]}>CLASS</Text>
          <View style={[styles.info3, styles.classPosition]}>
            <Text style={styles.text1}>Sedan</Text>
            <Image
              style={styles.iconchevronLayout}
              contentFit="cover"
              source={require("../assets/iconchevron-right2.png")}
            />
          </View>
        </View>
        <View style={styles.payment}>
          <Text style={[styles.class, styles.classPosition]}>MPG</Text>
          <View style={styles.search1} />
        </View>
      </View>

      <View style={[styles.button, styles.buttonShadowBox]}>
        <Text style={[styles.search]}>Search</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 12,
    position: "absolute",
  },
  iconFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  iconchevronLayout: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  shippingBorder: {
    padding: Padding.p_base,
    borderBottomWidth: 0.5,
    borderColor: Color.borderBorderDefault,
    borderStyle: "solid",
    gap: Gap.gap_md,
    flexDirection: "row",
    overflow: "hidden",
  },
  textPosition: {
    top: 0,
    position: "absolute",
  },
  classPosition: {
    top: 16,
    position: "absolute",
  },
  dotIconLayout: {
    width: 7,
    top: 647,
    height: 7,
    position: "absolute",
  },
  buttonShadowBox: {
    shadowOpacity: 1,
    position: "absolute",
  },
  tabItemPosition: {
    opacity: 0.5,
    paddingTop: Padding.p_xs,
    paddingHorizontal: Padding.p_7xl,
    left: "50%",
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  statusBarIcon: {
    top: 23,
    height: 44,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rightSide: {
    top: 17,
    right: 19,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    left: 17,
    width: 54,
    height: 21,
  },
  stateLayer: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  leadingIcon: {
    width: 32,
    height: 18,
    opacity: 0.6,
    justifyContent: "center",
  },
  label: {
    lineHeight: 24,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.presetsBody2,
    fontSize: FontSize.smallText_size,
    overflow: "hidden",
    flex: 1,
  },
  searchIcon: {
    overflow: "hidden",
  },
  search: {
    top: 376,
    width: 343,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    gap: Gap.gap_md,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.bgBgSecondary,
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    borderRadius: Border.br_5xs,
    left: 16,
    position: "absolute",
  },
  advancedFilters: {
    color: Color.textTextSecondary,
    width: 211,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.presetsBody2,
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconchevronRight: {
    top: -6,
    left: 112,
    position: "absolute",
  },
  info: {
    top: 434,
    left: 124,
    width: 110,
    height: 20,
    position: "absolute",
  },
  image1Icon: {
    top: 161,
    left: 73,
    width: 237,
    height: 178,
    position: "absolute",
  },
  modelTypo: {
    width: 100,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    textAlign: "left",
  },
  iconchevronRight1: {
    left: 211,
    top: 0,
    position: "absolute",
  },
  info1: {
    height: 20,
    flex: 1,
  },
  shipping: {
    alignSelf: "stretch",
    padding: Padding.p_base,
  },
  text1: {
    color: Color.colorBlack,
    width: 211,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.presetsBody2,
  },
  text: {
    justifyContent: "center",
    left: 0,
  },
  info2: {
    height: 40,
    flex: 1,
  },
  delivery: {
    width: 458,
    height: 49,
  },
  class: {
    width: 100,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    textAlign: "left",
    left: 16,
    top: 16,
  },
  info3: {
    left: 128,
    width: 231,
    flexDirection: "row",
  },
  payment: {
    height: 52,
    borderBottomWidth: 0.5,
    borderColor: Color.borderBorderDefault,
    borderStyle: "solid",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  search1: {
    top: 22,
    left: 102,
    borderRadius: 12,
    width: 228,
    height: 7,
    alignItems: "center",
    backgroundColor: Color.bgBgSecondary,
    position: "absolute",
  },
  checkoutInfo: {
    top: 472,
    left: 4,
    width: 375,
    position: "absolute",
  },
  vectorIcon: {
    height: "10.21%",
    width: "22.13%",
    top: "75%",
    right: "48.67%",
    bottom: "14.79%",
    left: "29.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dotIcon: {
    right: 262,
  },
  dotIcon1: {
    right: 179,
  },
  search2: {
    lineHeight: 24,
    color: Color.colorWhite,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.smallText_size,
  },
  button: {
    marginLeft: -135.5,
    top: 695,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "rgba(0, 0, 0, 0.96)",
    width: 258,
    height: 43,
    paddingHorizontal: 24,
    paddingVertical: 14,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
    left: "50%",
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -187.5,
    bottom: 0,
    height: 34,
    left: "50%",
    width: 375,
    position: "absolute",
  },
  tabBarItem: {
    marginLeft: 111.5,
  },
  stTrailingIcon: {
    marginTop: -27,
    top: "50%",
    left: 100,
    justifyContent: "center",
    alignItems: "center",
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
    height: 78,
    width: 375,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  startingPage: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default StartingPage;
