import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

export const HomeRouterModule = RouterModule.forChild([
    { path: '', component: HomeComponent }
]);
