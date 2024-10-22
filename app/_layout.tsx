import { Stack, usePathname } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
    const pathname = usePathname();

    const navigationRoutes = ['/home', '/discover', '/favourite', '/messages'];

    const showNavigation = navigationRoutes.includes(pathname);

    return (
        <>
            {/* Stack Navigator */}
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="home" options={{ headerShown: false }} />
            </Stack>

            {showNavigation && (
                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="home" size={24} color={pathname === '/home' ? "#3A3834" : "#888"} />
                        <Text style={[styles.navText, pathname === '/home' && { color: "#3A3834" }]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="planet" size={24} color={pathname === '/home' ? "#3A3834" : "#888"} />
                        <Text style={[styles.navText, pathname === '/discover' && { color: "#3A3834" }]}>Discover</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="bookmark" size={24} color={pathname === '/home' ? "#3A3834" : "#888"} />
                        <Text style={[styles.navText, pathname === '/favourite' && { color: "#3A3834" }]}>Favourite</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="paper-plane" size={24} color={pathname === '/home' ? "#3A3834" : "#888"} />
                        <Text style={[styles.navText, pathname === '/messages' && { color: "#3A3834" }]}>Messages</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    bottomNav: {
        padding: 20,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#E6E3DE',
        paddingVertical: 10,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: '#888',
    },
});
