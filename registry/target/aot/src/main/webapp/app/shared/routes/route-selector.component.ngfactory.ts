/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from './route-selector.component.scss.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/common';
import * as import3 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
import * as import4 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config';
import * as import5 from '@angular/forms';
import * as import6 from '../refresh/refresh-selector.component.ngfactory';
import * as import7 from '../../../../../../../../src/main/webapp/app/shared/refresh/refresh-selector.component';
import * as import8 from '../../../../../../../../src/main/webapp/app/shared/refresh/refresh.service';
import * as import9 from '../../../../../../../../src/main/webapp/app/shared/pipe/group-by.pipe';
import * as import10 from '../../../../../../../../src/main/webapp/app/shared/routes/route-selector.component';
import * as import11 from '../../../../../../../../src/main/webapp/app/shared/routes/routes.service';
const styles_JhiRouteSelectorComponent:any[] = [import0.styles];
export const RenderType_JhiRouteSelectorComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_JhiRouteSelectorComponent,
  data: {}
}
);
function View_JhiRouteSelectorComponent_3(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),10,'button',[[
        'class',
        'dropdown-item'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        co.setActiveRoute(v.context.$implicit);
        const pd_0:any = ((<any>co.closeDropDown(import1.ɵnov(v.parent.parent,3))) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import2.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    (l()(),import1.ɵted((null as any),['\n\n                    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ' ',
      ''
    ]
    )),
    import1.ɵppd(1),
    (l()(),import1.ɵted((null as any),['\n                    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),2,'span',[[
        'class',
        'badge badge-pill font-weight-normal'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import2.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    (l()(),import1.ɵted((null as any),[
      '\n                        ',
      '\n                    '
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n                ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = 'dropdown-item';
    const currVal_1:any = co.state(v.context.$implicit);
    ck(v,1,0,currVal_0,currVal_1);
    const currVal_4:any = 'badge badge-pill font-weight-normal';
    const currVal_5:any = co.getBadgeClassRoute(v.context.$implicit);
    ck(v,8,0,currVal_4,currVal_5);
  },(ck,v) => {
    const currVal_2:any = import1.ɵunv(v,4,0,ck(v,5,0,import1.ɵnov(v.parent.parent.parent,1),v.context.$implicit.appName));
    const currVal_3:any = (v.context.$implicit.serviceId? (('(' + v.context.$implicit.serviceId) + ')'): '');
    ck(v,4,0,currVal_2,currVal_3);
    const currVal_6:any = v.context.$implicit.status;
    ck(v,9,0,currVal_6);
  });
}
function View_JhiRouteSelectorComponent_2(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),7,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'dropdown-header'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>$event.stopPropagation()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiRouteSelectorComponent_3)),
    import1.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n            ']))
  ]
  ,(ck,v) => {
    const currVal_1:any = v.context.$implicit.value;
    ck(v,6,0,currVal_1);
  },(ck,v) => {
    const currVal_0:any = v.context.$implicit.key;
    ck(v,3,0,currVal_0);
  });
}
function View_JhiRouteSelectorComponent_4(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Loading...']))
  ]
  ,(null as any),(null as any));
}
function View_JhiRouteSelectorComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),31,'div',[[
        'class',
        'route-selector col-xl-12 d-inline-flex'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),22,'div',[
      [
        'class',
        'dropdown'
      ]
      ,
      [
        'ngbDropdown',
        ''
      ]

    ]
    ,[
      [
        2,
        'dropdown',
        (null as any)
      ]
      ,
      [
        2,
        'dropup',
        (null as any)
      ]
      ,
      [
        2,
        'show',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'keyup.esc'
      ]
      ,
      [
        'document',
        'click'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('keyup.esc' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,3).closeFromOutsideEsc()) !== false);
        ad = (pd_0 && ad);
      }
      if (('document:click' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,3).closeFromOutsideClick($event)) !== false);
        ad = (pd_1 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import1.ɵdid(8192,[[
        'dropId',
        4
      ]
    ],0,import3.NgbDropdown,[import4.NgbDropdownConfig],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'aria-haspopup',
        'true'
      ]
      ,
      [
        'class',
        'btn btn-outline-primary dropdown-toggle'
      ]
      ,
      [
        'id',
        'sortMenu'
      ]
      ,
      [
        'ngbDropdownToggle',
        ''
      ]

    ]
    ,[
      [
        8,
        'innerHTML',
        1
      ]
      ,
      [
        1,
        'aria-expanded',
        0
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,6).toggleOpen()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import3.NgbDropdownToggle,[
      import3.NgbDropdown,
      import1.ElementRef
    ]
    ,(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),15,'div',[
      [
        'aria-expanded',
        'true'
      ]
      ,
      [
        'aria-labelledby',
        'sortMenu'
      ]
      ,
      [
        'class',
        'dropdown-menu'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>$event.stopPropagation()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),8,'p',[[
        'class',
        'd-flex'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),5,'input',[
      [
        'class',
        'form-control d-flex search'
      ]
      ,
      [
        'placeholder',
        'Search an application...'
      ]
      ,
      [
        'type',
        'search'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'click'
      ]
      ,
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('input' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,13)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,13).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import1.ɵnov(v,13)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import1.ɵnov(v,13)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_4:any = ((<any>(co.searchedInstance = $event)) !== false);
        ad = (pd_4 && ad);
      }
      if (('click' === en)) {
        const pd_5:any = ((<any>$event.stopPropagation()) !== false);
        ad = (pd_5 && ad);
      }
      if (('input' === en)) {
        const pd_6:any = ((<any>co.searchByAppName($event)) !== false);
        ad = (pd_6 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import5.DefaultValueAccessor,[
      import1.Renderer,
      import1.ElementRef,
      [
        2,
        import5.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import1.ɵprd(512,(null as any),import5.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import5.DefaultValueAccessor]),
    import1.ɵdid(335872,(null as any),0,import5.NgModel,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import5.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import1.ɵprd(1024,(null as any),import5.NgControl,(null as any),[import5.NgModel]),
    import1.ɵdid(8192,(null as any),0,import5.NgControlStatus,[import5.NgControl],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),2,(null as any),View_JhiRouteSelectorComponent_2)),
    import1.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import1.ɵppd(2),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'jhi-refresh-selector',([] as any[]),(null as any),(null as any),(null as any),import6.View_JhiRefreshSelectorComponent_0,import6.RenderType_JhiRefreshSelectorComponent)),
    import1.ɵdid(122880,(null as any),0,import7.JhiRefreshSelectorComponent,[import8.JhiRefreshService],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n\n    '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiRouteSelectorComponent_4)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_12:any = co.searchedInstance;
    ck(v,15,0,currVal_12);
    const currVal_13:any = import1.ɵunv(v,21,0,ck(v,22,0,import1.ɵnov(v.parent,0),co.routes,'appName'));
    ck(v,21,0,currVal_13);
    ck(v,27,0);
    const currVal_14:any = (co.updatingRoutes && (!co.routes || (co.routes.length == 0)));
    ck(v,30,0,currVal_14);
  },(ck,v) => {
    var co:any = v.component;
    const currVal_0:boolean = !import1.ɵnov(v,3).up;
    const currVal_1:any = import1.ɵnov(v,3).up;
    const currVal_2:any = import1.ɵnov(v,3).isOpen();
    ck(v,2,0,currVal_0,currVal_1,currVal_2);
    const currVal_3:any = co.getActiveRoute();
    const currVal_4:any = import1.ɵnov(v,6).dropdown.isOpen();
    ck(v,5,0,currVal_3,currVal_4);
    const currVal_5:any = import1.ɵnov(v,17).ngClassUntouched;
    const currVal_6:any = import1.ɵnov(v,17).ngClassTouched;
    const currVal_7:any = import1.ɵnov(v,17).ngClassPristine;
    const currVal_8:any = import1.ɵnov(v,17).ngClassDirty;
    const currVal_9:any = import1.ɵnov(v,17).ngClassValid;
    const currVal_10:any = import1.ɵnov(v,17).ngClassInvalid;
    const currVal_11:any = import1.ɵnov(v,17).ngClassPending;
    ck(v,12,0,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11);
  });
}
export function View_JhiRouteSelectorComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    import1.ɵpid(0,import9.GroupByPipe,([] as any[])),
    import1.ɵpid(0,import2.UpperCasePipe,([] as any[])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_JhiRouteSelectorComponent_1)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import10.JhiRouteSelectorComponent = v.component;
    const currVal_0:any = co.routes;
    ck(v,3,0,currVal_0);
  },(null as any));
}
function View_JhiRouteSelectorComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'jhi-route-selector',([] as any[]),(null as any),(null as any),(null as any),View_JhiRouteSelectorComponent_0,RenderType_JhiRouteSelectorComponent)),
    import1.ɵdid(122880,(null as any),0,import10.JhiRouteSelectorComponent,[
      import11.JhiRoutesService,
      import8.JhiRefreshService
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const JhiRouteSelectorComponentNgFactory:import1.ComponentFactory<import10.JhiRouteSelectorComponent> = import1.ɵccf('jhi-route-selector',import10.JhiRouteSelectorComponent,View_JhiRouteSelectorComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2FsZXhhbmRydS5jaW9jYW4vV29yay9taWNyb3NlcnZpY2UtZXhhbXBsZS9yZWdpc3RyeS9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yb3V0ZXMvcm91dGUtc2VsZWN0b3IuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2FsZXhhbmRydS5jaW9jYW4vV29yay9taWNyb3NlcnZpY2UtZXhhbXBsZS9yZWdpc3RyeS9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yb3V0ZXMvcm91dGUtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvYWxleGFuZHJ1LmNpb2Nhbi9Xb3JrL21pY3Jvc2VydmljZS1leGFtcGxlL3JlZ2lzdHJ5L3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3JvdXRlcy9yb3V0ZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2FsZXhhbmRydS5jaW9jYW4vV29yay9taWNyb3NlcnZpY2UtZXhhbXBsZS9yZWdpc3RyeS9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9yb3V0ZXMvcm91dGUtc2VsZWN0b3IuY29tcG9uZW50LnRzLkpoaVJvdXRlU2VsZWN0b3JDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwicm91dGUtc2VsZWN0b3IgY29sLXhsLTEyIGQtaW5saW5lLWZsZXhcIiAqbmdJZj1cInJvdXRlc1wiPlxuXG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCIgbmdiRHJvcGRvd24gI2Ryb3BJZD1cIm5nYkRyb3Bkb3duXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIGlkPVwic29ydE1lbnVcIiBuZ2JEcm9wZG93blRvZ2dsZSBbaW5uZXJIVE1MXT1cImdldEFjdGl2ZVJvdXRlKClcIj48L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJzb3J0TWVudVwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGQtZmxleCBzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhbiBhcHBsaWNhdGlvbi4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VhcmNoZWRJbnN0YW5jZVwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiAoaW5wdXQpPVwic2VhcmNoQnlBcHBOYW1lKCRldmVudClcIj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGFwcCBvZiByb3V0ZXMgfCBncm91cEJ5IDogJ2FwcE5hbWUnXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1oZWFkZXJcIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+e3thcHAua2V5fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiAqbmdGb3I9XCJsZXQgcm91dGUgb2YgYXBwLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZXRBY3RpdmVSb3V0ZShyb3V0ZSk7IGNsb3NlRHJvcERvd24oZHJvcElkKTtcIiBbbmdDbGFzc109XCJzdGF0ZShyb3V0ZSlcIj5cblxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3JvdXRlLmFwcE5hbWUgfCB1cHBlcmNhc2V9fSB7e3JvdXRlLnNlcnZpY2VJZCA/ICcoJyArIHJvdXRlLnNlcnZpY2VJZCArICcpJyA6ICcnIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXBpbGwgZm9udC13ZWlnaHQtbm9ybWFsXCIgW25nQ2xhc3NdPVwiZ2V0QmFkZ2VDbGFzc1JvdXRlKHJvdXRlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tyb3V0ZS5zdGF0dXN9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8amhpLXJlZnJlc2gtc2VsZWN0b3I+PC9qaGktcmVmcmVzaC1zZWxlY3Rvcj5cblxuICAgIDxwICpuZ0lmPVwidXBkYXRpbmdSb3V0ZXMgJiYgKCFyb3V0ZXMgfHwgcm91dGVzLmxlbmd0aCA9PSAwKVwiPkxvYWRpbmcuLi48L3A+XG48L2Rpdj5cbiIsIjxqaGktcm91dGUtc2VsZWN0b3I+PC9qaGktcm91dGUtc2VsZWN0b3I+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNXZ0I7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUNRO1FBQUE7UUFBQTtRQUFBO01BQUE7TUFEUjtJQUFBO2dCQUFBOzs7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQ3lGO0lBRXJGO0lBQU07TUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO2dCQUFBO0lBQTRGO01BQ2xHO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBd0Y7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUVqRjs7OztJQU5IO0lBQ3dEO0lBRGhFLFNBQVEsVUFDd0QsU0FEaEU7SUFJ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