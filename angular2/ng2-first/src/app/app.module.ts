import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';

/* 어플리케이션 라우팅 모듈 */
import { AppRoutingModule } from './app-routing.module';

/* 특징 모듈 */
import { MemberModule } from './member/member.module';
import { PlayerModule } from './player/player.module';
import { CoreModule } from './core/core.module';

/* 전역 컴포넌트 */
import { HelloComponent } from './hello/hello.component';
import { CoreTestComponent } from './core-test/core-test.component';

/* test */
import { TestDirecive } from './test-directive/test.directive';
import { TestModule } from './test-module/test.module';
import { TestPipe } from './test-pipe/test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // IntroComponent,
    // HelloComponent,
    // CoreTestComponent
    TestDirecive,
    TestPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TestModule
    // PlayerModule,   
    // AppRoutingModule,
    // CoreModule.forRoot({nickName:'Happy'}),
    // MemberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
