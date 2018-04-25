// Always impoert {createStore} and render
import {createStore} from 'redux';
import reducer from './reducer';

// Export createStore by default and pass it 'reducer' as it's arguement
export default createStore(reducer);