import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'

const {Navigator, Screen} = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import SelectionMapPosition from './pages/CreateOrphanages/SelectMapPosition'
import OrphanageDate from './pages/CreateOrphanages/OrphanageDate'
import Header from './components/Header';

export default function Routes(){
    return (
        <NavigationContainer >
            <Navigator screenOptions= {{headerShown:false, cardStyle: {backgroundColor: '#f2f3f5'}}}>
                <Screen
                 name="OrphanagesMap" 
                 component= {OrphanagesMap} />

                 <Screen
                 name="OrphagesDetails" 
                 component= {OrphanageDetails}
                 options={{
                     headerShown: true,
                     header: ()=> <Header showCancel = {false} title= 'Orfanato'/>
                 }}
                  />
                  <Screen
                 name="SelectMapPosition" 
                 component= {SelectionMapPosition} 
                 options={{
                    headerShown: true,
                    header: ()=> <Header  title= 'Selecione no Mapa'/>
                }}/>

                <Screen
                 name="OrphanageDate" 
                 component= {OrphanageDate} 
                 options={{
                    headerShown: true,
                    header: ()=> <Header title= 'Informe os dados'/>
                }}/>
                
            </Navigator>
        </NavigationContainer>
    )
}