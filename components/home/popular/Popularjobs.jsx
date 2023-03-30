import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./popularjobs.style";
import { SIZES, COLORS } from "../../../constants";
import PopularJobsCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Jobs </Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={[1, 2, 3, 4]}
                        renderItem={({ item }) => (
                            <PopularJobsCard item={item} />
                        )}
                        keyExtractor={(item) => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                )}
            </View>
        </View>
    );
};

export default Popularjobs;
