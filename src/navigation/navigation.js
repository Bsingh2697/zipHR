
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { navigationConstants } from './../utils/constants/navigationConstants';
import welcomePage from '../containers/welcomePage';
import listView from '../containers/listView';


const stackNav = createStackNavigator({
    [navigationConstants.welcome] : {
        screen : welcomePage
    },
    [navigationConstants.listView] : {
        screen : listView
    }
},{
    initialRouteName : navigationConstants.welcome,
    headerMode  : 'none'
})

export default appNavigator = createAppContainer(stackNav)