import "../pages/paper.css";
import DataStorage from '../script/modules/DataStorage.js';
import Statistics from './components/Statistics.js';
import {
    resumeRequestKey,
    resumeRequestCounter,
    resumeTitleKey,
    tableMonth,
    week,
    tableContainer,
    persents
} from '../script/constants/constants.js';

const dataStorage = new DataStorage();
const statistics = new Statistics(dataStorage, resumeRequestKey, resumeRequestCounter, resumeTitleKey, tableMonth, persents);
statistics.statCounter();
statistics.pullMonth();

//создаем строку
const createTableRow = () => new Statistics();
const dates = statistics.showDates();
const newsSet = statistics.percentageCounts();



// отрисовываем таблицу
function createTable() {
    for (let i = 0; i < week; i++) {
        for (let groupNews of newsSet) {

            if ((dates[i] === groupNews.publishedAt)) {
                const tableRowItem = createTableRow(dates[i], groupNews.percentage);
                const tableRow = tableRowItem.createTableRow(dates[i], groupNews.percentage);
                tableContainer.appendChild(tableRow);
            }
        }
    }
}
createTable();