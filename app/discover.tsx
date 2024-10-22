import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet, Image } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

const DiscoverScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState('Houses');

    const categories = ['Houses', 'Apartments', 'Offices', 'Commercial'];

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Let's get started"
                    placeholderTextColor="#888"
                    style={styles.searchInput}
                />
                <TouchableOpacity style={styles.searchButton}>
                    <FontAwesome name="search" size={20} color="white" />
                </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={[
                            styles.categoryButton,
                            selectedCategory === category && styles.categoryButtonSelected,
                        ]}
                        onPress={() => setSelectedCategory(category)}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategory === category && styles.categoryTextSelected,
                            ]}
                        >
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.featuredContainer}>
                <Text style={styles.featuredTitle}>Featured properties</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.propertiesContainer}>
                <View style={styles.propertyCard}>
                    <Image
                        source={require('../assets/images/banner.jpg')} // Imagem genérica
                        style={styles.propertyImage}
                    />
                    <View style={styles.propertyInfo}>
                        <Text style={styles.propertyPrice}>$4,40,000</Text>
                        <Text style={styles.propertyName}>Nacary Elite House</Text>
                        <Text style={styles.propertyLocation}>2328 Despard Street, Atlanta, GA</Text>
                        <View style={styles.propertyDetails}>
                            <Text>2 Beds</Text>
                            <Text>2 Baths</Text>
                            <Text>350 sqft</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        marginTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    searchButton: {
        backgroundColor: '#004038',
        padding: 10,
        borderRadius: 10,
    },
    categoryContainer: {
        flex: 1,
        margin: 0,
        padding: 0,
        flexDirection: 'row',
    },
    categoryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        borderRadius: 20,
        marginRight: 10,
        width: 100,
        height: 50
    },
    categoryButtonSelected: {
        backgroundColor: '#004038',
    },
    categoryText: {
        color: '#555',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
    },
    categoryTextSelected: {
        color: 'white',
    },
    featuredContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    featuredTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    viewAllText: {
        color: '#888',
    },
    propertiesContainer: {
        flexDirection: 'row',
    },
    propertyCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginRight: 15,
        overflow: 'hidden',
        height: 250
    },
    propertyImage: {
        width: '100%',
        height: 120,
    },
    propertyInfo: {
        padding: 10,
    },
    propertyPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    propertyName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
        marginVertical: 5,
    },
    propertyLocation: {
        color: '#888',
        marginBottom: 5,
    },
    propertyDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default DiscoverScreen;
