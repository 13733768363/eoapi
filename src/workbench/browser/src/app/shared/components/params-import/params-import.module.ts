import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ParamsImportComponent } from './params-import.component';

import { EouiModule } from '../../../eoui/eoui.module';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [ParamsImportComponent],
  imports: [FormsModule, NzDropDownModule, NzModalModule, NzButtonModule, NzMessageModule, EouiModule],
  exports: [ParamsImportComponent],
})
export class ParamsImportModule {}
