import { CreationTimeIsBefore } from './rules/CreationTimeIsBefore/CreationTimeIsBefore';
import { StartTimeIsFixedAtNow } from './rules/StartTimeIsFixedAtNow/StartTimeIsFixedAtNow';
import { IPermit } from './app/IPermit';
import { RulesEngine } from './app/RulesEngine';
import { IsNotOnWhiteList } from './rules/IsNotOnWhiteList/IsNotOnWhiteList';

let permit: IPermit = {
    plate: 'asdf',
    start: undefined,
    end: undefined,
};

const eng = new RulesEngine<IPermit>();

const a = new CreationTimeIsBefore('12:00:00');
const b = new StartTimeIsFixedAtNow();
const c = new IsNotOnWhiteList();

eng.register(a)
    .register(b)
    .register(c);

eng.run(permit).then(
    (r) => {
        console.log('index', r);
    },
    (e) => {
        console.error(e);
    },
);
