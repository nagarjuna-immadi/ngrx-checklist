import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBan, faBell, faHandsHelping, faHeart, faInfo } from '@fortawesome/free-solid-svg-icons';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';

library.add(faGithub, faTwitter, faHeart, faHandsHelping, faBell, faBan, faInfo);

const materialModules = [
  MatToolbarModule,
  MatDialogModule,
  MatIconModule,
  MatCardModule
];

const otherModules = [
  FontAwesomeModule,
  FormsModule,
  ReactiveFormsModule
];

const components = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...components, AboutDialogComponent],
  imports: [
    CommonModule,
    ...otherModules,
    ...materialModules
  ],
  exports: [
    ...components,
    ...otherModules,
    ...materialModules
  ]
})
export class SharedModule { }
