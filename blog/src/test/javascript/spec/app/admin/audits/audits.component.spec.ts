import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

import { BlogTestModule } from '../../../test.module';
import { PaginationConfig } from '../../../../../../main/webapp/app/blocks/config/uib-pagination.config'
import { AuditsComponent } from '../../../../../../main/webapp/app/admin/audits/audits.component';
import { AuditsService } from '../../../../../../main/webapp/app/admin/audits/audits.service';

function getDate(isToday= true) {
    let date: Date = new Date();
    if (isToday) {
        // Today + 1 day - needed if the current day must be included
        date.setDate(date.getDate() + 1);
    } else {
      // get last month
      if (date.getMonth() === 0) {
        date = new Date(date.getFullYear() - 1, 11, date.getDate());
      } else {
        date = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
      }
    }
    const dateString = date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${dateString}`;
}

describe('Component Tests', () => {

    describe('AuditsComponent', () => {

        let comp: AuditsComponent;
        let fixture: ComponentFixture<AuditsComponent>;
        let service: AuditsService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [BlogTestModule],
                declarations: [AuditsComponent],
                providers: [
                    AuditsService,
                    NgbPaginationConfig,
                    PaginationConfig
                ]
            })
            .overrideTemplate(AuditsComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(AuditsComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AuditsService);
        });

        describe('previousMonth function ', () => {
            it('should set fromDate to current date', () => {
               comp.previousMonth();
               expect(comp.fromDate).toBe(getDate(false));
            });
        });
    });
});
