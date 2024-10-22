import React, {useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";
import * as AppleAuthentication from 'expo-apple-authentication';
import { useRouter } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const LoginScreen = () => {
    const [loaded, error] = useFonts({
        'Montserrat': require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    });

    const router = useRouter();

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ImageBackground imageStyle={{ borderRadius: 20 }} source={require('../assets/images/banner.jpg')} style={styles.header}>
                <View style={styles.overlay} />
                <View style={styles.icon}>
                    <FontAwesome name="renren" size={30} color="#004038" />
                </View>
                <Text style={styles.title}>RentEasy</Text>
            </ImageBackground >

            <View style={styles.allLoginOptions}>
                <View style={styles.loginOptions}>
                    <TouchableOpacity style={styles.socialButton} onPress={() => console.log('clicked')}>
                        <FontAwesome name="google" size={24} color="#6293de" />
                        <Text style={styles.socialButtonText}>Sign in with Google</Text>
                    </TouchableOpacity>

                    <AppleAuthentication.AppleAuthenticationButton
                        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                        cornerRadius={5}
                        style={styles.appleButton}
                        onPress={() => {
                            console.log('clicked');
                        }}
                    />
                </View>

                <Text style={styles.orText}>Or continue with</Text>

                <TextInput
                    placeholder="Email address"
                    placeholderTextColor="#888"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#888"
                    secureTextEntry
                    style={styles.input}
                />

                <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/home')}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.createAccountText}>Not a member? Create an account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 60,
        paddingHorizontal: 6,
        backgroundColor: '#FFFFFF',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#004038',
        opacity: 0.8,
        borderRadius: 20
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        backgroundColor: '#004038',
        height: 250,
        borderRadius: 20
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: '#FFD65C',
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        color: 'white',
        fontFamily: 'Montserrat',
        marginTop: 10,
    },
    loginOptions: {
        marginBottom: 20,
    },
    allLoginOptions: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: "#EFEEEA",
        borderRadius: 20,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    socialButtonText: {
        marginLeft: 10,
        color: 'black',
        fontSize: 16,
    },
    appleButton: {
        width: '100%',
        height: 44,
        marginBottom: 10,
    },
    orText: {
        textAlign: 'center',
        color: '#888',
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    forgotText: {
        textAlign: 'right',
        color: '#666',
        marginBottom: 20,
    },
    continueButton: {
        backgroundColor: '#FFC107',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    continueButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    createAccountText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#333',
    },
});

export default LoginScreen;
