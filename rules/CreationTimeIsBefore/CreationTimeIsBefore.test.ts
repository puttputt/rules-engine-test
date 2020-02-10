import { CreationTimeIsBefore } from './CreationTimeIsBefore';
import { IPermit } from '../../app/IPermit';
let moment = require('moment');

const permit: IPermit = {
    plate: 'asdf',
};

test('When time is after creation time, should pass', async () => {
    const now = moment();
    now.add(1, 'hour');

    const a = new CreationTimeIsBefore(now.format('HH:mm:ss'));
    try {
        const result = await a.execute(permit);
        expect(result).toBeTruthy;
    } catch (error) {
        expect(error).toBeNull;
    }
});

test('When time is before creation time, should fail', async () => {
    const now = moment();
    now.subtract(1, 'hour');

    const a = new CreationTimeIsBefore(now.format('HH:mm:ss'));
    try {
        const result = await a.execute(permit);
    } catch (error) {
        expect(error).toBeTruthy;
    }
});
