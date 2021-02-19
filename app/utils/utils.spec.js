import {addZero, formatDate} from './index';

describe('addZero function', ()=>{
    it('should accept a number and return a string', () => {
        const arg = 10;
        expect(addZero(arg)).toEqual('10');
    });
});

describe('formatDate function', ()=>{
    it('should accept Date object and return a formatted date string', () => {
        const date =  new Date(2000, 1, 1, 10, 0, 0);
        expect(formatDate(date)).toEqual('01/02/2000 10:00:00');
    });
});
