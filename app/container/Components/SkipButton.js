import {Text, TouchableOpacity} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";


export default function SkipButton(
    {
        Props, Style, onPress
    }
)
{
    const {t, language} = Props
    return (
        <TouchableOpacity onPress={onPress} style={[{
            borderColor: Color.primary,
            borderWidth: 1,
            alignSelf: "flex-end",
            zIndex: -2,
            top: -20,
            marginTop: 10,
            borderRadius: 7,
            paddingVertical: 5,
            paddingHorizontal: 15

        }, Style]}>
            <Text
                style={{color: Color.primary, fontFamily: Constants.fontFamilyBold}}>{t("Auth:Skip")}</Text>
        </TouchableOpacity>
    )
}
