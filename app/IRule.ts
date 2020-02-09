export interface IRule<T> {
    currentState?: T;
    context?: any;

    condition?(): any;
    action?(): any;
    execute?(currentState: T): Promise<T>;

    // invoke: (input: T, next: (input: T) => Promise<T>) => Promise<T>;
    invoke: (input: T) => Promise<T>;
}

interface RuleResult {
    input: T;
    error: string;
}
