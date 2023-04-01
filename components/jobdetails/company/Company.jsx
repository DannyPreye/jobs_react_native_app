import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageUrl } from "../../../utils";

const Company = ({ company_logo, jobTitle, companyName, location }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image
                    source={{
                        uri: checkImageUrl(company_logo)
                            ? company_logo
                            : "https://e7.pngegg.com/pngimages/118/15/png-clipart-employer-labor-taste-recipe-company-e-learning-miscellaneous-company.png",
                    }}
                    style={styles.logoImage}
                />
            </View>
            <View style={styles.jobTitleBox}>
                <Text style={styles.jobTitle}>{jobTitle}</Text>
            </View>
            <View style={styles.companyInfoBox}>
                <Text style={styles.companyName}>{companyName} /</Text>
                <View style={styles.locationBox}>
                    <Image
                        source={icons.location}
                        resizeMode="contain"
                        style={styles.locationImage}
                    />
                    <Text style={styles.locationName}>{location}</Text>
                </View>
            </View>
        </View>
    );
};

export default Company;
