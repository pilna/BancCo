import ExplorePage from "../pages/explore/explore";
import HomePage from "../pages/home/home";
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './routes';

const Stack = createNativeStackNavigator();

const Router = () => {  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={routes.home}
          component={HomePage}
        />

        <Stack.Screen 
          name={routes.explore}
          component={ExplorePage} 
        />
    {/* // 
    //     <Stack.Screen
    //       name={routes.register}
    //       component={RegisterPage}
    //     />
        
    //     <Stack.Screen
    //       name={routes.login}
    //       component={LoginPage}
    //     />
        
    //     <Stack.Screen
    //       name={routes.profile}
    //       component={ProfilePage}
    //     />

    //     <Stack.Screen
    //       name={routes.promotedTrail}
    //       component={PromotedTrailPage}
    //     />

    //     <Stack.Screen
    //       name={routes.recordTrail}
    //       component={RecordTrailPage}
    //     /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router