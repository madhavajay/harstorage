define(["preview/requestList","preview/harModel","domplate/domplate","core/lib","core/trace","domplate/toolbar"],function(RequestList,HarModel,Domplate,Lib,XhrSpy,Trace,Toolbar){with(Domplate){var XHRSpyFrame=domplate({tag:DIV({"class":"xhrSpyFrame"},DIV({"class":"header"}),DIV({"class":"content"})),render:function(a){this.element=this.tag.append({},a,this),this.header=Lib.getElementByClass(this.element,"header"),this.content=Lib.getElementByClass(this.element,"content"),this.toolbar=new Toolbar,this.requestList=new RequestList(input),this.toolbar.addButtons(this.getToolbarButtons()),this.toolbar.render(this.header)},append:function(a){a.pageref=input.log.pages[0].id,input.log.entries.push(a);if(!a.logRow){var b=this.requestList.append(this.content,input.log.pages[0],[a]);a.logRow=b[0]}this.requestList.updateLayout(this.requestList.table,input.log.pages[0]);return a.logRow},getToolbarButtons:function(){var a=[{id:"clear",label:"Clear",tooltiptext:"Remove all entries",command:Lib.bindFixed(this.onClear,this)},{id:"save",label:"Save",tooltiptext:"Save As HAR File",command:Lib.bindFixed(this.onExport,this)}];return a},onClear:function(){input.log.entries=[],this.requestList=new RequestList(input),Lib.clearNode(this.content)},onExport:function(){console.log("Export: TBD")}}),input={log:{version:"1.2",creator:{name:"XHRSpy Bookmarklet",version:"2.0"},browser:{name:"Firefox",version:"xxx"},pages:[{startedDateTime:"",id:"page1",title:"Google",pageTimings:{}}],entries:[]}};XHRSpyFrame.render(Lib.getBody(document))}})