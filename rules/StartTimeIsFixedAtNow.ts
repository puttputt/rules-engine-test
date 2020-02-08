import { IRule } from '../app/IRule';
import { IPermit } from '../app/IPermit';

export class StartTimeIsFixedAtNow implements IRule {
    currentState!: IPermit;
    context: any;

    action(): IPermit {
        this.currentState.start = new Date();
        return this.currentState;
    }

    execute(state: IPermit): IPermit {
        this.currentState = state;
        return this.action();
    }
}
