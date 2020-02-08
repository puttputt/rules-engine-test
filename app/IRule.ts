import { IPermit } from './IPermit';

export interface IRule {
    currentState: IPermit;
    context: any;

    condition?(): any;
    action(): any;
    execute(currentState: IPermit): IPermit;
}
