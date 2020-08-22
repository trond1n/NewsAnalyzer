import "../pages/paper.css";
import DataStorage from '../script/modules/DataStorage.js';
import Statistics from './components/Statistics.js';
import {
    resumeRequestKey,
    resumeRequestCounter,
    resumeTitleKey,
    tableMonth
} from '../script/constants/constants.js';

const dataStorage = new DataStorage();

const statistics = new Statistics(dataStorage, resumeRequestKey, resumeRequestCounter, resumeTitleKey, tableMonth);
statistics.statCounter();
statistics.getMonth();
