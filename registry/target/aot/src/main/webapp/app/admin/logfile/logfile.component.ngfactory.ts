/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from './logfile.scss.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../../shared/routes/route-selector.component.ngfactory';
import * as import3 from '../../../../../../../../src/main/webapp/app/shared/routes/route-selector.component';
import * as import4 from '../../../../../../../../src/main/webapp/app/shared/routes/routes.service';
import * as import5 from '../../../../../../../../src/main/webapp/app/shared/refresh/refresh.service';
import * as import6 from '@angular/common';
import * as import7 from '../../../../../../../../src/main/webapp/app/admin/logfile/logfile.component';
import * as import8 from '../../../../../../../../src/main/webapp/app/admin/logfile/logfile.service';
const styles_JhiLogfileComponent:any[] = [import0.styles];
export const RenderType_JhiLogfileComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_JhiLogfileComponent,
  data: {}
}
);
function View_JhiLogfileComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'to-bottom'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.scrollToBottom()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      (l()(),import1.ɵeld(0,(null as any),(null as any),0,'i',[[
        'class',
        'fa fa-arrow-circle-down'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[' Bottom']))
  ]
  ,(null as any),(null as any));
}
function View_JhiLogfileComponent_2(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'to-top'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.scrollToTop()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      (l()(),import1.ɵeld(0,(null as any),(null as any),0,'i',[[
        'class',
        'fa fa-arrow-circle-up'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[' Top']))
  ]
  ,(null as any),(null as any));
}
export function View_JhiLogfileComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    import1.ɵqud(201326592,1,{logFileViewer: 0}),
    (l()(),import1.ɵeld(0,(null as any),(null as any),19,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['View logs'])),
    (l()(),import1.ɵted((null as any),['\n\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'jhi-route-selector',([] as any[]),(null as any),(null as any),(null as any),import2.View_JhiRouteSelectorComponent_0,import2.RenderType_JhiRouteSelectorComponent)),
    import1.ɵdid(122880,(null as any),0,import3.JhiRouteSelectorComponent,[
      import4.JhiRoutesService,
      import5.JhiRefreshService
    ]
    ,(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n\n    '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiLogfileComponent_1)),
    import1.ɵdid(8192,(null as any),0,import6.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,[
      [
        1,
        0
      ]
      ,
      [
        'logfile',
        1
      ]

    ]
    ,(null as any),1,'textarea',[
      [
        'class',
        'form-control log-viewer'
      ]
      ,
      [
        'readonly',
        ''
      ]
      ,
      [
        'rows',
        '30'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      '\n        '
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiLogfileComponent_2)),
    import1.ɵdid(8192,(null as any),0,import6.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import7.JhiLogfileComponent = v.component;
    ck(v,7,0);
    const currVal_0:any = co.logtxt;
    ck(v,10,0,currVal_0);
    const currVal_2:any = co.logtxt;
    ck(v,19,0,currVal_2);
  },(ck,v) => {
    var co:import7.JhiLogfileComponent = v.component;
    const currVal_1:any = co.logtxt;
    ck(v,15,0,currVal_1);
  });
}
function View_JhiLogfileComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'jhi-logfile',([] as any[]),(null as any),(null as any),(null as any),View_JhiLogfileComponent_0,RenderType_JhiLogfileComponent)),
    import1.ɵdid(122880,(null as any),0,import7.JhiLogfileComponent,[
      import8.JhiLogfileService,
      import4.JhiRoutesService
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const JhiLogfileComponentNgFactory:import1.ComponentFactory<import7.JhiLogfileComponent> = import1.ɵccf('jhi-logfile',import7.JhiLogfileComponent,View_JhiLogfileComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2FsZXhhbmRydS5jaW9jYW4vV29yay9taWNyb3NlcnZpY2UtZXhhbXBsZS9yZWdpc3RyeS9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ2ZpbGUvbG9nZmlsZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvYWxleGFuZHJ1LmNpb2Nhbi9Xb3JrL21pY3Jvc2VydmljZS1leGFtcGxlL3JlZ2lzdHJ5L3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9nZmlsZS9sb2dmaWxlLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2FsZXhhbmRydS5jaW9jYW4vV29yay9taWNyb3NlcnZpY2UtZXhhbXBsZS9yZWdpc3RyeS9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ2ZpbGUvbG9nZmlsZS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2FsZXhhbmRydS5jaW9jYW4vV29yay9taWNyb3NlcnZpY2UtZXhhbXBsZS9yZWdpc3RyeS9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ2ZpbGUvbG9nZmlsZS5jb21wb25lbnQudHMuSmhpTG9nZmlsZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXY+XG4gICAgPGgyPlZpZXcgbG9nczwvaDI+XG5cbiAgICA8amhpLXJvdXRlLXNlbGVjdG9yPjwvamhpLXJvdXRlLXNlbGVjdG9yPlxuXG4gICAgPGRpdiBjbGFzcz1cInRvLWJvdHRvbVwiICpuZ0lmPVwibG9ndHh0XCIgKGNsaWNrKT1cInNjcm9sbFRvQm90dG9tKClcIj48aSBjbGFzcz1cImZhIGZhLWFycm93LWNpcmNsZS1kb3duXCI+PC9pPiBCb3R0b208L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8dGV4dGFyZWEgI2xvZ2ZpbGUgcmVhZG9ubHkgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbG9nLXZpZXdlclwiIHJvd3M9XCIzMFwiPlxue3tsb2d0eHR9fVxuICAgICAgICA8L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0by10b3BcIiAqbmdJZj1cImxvZ3R4dFwiIChjbGljayk9XCJzY3JvbGxUb1RvcCgpXCI+PGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1jaXJjbGUtdXBcIj48L2k+IFRvcDwvZGl2PlxuPC9kaXY+XG4iLCI8amhpLWxvZ2ZpbGU+PC9qaGktbG9nZmlsZT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0tJO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBc0M7UUFBQTtRQUFBO01BQUE7TUFBdEM7SUFBQTtNQUFpRTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXVDOzs7Ozs7TUFNeEc7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFtQztRQUFBO1FBQUE7TUFBQTtNQUFuQztJQUFBO01BQTJEO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBcUM7Ozs7Ozs7SUFYcEc7SUFBSztJQUNEO0lBQUk7SUFBYztJQUVsQjtnQkFBQTs7O0lBQUE7S0FBQTtJQUF5QztJQUV6QztnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXFIO01BQ3JIO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7SUFDcEI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUFzRTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBRTNEO0lBQ1Q7SUFDTjtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTBHO0lBQ3hHOzs7O0lBVEY7SUFFdUI7SUFBdkIsVUFBdUIsU0FBdkI7SUFNb0I7SUFBcEIsVUFBb0IsU0FBcEI7OztJQUowRTtJQUFBOzs7OztJQ1A5RTtnQkFBQTs7O0lBQUE7S0FBQTs7O0lBQUE7OzsifQ==