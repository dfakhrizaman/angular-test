import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherPageComponent } from './other-page/other-page.component';

const routes: Routes = [
  {
    path: 'other',
    component: OtherPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [OtherPageComponent];
