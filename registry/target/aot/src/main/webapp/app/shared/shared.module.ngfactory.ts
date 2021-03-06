/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../../../../src/main/webapp/app/shared/shared.module';
import * as import2 from '@angular/common';
import * as import3 from '@ng-bootstrap/ng-bootstrap/alert/alert.module';
import * as import4 from '@ng-bootstrap/ng-bootstrap/buttons/radio.module';
import * as import5 from '@ng-bootstrap/ng-bootstrap/collapse/collapse.module';
import * as import6 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module';
import * as import7 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module';
import * as import8 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module';
import * as import9 from '@ng-bootstrap/ng-bootstrap/accordion/accordion.module';
import * as import10 from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
import * as import11 from '@angular/forms';
import * as import12 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import * as import13 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import * as import14 from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import * as import15 from '@ng-bootstrap/ng-bootstrap/pagination/pagination.module';
import * as import16 from '@ng-bootstrap/ng-bootstrap/popover/popover.module';
import * as import17 from '@ng-bootstrap/ng-bootstrap/rating/rating.module';
import * as import18 from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';
import * as import19 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module';
import * as import20 from '@ng-bootstrap/ng-bootstrap/index';
import * as import21 from '@angular/http';
import * as import22 from 'ng2-translate/index';
import * as import23 from 'ng-jhipster/index';
import * as import24 from 'ngx-infinite-scroll';
import * as import25 from '../../../../../../../src/main/webapp/app/shared/shared-libs.module';
import * as import26 from '../../../../../../../src/main/webapp/app/shared/shared-common.module';
import * as import27 from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import * as import28 from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as import29 from '@ng-bootstrap/ng-bootstrap/alert/alert-config';
import * as import30 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config';
import * as import31 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config';
import * as import32 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config';
import * as import33 from '@ng-bootstrap/ng-bootstrap/accordion/accordion-config';
import * as import34 from '@ng-bootstrap/ng-bootstrap/carousel/carousel-config';
import * as import35 from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import * as import36 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n';
import * as import37 from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';
import * as import38 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config';
import * as import39 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config';
import * as import40 from '@ng-bootstrap/ng-bootstrap/pagination/pagination-config';
import * as import41 from '@ng-bootstrap/ng-bootstrap/popover/popover-config';
import * as import42 from '@ng-bootstrap/ng-bootstrap/rating/rating-config';
import * as import43 from '@ng-bootstrap/ng-bootstrap/tabset/tabset-config';
import * as import44 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config';
import * as import45 from 'ng2-translate/src/translate.parser';
import * as import46 from 'ng-jhipster/src/config.service';
import * as import47 from 'ng2-translate/src/translate.service';
import * as import48 from 'ng-jhipster/src/service/data-util.service';
import * as import49 from 'ng-jhipster/src/service/date-util.service';
import * as import50 from 'ng-jhipster/src/service/event-manager.service';
import * as import51 from 'ng-jhipster/src/service/parse-links.service';
import * as import52 from 'ng-jhipster/src/service/pagination-util.service';
import * as import53 from 'ng-jhipster/src/service/base64.service';
import * as import54 from 'ng-jhipster/src/language/language.service';
import * as import55 from '@angular/platform-browser';
import * as import56 from '../../../../../../../src/main/webapp/app/shared/routes/routes.service';
import * as import57 from '../../../../../../../src/main/webapp/app/shared/refresh/refresh.service';
import * as import58 from '../../../../../../../src/main/webapp/app/shared/auth/auth-jwt.service';
import * as import59 from '../../../../../../../src/main/webapp/app/shared/auth/auth-session.service';
import * as import60 from 'angular2-cookie/services/cookies.service';
import * as import61 from '../../../../../../../src/main/webapp/app/shared/auth/account.service';
import * as import62 from '../../../../../../../src/main/webapp/app/shared/auth/principal.service';
import * as import63 from '../../../../../../../src/main/webapp/app/shared/login/login.service';
import * as import64 from '../../../../../../../src/main/webapp/app/shared/login/login-modal.service';
import * as import65 from '../../../../../../../src/main/webapp/app/shared/oauth2/login-oauth2.service';
import * as import66 from '../../../../../../../src/main/webapp/app/shared/auth/state-storage.service';
import * as import67 from '../../../../../../../src/main/webapp/app/shared/auth/csrf.service';
import * as import68 from '../../../../../../../src/main/webapp/app/shared/user/user.service';
import * as import69 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory';
import * as import70 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory';
import * as import71 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory';
import * as import72 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory';
import * as import73 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory';
import * as import74 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory';
import * as import75 from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory';
import * as import76 from './login/login.component.ngfactory';
import * as import77 from 'ng2-webstorage/dist/services/sessionStorage';
import * as import78 from 'ng2-webstorage/dist/services/localStorage';
import * as import79 from 'angular2-cookie/services/base-cookie-options';
import * as import80 from 'ng-jhipster/src/config';
import * as import81 from 'ng-jhipster/src/service/alert.service';
class JHipsterRegistrySharedModuleInjector extends import0.ɵNgModuleInjector<import1.JHipsterRegistrySharedModule> {
  _CommonModule_0:import2.CommonModule;
  _NgbAlertModule_1:import3.NgbAlertModule;
  _NgbButtonsModule_2:import4.NgbButtonsModule;
  _NgbCollapseModule_3:import5.NgbCollapseModule;
  _NgbProgressbarModule_4:import6.NgbProgressbarModule;
  _NgbTooltipModule_5:import7.NgbTooltipModule;
  _NgbTypeaheadModule_6:import8.NgbTypeaheadModule;
  _NgbAccordionModule_7:import9.NgbAccordionModule;
  _NgbCarouselModule_8:import10.NgbCarouselModule;
  _ɵba_9:import11.ɵba;
  _FormsModule_10:import11.FormsModule;
  _NgbDatepickerModule_11:import12.NgbDatepickerModule;
  _NgbDropdownModule_12:import13.NgbDropdownModule;
  _NgbModalModule_13:import14.NgbModalModule;
  _NgbPaginationModule_14:import15.NgbPaginationModule;
  _NgbPopoverModule_15:import16.NgbPopoverModule;
  _NgbRatingModule_16:import17.NgbRatingModule;
  _NgbTabsetModule_17:import18.NgbTabsetModule;
  _NgbTimepickerModule_18:import19.NgbTimepickerModule;
  _NgbRootModule_19:import20.NgbRootModule;
  _HttpModule_20:import21.HttpModule;
  _TranslateModule_21:import22.TranslateModule;
  _NgJhipsterModule_22:import23.NgJhipsterModule;
  _InfiniteScrollModule_23:import24.InfiniteScrollModule;
  _NgbModule_24:import20.NgbModule;
  _JHipsterRegistrySharedLibsModule_25:import25.JHipsterRegistrySharedLibsModule;
  _JHipsterRegistrySharedCommonModule_26:import26.JHipsterRegistrySharedCommonModule;
  _JHipsterRegistrySharedModule_27:import1.JHipsterRegistrySharedModule;
  __NgLocalization_28:import2.NgLocaleLocalization;
  __ɵi_29:import11.ɵi;
  __NgbModalStack_30:import27.NgbModalStack;
  __NgbModal_31:import28.NgbModal;
  __NgbAlertConfig_32:import29.NgbAlertConfig;
  __NgbProgressbarConfig_33:import30.NgbProgressbarConfig;
  __NgbTooltipConfig_34:import31.NgbTooltipConfig;
  __NgbTypeaheadConfig_35:import32.NgbTypeaheadConfig;
  __NgbAccordionConfig_36:import33.NgbAccordionConfig;
  __NgbCarouselConfig_37:import34.NgbCarouselConfig;
  __NgbCalendar_38:import35.NgbCalendarGregorian;
  __NgbDatepickerI18n_39:import36.NgbDatepickerI18nDefault;
  __NgbDateParserFormatter_40:import37.NgbDateISOParserFormatter;
  __NgbDatepickerConfig_41:import38.NgbDatepickerConfig;
  __NgbDropdownConfig_42:import39.NgbDropdownConfig;
  __NgbPaginationConfig_43:import40.NgbPaginationConfig;
  __NgbPopoverConfig_44:import41.NgbPopoverConfig;
  __NgbRatingConfig_45:import42.NgbRatingConfig;
  __NgbTabsetConfig_46:import43.NgbTabsetConfig;
  __NgbTimepickerConfig_47:import44.NgbTimepickerConfig;
  __BrowserXhr_48:import21.BrowserXhr;
  __ResponseOptions_49:import21.BaseResponseOptions;
  __XSRFStrategy_50:any;
  __XHRBackend_51:import21.XHRBackend;
  __RequestOptions_52:import21.BaseRequestOptions;
  __Http_53:any;
  __TranslateLoader_54:any;
  __TranslateParser_55:import45.DefaultTranslateParser;
  _ModuleConfig_56:any;
  __ConfigService_57:import46.ConfigService;
  __MissingTranslationHandler_58:any;
  __TranslateService_59:import47.TranslateService;
  __ɵc_60:import24.ɵc;
  __ɵb_61:import24.ɵb;
  __ɵd_62:import24.ɵd;
  __ɵe_63:import24.ɵe;
  __DataUtils_64:import48.DataUtils;
  __DatePipe_65:import2.DatePipe;
  __DateUtils_66:import49.DateUtils;
  __EventManager_67:import50.EventManager;
  __ParseLinks_68:import51.ParseLinks;
  __PaginationUtil_69:import52.PaginationUtil;
  __Base64_70:import53.Base64;
  __JhiLanguageService_71:import54.JhiLanguageService;
  __AlertService_72:any;
  __Title_73:import55.Title;
  __JhiRoutesService_74:import56.JhiRoutesService;
  __JhiRefreshService_75:import57.JhiRefreshService;
  __AuthServerProvider_76:import58.AuthServerProvider;
  __AuthSessionServerProvider_77:import59.AuthSessionServerProvider;
  __CookieService_78:import60.CookieService;
  __AccountService_79:import61.AccountService;
  __Principal_80:import62.Principal;
  __LoginService_81:import63.LoginService;
  __LoginModalService_82:import64.LoginModalService;
  __LoginOAuth2Service_83:import65.LoginOAuth2Service;
  __StateStorageService_84:import66.StateStorageService;
  __CSRFService_85:import67.CSRFService;
  __UserService_86:import68.UserService;
  constructor(parent:import0.Injector) {
    super(parent,[
      import69.NgbAlertNgFactory,
      import70.NgbTooltipWindowNgFactory,
      import71.NgbTypeaheadWindowNgFactory,
      import72.NgbDatepickerNgFactory,
      import73.NgbModalBackdropNgFactory,
      import74.NgbModalWindowNgFactory,
      import75.NgbPopoverWindowNgFactory,
      import76.JhiLoginModalComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_28():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_28 == null)) { (this.__NgLocalization_28 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_28;
  }
  get _ɵi_29():import11.ɵi {
    if ((this.__ɵi_29 == null)) { (this.__ɵi_29 = new import11.ɵi()); }
    return this.__ɵi_29;
  }
  get _NgbModalStack_30():import27.NgbModalStack {
    if ((this.__NgbModalStack_30 == null)) { (this.__NgbModalStack_30 = new import27.NgbModalStack(this.parent.get(import0.ApplicationRef),this,this.componentFactoryResolver)); }
    return this.__NgbModalStack_30;
  }
  get _NgbModal_31():import28.NgbModal {
    if ((this.__NgbModal_31 == null)) { (this.__NgbModal_31 = new import28.NgbModal(this.componentFactoryResolver,this,this._NgbModalStack_30)); }
    return this.__NgbModal_31;
  }
  get _NgbAlertConfig_32():import29.NgbAlertConfig {
    if ((this.__NgbAlertConfig_32 == null)) { (this.__NgbAlertConfig_32 = new import29.NgbAlertConfig()); }
    return this.__NgbAlertConfig_32;
  }
  get _NgbProgressbarConfig_33():import30.NgbProgressbarConfig {
    if ((this.__NgbProgressbarConfig_33 == null)) { (this.__NgbProgressbarConfig_33 = new import30.NgbProgressbarConfig()); }
    return this.__NgbProgressbarConfig_33;
  }
  get _NgbTooltipConfig_34():import31.NgbTooltipConfig {
    if ((this.__NgbTooltipConfig_34 == null)) { (this.__NgbTooltipConfig_34 = new import31.NgbTooltipConfig()); }
    return this.__NgbTooltipConfig_34;
  }
  get _NgbTypeaheadConfig_35():import32.NgbTypeaheadConfig {
    if ((this.__NgbTypeaheadConfig_35 == null)) { (this.__NgbTypeaheadConfig_35 = new import32.NgbTypeaheadConfig()); }
    return this.__NgbTypeaheadConfig_35;
  }
  get _NgbAccordionConfig_36():import33.NgbAccordionConfig {
    if ((this.__NgbAccordionConfig_36 == null)) { (this.__NgbAccordionConfig_36 = new import33.NgbAccordionConfig()); }
    return this.__NgbAccordionConfig_36;
  }
  get _NgbCarouselConfig_37():import34.NgbCarouselConfig {
    if ((this.__NgbCarouselConfig_37 == null)) { (this.__NgbCarouselConfig_37 = new import34.NgbCarouselConfig()); }
    return this.__NgbCarouselConfig_37;
  }
  get _NgbCalendar_38():import35.NgbCalendarGregorian {
    if ((this.__NgbCalendar_38 == null)) { (this.__NgbCalendar_38 = new import35.NgbCalendarGregorian()); }
    return this.__NgbCalendar_38;
  }
  get _NgbDatepickerI18n_39():import36.NgbDatepickerI18nDefault {
    if ((this.__NgbDatepickerI18n_39 == null)) { (this.__NgbDatepickerI18n_39 = new import36.NgbDatepickerI18nDefault()); }
    return this.__NgbDatepickerI18n_39;
  }
  get _NgbDateParserFormatter_40():import37.NgbDateISOParserFormatter {
    if ((this.__NgbDateParserFormatter_40 == null)) { (this.__NgbDateParserFormatter_40 = new import37.NgbDateISOParserFormatter()); }
    return this.__NgbDateParserFormatter_40;
  }
  get _NgbDatepickerConfig_41():import38.NgbDatepickerConfig {
    if ((this.__NgbDatepickerConfig_41 == null)) { (this.__NgbDatepickerConfig_41 = new import38.NgbDatepickerConfig()); }
    return this.__NgbDatepickerConfig_41;
  }
  get _NgbDropdownConfig_42():import39.NgbDropdownConfig {
    if ((this.__NgbDropdownConfig_42 == null)) { (this.__NgbDropdownConfig_42 = new import39.NgbDropdownConfig()); }
    return this.__NgbDropdownConfig_42;
  }
  get _NgbPaginationConfig_43():import40.NgbPaginationConfig {
    if ((this.__NgbPaginationConfig_43 == null)) { (this.__NgbPaginationConfig_43 = new import40.NgbPaginationConfig()); }
    return this.__NgbPaginationConfig_43;
  }
  get _NgbPopoverConfig_44():import41.NgbPopoverConfig {
    if ((this.__NgbPopoverConfig_44 == null)) { (this.__NgbPopoverConfig_44 = new import41.NgbPopoverConfig()); }
    return this.__NgbPopoverConfig_44;
  }
  get _NgbRatingConfig_45():import42.NgbRatingConfig {
    if ((this.__NgbRatingConfig_45 == null)) { (this.__NgbRatingConfig_45 = new import42.NgbRatingConfig()); }
    return this.__NgbRatingConfig_45;
  }
  get _NgbTabsetConfig_46():import43.NgbTabsetConfig {
    if ((this.__NgbTabsetConfig_46 == null)) { (this.__NgbTabsetConfig_46 = new import43.NgbTabsetConfig()); }
    return this.__NgbTabsetConfig_46;
  }
  get _NgbTimepickerConfig_47():import44.NgbTimepickerConfig {
    if ((this.__NgbTimepickerConfig_47 == null)) { (this.__NgbTimepickerConfig_47 = new import44.NgbTimepickerConfig()); }
    return this.__NgbTimepickerConfig_47;
  }
  get _BrowserXhr_48():import21.BrowserXhr {
    if ((this.__BrowserXhr_48 == null)) { (this.__BrowserXhr_48 = new import21.BrowserXhr()); }
    return this.__BrowserXhr_48;
  }
  get _ResponseOptions_49():import21.BaseResponseOptions {
    if ((this.__ResponseOptions_49 == null)) { (this.__ResponseOptions_49 = new import21.BaseResponseOptions()); }
    return this.__ResponseOptions_49;
  }
  get _XSRFStrategy_50():any {
    if ((this.__XSRFStrategy_50 == null)) { (this.__XSRFStrategy_50 = import21.ɵb()); }
    return this.__XSRFStrategy_50;
  }
  get _XHRBackend_51():import21.XHRBackend {
    if ((this.__XHRBackend_51 == null)) { (this.__XHRBackend_51 = new import21.XHRBackend(this._BrowserXhr_48,this._ResponseOptions_49,this._XSRFStrategy_50)); }
    return this.__XHRBackend_51;
  }
  get _RequestOptions_52():import21.BaseRequestOptions {
    if ((this.__RequestOptions_52 == null)) { (this.__RequestOptions_52 = new import21.BaseRequestOptions()); }
    return this.__RequestOptions_52;
  }
  get _Http_53():any {
    if ((this.__Http_53 == null)) { (this.__Http_53 = import21.ɵc(this._XHRBackend_51,this._RequestOptions_52)); }
    return this.__Http_53;
  }
  get _TranslateLoader_54():any {
    if ((this.__TranslateLoader_54 == null)) { (this.__TranslateLoader_54 = import23.translatePartialLoader(this._Http_53)); }
    return this.__TranslateLoader_54;
  }
  get _TranslateParser_55():import45.DefaultTranslateParser {
    if ((this.__TranslateParser_55 == null)) { (this.__TranslateParser_55 = new import45.DefaultTranslateParser()); }
    return this.__TranslateParser_55;
  }
  get _ConfigService_57():import46.ConfigService {
    if ((this.__ConfigService_57 == null)) { (this.__ConfigService_57 = new import46.ConfigService(this._ModuleConfig_56)); }
    return this.__ConfigService_57;
  }
  get _MissingTranslationHandler_58():any {
    if ((this.__MissingTranslationHandler_58 == null)) { (this.__MissingTranslationHandler_58 = import23.missingTranslationHandler(this._ConfigService_57)); }
    return this.__MissingTranslationHandler_58;
  }
  get _TranslateService_59():import47.TranslateService {
    if ((this.__TranslateService_59 == null)) { (this.__TranslateService_59 = new import47.TranslateService(this._TranslateLoader_54,this._TranslateParser_55,this._MissingTranslationHandler_58)); }
    return this.__TranslateService_59;
  }
  get _ɵc_60():import24.ɵc {
    if ((this.__ɵc_60 == null)) { (this.__ɵc_60 = new import24.ɵc()); }
    return this.__ɵc_60;
  }
  get _ɵb_61():import24.ɵb {
    if ((this.__ɵb_61 == null)) { (this.__ɵb_61 = new import24.ɵb(this._ɵc_60)); }
    return this.__ɵb_61;
  }
  get _ɵd_62():import24.ɵd {
    if ((this.__ɵd_62 == null)) { (this.__ɵd_62 = new import24.ɵd()); }
    return this.__ɵd_62;
  }
  get _ɵe_63():import24.ɵe {
    if ((this.__ɵe_63 == null)) { (this.__ɵe_63 = new import24.ɵe()); }
    return this.__ɵe_63;
  }
  get _DataUtils_64():import48.DataUtils {
    if ((this.__DataUtils_64 == null)) { (this.__DataUtils_64 = new import48.DataUtils()); }
    return this.__DataUtils_64;
  }
  get _DatePipe_65():import2.DatePipe {
    if ((this.__DatePipe_65 == null)) { (this.__DatePipe_65 = new import2.DatePipe(this.parent.get(import0.LOCALE_ID))); }
    return this.__DatePipe_65;
  }
  get _DateUtils_66():import49.DateUtils {
    if ((this.__DateUtils_66 == null)) { (this.__DateUtils_66 = new import49.DateUtils(this._DatePipe_65)); }
    return this.__DateUtils_66;
  }
  get _EventManager_67():import50.EventManager {
    if ((this.__EventManager_67 == null)) { (this.__EventManager_67 = new import50.EventManager()); }
    return this.__EventManager_67;
  }
  get _ParseLinks_68():import51.ParseLinks {
    if ((this.__ParseLinks_68 == null)) { (this.__ParseLinks_68 = new import51.ParseLinks()); }
    return this.__ParseLinks_68;
  }
  get _PaginationUtil_69():import52.PaginationUtil {
    if ((this.__PaginationUtil_69 == null)) { (this.__PaginationUtil_69 = new import52.PaginationUtil()); }
    return this.__PaginationUtil_69;
  }
  get _Base64_70():import53.Base64 {
    if ((this.__Base64_70 == null)) { (this.__Base64_70 = new import53.Base64()); }
    return this.__Base64_70;
  }
  get _JhiLanguageService_71():import54.JhiLanguageService {
    if ((this.__JhiLanguageService_71 == null)) { (this.__JhiLanguageService_71 = new import54.JhiLanguageService(this._TranslateService_59,this._ConfigService_57)); }
    return this.__JhiLanguageService_71;
  }
  get _AlertService_72():any {
    if ((this.__AlertService_72 == null)) { (this.__AlertService_72 = import26.alertServiceProvider(this.parent.get(import0.Sanitizer))); }
    return this.__AlertService_72;
  }
  get _Title_73():import55.Title {
    if ((this.__Title_73 == null)) { (this.__Title_73 = new import55.Title(this.parent.get(import55.DOCUMENT))); }
    return this.__Title_73;
  }
  get _JhiRoutesService_74():import56.JhiRoutesService {
    if ((this.__JhiRoutesService_74 == null)) { (this.__JhiRoutesService_74 = new import56.JhiRoutesService(this._Http_53,this.parent.get(import77.SessionStorageService))); }
    return this.__JhiRoutesService_74;
  }
  get _JhiRefreshService_75():import57.JhiRefreshService {
    if ((this.__JhiRefreshService_75 == null)) { (this.__JhiRefreshService_75 = new import57.JhiRefreshService(this._Http_53,this.parent.get(import77.SessionStorageService))); }
    return this.__JhiRefreshService_75;
  }
  get _AuthServerProvider_76():import58.AuthServerProvider {
    if ((this.__AuthServerProvider_76 == null)) { (this.__AuthServerProvider_76 = new import58.AuthServerProvider(this._Http_53,this.parent.get(import78.LocalStorageService),this.parent.get(import77.SessionStorageService))); }
    return this.__AuthServerProvider_76;
  }
  get _AuthSessionServerProvider_77():import59.AuthSessionServerProvider {
    if ((this.__AuthSessionServerProvider_77 == null)) { (this.__AuthSessionServerProvider_77 = new import59.AuthSessionServerProvider(this._Http_53)); }
    return this.__AuthSessionServerProvider_77;
  }
  get _CookieService_78():import60.CookieService {
    if ((this.__CookieService_78 == null)) { (this.__CookieService_78 = new import60.CookieService(this.parent.get(import79.CookieOptions))); }
    return this.__CookieService_78;
  }
  get _AccountService_79():import61.AccountService {
    if ((this.__AccountService_79 == null)) { (this.__AccountService_79 = new import61.AccountService(this._Http_53)); }
    return this.__AccountService_79;
  }
  get _Principal_80():import62.Principal {
    if ((this.__Principal_80 == null)) { (this.__Principal_80 = new import62.Principal(this._AccountService_79)); }
    return this.__Principal_80;
  }
  get _LoginService_81():import63.LoginService {
    if ((this.__LoginService_81 == null)) { (this.__LoginService_81 = new import63.LoginService(this._Principal_80,this._AuthServerProvider_76)); }
    return this.__LoginService_81;
  }
  get _LoginModalService_82():import64.LoginModalService {
    if ((this.__LoginModalService_82 == null)) { (this.__LoginModalService_82 = new import64.LoginModalService(this._NgbModal_31)); }
    return this.__LoginModalService_82;
  }
  get _LoginOAuth2Service_83():import65.LoginOAuth2Service {
    if ((this.__LoginOAuth2Service_83 == null)) { (this.__LoginOAuth2Service_83 = new import65.LoginOAuth2Service(this._Principal_80,this._AuthSessionServerProvider_77)); }
    return this.__LoginOAuth2Service_83;
  }
  get _StateStorageService_84():import66.StateStorageService {
    if ((this.__StateStorageService_84 == null)) { (this.__StateStorageService_84 = new import66.StateStorageService(this.parent.get(import77.SessionStorageService))); }
    return this.__StateStorageService_84;
  }
  get _CSRFService_85():import67.CSRFService {
    if ((this.__CSRFService_85 == null)) { (this.__CSRFService_85 = new import67.CSRFService(this._CookieService_78)); }
    return this.__CSRFService_85;
  }
  get _UserService_86():import68.UserService {
    if ((this.__UserService_86 == null)) { (this.__UserService_86 = new import68.UserService(this._Http_53)); }
    return this.__UserService_86;
  }
  createInternal():import1.JHipsterRegistrySharedModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._NgbAlertModule_1 = new import3.NgbAlertModule();
    this._NgbButtonsModule_2 = new import4.NgbButtonsModule();
    this._NgbCollapseModule_3 = new import5.NgbCollapseModule();
    this._NgbProgressbarModule_4 = new import6.NgbProgressbarModule();
    this._NgbTooltipModule_5 = new import7.NgbTooltipModule();
    this._NgbTypeaheadModule_6 = new import8.NgbTypeaheadModule();
    this._NgbAccordionModule_7 = new import9.NgbAccordionModule();
    this._NgbCarouselModule_8 = new import10.NgbCarouselModule();
    this._ɵba_9 = new import11.ɵba();
    this._FormsModule_10 = new import11.FormsModule();
    this._NgbDatepickerModule_11 = new import12.NgbDatepickerModule();
    this._NgbDropdownModule_12 = new import13.NgbDropdownModule();
    this._NgbModalModule_13 = new import14.NgbModalModule();
    this._NgbPaginationModule_14 = new import15.NgbPaginationModule();
    this._NgbPopoverModule_15 = new import16.NgbPopoverModule();
    this._NgbRatingModule_16 = new import17.NgbRatingModule();
    this._NgbTabsetModule_17 = new import18.NgbTabsetModule();
    this._NgbTimepickerModule_18 = new import19.NgbTimepickerModule();
    this._NgbRootModule_19 = new import20.NgbRootModule();
    this._HttpModule_20 = new import21.HttpModule();
    this._TranslateModule_21 = new import22.TranslateModule();
    this._NgJhipsterModule_22 = new import23.NgJhipsterModule();
    this._InfiniteScrollModule_23 = new import24.InfiniteScrollModule();
    this._NgbModule_24 = new import20.NgbModule();
    this._JHipsterRegistrySharedLibsModule_25 = new import25.JHipsterRegistrySharedLibsModule();
    this._JHipsterRegistrySharedCommonModule_26 = new import26.JHipsterRegistrySharedCommonModule();
    this._JHipsterRegistrySharedModule_27 = new import1.JHipsterRegistrySharedModule();
    this._ModuleConfig_56 = {};
    return this._JHipsterRegistrySharedModule_27;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.NgbAlertModule)) { return this._NgbAlertModule_1; }
    if ((token === import4.NgbButtonsModule)) { return this._NgbButtonsModule_2; }
    if ((token === import5.NgbCollapseModule)) { return this._NgbCollapseModule_3; }
    if ((token === import6.NgbProgressbarModule)) { return this._NgbProgressbarModule_4; }
    if ((token === import7.NgbTooltipModule)) { return this._NgbTooltipModule_5; }
    if ((token === import8.NgbTypeaheadModule)) { return this._NgbTypeaheadModule_6; }
    if ((token === import9.NgbAccordionModule)) { return this._NgbAccordionModule_7; }
    if ((token === import10.NgbCarouselModule)) { return this._NgbCarouselModule_8; }
    if ((token === import11.ɵba)) { return this._ɵba_9; }
    if ((token === import11.FormsModule)) { return this._FormsModule_10; }
    if ((token === import12.NgbDatepickerModule)) { return this._NgbDatepickerModule_11; }
    if ((token === import13.NgbDropdownModule)) { return this._NgbDropdownModule_12; }
    if ((token === import14.NgbModalModule)) { return this._NgbModalModule_13; }
    if ((token === import15.NgbPaginationModule)) { return this._NgbPaginationModule_14; }
    if ((token === import16.NgbPopoverModule)) { return this._NgbPopoverModule_15; }
    if ((token === import17.NgbRatingModule)) { return this._NgbRatingModule_16; }
    if ((token === import18.NgbTabsetModule)) { return this._NgbTabsetModule_17; }
    if ((token === import19.NgbTimepickerModule)) { return this._NgbTimepickerModule_18; }
    if ((token === import20.NgbRootModule)) { return this._NgbRootModule_19; }
    if ((token === import21.HttpModule)) { return this._HttpModule_20; }
    if ((token === import22.TranslateModule)) { return this._TranslateModule_21; }
    if ((token === import23.NgJhipsterModule)) { return this._NgJhipsterModule_22; }
    if ((token === import24.InfiniteScrollModule)) { return this._InfiniteScrollModule_23; }
    if ((token === import20.NgbModule)) { return this._NgbModule_24; }
    if ((token === import25.JHipsterRegistrySharedLibsModule)) { return this._JHipsterRegistrySharedLibsModule_25; }
    if ((token === import26.JHipsterRegistrySharedCommonModule)) { return this._JHipsterRegistrySharedCommonModule_26; }
    if ((token === import1.JHipsterRegistrySharedModule)) { return this._JHipsterRegistrySharedModule_27; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_28; }
    if ((token === import11.ɵi)) { return this._ɵi_29; }
    if ((token === import27.NgbModalStack)) { return this._NgbModalStack_30; }
    if ((token === import28.NgbModal)) { return this._NgbModal_31; }
    if ((token === import29.NgbAlertConfig)) { return this._NgbAlertConfig_32; }
    if ((token === import30.NgbProgressbarConfig)) { return this._NgbProgressbarConfig_33; }
    if ((token === import31.NgbTooltipConfig)) { return this._NgbTooltipConfig_34; }
    if ((token === import32.NgbTypeaheadConfig)) { return this._NgbTypeaheadConfig_35; }
    if ((token === import33.NgbAccordionConfig)) { return this._NgbAccordionConfig_36; }
    if ((token === import34.NgbCarouselConfig)) { return this._NgbCarouselConfig_37; }
    if ((token === import35.NgbCalendar)) { return this._NgbCalendar_38; }
    if ((token === import36.NgbDatepickerI18n)) { return this._NgbDatepickerI18n_39; }
    if ((token === import37.NgbDateParserFormatter)) { return this._NgbDateParserFormatter_40; }
    if ((token === import38.NgbDatepickerConfig)) { return this._NgbDatepickerConfig_41; }
    if ((token === import39.NgbDropdownConfig)) { return this._NgbDropdownConfig_42; }
    if ((token === import40.NgbPaginationConfig)) { return this._NgbPaginationConfig_43; }
    if ((token === import41.NgbPopoverConfig)) { return this._NgbPopoverConfig_44; }
    if ((token === import42.NgbRatingConfig)) { return this._NgbRatingConfig_45; }
    if ((token === import43.NgbTabsetConfig)) { return this._NgbTabsetConfig_46; }
    if ((token === import44.NgbTimepickerConfig)) { return this._NgbTimepickerConfig_47; }
    if ((token === import21.BrowserXhr)) { return this._BrowserXhr_48; }
    if ((token === import21.ResponseOptions)) { return this._ResponseOptions_49; }
    if ((token === import21.XSRFStrategy)) { return this._XSRFStrategy_50; }
    if ((token === import21.XHRBackend)) { return this._XHRBackend_51; }
    if ((token === import21.RequestOptions)) { return this._RequestOptions_52; }
    if ((token === import21.Http)) { return this._Http_53; }
    if ((token === import47.TranslateLoader)) { return this._TranslateLoader_54; }
    if ((token === import45.TranslateParser)) { return this._TranslateParser_55; }
    if ((token === import80.ModuleConfig)) { return this._ModuleConfig_56; }
    if ((token === import46.ConfigService)) { return this._ConfigService_57; }
    if ((token === import47.MissingTranslationHandler)) { return this._MissingTranslationHandler_58; }
    if ((token === import47.TranslateService)) { return this._TranslateService_59; }
    if ((token === import24.ɵc)) { return this._ɵc_60; }
    if ((token === import24.ɵb)) { return this._ɵb_61; }
    if ((token === import24.ɵd)) { return this._ɵd_62; }
    if ((token === import24.ɵe)) { return this._ɵe_63; }
    if ((token === import48.DataUtils)) { return this._DataUtils_64; }
    if ((token === import2.DatePipe)) { return this._DatePipe_65; }
    if ((token === import49.DateUtils)) { return this._DateUtils_66; }
    if ((token === import50.EventManager)) { return this._EventManager_67; }
    if ((token === import51.ParseLinks)) { return this._ParseLinks_68; }
    if ((token === import52.PaginationUtil)) { return this._PaginationUtil_69; }
    if ((token === import53.Base64)) { return this._Base64_70; }
    if ((token === import54.JhiLanguageService)) { return this._JhiLanguageService_71; }
    if ((token === import81.AlertService)) { return this._AlertService_72; }
    if ((token === import55.Title)) { return this._Title_73; }
    if ((token === import56.JhiRoutesService)) { return this._JhiRoutesService_74; }
    if ((token === import57.JhiRefreshService)) { return this._JhiRefreshService_75; }
    if ((token === import58.AuthServerProvider)) { return this._AuthServerProvider_76; }
    if ((token === import59.AuthSessionServerProvider)) { return this._AuthSessionServerProvider_77; }
    if ((token === import60.CookieService)) { return this._CookieService_78; }
    if ((token === import61.AccountService)) { return this._AccountService_79; }
    if ((token === import62.Principal)) { return this._Principal_80; }
    if ((token === import63.LoginService)) { return this._LoginService_81; }
    if ((token === import64.LoginModalService)) { return this._LoginModalService_82; }
    if ((token === import65.LoginOAuth2Service)) { return this._LoginOAuth2Service_83; }
    if ((token === import66.StateStorageService)) { return this._StateStorageService_84; }
    if ((token === import67.CSRFService)) { return this._CSRFService_85; }
    if ((token === import68.UserService)) { return this._UserService_86; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const JHipsterRegistrySharedModuleNgFactory:import0.NgModuleFactory<import1.JHipsterRegistrySharedModule> = new import0.NgModuleFactory<any>(JHipsterRegistrySharedModuleInjector,import1.JHipsterRegistrySharedModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2FsZXhhbmRydS5jaW9jYW4vV29yay9taWNyb3NlcnZpY2UtZXhhbXBsZS9yZWdpc3RyeS9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2FsZXhhbmRydS5jaW9jYW4vV29yay9taWNyb3NlcnZpY2UtZXhhbXBsZS9yZWdpc3RyeS9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
