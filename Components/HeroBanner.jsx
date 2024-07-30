import React, { useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import { calcHeight, calcWidth } from '../helper/res';

const { width: windowWidth } = Dimensions.get('window');

const HeroBanner = () => {
    const scrollViewRef = useRef(null);

    const handleScrollEnd = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / windowWidth);
        scrollViewRef.current.scrollTo({ x: index * windowWidth, animated: true });
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={handleScrollEnd}
                contentContainerStyle={styles.scrollViewContainer}
                snapToAlignment="center"
                decelerationRate="fast"
                snapToInterval={windowWidth} // Align to window width for snapping
            >
                <Image source={banner2} style={styles.image} />
                <Image source={banner1} style={styles.image} />
                <Image source={banner2} style={styles.image} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        width: calcWidth(100),
        height: calcHeight(12),
        marginHorizontal: calcWidth(1),
        borderWidth:1,
        borderRadius:calcWidth(4)
    },
});

export default HeroBanner;
