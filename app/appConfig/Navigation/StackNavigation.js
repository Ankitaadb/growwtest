import { createStackNavigator } from 'react-navigation';
import { HomeContainer } from '../../screens/home/containers'

export default createStackNavigator({
    home: {
        screen: HomeContainer
    }
    
});