import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { registerRootComponent } from 'expo'

import Collection from './screens/collection'
import Feed from './screens/feed'
import Profile from './screens/profile'

const Tab = createBottomTabNavigator()

const screens = [
  { name: 'Feed', component: Feed },
  { name: 'Collection', component: Collection },
  { name: 'Profile', component: Profile }
]

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{ header: () => null }}
      >
        {screens.map((screen) => (
          <Tab.Screen name={screen.name} component={screen.component} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default registerRootComponent(App)
