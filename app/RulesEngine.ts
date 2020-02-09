import { IRule } from './IRule';
import { IPermit } from './IPermit';

export class RulesEngine<T> {
    private rules: IRule<T>[] = [];

    private current: number = 0;

    public register(rule: IRule<T>): RulesEngine<T> {
        this.rules.push(rule);
        return this;
    }

    public run(input: T): Promise<T> {
        return this.next(input);
    }

    private getCurrentRule(): IRule<T> {
        if (this.current <= this.rules.length - 1) {
            return this.rules[this.current];
        }
        return null;
    }

    protected incrementCurrent(): void {
        this.current++;
    }

    protected next = async (input: T): Promise<T> => {
        try {
            for (let rule of this.rules) {
                input = await rule.invoke(input);
            }
        } catch (err) {
            console.error('error', err);
            throw err;
        }

        return input;
    };
}
