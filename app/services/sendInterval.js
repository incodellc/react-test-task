import axios from 'axios';

const sendInterval = async(seconds) => {
    const interval = seconds * 1000;
    const obj = {
        interval
    };
    try {
        const result = await axios.post('http://localhost:4000/', obj);
        console.log('sended', result);
        const postResult = await result.data;
        return postResult;
    } catch (err) {
        console.error(err);
    }
};

export default sendInterval;
