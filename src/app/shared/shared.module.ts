import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
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
  MatDialogModule
];

const components = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...components, AboutDialogComponent],
  imports: [
    CommonModule,
    ...materialModules,
    FontAwesomeModule
  ],
  exports: [
    ...materialModules,
    ...components,
    FontAwesomeModule
  ]
})
export class SharedModule { }
