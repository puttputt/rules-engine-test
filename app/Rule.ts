import { IRule } from './IRule';

export class Rule<T> implements IRule<T> {
    currentState;

    condition?(): any {
        return true;
    }

    action?(): any {
        return this.currentState;
    }

    execute(currentState: T): Promise<T> {
        throw new Error('Method not implemented.');
    }

    async invoke(input: T): Promise<T> {
        return await this.execute(input);
    }
}
