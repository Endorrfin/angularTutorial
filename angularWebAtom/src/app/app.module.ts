import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TypeScriptComponent,
    MenuComponent,
    DirectivesComponent,
    AddClassesComponent,
    AddStylesComponent,
    AddEventComponent,
    AddInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
