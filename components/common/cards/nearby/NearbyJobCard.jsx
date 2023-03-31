import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import styles from "./nearbyjobcard.style";
import { checkImageUrl } from "../../../../utils";
const NearbyJobsCard = ({ job, handleNavigate }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
            <TouchableOpacity style={styles.logoContainer}>
                <Image
                    source={{
                        uri: checkImageUrl(job.employer_logo)
                            ? job.employer_logo
                            : "https://e7.pngegg.com/pngimages/118/15/png-clipart-employer-labor-taste-recipe-company-e-learning-miscellaneous-company.png",
                    }}
                    resizeMode="contain"
                    style={styles.logImage}
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.jobName}>
                    {job.job_title}
                </Text>
                <Text style={styles.jobType}>{job.job_employment_type}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default NearbyJobsCard;
