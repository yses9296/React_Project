import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combineReducers(
    {
        counter, ui
    }
)

export default reducers;

// index.js >> counter.js & ui.js reducer들을 합치기 위한 파일