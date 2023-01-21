import { AntDesign } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Collection from './screens/collection'
import Feed from './screens/feed'
import Profile from './screens/profile'

const Tab = createBottomTabNavigator()

type Screen = {
  name: string
  component: () => JSX.Element
  icon: React.ComponentProps<typeof AntDesign>['name']
}

const screens: Screen[] = [
  { name: 'Feed', component: Feed, icon: 'picture' },
  { name: 'Collection', component: Collection, icon: 'inbox' },
  { name: 'Profile', component: Profile, icon: 'user' }
]

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{ header: () => null }}
        >
          {screens.map((screen) => (
            <Tab.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              options={{
                tabBarIcon: ({ color }) => (
                  <AntDesign name={screen.icon} size={24} color={color} />
                )
              }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default registerRootComponent(App)
