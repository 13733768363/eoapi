import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorageModule } from '../../../../modules/storage/storage.module';
import { StorageService } from '../../../../modules/storage/storage.service';
import { ApiTestHistoryService } from '../../../../shared/services/api-test-history/api-test-history.service';
import { ApiTestHistoryComponent } from './api-test-history.component';
import { storageSettingData } from '../../../../shared/models/storageSetting.model';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ApiTestService } from '../api-test.service';
describe('ApiTestHistoryComponent', () => {
  let component: ApiTestHistoryComponent;
  let fixture: ComponentFixture<ApiTestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzModalModule,StorageModule.forRoot({ setting: storageSettingData })],
      providers: [
        ApiTestHistoryService,
        NzMessageService,
        ApiTestService,
        StorageService,
      ],
      declarations: [ApiTestHistoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
