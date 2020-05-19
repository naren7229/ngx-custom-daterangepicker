import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  SatDatepickerModule,
} from 'saturn-datepicker';
import { NgxAdvancedDaterangepickerComponent } from './ngx-advanced-daterangepicker.component';

@NgModule({
  declarations: [NgxAdvancedDaterangepickerComponent],
  imports: [CommonModule, SatDatepickerModule, MatButtonModule],
  exports: [NgxAdvancedDaterangepickerComponent],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
  ],
})
export class NgxAdvancedDaterangepickerModule2 {}