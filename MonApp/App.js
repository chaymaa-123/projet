import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Import des composants locaux (vérifiez la casse "screens")
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import SettingsScreen from './Screens/SettingsSreen';
import AppBar from './Screens/appBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- Navigation par pile (HomeStack) ---

function HomeStack() {
    return (
        // Headers natifs cachés pour laisser place à l'AppBar fixe
        <Stack.Navigator screenOptions={{ headerShown: false }}> 
            <Stack.Screen name="Accueil" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

// --- Navigation principale par onglets (TabNavigator) ---

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            
                tabBarActiveTintColor: '#1E3A8A', 
                tabBarInactiveTintColor: '#9CA3AF', 
                tabBarStyle: { 
                    backgroundColor: '#FFFFFF',
                    borderTopColor: '#F8E9EB', 
                    height: 65,
                },
                tabBarLabelStyle: { fontSize: 13, fontWeight: '600' },
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
            {/* SafeAreaView englobe l'application entière */}
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                {/* La barre d'application fixe au sommet */}
                <AppBar /> 
                
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}