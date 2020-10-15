


import { createSwitchNavigator,createAppContainer } from 'react-navigation'


import AuthStack from './authStack'
import BottomTab from './bottomTab'

const Navigator = createSwitchNavigator({


    Auth: {
        screen: AuthStack
    },

    Tab:{

        screen:BottomTab
    }


})


const AppContainer=createAppContainer(Navigator)

export default AppContainer;
