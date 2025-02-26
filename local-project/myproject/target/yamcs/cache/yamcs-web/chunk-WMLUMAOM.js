import{b as yt,d as ht,e as Ie,f as Oe}from"./chunk-WVE4Y3TR.js";import{$b as qt,Ae as ge,B as Q,Ba as N,Bb as Ut,Ca as s,Da as S,Db as Yt,E as T,Ea as x,Ed as Xt,Fb as rt,Fd as Zt,Gb as st,Gd as dt,Hd as te,I as Vt,Ia as D,Ib as Gt,Id as ee,Ie as G,J as _,Jd as ie,K as g,Ka as Y,Kb as j,Kd as ne,Ke as Ce,Lb as ct,Oa as y,Pa as h,Pb as lt,Pe as O,Pf as $,Q as E,Qa as nt,Rf as we,Sb as pt,Se,Sf as Me,Td as ae,Ud as oe,Ve as ut,Wd as re,X as c,Y as f,Ze as be,a as Et,aa as m,b as kt,bc as zt,ca as p,cb as k,dc as Ht,e as A,ea as R,ec as Wt,ga as v,gc as Qt,ge as se,ha as K,hb as Nt,he as ce,ia as X,ie as le,ja as Z,ka as o,ke as pe,la as a,le as me,lg as P,ma as d,mb as at,na as F,ne as de,oa as V,oc as mt,oe as ue,of as L,og as q,q as Lt,qa as b,qb as Rt,qe as ve,qf as xe,ra as C,rb as $t,re as fe,rf as Ae,rg as w,sa as l,sb as Bt,sf as vt,sg as ft,tb as ot,tc as Jt,te as ye,tf as Te,tg as Ee,ub as jt,uc as Kt,ug as ke,vf as De,w as Pt,wa as tt,xa as et,y as Ft,ya as it,ye as he,ze as _e}from"./chunk-SAZ6MTOG.js";function Ve(i,e){if(i&1&&(s(0),y(1,"deltaWith")),i&2){let t=l();x(" (",nt(1,1,t.stop,t.start),") ")}}function Ne(i,e){if(i&1&&(o(0,"dt"),s(1),a(),o(2,"dd"),s(3),a()),i&2){let t=e.$implicit;c(),x("\xA0\xA0",t.key,""),c(2),S(t.value)}}function Re(i,e){if(i&1&&(o(0,"div",0)(1,"dl",1)(2,"dt"),s(3,"Activity ID"),a(),o(4,"dd"),s(5),a(),o(6,"dt"),s(7,"Status"),a(),o(8,"dd"),s(9),a(),o(10,"dt"),s(11,"Started"),a(),o(12,"dd"),s(13),y(14,"datetime"),a(),o(15,"dt"),s(16,"Finished"),a(),o(17,"dd"),s(18),y(19,"datetime"),m(20,Ve,2,4),a(),o(21,"dt"),s(22,"User"),a(),o(23,"dd"),s(24),a()(),o(25,"div",2),d(26,"mat-divider"),a(),o(27,"dl",3)(28,"dt"),s(29,"Activity type"),a(),o(30,"dd"),s(31),a(),o(32,"dt"),s(33,"Arguments"),a(),d(34,"dd"),X(35,Ne,4,2,null,null,K),y(37,"keyvalue"),a()()),i&2){let t,n=e;c(5),S(n.id),c(4),S(n.status),c(4),S(h(14,7,n.start)),c(5),x(" ",(t=h(19,9,n.stop))!==null&&t!==void 0?t:"-"," "),c(2),v(n.stop?20:-1),c(4),S(n.startedBy),c(7),S(n.type),c(4),Z(h(37,11,n.args))}}var _t=class i{constructor(e,t){this.yamcs=e;this.messageService=t;this.activityId=E.required();this.activity$=new A(null)}ngOnInit(){let{yamcs:e}=this;e.yamcsClient.getActivity(e.instance,this.activityId()).then(t=>{this.activity$.next(t)}).catch(t=>this.messageService.showError(t))}static{this.\u0275fac=function(t){return new(t||i)(f(P),f(L))}}static{this.\u0275cmp=T({type:i,selectors:[["ng-component"]],inputs:{activityId:[1,"activityId"]},standalone:!0,features:[D],decls:2,vars:3,consts:[[1,"panel-content"],[1,"dl-horizontal","no-lead"],[1,"section-divider"],[1,"dl-horizontal"]],template:function(t,n){if(t&1&&(m(0,Re,38,13,"div",0),y(1,"async")),t&2){let r;v((r=h(1,1,n.activity$))?0:-1,r)}},dependencies:[w,k,Nt,Kt,$,we],encapsulation:2,changeDetection:0})}};var z=class i{constructor(e,t,n){this.dialogRef=e;this.data=n;this.form=t.group({failureReason:["",[Yt.required]]})}async submit(){this.dialogRef.close({failureReason:this.form.value.failureReason})}static{this.\u0275fac=function(t){return new(t||i)(f(Xt),f(qt),f(Zt))}}static{this.\u0275cmp=T({type:i,selectors:[["app-set-failed-dialog"]],standalone:!0,features:[D],decls:13,vars:4,consts:[["filename",""],["mat-dialog-title",""],[1,"ya-form",3,"formGroup"],["type","text","formControlName","failureReason"],["align","end"],["mat-dialog-close",""],["appearance","primary",3,"click","disabled"]],template:function(t,n){if(t&1){let r=b();o(0,"h2",1),s(1,"Set failed"),a(),o(2,"mat-dialog-content")(3,"form",2)(4,"label"),s(5," Failure reason "),d(6,"input",3,0),a()()(),o(8,"mat-dialog-actions",4)(9,"ya-button",5),s(10,"CANCEL"),a(),o(11,"ya-button",6),C("click",function(){return _(r),g(n.submit())}),s(12,"SUBMIT"),a()()}if(t&2){let r;c(3),p("formGroup",n.form),c(),R("invalid",(r=n.form.get("name"))==null?null:r.invalid),c(7),p("disabled",!n.form.valid)}},dependencies:[w,ct,Ut,rt,st,lt,pt,te,ee,ne,ie,G],encapsulation:2,changeDetection:0})}};var Ct=class i{constructor(){this.synchronizer=Q(q);this.elapsed$=new A(0)}ngOnChanges(){this.syncSubscription?.unsubscribe(),this.activity&&(this.updateState(),this.activity.stop||(this.syncSubscription=this.synchronizer.sync(()=>this.updateState())))}updateState(){if(!this.activity.start)return;let e=new Date(this.activity.start);if(this.activity.stop){let t=new Date(this.activity.stop);this.elapsed$.next(this.millisBetween(e,t))}else{let t=this.millisBetween(e,new Date);this.elapsed$.next(t)}}millisBetween(e,t){return t.getTime()-e.getTime()}ngOnDestroy(){this.syncSubscription?.unsubscribe()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=T({type:i,selectors:[["app-activity-duration"]],inputs:{activity:"activity"},standalone:!0,features:[Vt,D],decls:3,vars:5,template:function(t,n){t&1&&(s(0),y(1,"async"),y(2,"duration")),t&2&&S(h(2,3,h(1,1,n.elapsed$)))},dependencies:[w,k,Me],encapsulation:2,changeDetection:0})}};function je(i,e){if(i&1&&(o(0,"mat-icon",0),s(1," check_circle "),a()),i&2){let t=l();p("matTooltip",t.status)}}function Ue(i,e){if(i&1&&(o(0,"mat-icon",1),s(1," cached "),a()),i&2){let t=l();p("matTooltip",t.status)}}function Ye(i,e){if(i&1&&(o(0,"mat-icon",2),s(1," highlight_off "),a()),i&2){let t=l();p("matTooltip",t.status)}}function Ge(i,e){if(i&1&&(o(0,"mat-icon",3),s(1," cached "),a()),i&2){let t=l();p("matTooltip",t.status)}}function qe(i,e){if(i&1&&(o(0,"mat-icon",4),s(1," stop_circle "),a()),i&2){let t=l();p("matTooltip",t.status)}}function ze(i,e){if(i&1&&m(0,je,2,1,"mat-icon",0)(1,Ue,2,1,"mat-icon",1)(2,Ye,2,1,"mat-icon",2)(3,Ge,2,1,"mat-icon",3)(4,qe,2,1,"mat-icon",4),i&2){let t=e;v(t.status==="SUCCESSFUL"?0:-1),c(),v(t.status==="RUNNING"?1:-1),c(),v(t.status==="FAILED"?2:-1),c(),v(t.status==="CANCELLED"&&!t.stop?3:-1),c(),v(t.status==="CANCELLED"&&t.stop?4:-1)}}var St=class i{constructor(){this.activity=E.required()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=T({type:i,selectors:[["app-activity-icon"]],inputs:{activity:[1,"activity"]},standalone:!0,features:[D],decls:1,vars:1,consts:[[1,"success",3,"matTooltip"],[1,"spin",3,"matTooltip"],[1,"alert",3,"matTooltip"],[1,"warning","spin",3,"matTooltip"],[1,"down",3,"matTooltip"]],template:function(t,n){if(t&1&&m(0,ze,5,5),t&2){let r;v((r=n.activity())?0:-1,r)}},dependencies:[w,zt,mt],encapsulation:2,changeDetection:0})}};var bt=class{constructor(e){this.watermarkObserver=e;this.dirty=!1;this.archiveActivities=[];this.bufferSize=500;this.bufferWatermark=400;this.pointer=0;this.alreadyWarned=!1;this.realtimeBuffer=Array(this.bufferSize).fill(void 0)}addArchiveData(e){this.archiveActivities=this.archiveActivities.concat(e),this.dirty=!0}addRealtimeActivity(e){this.pointer<this.bufferSize&&(this.realtimeBuffer[this.pointer]=e,this.pointer>=this.bufferWatermark&&this.watermarkObserver&&!this.alreadyWarned&&(this.alreadyWarned=!0,this.watermarkObserver()),this.pointer=this.pointer+1),this.dirty=!0}reset(){this.archiveActivities=[],this.realtimeBuffer.fill(void 0),this.pointer=0,this.alreadyWarned=!1,this.dirty=!0}snapshot(){let e=this.archiveActivities;return this.realtimeBuffer.map(t=>{if(!t)return;let n=e.findIndex(r=>r.id==t.id);n===-1?e.push(t):e[n]=t}),e.sort((t,n)=>{let r=-t.start.localeCompare(n.start);return r!==0?r:n.seq-t.seq}),e}compact(e){let t=this.snapshot();t.length=Math.min(e,t.length),this.reset(),this.archiveActivities=t,this.dirty=!0}};var xt=class extends Ht{constructor(t,n){super();this.yamcs=t;this.pageSize=100;this.blockHasMore=!1;this.activities$=new A([]);this.loading$=new A(!1);this.streaming$=new A(!1);this.syncSubscription=n.sync(()=>{this.buffer.dirty&&!this.loading$.getValue()&&(this.emitActivities(),this.buffer.dirty=!1)}),this.buffer=new bt(()=>{this.blockHasMore=!0,this.buffer.compact(500)})}connect(t){return this.activities$}emitActivities(){let t=this.buffer.snapshot();this.activities$.next(t)}loadActivities(t){return this.loading$.next(!0),Promise.all([this.loadPage(kt(Et({},t),{limit:this.pageSize}))]).then(n=>{let r=n[0];return this.loading$.next(!1),this.buffer.reset(),this.blockHasMore=!1,this.buffer.addArchiveData(r),this.emitActivities(),r})}hasMore(){return!!this.continuationToken&&!this.blockHasMore}loadPage(t){return this.options=t,this.yamcs.yamcsClient.getActivities(this.yamcs.instance,t).then(n=>(this.continuationToken=n.continuationToken,n.activities||[]))}loadMoreData(t){this.continuationToken&&this.loadPage(kt(Et({},t),{next:this.continuationToken,limit:this.pageSize})).then(n=>{this.buffer.addArchiveData(n)})}startStreaming(){this.streaming$.next(!0),this.realtimeSubscription=this.yamcs.yamcsClient.createActivitySubscription({instance:this.yamcs.instance},t=>{!this.loading$.getValue()&&this.matchesFilter(t)&&this.buffer.addRealtimeActivity(t)})}matchesFilter(t){return!(this.options&&(this.options.type&&t.type!==this.options.type||this.options.status&&t.status!==this.options.status||this.options.q&&(!t.detail||t.detail.indexOf(this.options.q)===-1)))}stopStreaming(){this.realtimeSubscription?.cancel(),this.streaming$.next(!1)}disconnect(t){this.stopStreaming(),this.syncSubscription?.unsubscribe(),this.activities$.complete(),this.loading$.complete(),this.streaming$.complete()}};var Je=i=>({c:i});function Ke(i,e){if(i&1){let t=b();o(0,"ya-page-button",34),C("click",function(){_(t);let r=l();return g(r.cancelSelectedActivities())}),s(1," Cancel "),a()}if(i&2){let t=l();p("disabled",!t.isGroupCancelEnabled())}}function Xe(i,e){if(i&1){let t=b();d(0,"ya-date-time-input",35)(1,"ya-date-time-input",36),o(2,"ya-button",33),C("click",function(){_(t);let r=l();return g(r.applyCustomDates())}),s(3,"Apply"),a()}if(i&2){let t=l();c(2),p("disabled",t.filterForm.invalid)}}function Ze(i,e){if(i&1){let t=b();o(0,"ya-button",37),C("click",function(){_(t);let r=l();return g(r.jumpToNow())}),s(1,"Jump to now"),a()}}function ti(i,e){i&1&&d(0,"ya-dots")}function ei(i,e){if(i&1&&(o(0,"span"),s(1," Showing activities from "),o(2,"b"),s(3,"the last hour"),a(),s(4," ending at "),o(5,"b"),s(6),y(7,"datetime"),a(),s(8," (Mission Time) "),a()),i&2){let t=l();c(6),S(h(7,1,t.validStop))}}function ii(i,e){if(i&1&&(o(0,"span"),s(1," Showing activities from "),o(2,"b"),s(3,"the last 6 hours"),a(),s(4," ending at "),o(5,"b"),s(6),y(7,"datetime"),a(),s(8," (Mission Time) "),a()),i&2){let t=l();c(6),S(h(7,1,t.validStop))}}function ni(i,e){if(i&1&&(o(0,"span"),s(1," Showing activities from "),o(2,"b"),s(3,"the last 24 hours"),a(),s(4," ending at "),o(5,"b"),s(6),y(7,"datetime"),a(),s(8," (Mission Time) "),a()),i&2){let t=l();c(6),S(h(7,1,t.validStop))}}function ai(i,e){i&1&&(o(0,"span"),s(1," Showing activities from "),o(2,"b"),s(3,"all time"),a()())}function oi(i,e){if(i&1&&(o(0,"span"),s(1," Showing activities from "),o(2,"b"),s(3),y(4,"datetime"),a(),s(5," to "),o(6,"b"),s(7),y(8,"datetime"),a(),s(9," (Mission Time) "),a()),i&2){let t=l();c(3),S(h(4,2,t.validStart)),c(4),S(h(8,4,t.validStop))}}function ri(i,e){if(i&1){let t=b();o(0,"th",38)(1,"input",39),C("change",function(r){_(t);let u=l();return g(r?u.masterToggle():null)}),a()()}if(i&2){let t=l();c(),p("checked",t.selection.hasValue()&&t.isAllSelected())}}function si(i,e){if(i&1){let t=b();o(0,"td",40)(1,"input",41),C("click",function(r){return _(t),g(r.stopPropagation())})("change",function(r){let u=_(t).$implicit,M=l();return g(r?M.selection.toggle(u):null)}),a()()}if(i&2){let t=e.$implicit,n=l();c(),p("checked",n.selection.isSelected(t))}}function ci(i,e){i&1&&d(0,"th",42)}function li(i,e){if(i&1&&(o(0,"td",43),d(1,"app-activity-icon",44),a()),i&2){let t=e.$implicit;c(),p("activity",t)}}function pi(i,e){i&1&&(o(0,"th",45),s(1,"Id"),a())}function mi(i,e){if(i&1&&(o(0,"td",46)(1,"a",47),s(2),a()()),i&2){let t=e.$implicit,n=l();c(),p("routerLink",t.id)("matTooltip",t.id)("queryParams",Y(4,Je,n.yamcs.context)),c(),x(" ",t.id.substring(0,8)," ")}}function di(i,e){i&1&&(o(0,"th",45),s(1,"Start"),a())}function ui(i,e){if(i&1&&(o(0,"td",48),s(1),y(2,"datetime"),a()),i&2){let t=e.$implicit;c(),x(" ",h(2,1,t.start)," ")}}function vi(i,e){i&1&&(o(0,"th",45),s(1,"Type"),a())}function fi(i,e){if(i&1&&(o(0,"td",48),s(1),a()),i&2){let t=e.$implicit;c(),x(" ",t.type," ")}}function yi(i,e){i&1&&(o(0,"th",45),s(1,"Detail"),a())}function hi(i,e){if(i&1&&(o(0,"td",48),s(1),a()),i&2){let t=e.$implicit;c(),x(" ",t.detail||"-"," ")}}function _i(i,e){i&1&&(o(0,"th",45),s(1,"Duration"),a())}function gi(i,e){if(i&1&&d(0,"app-activity-duration",44),i&2){let t=l().$implicit;p("activity",t)}}function Ci(i,e){i&1&&s(0," - ")}function Si(i,e){if(i&1&&(o(0,"td",48),m(1,gi,1,1,"app-activity-duration",44)(2,Ci,1,0),a()),i&2){let t=e.$implicit;c(),v(t.start?1:2)}}function bi(i,e){i&1&&d(0,"th",49)}function xi(i,e){if(i&1){let t=b();o(0,"ya-more")(1,"button",51),C("click",function(){_(t);let r=l().$implicit,u=l();return g(u.cancelActivity(r))}),s(2," Cancel "),a()()}if(i&2){let t=l().$implicit,n=l();c(),p("disabled",t.stop!==void 0||!n.mayControlActivities())}}function Ai(i,e){i&1&&(o(0,"span",50),s(1),a()),i&2&&(c(),x(" ",e," "))}function Ti(i,e){if(i&1){let t=b();o(0,"ya-button",52),C("click",function(){_(t);let r=l().$implicit,u=l();return g(u.setSuccessful(r))}),s(1,"Set successful"),a(),s(2," \xA0 "),o(3,"ya-button",53),C("click",function(){_(t);let r=l().$implicit,u=l();return g(u.setFailed(r))}),s(4,"Set failed"),a()}}function Di(i,e){if(i&1&&(o(0,"td",48),m(1,xi,3,1,"ya-more")(2,Ai,2,1,"span",50)(3,Ti,5,0),a()),i&2){let t,n=e.$implicit,r=l();c(),v(r.mayControlActivities()?1:-1),c(),v((t=n.failureReason)?2:-1,t),c(),v(n.type==="MANUAL"&&n.status==="RUNNING"&&r.mayControlActivities()?3:-1)}}function wi(i,e){i&1&&d(0,"tr",54)}function Mi(i,e){if(i&1){let t=b();o(0,"tr",55),C("click",function(){let r=_(t).$implicit,u=l();return g(u.toggleOne(r))}),a()}if(i&2){let t=e.$implicit,n=l();R("selected",n.selection.isSelected(t))}}var At="NO_LIMIT",Tt=class i{constructor(e,t,n,r,u,M,It,$i){this.yamcs=e;this.authService=t;this.router=n;this.route=r;this.messageService=It;this.dialog=$i;this.filterForm=new Gt({status:new j([]),filter:new j,type:new j([]),interval:new j(At),customStart:new j(null),customStop:new j(null)});this.columns=[{id:"select",label:"",alwaysVisible:!0},{id:"status",label:"Status",alwaysVisible:!0},{id:"id",label:"Id",alwaysVisible:!0},{id:"start",label:"Start",visible:!0},{id:"type",label:"Type",visible:!0},{id:"detail",label:"Detail",visible:!0},{id:"duration",label:"Duration",visible:!0},{id:"actions",label:"",alwaysVisible:!0}];this.typeOptions$=new A([{id:"MANUAL",label:"Manual",icon:"emoji_people"}]);this.statusOptions$=new A([{id:"RUNNING",label:"Running",icon:"cached"},{id:"SUCCESSFUL",label:"Successful",icon:"check_circle"},{id:"CANCELLED",label:"Cancelled",icon:"stop_circle"},{id:"FAILED",label:"Failed",icon:"highlight_off"}]);this.intervalOptions=[{id:"PT1H",label:"Last hour"},{id:"PT6H",label:"Last 6 hours"},{id:"P1D",label:"Last 24 hours"},{id:"NO_LIMIT",label:"No limit"},{id:"CUSTOM",label:"Custom",group:!0}];this.status=[];this.type=[];this.selection=new Wt(!0,[]);this.tableTrackerFn=(e,t)=>t.id;u.setTitle("Activities"),e.yamcsClient.getExecutors(e.instance).then(I=>{for(let W of I)this.typeOptions$.next([...this.typeOptions$.value,{id:W.type,label:W.displayName,icon:W.icon||"new_label"}])}).catch(I=>this.messageService.showError(I)),this.dataSource=new xt(e,M),this.dataSource.startStreaming(),this.initializeOptions(),this.loadData(),this.filterForm.get("filter").valueChanges.pipe(Lt(400)).forEach(I=>{this.filter=I,this.loadData()}),this.filterForm.get("status").valueChanges.forEach(I=>{this.status=I,this.loadData()}),this.filterForm.get("type").valueChanges.forEach(I=>{this.type=I,this.loadData()}),this.filterForm.get("interval").valueChanges.forEach(I=>{if(I==="CUSTOM"){let W=this.validStart||this.yamcs.getMissionTime(),Fe=this.validStop||this.yamcs.getMissionTime();this.filterForm.get("customStart").setValue(O.toISOString(W)),this.filterForm.get("customStop").setValue(O.toISOString(Fe))}else I==="NO_LIMIT"?(this.validStart=null,this.validStop=null,this.appliedInterval=I,this.loadData()):(this.validStop=e.getMissionTime(),this.validStart=O.subtractDuration(this.validStop,I),this.appliedInterval=I,this.loadData())})}initializeOptions(){let e=this.route.snapshot.queryParamMap;if(e.has("filter")&&(this.filter=e.get("filter")||"",this.filterForm.get("filter").setValue(this.filter)),e.has("status")&&(this.type=e.getAll("status"),this.filterForm.get("status").setValue(this.status)),e.has("type")&&(this.type=e.getAll("type"),this.filterForm.get("type").setValue(this.type)),e.has("interval"))if(this.appliedInterval=e.get("interval"),this.filterForm.get("interval").setValue(this.appliedInterval),this.appliedInterval==="CUSTOM"){let t=e.get("customStart");this.filterForm.get("customStart").setValue(t),this.validStart=O.toDate(t);let n=e.get("customStop");this.filterForm.get("customStop").setValue(n),this.validStop=O.toDate(n)}else this.appliedInterval==="NO_LIMIT"?(this.validStart=null,this.validStop=null):(this.validStop=this.yamcs.getMissionTime(),this.validStart=O.subtractDuration(this.validStop,this.appliedInterval));else this.appliedInterval=At,this.validStop=null,this.validStart=null}jumpToNow(){let e=this.filterForm.value.interval;e==="NO_LIMIT"?this.filterForm.get("interval").setValue(At):e==="CUSTOM"?this.filterForm.get("interval").setValue(At):(this.validStop=this.yamcs.getMissionTime(),this.validStart=O.subtractDuration(this.validStop,e),this.loadData())}applyCustomDates(){this.validStart=O.toDate(this.filterForm.value.customStart),this.validStop=O.toDate(this.filterForm.value.customStop),this.appliedInterval="CUSTOM",this.loadData()}loadData(){this.updateURL();let e={};this.validStart&&(e.start=this.validStart.toISOString()),this.validStop&&(e.stop=this.validStop.toISOString()),this.filter&&(e.q=this.filter),this.status.length&&(e.status=this.status),this.type.length&&(e.type=this.type),this.dataSource.loadActivities(e).catch(t=>this.messageService.showError(t))}loadMoreData(){let e={};this.validStart&&(e.start=this.validStart.toISOString()),this.status&&(e.status=this.status),this.filter&&(e.q=this.filter),this.dataSource.loadMoreData(e)}updateURL(){this.router.navigate([],{replaceUrl:!0,relativeTo:this.route,queryParams:{filter:this.filter||null,status:this.type.length?this.status:null,type:this.type.length?this.type:null,interval:this.appliedInterval,customStart:this.appliedInterval==="CUSTOM"?this.filterForm.value.customStart:null,customStop:this.appliedInterval==="CUSTOM"?this.filterForm.value.customStop:null},queryParamsHandling:"merge"})}mayControlActivities(){return this.authService.getUser().hasSystemPrivilege("ControlActivities")}isAllSelected(){return!1}masterToggle(){}toggleOne(e){(!this.selection.isSelected(e)||this.selection.selected.length>1)&&this.selection.clear(),this.selection.toggle(e)}isGroupCancelEnabled(){for(let e of this.selection.selected)if(!e.stop)return!0;return!1}cancelSelectedActivities(){for(let e of this.selection.selected)e.stop,this.cancelActivity(e)}cancelActivity(e){this.yamcs.yamcsClient.cancelActivity(this.yamcs.instance,e.id).catch(t=>this.messageService.showError(t))}setSuccessful(e){this.yamcs.yamcsClient.completeManualActivity(this.yamcs.instance,e.id).catch(t=>this.messageService.showError(t))}setFailed(e){this.dialog.open(z,{width:"400px",data:{activity:e}}).afterClosed().subscribe(t=>{t&&this.yamcs.yamcsClient.completeManualActivity(this.yamcs.instance,e.id,{failureReason:t.failureReason}).catch(n=>this.messageService.showError(n))})}static{this.\u0275fac=function(t){return new(t||i)(f(P),f(ft),f(Bt),f(Rt),f(at),f(q),f(L),f(dt))}}static{this.\u0275cmp=T({type:i,selectors:[["ng-component"]],standalone:!0,features:[D],decls:60,vars:25,consts:[["columnChooser",""],["icon","cancel",3,"disabled"],[1,"panel-content"],[3,"formGroup"],[1,"filter-bar"],["formControlName","filter","placeholder","Filter by text search"],["preferenceKey","activities",3,"columns"],["formControlName","status","emptyOption","Any status",3,"options"],["formControlName","type","emptyOption","Any type",3,"options"],["icon","access_time","formControlName","interval",3,"options"],[1,"table-status"],["mat-table","",1,"ya-data-table","expand",3,"dataSource","trackBy"],["cdkColumnDef","select"],["mat-header-cell","","class","checkbox",4,"cdkHeaderCellDef"],["mat-cell","","class","checkbox",4,"cdkCellDef"],["matColumnDef","status"],["mat-header-cell","","class","status",4,"matHeaderCellDef"],["mat-cell","","class","status",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","mono",4,"matCellDef"],["matColumnDef","start"],["mat-cell","",4,"matCellDef"],["cdkColumnDef","type"],["mat-header-cell","",4,"cdkHeaderCellDef"],["mat-cell","",4,"cdkCellDef"],["cdkColumnDef","detail"],["cdkColumnDef","duration"],["matColumnDef","actions"],["mat-header-cell","","class","expand",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"selected","click",4,"matRowDef","matRowDefColumns"],[2,"flex","1 1 auto"],[3,"click","disabled"],["icon","cancel",3,"click","disabled"],["formControlName","customStart"],["formControlName","customStop"],[3,"click"],["mat-header-cell","",1,"checkbox"],["type","checkbox",3,"change","checked"],["mat-cell","",1,"checkbox"],["type","checkbox",3,"click","change","checked"],["mat-header-cell","",1,"status"],["mat-cell","",1,"status"],[3,"activity"],["mat-header-cell",""],["mat-cell","",1,"mono"],[3,"routerLink","matTooltip","queryParams"],["mat-cell",""],["mat-header-cell","",1,"expand"],[1,"alert"],["mat-menu-item","",3,"click","disabled"],["icon","thumb_up",3,"click"],["icon","thumb_down",3,"click"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(t,n){if(t&1){let r=b();o(0,"app-instance-page")(1,"app-instance-toolbar"),s(2," Activities \xA0\xA0\xA0 "),m(3,Ke,2,1,"ya-page-button",1),a(),o(4,"div",2)(5,"form",3)(6,"div",4),d(7,"ya-search-filter",5)(8,"ya-column-chooser",6,0),a(),o(10,"div",4),d(11,"ya-multi-select",7),y(12,"async"),d(13,"ya-multi-select",8),y(14,"async"),d(15,"ya-select",9),m(16,Xe,4,1)(17,Ze,2,0,"ya-button")(18,ti,1,0,"ya-dots"),y(19,"async"),a()(),o(20,"div",10),m(21,ei,9,3,"span")(22,ii,9,3,"span")(23,ni,9,3,"span")(24,ai,4,0,"span")(25,oi,10,6,"span"),a(),o(26,"table",11),F(27,12),m(28,ri,2,1,"th",13)(29,si,2,1,"td",14),V(),F(30,15),m(31,ci,1,0,"th",16)(32,li,2,1,"td",17),V(),F(33,18),m(34,pi,2,0,"th",19)(35,mi,3,6,"td",20),V(),F(36,21),m(37,di,2,0,"th",19)(38,ui,3,3,"td",22),V(),F(39,23),m(40,vi,2,0,"th",24)(41,fi,2,1,"td",25),V(),F(42,26),m(43,yi,2,0,"th",24)(44,hi,2,1,"td",25),V(),F(45,27),m(46,_i,2,0,"th",24)(47,Si,3,1,"td",25),V(),F(48,28),m(49,bi,1,0,"th",29)(50,Di,4,3,"td",22),V(),m(51,wi,1,0,"tr",30),y(52,"async"),m(53,Mi,1,2,"tr",31),y(54,"async"),a(),o(55,"mat-toolbar"),d(56,"span",32),o(57,"ya-button",33),C("click",function(){return _(r),g(n.loadMoreData())}),s(58,"Load more"),a(),d(59,"span",32),a()()()}if(t&2){let r,u=N(9);c(3),v(n.mayControlActivities()?3:-1),c(2),p("formGroup",n.filterForm),c(3),p("columns",n.columns),c(3),p("options",h(12,15,n.statusOptions$)),c(2),p("options",h(14,17,n.typeOptions$)),c(2),p("options",n.intervalOptions),c(),v(n.filterForm.value.interval==="CUSTOM"?16:-1),c(),v(n.filterForm.value.interval!=="CUSTOM"?17:-1),c(),v(h(19,19,n.dataSource.loading$)?18:-1),c(3),v((r=n.appliedInterval)==="PT1H"?21:r==="PT6H"?22:r==="P1D"?23:r==="NO_LIMIT"?24:r==="CUSTOM"?25:-1),c(5),p("dataSource",n.dataSource)("trackBy",n.tableTrackerFn),c(25),p("matHeaderRowDef",h(52,21,u.displayedColumns$)),c(2),p("matRowDefColumns",h(54,23,u.displayedColumns$)),c(4),p("disabled",!n.dataSource.hasMore())}},dependencies:[Ct,St,ht,yt,w,k,ct,rt,st,lt,pt,ot,ae,oe,re,Qt,se,le,ue,pe,ce,ve,me,de,fe,ye,Jt,mt,G,Ce,Se,ut,xe,Ae,vt,De,be,$],styles:[".table-status[_ngcontent-%COMP%]{background-color:var(--y-background-color);height:24px;line-height:24px;font-size:12px;padding-left:6px}.table-status[_ngcontent-%COMP%]   .message-zone[_ngcontent-%COMP%]{float:right;height:24px;line-height:24px;font-size:12px;padding-right:6px}"],changeDetection:0})}};var H=class i{constructor(){this.yamcs=Q(P);this.messageService=Q(L);this.activity$=new A(null)}connect(e){let{yamcs:t}=this,n=!1;this.activitySubscription?.cancel(),this.activitySubscription=t.yamcsClient.createActivitySubscription({instance:t.instance},r=>{n&&r.id===e&&this.activity$.next(r)}),t.yamcsClient.getActivity(t.instance,e).then(r=>{this.activity$.next(r),n=!0}).catch(r=>this.messageService.showError(r))}disconnect(){this.activitySubscription?.cancel(),this.activitySubscription=void 0}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=Ft({token:i,factory:i.\u0275fac,providedIn:"root"})}};var Ii=["logContainer"],Ei=["top"],ki=["bottom"];function Oi(i,e){if(i&1&&(o(0,"tr")(1,"td",11),s(2),a(),o(3,"td",12),s(4),y(5,"datetime"),a(),o(6,"td",13),s(7),a()()),i&2){let t=e.$implicit,n=e.$index;R("activity",t.source==="ACTIVITY")("service",t.source==="SERVICE")("WARNING",t.level==="WARNING")("ERROR",t.level==="ERROR"),c(2),S(n+1),c(2),x(" [",nt(5,11,t.time,!1),"] "),c(3),S(t.message)}}function Li(i,e){i&1&&(o(0,"tr")(1,"td",14),d(2,"ya-dots"),a()())}function Pi(i,e){i&1&&m(0,Li,3,0,"tr"),i&2&&v(e.stop?-1:0)}var Dt=class i{constructor(e,t,n,r){this.yamcs=e;this.messageService=t;this.syncService=n;this.activityId=E.required();this.archivedLogs=[];this.realtimeLogs=[];this.logs$=new A([]);this.dirty$=new A(!1);this.activity$=r.activity$}ngOnInit(){let{yamcs:e}=this;this.activityLogSubscription=e.yamcsClient.createActivityLogSubscription({instance:e.instance,activity:this.activityId()},t=>{for(let n of this.archivedLogs)if(t.time===n.time&&t.level===n.level&&t.message===n.message&&t.source===n.source)return;this.realtimeLogs.push(t),this.dirty$.next(!0)}),e.yamcsClient.getActivityLog(e.instance,this.activityId()).then(t=>{this.archivedLogs=t.filter(n=>{for(let r of this.realtimeLogs)if(n.time===r.time&&n.level===r.level&&n.message===r.message&&n.source===r.source)return!1;return!0}),this.emitLogs()}).catch(t=>this.messageService.showError(t)),this.syncSubscription=this.syncService.syncFast(()=>{this.dirty$.value&&(this.emitLogs(),this.dirty$.next(!1))})}emitLogs(){if(this.logs$.next([...this.archivedLogs,...this.realtimeLogs]),this.logContainer){let{nativeElement:e}=this.logContainer;Math.abs(e.scrollHeight-e.clientHeight-e.scrollTop)<=1&&setTimeout(()=>{this.bottomAnchor.nativeElement.scrollIntoView()})}}ngOnDestroy(){this.activityLogSubscription?.cancel(),this.syncSubscription?.unsubscribe()}static{this.\u0275fac=function(t){return new(t||i)(f(P),f(L),f(q),f(H))}}static{this.\u0275cmp=T({type:i,selectors:[["ng-component"]],viewQuery:function(t,n){if(t&1&&(tt(Ii,5),tt(Ei,5),tt(ki,5)),t&2){let r;et(r=it())&&(n.logContainer=r.first),et(r=it())&&(n.topAnchor=r.first),et(r=it())&&(n.bottomAnchor=r.first)}},inputs:{activityId:[1,"activityId"]},standalone:!0,features:[D],decls:17,vars:5,consts:[["logContainer",""],["top",""],["bottom",""],[1,"log-actions"],["icon","vertical_align_top",3,"click"],["icon","vertical_align_bottom",3,"click"],[1,"log-container"],[1,"top"],[1,"logs","mono",2,"width","100%"],[3,"activity","service","WARNING","ERROR"],[1,"bottom"],["width","1",2,"text-align","right"],["width","1",1,"time",2,"white-space","nowrap"],[1,"message"],["colspan","3"]],template:function(t,n){if(t&1){let r=b();o(0,"div",3)(1,"ya-button",4),C("click",function(){_(r);let M=N(8);return g(M.scrollIntoView())}),s(2,"Jump to top"),a(),o(3,"ya-button",5),C("click",function(){_(r);let M=N(16);return g(M.scrollIntoView())}),s(4," Jump to bottom "),a()(),o(5,"div",6,0),d(7,"div",7,1),o(9,"table",8),X(10,Oi,8,14,"tr",9,K),y(12,"async"),m(13,Pi,1,1),y(14,"async"),a(),d(15,"div",10,2),a()}if(t&2){let r;c(10),Z(h(12,1,n.logs$)),c(3),v((r=h(14,3,n.activity$))?13:-1,r)}},dependencies:[w,k,G,ut,$],styles:[".log-container[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.12);position:absolute;inset:48px 0 0;overflow:auto;padding-left:12px}.log-actions[_ngcontent-%COMP%]{height:24px;margin:12px;display:flex}.log-actions[_ngcontent-%COMP%]   ya-button[_ngcontent-%COMP%]{margin-right:7px}.extra-bar-container[_ngcontent-%COMP%]{padding:12px;border-bottom:1.1px solid rgba(0,0,0,.08)}.extra-bar[_ngcontent-%COMP%]{height:24px;line-height:24px}.separator[_ngcontent-%COMP%]{border-right:1px solid rgba(0,0,0,.12)}table.logs[_ngcontent-%COMP%]{line-height:12px}table.logs[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:12px;color:#000000a7;vertical-align:top}table.logs[_ngcontent-%COMP%]   td.time[_ngcontent-%COMP%]{opacity:.8}table.logs[_ngcontent-%COMP%]   tr.service[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:700}table.logs[_ngcontent-%COMP%]   td.message[_ngcontent-%COMP%]{white-space:pre-wrap}.top[_ngcontent-%COMP%], .bottom[_ngcontent-%COMP%]{visibility:hidden;line-height:0}"],changeDetection:0})}};function Fi(i,e){if(i&1&&(o(0,"span",1),s(1),a()),i&2){let t=e;R("successful",t.status==="SUCCESSFUL")("running",t.status==="RUNNING")("failed",t.status==="FAILED")("cancelled",t.status==="CANCELLED"),c(),x(" ",t.status," ")}}var wt=class i{constructor(){this.activity=E.required()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=T({type:i,selectors:[["app-activity-status"]],inputs:{activity:[1,"activity"]},standalone:!0,features:[D],decls:1,vars:1,consts:[[1,"status",3,"successful","running","failed","cancelled"],[1,"status"]],template:function(t,n){if(t&1&&m(0,Fi,2,9,"span",0),t&2){let r;v((r=n.activity())?0:-1,r)}},dependencies:[w],styles:[".status[_ngcontent-%COMP%]{padding:4px;border-radius:2px}.status.successful[_ngcontent-%COMP%]{background:#28a745;color:#fff}.status.failed[_ngcontent-%COMP%]{background:#dc3545;color:#fff}.status.running[_ngcontent-%COMP%], .status.cancelled[_ngcontent-%COMP%]{background:#eee;color:#333}"],changeDetection:0})}};var Ot=i=>({c:i});function Vi(i,e){if(i&1){let t=b();o(0,"ya-page-button",16),C("click",function(){_(t);let r=l(),u=l();return g(u.setSuccessful(r))}),s(1," Set successful "),a(),o(2,"ya-page-button",17),C("click",function(){_(t);let r=l(),u=l();return g(u.setFailed(r))}),s(3,"Set failed"),a()}}function Ni(i,e){if(i&1){let t=b();o(0,"ya-page-button",18),C("click",function(){_(t);let r=l(),u=l();return g(u.cancelActivity(r))}),s(1," Cancel "),a()}if(i&2){let t=l();p("disabled",!!t.stop)}}function Ri(i,e){if(i&1&&(o(0,"app-instance-page")(1,"app-instance-toolbar"),d(2,"ya-page-icon-button",4),s(3," Activity details \xA0\xA0\xA0 "),m(4,Vi,4,0)(5,Ni,2,1,"ya-page-button",5),a(),o(6,"div",6)(7,"div",7)(8,"span",8),s(9),a(),d(10,"br"),o(11,"span",9),s(12),a(),d(13,"br"),o(14,"span",9),s(15),y(16,"datetime"),a(),d(17,"br"),a(),o(18,"div",10),d(19,"app-activity-status",11),a()(),o(20,"nav",12,0)(22,"a",13,1),s(24," Activity Log "),a(),o(25,"a",14,2),s(27," Details "),a()(),o(28,"div",15)(29,"mat-tab-nav-panel",null,3),d(31,"router-outlet"),a()()()),i&2){let t=e,n=N(23),r=N(26),u=N(30),M=l();c(2),p("queryParams",Y(15,Ot,M.yamcs.context)),c(2),v(t.type==="MANUAL"&&t.status==="RUNNING"&&M.mayControlActivities()?4:-1),c(),v(M.mayControlActivities()?5:-1),c(4),S(t.detail),c(3),x("ID: ",t.id,""),c(3),x("Started ",h(16,13,t.start),""),c(4),p("activity",t),c(),p("mat-stretch-tabs",!1)("tabPanel",u),c(2),p("active",n.isActive)("queryParams",Y(17,Ot,M.yamcs.context)),c(3),p("active",r.isActive)("queryParams",Y(19,Ot,M.yamcs.context))}}var Mt=class i{constructor(e,t,n,r,u,M){this.yamcs=t;this.messageService=n;this.authService=r;this.dialog=u;this.activityService=M;this.activityId=E.required();this.activity$=M.activity$.pipe(Pt(It=>{It&&e.setTitle(It.detail)}))}ngOnInit(){this.activityService.connect(this.activityId())}mayControlActivities(){return this.authService.getUser().hasSystemPrivilege("ControlActivities")}setSuccessful(e){this.yamcs.yamcsClient.completeManualActivity(this.yamcs.instance,e.id).catch(t=>this.messageService.showError(t))}setFailed(e){this.dialog.open(z,{width:"400px",data:{activity:e}}).afterClosed().subscribe(t=>{t&&this.yamcs.yamcsClient.completeManualActivity(this.yamcs.instance,e.id,{failureReason:t.failureReason}).catch(n=>this.messageService.showError(n))})}cancelActivity(e){this.yamcs.yamcsClient.cancelActivity(this.yamcs.instance,e.id).catch(t=>this.messageService.showError(t))}ngOnDestroy(){this.activityService.disconnect()}static{this.\u0275fac=function(t){return new(t||i)(f(at),f(P),f(L),f(ft),f(dt),f(H))}}static{this.\u0275cmp=T({type:i,selectors:[["ng-component"]],inputs:{activityId:[1,"activityId"]},standalone:!0,features:[D],decls:2,vars:3,consts:[["tabs",""],["rla","routerLinkActive"],["rlb","routerLinkActive"],["tabPanel",""],["routerLink","..","icon","arrow_back",3,"queryParams"],["icon","cancel",3,"disabled"],[1,"activity-header"],[1,"activity-header-left"],[1,"title"],[1,"subtitle"],[1,"activity-header-right"],[3,"activity"],["mat-tab-nav-bar","",1,"secondary",3,"mat-stretch-tabs","tabPanel"],["mat-tab-link","","routerLink","log","routerLinkActive","",3,"active","queryParams"],["mat-tab-link","","routerLink","details","routerLinkActive","",3,"active","queryParams"],[1,"tab-content-wrapper"],["icon","thumb_up",3,"click"],["icon","thumb_down",3,"click"],["icon","cancel",3,"click","disabled"]],template:function(t,n){if(t&1&&(m(0,Ri,32,21,"app-instance-page"),y(1,"async")),t&2){let r;v((r=h(1,1,n.activity$))?0:-1,r)}},dependencies:[wt,ht,yt,w,k,$t,ot,jt,he,ge,_e,vt,Te,$],styles:[".activity-header[_ngcontent-%COMP%]{height:100px;border-bottom:1px solid rgba(0,0,0,.1);display:flex}.activity-header-left[_ngcontent-%COMP%]{flex:1 1 auto;align-self:center;margin-left:24px;margin-right:24px}.activity-header-left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:larger}.activity-header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:smaller;color:gray}.activity-header-right[_ngcontent-%COMP%]{flex:1 1 auto;align-self:center;text-align:right;margin-left:24px;margin-right:24px}.tab-content-wrapper[_ngcontent-%COMP%]{position:absolute;inset:137px 0 0;overflow:auto}.tab-content-wrapper.noscroll[_ngcontent-%COMP%]{overflow:hidden}"],changeDetection:0})}};var Xa=[{path:"",canActivate:[Ee,Ie],canActivateChild:[ke],runGuardsAndResolvers:"always",component:Oe,children:[{path:"",pathMatch:"full",component:Tt},{path:":activityId",component:Mt,children:[{path:"",pathMatch:"full",redirectTo:"log"},{path:"log",component:Dt},{path:"details",component:_t}]}]}];export{Xa as ROUTES};
