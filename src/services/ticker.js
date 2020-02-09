import io from "socket.io-client";
import { putData, setNasdaqList, setNasdaqCurrent } from "../store/actions";
import store from "../store/store";
import Axios from "axios";

export class Ticker {
    constructor(url, store) {
        this.url = url;
        this.socket = io(url, { autoConnect: false });
        this.store = store;
    }

    onReceiveData(payload) {
        this.store.dispatch(
            putData({
                ...JSON.parse(payload)
            })
        );
    }

    async getList() {
        const result = await Axios(`${this.url}/NASDAQ`, {
            method: "GET"
        });

        this.store.dispatch(setNasdaqList(result.data));
        this.store.dispatch(setNasdaqCurrent(result.data[0]));
    }

    getData(stockSymbol) {
        this.socket.disconnect();
        this.socket.connect();
        this.socket.emit("ticker", stockSymbol, 1000);
        this.socket.on(stockSymbol, data => {
            this.onReceiveData(data);
        });
    }
}

const ticker = new Ticker("http://localhost:4000", store);
ticker.getList();

export default ticker;
