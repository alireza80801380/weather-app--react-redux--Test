import React from 'react';
import WeatherApp from '../components/Weather';
import { Provider } from 'react-redux';
import Store from '../Store';






const App = ()=>{
    return (
        <Provider store={Store}>
        <div>
            <WeatherApp/>
        </div>
        </Provider>
    ) 
}

export default App;
