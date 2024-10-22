import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import LocationSelect from "@/components/locationPicker";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/banner.jpg')}>
                <View style={styles.overlay} />
                <View style={styles.header}>
                    <View style={{ display: 'flex', flexDirection: "column", gap: 10 }}>
                        <Image
                            source={require('../assets/images/profile.jpg')}
                            style={styles.profileImage}
                        />
                        <View>
                            <Text style={styles.greeting}>Hello Vinicius</Text>
                            <Text style={styles.exploreText}>Let's start Exploring</Text>
                        </View>
                    </View>
                    <LocationSelect />
                </View>

                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <FontAwesome name="search" size={20} color="#888" />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search Properties, Regions..."
                            placeholderTextColor="#888"
                        />
                    </View>
                    <TouchableOpacity style={styles.filterButton}>
                        <MaterialIcons name="filter-list" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <ScrollView style={{ padding: 16 }}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Image
                            source={require('../assets/images/profile.jpg')} // Imagem do usuário que postou
                            style={styles.userImage}
                        />
                        <Text style={styles.userName}>Micheal</Text>
                        <Text style={styles.postTime}>2h ago</Text>
                    </View>
                    <Image
                        source={require('../assets/images/bicicle.jpeg')} // Imagem da propriedade
                        style={styles.propertyImage}
                    />
                    <View style={styles.propertyInfo}>
                        <Text style={styles.price}>R$200,00/m</Text>
                        <View style={styles.detailsRow}>
                            <Text style={styles.detail}>Bicicleta Mountain nova 6 marchas, acompanha suporte de parede</Text>
                        </View>
                        <Text style={styles.propertyName}>Bicicleta Mountain Bike ou MTB</Text>
                        <Text style={styles.propertyLocation}>New York, US</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEEEA',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#004038',
        opacity: 0.8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 20,
        marginTop: 20
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    greeting: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '600',
    },
    exploreText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    locationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFD65C',
        padding: 8,
        borderRadius: 10,
    },
    locationText: {
        color: 'black',
        marginRight: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 20
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginRight: 10,
    },
    searchInput: {
        marginLeft: 10,
        fontSize: 16,
        flex: 1,
    },
    filterButton: {
        backgroundColor: '#E6E3DE',
        padding: 10,
        borderRadius: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        flex: 1,
    },
    postTime: {
        color: '#888',
    },
    propertyImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },
    propertyInfo: {
        alignItems: 'flex-start',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#004038',
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    detail: {
        color: '#888',
    },
    propertyName: {
        fontSize: 16,
        fontWeight: '600',
    },
    propertyLocation: {
        color: '#888',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: '#333',
        marginTop: 5,
    },
});

export default HomeScreen;
