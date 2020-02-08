export class WhiteListExampleService {
    private vehicles = ['asdf', 'fdsa', '1a2a3a'];

    public isOnWhiteList(plate: string) {
        return this.vehicles.find((_) => _ === plate);
    }
}
