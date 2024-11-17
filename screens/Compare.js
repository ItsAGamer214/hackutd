import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";

const Compare = () => {
  return (
    <View style={styles.compare}>
      <View style={[styles.chart, styles.chartLayout]}>
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={[styles.lineIcon1, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={[styles.lineIcon2, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={[styles.lineIcon3, styles.lineIconPosition2]}
          contentFit="cover"
          source={require("../assets/line1.png")}
        />
        <Image
          style={[styles.lineIcon4, styles.lineIconPosition1]}
          contentFit="cover"
          source={require("../assets/line1.png")}
        />
        <Image
          style={[styles.lineIcon5, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line1.png")}
        />
        <View style={[styles.yAxis, styles.yAxisPosition]}>
          <Text style={[styles.k, styles.mpgTypo]}>200K</Text>
          <Text style={[styles.mpg, styles.mpgTypo]}>40 MPG</Text>
          <Text style={[styles.mpg1, styles.mpgTypo]}>30 MPG</Text>
          <Text style={[styles.mpg2, styles.mpgTypo]}>20 MPG</Text>
          <Text style={[styles.mpg3, styles.mpgTypo]}>10 MPG</Text>
        </View>
        <View style={styles.xAxis}>
          <Text style={[styles.k, styles.mpgTypo]}>Cars</Text>
          <Text style={[styles.supra25, styles.mpgTypo]}>Supra ‘25</Text>
          <Text style={[styles.toyota24, styles.mpgTypo]}>Toyota ‘24</Text>
          <Text style={[styles.camry24, styles.mpgTypo]}>Camry ‘24</Text>
        </View>
        <Text style={[styles.price, styles.priceClr]}>PRICE</Text>
      </View>
      <View style={[styles.chart1, styles.yAxisPosition]}>
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={[styles.lineIcon1, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={[styles.lineIcon2, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={[styles.lineIcon9, styles.lineIconPosition2]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={[styles.lineIcon10, styles.lineIconPosition1]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={[styles.lineIcon11, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line2.png")}
        />
        <View style={[styles.yAxis, styles.yAxisPosition]}>
          <Text style={[styles.k, styles.mpgTypo]}>50 MPG</Text>
          <Text style={[styles.mpg, styles.mpgTypo]}>40 MPG</Text>
          <Text style={[styles.mpg1, styles.mpgTypo]}>30 MPG</Text>
          <Text style={[styles.mpg2, styles.mpgTypo]}>20 MPG</Text>
          <Text style={[styles.mpg3, styles.mpgTypo]}>10 MPG</Text>
        </View>
        <View style={styles.xAxis}>
          <Text style={[styles.k, styles.mpgTypo]}>Cars</Text>
          <Text style={[styles.supra25, styles.mpgTypo]}>Supra ‘25</Text>
          <Text style={[styles.toyota24, styles.mpgTypo]}>Toyota ‘24</Text>
          <Text style={[styles.camry24, styles.mpgTypo]}>Camry ‘24</Text>
        </View>
        <Text style={[styles.price, styles.priceClr]}>MPG</Text>
      </View>
      <View style={[styles.locationInfo, styles.infoLayout]}>
        <Image
          style={[styles.imageCarouselIcon, styles.infoLayout]}
          contentFit="cover"
          source={require("../assets/image-carousel.png")}
        />
        <View style={[styles.info, styles.infoLayout]}>
          <View style={styles.priceCta}>
            <View style={styles.price1}>
              <Text style={[styles.price2, styles.nightTypo]}>$200,000</Text>
              <Text style={[styles.night, styles.nightClr]}>MSRP</Text>
            </View>
          </View>
          <View style={styles.text}>
            <Text style={[styles.productName, styles.nightTypo]}>
              Toyota Camry ‘86
            </Text>
            <View style={styles.ratingDistance}>
              <View style={styles.rating}>
                <Image
                  style={styles.iconstarLayout}
                  contentFit="cover"
                  source={require("../assets/iconstar.png")}
                />
                <Text
                  style={[styles.subheading, styles.nightClr]}
                >{`4.8 `}</Text>
              </View>
              <View style={styles.rating}>
                <Image
                  style={[styles.iconmapPin, styles.iconstarLayout]}
                  contentFit="cover"
                  source={require("../assets/iconmap-pin.png")}
                />
                <Text style={[styles.subheading, styles.nightClr]}>
                  20/35 MPG
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartLayout: {
    height: 282,
    width: 343,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  lineIconLayout: {
    width: 311,
    maxHeight: "100%",
    left: 16,
    position: "absolute",
  },
  lineIconPosition2: {
    top: 168,
    width: 311,
    left: 16,
    position: "absolute",
  },
  lineIconPosition1: {
    top: 204,
    width: 311,
    left: 16,
    position: "absolute",
  },
  lineIconPosition: {
    top: 240,
    width: 311,
    left: 16,
    position: "absolute",
  },
  yAxisPosition: {
    left: 16,
    position: "absolute",
  },
  mpgTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.presetsBody2,
    position: "absolute",
  },
  priceClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  iconPosition1: {
    display: "none",
    position: "absolute",
  },
  iconPosition: {
    top: 12,
    position: "absolute",
  },
  homePosition: {
    left: "50%",
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
  infoLayout: {
    width: 344,
    position: "absolute",
  },
  nightTypo: {
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
  },
  nightClr: {
    color: Color.textTextSecondary,
    textAlign: "left",
  },
  iconstarLayout: {
    height: 16,
    width: 16,
  },
  lineIcon: {
    top: 60,
  },
  lineIcon1: {
    top: 96,
  },
  lineIcon2: {
    top: 132,
  },
  lineIcon3: {
    height: 0,
  },
  lineIcon4: {
    height: 0,
  },
  lineIcon5: {
    height: 0,
  },
  k: {
    left: 0,
    top: 0,
  },
  mpg: {
    top: 36,
    left: 0,
  },
  mpg1: {
    top: 72,
    left: 0,
  },
  mpg2: {
    top: 108,
    left: 0,
  },
  mpg3: {
    top: 144,
    left: 0,
  },
  yAxis: {
    top: 61,
    width: 39,
    height: 158,
  },
  supra25: {
    left: 257,
    top: 0,
  },
  toyota24: {
    left: 160,
    top: 0,
  },
  camry24: {
    left: 69,
    width: 70,
    top: 0,
  },
  xAxis: {
    top: 244,
    left: 11,
    width: 302,
    height: 14,
    position: "absolute",
  },
  price: {
    top: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    left: 16,
    position: "absolute",
  },
  chart: {
    top: 659,
    left: 17,
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
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
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
  iconperson: {
    overflow: "hidden",
  },
  tabBarItem: {
    marginLeft: 111.5,
  },
  stateLayer: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  stTrailingIcon: {
    marginTop: -27,
    top: "50%",
    left: 100,
    opacity: 0.5,
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
    shadowOpacity: 1,
    height: 78,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  lineIcon9: {
    maxHeight: "100%",
  },
  lineIcon10: {
    maxHeight: "100%",
  },
  lineIcon11: {
    maxHeight: "100%",
  },
  chart1: {
    top: 351,
    height: 282,
    width: 343,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  imageCarouselIcon: {
    height: 150,
    left: 0,
    top: 0,
    borderRadius: Border.br_5xs,
    width: 344,
    overflow: "hidden",
  },
  price2: {
    fontSize: 20,
    lineHeight: 28,
    color: Color.colorBlack,
    textAlign: "left",
  },
  night: {
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
  },
  price1: {
    alignItems: "flex-end",
    gap: 4,
    flexDirection: "row",
  },
  priceCta: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  productName: {
    alignSelf: "stretch",
    color: Color.colorBlack,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  subheading: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.presetsBody2,
    color: Color.textTextSecondary,
  },
  rating: {
    gap: Gap.gap_sm,
    alignItems: "center",
    flexDirection: "row",
  },
  iconmapPin: {
    overflow: "hidden",
  },
  ratingDistance: {
    width: 153,
    gap: 16,
    flexDirection: "row",
  },
  text: {
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  info: {
    top: 162,
    gap: 8,
    justifyContent: "center",
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  locationInfo: {
    top: 90,
    left: 15,
    height: 240,
  },
  compare: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Compare;
