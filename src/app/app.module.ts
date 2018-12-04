import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HeaderComponent } from './pages/header/header.component';
import { AsideMenuComponent } from './pages/aside-menu/aside-menu.component';
import { AsideMenuItemComponent } from './pages/aside-menu-item/aside-menu-item.component';
import { RegisteComponent } from './pages/registe/registe.component';
import { appRouting } from './app.router';
import { FindMusicComponent } from './pages/find-music/find-music.component';
import { PrivateFmComponent } from './pages/private-fm/private-fm.component';
import { PublicFmComponent } from './pages/public-fm/public-fm.component';
import { FrendComponent } from './pages/frend/frend.component';
import { SongContainComponent } from './pages/song-contain/song-contain.component';
import { ContainGeneralizeComponent } from './pages/song-contain/contain-generalize/contain-generalize.component';
import { ContainTableComponent } from './pages/song-contain/contain-table/contain-table.component';
import { NumberPipePipe } from './pipe/number-pipe.pipe';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideMenuComponent,
    AsideMenuItemComponent,
    RegisteComponent,
    FindMusicComponent,
    PrivateFmComponent,
    PublicFmComponent,
    FrendComponent,
    SongContainComponent,
    ContainGeneralizeComponent,
    ContainTableComponent,
    NumberPipePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    appRouting
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
