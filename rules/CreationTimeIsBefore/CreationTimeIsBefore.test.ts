import { CreationTimeIsBefore } from './CreationTimeIsBefore';
import { IPermit } from '../../app/IPermit';
let moment = require('moment');

const permit: IPermit = {
    plate: 'asdf',
};

test('', () => {
    const now = moment();
    now.add(1, 'hour');

    const a = new CreationTimeIsBefore(now.format('HH:mm:ss'));
    expect(a.execute(permit)).toBeInstanceOf(permit);
});

test('', () => {
    const now = moment();
    now.subtract(1, 'hour');

    const a = new CreationTimeIsBefore(now.format('HH:mm:ss'));
    expect(a.execute(permit)).toThrow();
});
