import { createStackNavigator } from '@react-navigation/stack';

import { Form } from '../screens/Form';
import { Home } from '../screens/Home/index';

const { Navigator, Screen } = createStackNavigator();

export function NavigationStack() {
  return (
    <Navigator initialRouteName='Form' screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Form" component={Form} />
    </Navigator>
  );
}