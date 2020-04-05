import { NgModule } from '@angular/core';
import {ClickOutsideModule} from 'ng-click-outside';
import { CommonModule } from '@angular/common';
import {BreadcrumbModule, CardModule} from './components';
import { SelectModule } from './components/select/select.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    SelectModule,
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    BreadcrumbModule,
    ClickOutsideModule
  ],
  exports: [
    SelectModule,
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    BreadcrumbModule,
    ClickOutsideModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
