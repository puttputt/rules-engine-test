import { IRule } from './IRule';
import { IRuleResult } from './IRuleResult';

export class RulesEngine<T> {
    private rules: IRule<T>[] = [];

    public register(rule: IRule<T>): RulesEngine<T> {
        this.rules.push(rule);
        return this;
    }

    public run(input: T): Promise<IRuleResult<T>> {
        return this.next(input);
    }

    protected next = async (input: T): Promise<IRuleResult<T>> => {
        try {
            for (let rule of this.rules) {
                input = await rule.invoke(input);
            }
        } catch (err) {
            console.error('error', err);
            return { error: err };
        }

        return { result: input };
    };
}
