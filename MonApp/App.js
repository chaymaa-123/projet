import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Assurez-vous d'avoir corrigé la casse des imports dans ce fichier
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import SettingsScreen from './Screens/SettingsScreen';
import AppBar from './Screens/AppBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}> 
            <Stack.Screen name="Accueil" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                // NOUVELLES COULEURS MINIMALISTES
                tabBarActiveTintColor: '#FFD700', // Or Pâle (Actif)
                tabBarInactiveTintColor: '#A0A0A0', // Gris Moyen (Inactif)
                tabBarStyle: { 
                    backgroundColor: '#121212', // Noir Profond
                    borderTopColor: '#333333', 
                    height: 65,
                },
                tabBarLabelStyle: { fontSize: 13, fontWeight: '600', color: '#FFFFFF' }, // Texte des onglets en blanc
            }}
        >
            <Tab.Screen 
                name="Maison" 
                component={HomeStack} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Paramètres" 
                component={SettingsScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }} 
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <AppBar /> 
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}