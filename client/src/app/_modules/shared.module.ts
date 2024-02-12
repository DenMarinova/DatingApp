import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot(
      {positionClass: "toast-bottom-right"}
    ),
    NgxSpinnerModule.forRoot({ type: 'ball-beat' })
  ],
  exports: [
    BsDropdownModule,
    TabsModule,
    ToastrModule,
    NgxSpinnerModule
  ]
})
export class SharedModule { }
