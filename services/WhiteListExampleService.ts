export class WhiteListExampleService {
    private vehicles = ['asdf', 'fdsa', '1a2a3a'];

    public async isOnWhiteList(plate: string): Promise<boolean> {
        return new Promise((res, rej) => {
            console.log('isOnWhitelist');
            setTimeout(() => {
                res(!!this.vehicles.find((_) => _ === plate));
            }, 1000);
        });
    }
}
