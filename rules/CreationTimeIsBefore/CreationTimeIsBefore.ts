import { IRule } from '../../app/IRule';
import { Rule } from '../../app/Rule';
import moment = require('moment');
import { IPermit } from '../../app/IPermit';

export class CreationTimeIsBefore extends Rule<IPermit> implements IRule<IPermit> {
    currentState!: any;
    context: any;

    constructor(time: string) {
        super();
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

    async execute(currentState: IPermit): Promise<IPermit> {
        console.log('CreationTimeIsBefore');
        this.currentState = currentState;

        if (this.condition()) {
            return this.action();
        } else {
            throw 'Creation Time is not Before Start Time';
        }
    }
}
