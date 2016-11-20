import { HomeComponent } from './home.component';

describe(`Component: Home Component`, () => {
    it(`should have a component`, () => {
        let comp = new HomeComponent();
        expect(comp).toBeTruthy();
    });

        it(`should have a component`, () => {
        let comp = new HomeComponent();
        expect(comp.title).toEqual('Stevo rocks');
    });

});
