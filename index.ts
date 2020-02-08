import { CreationTimeIsBefore } from './rules/CreationTimeIsBefore';
import { StartTimeIsFixedAtNow } from './rules/StartTimeIsFixedAtNow';
import { IPermit } from './app/IPermit';
import { RulesEngine } from './app/RulesEngine';
import { IsNotOnWhiteList } from './rules/IsNotOnWhiteList';

let permit: IPermit = {
    plate: 'asdf',
    start: undefined,
    end: undefined,
};

const eng = new RulesEngine(permit);

const a = new CreationTimeIsBefore('17:00:00');
const b = new StartTimeIsFixedAtNow();
const c = new IsNotOnWhiteList();

eng.register(a);
eng.register(b);
eng.register(c);

permit = eng.execute();

console.log(permit);
