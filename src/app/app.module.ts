import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { ProjectsModule } from "./projects/projects.module";
import { ChecklistModule } from "./checklist/checklist.module";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProjectsModule,
    ChecklistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
