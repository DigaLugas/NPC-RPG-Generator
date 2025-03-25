import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NpcGeneratorComponent } from './components/npc-generator/npc-generator.component';
import { NpcDisplayComponent } from './components/npc-display/npc-display.component';
import { NpcHistoryComponent } from './components/npc-history/npc-history.component';

@NgModule({
  declarations: [
    AppComponent,
    NpcGeneratorComponent,
    NpcDisplayComponent,
    NpcHistoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: NpcGeneratorComponent },
      { path: 'history', component: NpcHistoryComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
