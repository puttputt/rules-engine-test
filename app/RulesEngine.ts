import { IRule } from './IRule';
import { IPermit } from './IPermit';

export class RulesEngine {
    private rules: IRule[] = [];
    private currentState: IPermit;

    constructor(state: IPermit) {
        this.currentState = state;
    }
    public register(rule: IRule) {
        this.rules.push(rule);
    }

    public execute(): IPermit {
        try {
            for (var rule of this.rules) {
                console.info('Executing', rule);
                this.currentState = rule.execute(this.currentState);
            }
        } catch (error) {
            console.error(error);
        }

        return this.currentState;
    }
}
