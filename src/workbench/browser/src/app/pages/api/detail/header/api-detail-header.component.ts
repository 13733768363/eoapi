import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiEditHeaders } from '../../../../../../../../platform/browser/IndexedDB';
import { ApiDetailService } from '../api-detail.service';
@Component({
  selector: 'eo-api-detail-header',
  templateUrl: './api-detail-header.component.html',
  styleUrls: ['./api-detail-header.component.scss'],
})
export class ApiDetailHeaderComponent implements OnInit, OnChanges {
  @Input() model: ApiEditHeaders[];
  listConf: object = {};
  constructor(private detailService: ApiDetailService) {}

  ngOnInit(): void {
    this.initListConf();
  }
  ngOnChanges(changes) {
    // if (changes.model&&!changes.model.previousValue&&changes.model.currentValue) {
    //   this.model.push(Object.assign({}, this.itemStructure));
    // }
  }
  private initListConf() {
    this.listConf = this.detailService.initListConf({
      dragCacheVar: 'DRAG_VAR_API_EDIT_HEADER',
      title: '头部',
      nameTitle: '标签'
    });
  }
}
