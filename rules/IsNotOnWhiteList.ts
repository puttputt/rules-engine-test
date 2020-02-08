import { IRule } from '../app/IRule';
import { IPermit } from '../app/IPermit';
import { WhiteListExampleService } from '../services/WhiteListExampleService';

export class IsNotOnWhiteList implements IRule {
    currentState!: IPermit;
    context: WhiteListExampleService;

    constructor() {
        this.context = new WhiteListExampleService();
    }

    condition() {
        return !this.context.isOnWhiteList(this.currentState.plate);
    }
    action() {
        return this.currentState;
    }

    execute(currentState: IPermit): IPermit {
        this.currentState = currentState;

        if (this.condition()) {
            return this.action();
        } else {
            throw 'Vehicle is on whitelist, cannot register';
        }
    }
}
