import {Stack, usePathname, useRouter} from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
    const pathname = usePathname();

    const navigationRoutes = ['/home', '/discover', '/favourite', '/messages'];

    const showNavigation = navigationRoutes.includes(pathname);

    const router = useRouter();

    return (
        <>
            {/* Stack Navigator */}
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="home" options={{ headerShown: false }} />
                <Stack.Screen name="discover" options={{ headerShown: false }} />
            </Stack>

            {showNavigation && (
                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navItem} onPress={() => router.push('/home')}>
                        <Ionicons name="home" size={24} color={pathname === '/home' ? "#004038" : "#888"} />
                        <Text style={[styles.navText, pathname === '/home' && { color: "#004038" }]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem} onPress={() => router.push('/discover')}>
                        <Ionicons name="planet" size={24} color={pathname === '/discover' ? "#004038" : "#888"} />
                        <Text style={[styles.navText, pathname === '/discover' && { color: "#004038" }]}>Discover</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="bookmark" size={24} color={pathname === '/favourite' ? "#004038" : "#888"} />
                        <Text style={[styles.navText, pathname === '/favourite' && { color: "#004038" }]}>Favourite</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="paper-plane" size={24} color={pathname === '/messages' ? "#004038" : "#888"} />
                        <Text style={[styles.navText, pathname === '/messages' && { color: "#004038" }]}>Messages</Text>
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
