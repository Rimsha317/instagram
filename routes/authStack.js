import Login from '../assets/Screens/login'
import Signup from '../assets//Screens/signUp'
import Welcome from '../assets/Screens/Welcome'


import {createStackNavigator} from 'react-navigation-stack'


export default authStack=createStackNavigator({


    Welcome:{

        screen:Welcome
    },
    Login:{

        screen:Login

    },
    SignUp:{

        screen:Signup

    },

 

})