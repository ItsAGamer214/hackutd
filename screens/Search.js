import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  FontFamily,
  Padding,
  FontSize,
  Color,
  Border,
  Gap,
} from "../GlobalStyles";

const Search = () => {
  return (
    <View style={styles.search}>
      <View style={styles.search2}>
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
          Camry
        </Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <View style={[styles.item, styles.itemLayout]}>
        <Image
          style={[styles.imageIcon, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <View style={[styles.info, styles.infoPosition]}>
          <Text
            style={[styles.camry86, styles.camry86FlexBox]}
            numberOfLines={2}
          >{`Camry ‘86 `}</Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            Year: 2028
          </Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            Class: Sedan
          </Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            MPG: 20
          </Text>
        </View>
        <Image
          style={[styles.checkBoxOutlineBlankIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/check-box-outline-blank.png")}
        />
      </View>
      <View style={[styles.item1, styles.itemLayout]}>
        <Image
          style={[styles.imageIcon, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <View style={[styles.info, styles.infoPosition]}>
          <Text
            style={[styles.camry86, styles.camry86FlexBox]}
            numberOfLines={2}
          >{`Camry ‘86 `}</Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            Year: 2028
          </Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            Class: Sedan
          </Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            MPG: 20
          </Text>
        </View>
        <Image
          style={[styles.checkBoxOutlineBlankIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/check-box-outline-blank.png")}
        />
      </View>
      <View style={[styles.item2, styles.itemLayout]}>
        <Image
          style={[styles.imageIcon, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <View style={[styles.info, styles.infoPosition]}>
          <Text
            style={[styles.camry86, styles.camry86FlexBox]}
            numberOfLines={2}
          >{`Camry ‘86 `}</Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            Year: 2028
          </Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            Class: Sedan
          </Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            MPG: 20
          </Text>
        </View>
        <Image
          style={[styles.checkBoxOutlineBlankIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/check-box-outline-blank.png")}
        />
      </View>
      <View style={[styles.item3, styles.itemLayout]}>
        <Image
          style={[styles.imageIcon, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <View style={[styles.info, styles.infoPosition]}>
          <Text
            style={[styles.camry86, styles.camry86FlexBox]}
            numberOfLines={2}
          >{`Camry ‘86 `}</Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            Year: 2028
          </Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            Class: Sedan
          </Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            MPG: 20
          </Text>
        </View>
        <Image
          style={[styles.checkBoxOutlineBlankIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/check-box-outline-blank.png")}
        />
      </View>
      <View style={[styles.item4, styles.itemLayout]}>
        <Image
          style={[styles.imageIcon, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <View style={[styles.info, styles.infoPosition]}>
          <Text
            style={[styles.camry86, styles.camry86FlexBox]}
            numberOfLines={2}
          >{`Camry ‘86 `}</Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            Year: 2028
          </Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            Class: Sedan
          </Text>
          <Text
            style={[styles.year2028, styles.camry86FlexBox]}
            numberOfLines={2}
          >
            MPG: 20
          </Text>
        </View>
        <Image
          style={[styles.checkBoxOutlineBlankIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/check-box-outline-blank.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barPosition: {
    left: 0,
    width: 375,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  homePosition: {
    left: "50%",
    position: "absolute",
  },
  infoPosition: {
    top: 0,
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
  iconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemLayout: {
    height: 84,
    position: "absolute",
    overflow: "hidden",
  },
  camry86FlexBox: {
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.presetsBody2,
    overflow: "hidden",
  },
  tabItemPosition: {
    paddingTop: Padding.p_xs,
    paddingHorizontal: Padding.p_7xl,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  iconchevronLeft: {
    left: 16,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  search1: {
    marginLeft: -27.5,
    fontSize: FontSize.size_mid,
    letterSpacing: -0.3,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorBlack,
    top: "50%",
    marginTop: -12,
  },
  header: {
    top: 44,
    borderStyle: "solid",
    borderColor: Color.borderBorderDefault,
    borderBottomWidth: 0.5,
    height: 42,
    width: 375,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    left: 0,
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
    height: 11,
    width: 24,
    top: 0,
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
    width: 375,
    left: 0,
    overflow: "hidden",
  },
  stateLayer: {
    padding: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  leadingIcon: {
    width: 32,
    height: 18,
    opacity: 0.6,
  },
  label: {
    fontSize: FontSize.smallText_size,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.presetsBody2,
    color: Color.colorBlack,
    overflow: "hidden",
    flex: 1,
  },
  searchIcon: {
    overflow: "hidden",
  },
  search2: {
    top: 99,
    backgroundColor: Color.bgBgSecondary,
    height: 40,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    gap: Gap.gap_md,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    width: 343,
    borderRadius: Border.br_5xs,
    left: 17,
    position: "absolute",
  },
  imageIcon: {
    width: 84,
    height: 84,
    borderRadius: Border.br_5xs,
    top: 0,
    left: 0,
  },
  camry86: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.textTextSecondary,
  },
  year2028: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.colorBlack,
  },
  info: {
    left: 112,
    width: 148,
    gap: Gap.gap_sm,
  },
  checkBoxOutlineBlankIcon: {
    top: 30,
    left: 309,
    position: "absolute",
  },
  item: {
    top: 174,
    width: 343,
    height: 84,
    left: 16,
  },
  item1: {
    top: 293,
    width: 343,
    height: 84,
    left: 17,
  },
  item2: {
    top: 412,
    width: 343,
    height: 84,
    left: 16,
  },
  item3: {
    top: 531,
    width: 343,
    height: 84,
    left: 16,
  },
  item4: {
    top: 650,
    width: 343,
    height: 84,
    left: 16,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
    borderRadius: Border.br_81xl,
  },
  homeIndicator: {
    marginLeft: -187.5,
    bottom: 0,
    height: 34,
    width: 375,
  },
  tabBarItem: {
    marginLeft: 111.5,
  },
  stTrailingIcon: {
    marginTop: -27,
    left: 100,
    height: 24,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  camera01Icon: {
    left: 249,
    height: 24,
    width: 24,
  },
  iconhome: {
    left: 34,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  tabBarItem1: {
    marginLeft: -39.5,
    opacity: 0.5,
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
    width: 375,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  search: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Search;
