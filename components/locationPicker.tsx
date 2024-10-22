import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Modal from 'react-native-modal';

const cities = ['New York', 'Los Angeles', 'San Francisco', 'Miami', 'Chicago'];

const LocationSelect = () => {
    const [selectedCity, setSelectedCity] = useState('New York');
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleCitySelect = (city: string) => {
        setSelectedCity(city);
        toggleModal();
    };

    return (
        <View>
            {/* Location Button */}
            <TouchableOpacity style={styles.locationButton} onPress={toggleModal}>
                <Text style={styles.locationText}>{selectedCity}</Text>
                <Entypo name="chevron-down" size={16} color="black" />
            </TouchableOpacity>

            <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Select a City</Text>
                    <FlatList
                        data={cities}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleCitySelect(item)}>
                                <Text style={styles.modalItem}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
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
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    modalItem: {
        fontSize: 16,
        paddingVertical: 10,
    },
});

export default LocationSelect;
