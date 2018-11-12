import { RouterModule, Routes } from '@angular/router';
import { FindMusicComponent } from './pages/find-music/find-music.component';
import { PrivateFmComponent } from './pages/private-fm/private-fm.component';
import { PublicFmComponent } from './pages/public-fm/public-fm.component';
import { FrendComponent } from './pages/frend/frend.component';
import { SongContainComponent } from './pages/song-contain/song-contain.component';

const routes: Routes = [
  // { path: '**', pathMatch: 'full', redirectTo: '' }
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'findMusic',
  },
  {
    path: 'findMusic',
    component: FindMusicComponent
  },
  {
    path: 'privateFm',
    component: PrivateFmComponent
  },
  {
    path: 'publicFm',
    component: PublicFmComponent
  },
  {
    path: 'frend',
    component: FrendComponent
  },
  {
    path: 'songListDetails/:id',
    component: SongContainComponent
  }
];
// 将路由配置导出为 appRouting 以供调用, 子模块中的路由使用 forChild 而不是 forRoot
export const appRouting = RouterModule.forRoot(routes);
