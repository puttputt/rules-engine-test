import { IRule } from '../../app/IRule';
import { IPermit } from '../../app/IPermit';
import { WhiteListExampleService } from '../../services/WhiteListExampleService';
import { Rule } from '../../app/Rule';

export class IsNotOnWhiteList extends Rule<IPermit> {
    context: WhiteListExampleService;

    constructor() {
        super();
        this.context = new WhiteListExampleService();
    }

    condition() {
        return this.context.isOnWhiteList(this.currentState.plate);
    }

    async execute(currentState: IPermit): Promise<IPermit> {
        console.log('IsNotOnWhiteList');

        this.currentState = currentState;

        if (await this.condition()) {
            return this.action();
        } else {
            throw 'Vehicle is on whitelist, cannot register';
        }
    }
}
