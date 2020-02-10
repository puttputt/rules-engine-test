import { IRule } from '../../app/IRule';
import { IPermit } from '../../app/IPermit';
import { Rule } from '../../app/Rule';

export class StartTimeIsFixedAtNow extends Rule<IPermit> implements IRule<IPermit> {
    currentState!: IPermit;

    action(): IPermit {
        this.currentState.start = new Date();
        return this.currentState;
    }

    async execute(state: IPermit): Promise<IPermit> {
        console.log('StartTimeIsFixedAtNow');

        this.currentState = state;
        return this.action();
    }
}
