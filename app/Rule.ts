import { IRule } from './IRule';

export class Rule<T> implements IRule<T> {
    execute(currentState: T): Promise<T> {
        throw new Error('Method not implemented.');
    }

    async invoke(input: T): Promise<T> {
        var res = await this.execute(input);
        return res;
    }
}
