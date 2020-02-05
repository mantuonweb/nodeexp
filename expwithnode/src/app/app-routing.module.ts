import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { MarketComponent } from './components/market/market.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ContainerComponent } from './container/container.component';
const _applicationId = "expwithnode"
const routes: Routes = [
  {
    path:'',
    redirectTo: _applicationId, pathMatch: 'full'
  },
  {
    
    path:_applicationId,
    component:ContainerComponent,
    children:[{
      path: 'news',
      component: NewsComponent
    },
    {
      path: 'market',
      component: MarketComponent
    },
    {
      path: 'tools',
      component: ToolsComponent
    }]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
