import axios from 'axios';

import sendInterval from './sendInterval';

jest.mock('axios');

describe('Send interval function testing', () => {
    test('It success', async() => {
        const testInterval = {
            data: 3000
        };
        axios.post.mockResolvedValue(testInterval);
        const responce = await sendInterval(3);
        return expect(responce).toEqual(3000);
    });
});
