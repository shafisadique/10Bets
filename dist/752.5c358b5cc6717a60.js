"use strict";(self.webpackChunkons3=self.webpackChunkons3||[]).push([[752],{2752:(k,g,c)=>{c.r(g),c.d(g,{MyledgerComponent:()=>O});var i=c(177),t=c(4438),l=c(8362);function p(e,a){if(1&e){const n=t.RV6();t.j41(0,"div",9)(1,"table",10)(2,"tbody")(3,"tr")(4,"td")(5,"span",11),t.EFF(6,"MATCH BETS"),t.k0s()(),t.j41(7,"td"),t.EFF(8,"0.00"),t.k0s()(),t.j41(9,"tr")(10,"td")(11,"span",12),t.EFF(12,"MATCH LOST"),t.k0s()(),t.j41(13,"td"),t.EFF(14,"0.00"),t.k0s()(),t.j41(15,"tr",13),t.bIt("click",function(){t.eBV(n);const o=t.XpG();return t.Njj(o.toggleSessionDetails())}),t.j41(16,"td")(17,"a",11),t.EFF(18,"SESSION BETS"),t.k0s()(),t.j41(19,"td"),t.EFF(20,"0.00"),t.k0s()(),t.j41(21,"tr")(22,"td")(23,"span",12),t.EFF(24,"SESSION LOST"),t.k0s()(),t.j41(25,"td"),t.EFF(26),t.k0s()(),t.j41(27,"tr")(28,"td")(29,"span",11),t.EFF(30,"WON BY"),t.k0s()(),t.j41(31,"td"),t.EFF(32),t.k0s()(),t.j41(33,"tr")(34,"td")(35,"span",12),t.EFF(36,"LOST COINS"),t.k0s()(),t.j41(37,"td"),t.EFF(38,"0.00"),t.k0s()()()()()}if(2&e){const n=t.XpG();t.R7$(26),t.JRh(n.data.data.lost),t.R7$(6),t.JRh(n.data.data.wonBy)}}function f(e,a){if(1&e){const n=t.RV6();t.j41(0,"div",9)(1,"h2",1),t.EFF(2,"Session Bets"),t.k0s(),t.j41(3,"table",10)(4,"tbody",14)(5,"tr")(6,"th",15),t.EFF(7,"50 balls run ls w"),t.k0s()(),t.j41(8,"tr")(9,"th",16),t.EFF(10,"Amount"),t.k0s(),t.j41(11,"th",16),t.EFF(12,"Rate"),t.k0s(),t.j41(13,"th",16),t.EFF(14,"Run"),t.k0s(),t.j41(15,"th",16),t.EFF(16,"Mode"),t.k0s(),t.j41(17,"th",16),t.EFF(18,"Dec"),t.k0s()()()(),t.j41(19,"p",12),t.EFF(20,"LOST COINS - 456"),t.k0s(),t.j41(21,"div",17)(22,"button",18),t.bIt("click",function(){t.eBV(n);const o=t.XpG();return t.Njj(o.backToMainView())}),t.EFF(23,"BACK"),t.k0s()()()}}function b(e,a){if(1&e){const n=t.RV6();t.j41(0,"div",17)(1,"button",19),t.bIt("click",function(){t.eBV(n);const o=t.XpG();return t.Njj(o.closeModal())}),t.EFF(2,"CLOSE"),t.k0s()()}}let _=(()=>{class e{constructor(n){this.activeModal=n,this.showSessionDetails=!1}ngOnInit(){console.log(this.data)}toggleSessionDetails(){this.showSessionDetails=!0}backToMainView(){this.showSessionDetails=!1}closeModal(){this.activeModal.close()}static#t=this.\u0275fac=function(r){return new(r||e)(t.rXU(l.Lw))};static#n=this.\u0275cmp=t.VBU({type:e,selectors:[["app-myledger-popup"]],inputs:{data:"data"},standalone:!0,features:[t.aNF],decls:11,vars:6,consts:[[1,"modal-header"],[1,"modal-title"],[1,"close-btn",3,"click"],["aria-hidden","true",1,"fa","fa-times"],[1,"modal-body"],[1,"modal-subtitle"],["class","modal-content",4,"ngIf"],[3,"ngIf"],["class","modal-footer",4,"ngIf"],[1,"modal-content"],[1,"table","table-striped"],[1,"green-text"],[1,"red-text"],[3,"click"],[2,"background-color","#0F212E"],["colspan","5",1,"session-bets-header"],[1,"session-bets-body-header"],[1,"modal-footer"],[1,"btn",3,"click"],[1,"btn","close-btn",3,"click"]],template:function(r,o){1&r&&(t.j41(0,"div",0)(1,"h2",1),t.EFF(2),t.k0s(),t.j41(3,"button",2),t.bIt("click",function(){return o.closeModal()}),t.nrm(4,"i",3),t.k0s()(),t.j41(5,"div",4)(6,"p",5),t.EFF(7),t.k0s(),t.DNE(8,p,39,2,"div",6)(9,f,24,0,"ng-template",7),t.k0s(),t.DNE(10,b,3,0,"div",8)),2&r&&(t.R7$(2),t.JRh(o.showSessionDetails?"Session Details":o.data.data.remark),t.R7$(5),t.Lme("DATE: ",o.data.data.date," AT ",o.data.data.time,""),t.R7$(),t.Y8G("ngIf",!o.showSessionDetails),t.R7$(),t.Y8G("ngIf",o.showSessionDetails),t.R7$(),t.Y8G("ngIf",!o.showSessionDetails))},dependencies:[i.MD,i.bT],styles:[".modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background-color:#0f212e;padding:20px;border-bottom:1px solid #192533}.modal-title[_ngcontent-%COMP%]{color:#fff;font-family:Poppins,sans-serif;font-size:20px;font-weight:600;margin:0}.close-btn[_ngcontent-%COMP%]{background-color:transparent;border:none;color:#fff;font-size:18px;cursor:pointer}.close-btn[_ngcontent-%COMP%]:hover{color:#ff4d4d}.modal-body[_ngcontent-%COMP%]{background-color:#1a2c38;padding:20px;text-align:center}.modal-subtitle[_ngcontent-%COMP%]{color:#fff;font-family:Poppins,sans-serif;font-weight:600;font-size:16px;margin-bottom:20px}.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0;font-size:16px;cursor:pointer}td[_ngcontent-%COMP%]{color:#fff;font-family:Poppins,sans-serif;font-weight:600;font-size:12px;background-color:#1a2c38;border:none}.table-striped[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(odd) > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(odd) > th[_ngcontent-%COMP%]{background-color:#0f212e}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#1a2c38;border:none;color:#fff}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{cursor:pointer}.session-bets-header[_ngcontent-%COMP%]{border-bottom:1px solid white;width:100%;border-top-left-radius:10px;border-top-right-radius:10px;background-color:#1a2c38;color:#fff}.session-bets-body-header[_ngcontent-%COMP%]{font-size:12px;border:none;color:#fff;background-color:#0f212e}.modal-content[_ngcontent-%COMP%]{background-color:#1a2c38;border:none}.green-text[_ngcontent-%COMP%]{color:#0f0;background-color:#0f212f;font-weight:700}.red-text[_ngcontent-%COMP%]{color:red;font-weight:700}.modal-footer[_ngcontent-%COMP%]{padding:15px;background-color:#1a2c38;text-align:center}.btn[_ngcontent-%COMP%]{background-color:#34495e;color:#fff;padding:10px 20px;border:none;border-radius:5px;cursor:pointer}.btn[_ngcontent-%COMP%]:hover{background-color:#2c3e50}"]})}return e})();var h=c(5736);const C=(e,a)=>({"red-text":e,"green-text":a});function m(e,a){1&e&&t.nrm(0,"img",16)}function u(e,a){1&e&&t.nrm(0,"img",17)}function M(e,a){if(1&e){const n=t.RV6();t.j41(0,"tr",12),t.bIt("click",function(){const o=t.eBV(n).$implicit,s=t.XpG();return t.Njj(s.getSessionLedgerData(o))}),t.j41(1,"td"),t.DNE(2,m,1,0,"img",13)(3,u,1,0,"img",14),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.k0s(),t.j41(9,"td"),t.EFF(10),t.k0s(),t.j41(11,"td"),t.EFF(12),t.k0s(),t.j41(13,"td",15),t.EFF(14),t.k0s()()}if(2&e){const n=a.$implicit;t.R7$(2),t.Y8G("ngIf",n.bal<0),t.R7$(),t.Y8G("ngIf",n.bal>0),t.R7$(),t.SpI(" ",n.pay.datetime,""),t.R7$(2),t.JRh(n.pay.remark),t.R7$(2),t.JRh(n.wonBy),t.R7$(2),t.JRh(n.pay.credit),t.R7$(2),t.JRh(n.pay.debit),t.R7$(),t.Y8G("ngClass",t.l_i(9,C,n.balance<0,n.balance>=0)),t.R7$(),t.JRh(n.bal)}}function P(e,a){1&e&&(t.j41(0,"tr")(1,"td",18),t.EFF(2,"No Ledger Available"),t.k0s()())}let O=(()=>{class e{constructor(n,r){this.modalService=n,this.sportService=r,this.sessionBets=[],this.currentPage=1,this.pageSize=20,this.totalCount=0}ngOnInit(){this.loadLedgerData(this.currentPage)}getSessionLedgerData(n){this.modalService.open(_,{windowClass:"custom-modal-content",centered:!0}).componentInstance.data={data:n}}goBack(){window.history.back()}onPageChange(n){this.currentPage=n,this.loadLedgerData(n)}loadLedgerData(n){this.sportService.myLedger(n-1).subscribe({next:r=>{this.sessionBets=r.list,this.pageSize=20,this.totalCount=r.totalElements,this.currentPage=r.currentPage+1}})}static#t=this.\u0275fac=function(r){return new(r||e)(t.rXU(l.Bq),t.rXU(h.I))};static#n=this.\u0275cmp=t.VBU({type:e,selectors:[["app-myledger"]],standalone:!0,features:[t.aNF],decls:28,vars:8,consts:[[1,"container-fluid"],[1,"ledger-main"],[1,"ledger-back"],[1,"btn","btn-back",3,"click"],["aria-hidden","true",1,"fa","fa-chevron-left"],[1,"ledger-text"],[1,"table-responsive"],[1,"table","table-striped","table-sm",2,"padding-top","10px","width","100%","white-space","nowrap"],[3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card-footer"],[3,"pageChange","collectionSize","pageSize","page","maxSize","rotate","boundaryLinks"],[3,"click"],["class","up-down","src","assets/down.png",4,"ngIf"],["class","up-down","src","assets/up.png",4,"ngIf"],[3,"ngClass"],["src","assets/down.png",1,"up-down"],["src","assets/up.png",1,"up-down"],["colspan","8",2,"text-align","center"]],template:function(r,o){1&r&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.bIt("click",function(){return o.goBack()}),t.nrm(4,"i",4),t.k0s()(),t.j41(5,"div",5),t.EFF(6,"My Ledger"),t.k0s()(),t.j41(7,"div",6)(8,"table",7)(9,"thead")(10,"tr")(11,"th"),t.EFF(12,"Date & Time"),t.k0s(),t.j41(13,"th"),t.EFF(14,"Remark"),t.k0s(),t.j41(15,"th"),t.EFF(16,"Won By"),t.k0s(),t.j41(17,"th"),t.EFF(18,"Won"),t.k0s(),t.j41(19,"th"),t.EFF(20,"Loss"),t.k0s(),t.j41(21,"th"),t.EFF(22,"Balance"),t.k0s()()(),t.j41(23,"tbody"),t.DNE(24,M,15,12,"tr",8)(25,P,3,0,"tr",9),t.k0s()(),t.j41(26,"div",10)(27,"ngb-pagination",11),t.mxI("pageChange",function(d){return t.DH7(o.currentPage,d)||(o.currentPage=d),d}),t.bIt("pageChange",function(d){return o.onPageChange(d)}),t.k0s()()()()),2&r&&(t.R7$(24),t.Y8G("ngForOf",o.sessionBets),t.R7$(),t.Y8G("ngIf",0==o.sessionBets.length),t.R7$(2),t.Y8G("collectionSize",o.totalCount)("pageSize",o.pageSize),t.R50("page",o.currentPage),t.Y8G("maxSize",2)("rotate",!0)("boundaryLinks",!1))},dependencies:[i.MD,i.YU,i.Sq,i.bT,l.c9,l.s5],styles:[".ledger-main[_ngcontent-%COMP%]{display:flex;width:100%;margin:20px 10px 30px}.up-down[_ngcontent-%COMP%]{width:20px;height:20px}.ledger-back[_ngcontent-%COMP%]{width:4%;margin-right:5px;height:40px;color:#fff}.ledger-text[_ngcontent-%COMP%]{width:92%;background-color:#2e3e49;color:#fff;height:40px;justify-content:center;align-items:center;text-align:center;padding-top:10px;font-family:Poppins,sans-serif;font-size:16px;font-weight:600}.btn-back[_ngcontent-%COMP%]{background-color:#2e3e49;border-radius:5px;width:100%;height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Arial,sans-serif;background-color:#192533;color:#fff}.ledger-container[_ngcontent-%COMP%]{margin:auto;color:#fff}h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;color:#fff}.ledger-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.ledger-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .ledger-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;text-align:left}.ledger-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:#101923}.ledger-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#2e3d4b}.ledger-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#212e3a}.green-text[_ngcontent-%COMP%]{color:#0f0}.red-text[_ngcontent-%COMP%]{color:red}.card-footer[_ngcontent-%COMP%]{position:fixed;justify-content:center;align-items:center;text-align:center;margin:auto;margin-top:10px!important}@media (max-width: 600px){.ledger-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .ledger-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .ledger-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .ledger-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .ledger-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:block}.ledger-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{position:absolute;top:-9999px;left:-9999px}.ledger-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin:0 0 1rem}.ledger-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{position:relative;padding-left:50%;text-align:right}.card-footer[_ngcontent-%COMP%]{position:fixed;justify-content:center;align-items:center;text-align:center;margin-top:10px!important}.ledger-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{position:absolute;top:0;left:0;width:50%;padding-right:10px;white-space:nowrap;text-align:left}.ledger-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label)}}*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.betting-card[_ngcontent-%COMP%]{background-color:#abb3b6;width:400px}.betting-card-container[_ngcontent-%COMP%]{background-color:#192533;color:#a0a0a0;padding:20px;border-radius:10px;text-align:center;box-shadow:0 4px 8px #0003;display:flex;justify-content:center;align-items:center;justify-self:center}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:18px;margin-bottom:10px}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#a0a0a0;font-size:14px;margin-bottom:20px}.bet-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0;font-size:16px}.green-text[_ngcontent-%COMP%]{color:#0f0;font-weight:700}.red-text[_ngcontent-%COMP%]{color:red;font-weight:700}.btn-back[_ngcontent-%COMP%]{background-color:#2e3e49;border-radius:5px;width:100%;height:100%;padding-top:8px}.close-btn[_ngcontent-%COMP%]{background-color:#34495e;color:#fff;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;font-size:16px;margin-top:20px}.close-btn[_ngcontent-%COMP%]:hover{background-color:#2c3e50}@media screen and (max-width: 500px){.ledger-back[_ngcontent-%COMP%]{width:10%;margin-right:5px;height:40px;color:#fff}.ledger-text[_ngcontent-%COMP%]{width:85%;background-color:#2e3e49;color:#fff;height:40px;justify-content:center;align-items:center;text-align:center;padding-top:10px;font-family:Poppins,sans-serif;font-size:16px;font-weight:600}.btn-back[_ngcontent-%COMP%]{background-color:#2e3e49;border-radius:5px;width:100%;height:100%}}.table-responsive[_ngcontent-%COMP%]{overflow-x:auto;-webkit-overflow-scrolling:touch;width:97%;margin-bottom:20px}th[_ngcontent-%COMP%]{background-color:#1a2c38;color:#fff;border:none}td[_ngcontent-%COMP%]{background-color:#1a2c38;color:#fff;border:none;cursor:pointer}.table-striped[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(odd) > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(odd) > th[_ngcontent-%COMP%]{background-color:#0f212e}.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;min-width:600px}@media screen and (max-width: 768px){.table-responsive[_ngcontent-%COMP%]{width:100%;margin-bottom:15px;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none}.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}}"]})}return e})()}}]);