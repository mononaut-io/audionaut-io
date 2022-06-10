import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Third Party Modules
import { AngularSvgIconModule } from 'angular-svg-icon';

// User Modules
import { SharedModule } from '@shared/shared.module';
import { CommandPaletteModule } from '@modules/command-palette/command-palette.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularSvgIconModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    CommandPaletteModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
