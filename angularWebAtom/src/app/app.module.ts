import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SummaryPipe } from './my-custom-pipes/summary.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeScriptComponent } from './type-script/type-script.component';
import { MenuComponent } from './menu/menu.component';
import { DirectivesComponent } from './directives/directives.component';
import { MenuService } from './menu.service';
import { AddClassesComponent } from './add-classes/add-classes.component';
import { AddStylesComponent } from './add-styles/add-styles.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddInputComponent } from './add-input/add-input.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    SummaryPipe,
    AppComponent,
    TypeScriptComponent,
    MenuComponent,
    DirectivesComponent,
    AddClassesComponent,
    AddStylesComponent,
    AddEventComponent,
    AddInputComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
