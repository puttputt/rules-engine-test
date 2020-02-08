import { IRule } from '../app/IRule';
import moment = require('moment');
import { IPermit } from '../app/IPermit';

export class CreationTimeIsBefore implements IRule {
    currentState!: any;
    context: any;

    constructor(time: string) {
        this.context = moment(time, 'HH:mm:ss');
    }

    condition(): boolean {
        const now = moment();
        if (now.isBefore(this.context)) {
            return true;
        } else {
            return false;
        }
    }

    action(): IPermit {
        return this.currentState;
    }

    execute(currentState: IPermit): IPermit {
        this.currentState = currentState;

        if (this.condition()) {
            return this.action();
        } else {
            throw 'Creation Time is not Before Start Time';
        }
    }
}
