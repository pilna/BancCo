import AdminMapPage from "../pages/admin-map/admin-map";
import ExplorePage from "../pages/explore/explore";
import HomePage from "../pages/home/home";
import LoginPage from "../pages/login/login";
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from "../pages/profile/profile";
import PromotedTrailPage from "../pages/promoted-trail/promoted-trail";
import React from 'react'
import RegisterPage from "../pages/register/register";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './routes';

const Stack = createNativeStackNavigator();

const Router = ({ credentials, setCredentials }) => {  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={routes.home}
          component={HomePage}
        />

        <Stack.Screen 
          name={routes.explore}
          component={(props) => (
            <ExplorePage 
              credentials={credentials}
              setCredentials={setCredentials}
              {...props}
            />
          )} 
        />

        <Stack.Screen
          name={routes.login}
          component={(props) => (
            <LoginPage
              credentials={credentials}
              setCredentials={setCredentials}
              {...props}
            />
          )}
        />
        
        <Stack.Screen
          name={routes.register}
          component={RegisterPage}
        />
        
        <Stack.Screen
          name={routes.profile}
          component={(props) => (
            <ProfilePage
              credentials={credentials}
              setCredentials={setCredentials}
              {...props}
            />
          )}
        />

        <Stack.Screen
          name={routes.promotedTrail}
          component={(props) => (
            <PromotedTrailPage
              credentials={credentials}
              setCredentials={setCredentials}
              {...props}
            />
          )}
        />

        <Stack.Screen
            name={routes.adminMap}
            component={(props) => (
              <AdminMapPage
                credentials={credentials}
                setCredentials={setCredentials}
                {...props}
              />
            )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router