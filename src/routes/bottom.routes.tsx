import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home/styles';
import Gallery from '../pages/gallery/styles';

const Tab = createBottomTabNavigator();

export default function BottomRoutes(){
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
      }}
      //tabBar={pros=><CustomTabBar {...pros}/>}
      >
      <Tab.Screen 
      name="Home" 
      component={Home} />
      <Tab.Screen name="gallery" 
      component={Gallery} />
    </Tab.Navigator>
  );
}