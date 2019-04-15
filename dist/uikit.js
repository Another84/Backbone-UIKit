!function(e,t){"function"==typeof define&&define.amd?define(["jquery","underscore","backbone"],t):e.uikit=t(e.$,e._,e.Backbone)}(this,function(e,t){function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var s,n,l;return function(e){function t(e,t){return x.call(e,t)}function i(e,t){var i,s,n,l,a,o,c,h,d,u,r,m,p=t&&t.split("/"),f=w.map,b=f&&f["*"]||{};if(e){for(e=e.split("/"),a=e.length-1,w.nodeIdCompat&&$.test(e[a])&&(e[a]=e[a].replace($,"")),"."===e[0].charAt(0)&&p&&(m=p.slice(0,p.length-1),e=m.concat(e)),d=0;d<e.length;d++)if(r=e[d],"."===r)e.splice(d,1),d-=1;else if(".."===r){if(0===d||1===d&&".."===e[2]||".."===e[d-1])continue;d>0&&(e.splice(d-1,2),d-=2)}e=e.join("/")}if((p||b)&&f){for(i=e.split("/"),d=i.length;d>0;d-=1){if(s=i.slice(0,d).join("/"),p)for(u=p.length;u>0;u-=1)if(n=f[p.slice(0,u).join("/")],n&&(n=n[s])){l=n,o=d;break}if(l)break;!c&&b&&b[s]&&(c=b[s],h=d)}!l&&c&&(l=c,o=h),l&&(i.splice(0,o,l),e=i.join("/"))}return e}function a(t,i){return function(){var s=g.call(arguments,0);return"string"!=typeof s[0]&&1===s.length&&s.push(null),m.apply(e,s.concat([t,i]))}}function o(e){return function(t){return i(t,e)}}function c(e){return function(t){b[e]=t}}function h(i){if(t(v,i)){var s=v[i];delete v[i],I[i]=!0,r.apply(e,s)}if(!t(b,i)&&!t(I,i))throw new Error("No "+i);return b[i]}function d(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function u(e){return function(){return w&&w.config&&w.config[e]||{}}}var r,m,p,f,b={},v={},w={},I={},x=Object.prototype.hasOwnProperty,g=[].slice,$=/\.js$/;p=function(e,t){var s,n=d(e),l=n[0];return e=n[1],l&&(l=i(l,t),s=h(l)),l?e=s&&s.normalize?s.normalize(e,o(t)):i(e,t):(e=i(e,t),n=d(e),l=n[0],e=n[1],l&&(s=h(l))),{f:l?l+"!"+e:e,n:e,pr:l,p:s}},f={require:function(e){return a(e)},exports:function(e){var t=b[e];return"undefined"!=typeof t?t:b[e]={}},module:function(e){return{id:e,uri:"",exports:b[e],config:u(e)}}},r=function(i,s,n,l){var o,d,u,r,m,w,x=[],g=typeof n;if(l=l||i,"undefined"===g||"function"===g){for(s=!s.length&&n.length?["require","exports","module"]:s,m=0;m<s.length;m+=1)if(r=p(s[m],l),d=r.f,"require"===d)x[m]=f.require(i);else if("exports"===d)x[m]=f.exports(i),w=!0;else if("module"===d)o=x[m]=f.module(i);else if(t(b,d)||t(v,d)||t(I,d))x[m]=h(d);else{if(!r.p)throw new Error(i+" missing "+d);r.p.load(r.n,a(l,!0),c(d),{}),x[m]=b[d]}u=n?n.apply(b[i],x):void 0,i&&(o&&o.exports!==e&&o.exports!==b[i]?b[i]=o.exports:u===e&&w||(b[i]=u))}else i&&(b[i]=n)},s=n=m=function(t,i,s,n,l){if("string"==typeof t)return f[t]?f[t](i):h(p(t,i).f);if(!t.splice){if(w=t,w.deps&&m(w.deps,w.callback),!i)return;i.splice?(t=i,i=s,s=null):t=e}return i=i||function(){},"function"==typeof s&&(s=n,n=l),n?r(e,t,i,s):setTimeout(function(){r(e,t,i,s)},4),m},m.config=function(e){return m(e)},s._defined=b,l=function(e,i,s){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");i.splice||(s=i,i=[]),t(b,e)||t(v,e)||(v[e]=[e,i,s])},l.amd={jQuery:!0}}(),l("libs/almond/almond-0.3.2",function(){}),l("uikit/UIView",["jquery","underscore","backbone"],function(e,t,i){return i.View.extend({className:"ui-view",animation:null,title:"",icon:"",class:"",oldClass:"",name:"",oldName:"",locked:!1,disabled:!1,hidden:!1,selected:!1,superview:null,subviews:null,items:null,userInteractionEnabled:!1,events:{},initialize:function(e){var i,s={},n=0,l="ontouchend"in document;if(this.subviews=[],e)for(i in e)e.hasOwnProperty(i)&&(this[i]=e[i]);for(i in this.events)if(this.events.hasOwnProperty(i))switch(i){case"touchstart":l?s.touchstart=this.events[i]:s.mousedown=this.events[i],n++;break;case"touchend":l?s.touchend=this.events[i]:s.mouseup=this.events[i],n++;break;case"mousedown":l?s.touchstart=this.events[i]:s.mousedown=this.events[i],n++;break;case"mouseup":l?s.touchend=this.events[i]:s.mouseup=this.events[i],n++;break;case"swipemove":case"pinch":case"tapone":case"mouseenter":case"mouseover":case"mouseleave":case"mousemove":case"mouseout":s[i]=this.events[i],n++;break;default:console.error("UIView: Sorry, unknown event name")}n&&(this.events=s,this.userInteractionEnabled=!0),this.delegateEvents(),t.bindAll.apply(t,[this].concat(t.functions(this))),this.$el.on("webkitTransitionEnd",this.transitionEndHandler)},transitionEndHandler:function(e){e.stopPropagation()},destroy:function(){this.remove(),this.unbind(),t.each(this.subviews,function(e){e.destroy&&e.destroy()})},render:function(){return this.$el.empty(),this.name&&this.setName(this.name),this.class&&this.setClass(this.class),this.addItems(),this},size:function(){var e=this.$el[0].getBoundingClientRect();return{width:e.width,height:e.height}},touchstartHandler:function(e){e.preventDefault(),this.userInteractionEnabled&&!this.disabled&&this.select()},touchendHandler:function(e){e.preventDefault(),this.userInteractionEnabled&&!this.disabled&&this.deselect()},taponeHandler:function(e){this.userInteractionEnabled&&e.stopPropagation()},swipemoveHandler:function(e){e.stopPropagation()},setName:function(e){this.oldName=this.name,this.name=e,this.$el.removeClass(this.oldName).addClass(this.name)},setClass:function(e){this.oldClass=this.class,this.class=e,this.$el.removeClass(this.oldClass).addClass(this.class)},lock:function(){this.locked=!0},unlock:function(){this.locked=!1},disable:function(){this.locked||(this.disabled=!0,this.$el.addClass("ui-dis"))},enable:function(){this.locked||(this.disabled=!1,this.$el.removeClass("ui-dis"))},hide:function(){this.hidden=!0,this.$el.addClass("ui-hid"),this.viewDidDisappear()},show:function(){this.hidden=!1,this.$el.removeClass("ui-hid"),this.viewDidAppear()},deselect:function(){this.selected=!1,this.$el.removeClass("ui-sel")},select:function(){this.selected=!0,this.$el.addClass("ui-sel")},addSubview:function(t,i){var s=this.$el,n=!1;i&&(i instanceof jQuery?i.length?s=i:(console.error("empty jquery object"),n=!0):"string"==typeof i&&(s=e(i,this.$el),s.length||(console.error("wrong selector ",i),n=!0))),n||(s.append(t.render().el),t.superview=this,this.subviews.push(t))},addItems:function(){var e=this;t.each(this.items,function(t){e.addSubview(t)})},bringSubviewToFront:function(e){t.each(this.subviews,function(t){t!==e&&t.hide()}),e.show()},addTabBar:function(e){e.superview=this,this.$el.append(e.render().el),this.$el.addClass("view-has-tab-bar")},viewDidAppear:function(){},viewDidDisappear:function(){},goBack:function(e){e.remove(),this.subviews.pop()}})}),l("uikit/UIButton",["jquery","underscore","backbone","./UIView"],function(e,t,i,s){return s.extend({className:"ui-btn",template:'\n      <span class="btn-icon"></span><span class="btn-label"></span>',$icon:null,$label:null,action:null,label:"",icon:"",iconOrder:0,align:"center",events:{tapone:"taponeHandler",touchstart:"touchstartHandler",touchend:"touchendHandler",swipemove:"swipemoveHandler"},render:function(){return this.$el.empty(),this.$el.html(this.template),this.$icon=this.$el.find(".btn-icon"),this.$label=this.$el.find(".btn-label"),this.label&&this.$label.html(this.label),this.icon&&this.$icon.addClass("icon--"+this.icon),this.iconOrder&&this.$icon.addClass("btn-icon--order"),"center"!==this.align&&this.$el.addClass("ui-btn--align-"+this.align),this.$el.addClass(this.class),this.disabled&&this.$el.addClass("ui-dis"),this.hidden&&this.$el.addClass("ui-hid"),this},setLabel:function(e){this.label=e,this.$label.html(this.label)},setIcon:function(e){this.icon=e,this.$icon.addClass("icon--"+e)},touchstartHandler:function(e){this.userInteractionEnabled&&!this.disabled&&(e.stopPropagation(),this.select())},touchendHandler:function(e){this.userInteractionEnabled&&!this.disabled&&(e.stopPropagation(),this.deselect())},taponeHandler:function(e,t){t.originalEvent.stopPropagation(),this.action&&!this.disabled&&this.action(this)}})}),l("uikit/UISegmentedControl",["jquery","underscore","backbone","./UIView","./UIButton"],function(e,t,i,s,n){return s.extend({className:"ui-view ui-segmented-control",selectedIndex:0,items:null,buttons:null,initialize:function(e){s.prototype.initialize.apply(this,[e]),this.buttons=[]},render:function(){var e=this;return this.$el.empty(),this.$el.addClass(this.class),this.disabled&&this.$el.addClass("ui-dis"),this.hidden&&this.$el.addClass("ui-hid"),this.items.forEach(function(t,i){var s=new n({label:t.label,action:function(t){e.buttons.forEach(function(e){e.$el.removeClass("selected")}),t.$el.addClass("selected"),i!==e.selectedIndex&&(e.selectedIndex=i,e.changeHandler(e.selectedIndex))}});e.buttons.push(s),e.addSubview(s),i===e.selectedIndex&&s.$el.addClass("selected")}),this},changeHandler:function(e){}})}),l("uikit/UIStepper",["jquery","underscore","backbone","./UIView","./UIButton"],function(e,t,i,s,n){return s.extend({className:"ui-stepper",model:null,attribute:"",value:0,minimumValue:0,maximumValue:1e3,stepValue:1,autorepeat:!1,decButton:null,incButton:null,changeHandler:null,initialize:function(e){s.prototype.initialize.apply(this,[e]),this.model&&(this.value=this.model.get(this.attribute),(this.value<this.minimumValue||this.value>this.maximumValue)&&console.error("The value ("+this.value+") must be between the minimum ("+this.minimumValue+") and maximum ("+this.maximumValue+") values."))},render:function(){var e=this;return this.$el.empty(),this.setClass(this.class),this.disabled&&this.$el.addClass("ui-dis"),this.hidden&&this.$el.addClass("ui-hid"),this.decButton=new n({class:"ui-stepper-dec-btn",label:"–",action:function(){e.decreaseValue()}}),this.addSubview(this.decButton),this.incButton=new n({class:"ui-stepper-inc-btn",label:"+",action:function(){e.increaseValue()}}),this.addSubview(this.incButton),this.updateUI(),this},updateUI:function(){this.value<=this.minimumValue?(this.decButton.disable(),this.decButton.lock(),this.incButton.unlock(),this.incButton.enable()):this.value>this.minimumValue&&this.value<this.maximumValue?(this.decButton.unlock(),this.decButton.enable(),this.incButton.unlock(),this.incButton.enable()):this.value>=this.maximumValue&&(this.decButton.unlock(),this.decButton.enable(),this.incButton.disable(),this.incButton.lock())},updateModel:function(){this.model&&this.model.set(this.attribute,this.value)},decreaseValue:function(){var e=this.value-this.stepValue,t=this.value;e<=this.minimumValue&&(e=this.minimumValue),e!==t&&(this.value=e,this.changeHandler&&this.changeHandler(e,t),this.updateUI(),this.updateModel())},increaseValue:function(){var e=this.value+this.stepValue,t=this.value;e>=this.maximumValue&&(e=this.maximumValue),e!==t&&(this.value=e,this.changeHandler&&this.changeHandler(e,t),this.updateUI(),this.updateModel())}})}),l("uikit/UILabel",["jquery","underscore","backbone","./UIView"],function(e,t,i,s){return s.extend({className:"ui-label",tagName:"label",model:null,attribute:"",text:"",initialize:function(e){s.prototype.initialize.apply(this,[e]),this.model&&this.listenTo(this.model,"change",this.update)},render:function(){return this.$el.empty(),this.setClass(this.class),this.hidden&&this.$el.addClass("ui-hid"),this.model?this.setText(this.model.get(this.attribute)):this.$el.html(this.text),this},update:function(){this.model&&this.setText(this.model.get(this.attribute))},setText:function(e){this.text=e,this.$el.html(this.text)}})}),l("uikit/UITextField",["jquery","underscore","backbone","./UIView"],function(e,t,i,s){return s.extend({className:"ui-text-field",templateInput:t.template('<input type="<%= type %>" class="input-text" id="<%= name %>" name="<%= name %>" placeholder="<%= placeholder %>" value="<%= value %>" <%= autofocus %>>'),templateData:t.template('<div class="data-text" id="<%= name %>"><%= value %></div>'),templatePhoneNumber:t.template('<div class="data-text"><a href="tel:+<%= value %>">+<%= value %></a></div>'),model:null,attribute:"",value:"",valid:!0,$input:null,type:"text",autocomplete:"",name:"",placeholder:"",autofocus:!1,editable:!0,phoneNumber:!1,delay:0,timeout:null,initialize:function(e){s.prototype.initialize.apply(this,[e]),this.model&&(this.value=this.model.get(this.attribute))},render:function(){var e=this,t={type:this.type,name:this.name,value:this.value,placeholder:this.placeholder,autofocus:this.autofocus?"autofocus":""};return this.$el.empty(),this.editable?(this.$el.html(this.templateInput(t)),this.$input=this.$el.find("input"),this.autocomplete&&this.$input.attr("autocomplete",this.autocomplete),this.$input.on("focus",this.focusHandler),this.$input.on("input",function(t){e.value=e.$input.val(),t.data||(t.data={}),t.data.value=e.value,t.data.view=e,e.delay?(e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.changeHandler(t)},e.delay)):e.changeHandler(t)}),this.$input.on("keypress",this.keypressHandler),this.$input.on("keydown",this.keydownHandler),this.$input.on("blur",this.blurHandler)):this.phoneNumber?this.$el.html(this.templatePhoneNumber(t)):this.$el.html(this.templateData(t)),this.disabled&&this.$el.addClass("ui-dis"),this.hidden&&this.$el.addClass("ui-hid"),this.class&&this.setClass(this.class),this},setValue:function(e){this.value=e,this.render()},setPlaceholder:function(e){this.placeholder=e,this.render()},setValid:function(e){this.valid=e,e?this.$el.removeClass("invalid").addClass("valid"):this.$el.removeClass("valid").addClass("invalid")},focusHandler:function(){},keypressHandler:function(){},keydownHandler:function(){},changeHandler:function(){this.model&&this.model.set(this.attribute,this.value)},blurHandler:function(){},focus:function(){this.$input.focus()}})}),l("uikit/UITextView",["jquery","underscore","backbone","./UIView"],function(e,t,i,s){return s.extend({className:"ui-text-view",templateTextarea:t.template('<textarea class="input-text" name="<%= name %>" placeholder="<%= placeholder %>" rows="" cols=""><%= text %></textarea>'),templateData:t.template('<div class="data-text"><%= text %></div>'),$textarea:null,name:"",text:"",placeholder:"",editable:!0,render:function(){var e={name:this.name,text:this.text,placeholder:this.placeholder};return this.$el.empty(),this.setClass(this.class),this.editable?(this.$el.html(this.templateTextarea(e)),this.$textarea=this.$el.find("textarea")):this.$el.html(this.templateData(e)),this.disabled&&this.$el.addClass("ui-dis"),this.hidden&&this.$el.addClass("ui-hid"),this.class&&this.setClass(this.class),this.$textarea.on("change keyup paste",this.changeHandler),this},setText:function(e){this.text=e,this.$el.html(this.text)},changeHandler:function(){this.text=this.$textarea.val()},focus:function(){this.$textarea.focus()}})}),l("uikit/UIImageView",["jquery","underscore","backbone","./UIView"],function(e,t,i,s){return s.extend({className:"ui-image-view",imageUrl:null,frameWidth:null,frameHeight:null,imageWidth:0,imageHeight:0,status:null,image:null,initialize:function(e){s.prototype.initialize.apply(this,[e]),this.image=new Image},render:function(){var e="";return this.$el.empty(),this.setClass(this.class),null!==this.frameWidth&&(e+="width:"+this.frameWidth+"; "),null!==this.frameHeight&&(e+="height:"+this.frameHeight+"; "),"loaded"===this.status&&(e+="background-image: url("+this.imageUrl+");"),e+="background-size: "+this.imageWidth+" "+this.imageHeight+";",this.$el.attr("style",e),this},load:function(){this.beforeLoad(),e(this.image).one("load",function(){this.complete(),this.success()}).one("error",function(){this.complete(),this.error()}).attr("src",this.imageUrl).each(function(){this.complete&&e(this).trigger("load")})},beforeLoad:function(){},complete:function(){},success:function(){this.status="loaded",this.render()},error:function(){this.status="error",this.render()}})}),l("uikit/UINavigationBar",["jquery","underscore","backbone","./UIView"],function(e,t,i,s){return s.extend({className:"ui-view ui-navigation-bar",template:'\n      <div class="left-place"></div>\n      <div class="center-place"></div>\n      <div class="right-place"></div>',leftBarItems:null,centerBarItems:null,rightBarItems:null,events:{touchstart:"touchstartHandler",touchend:"touchendHandler",tapone:"taponeHandler",swipemove:"swipemoveHandler"},render:function(){var e,i,s,n=this;return this.$el.empty(),this.$el.html(this.template),e=this.$el.find(".left-place"),i=this.$el.find(".center-place"),s=this.$el.find(".right-place"),t.each(this.leftBarItems,function(t){n.addSubview(t,e)}),t.each(this.centerBarItems,function(e){n.addSubview(e,i)}),t.each(this.rightBarItems,function(e){n.addSubview(e,s)}),this}})}),l("uikit/UITabBarItem",["jquery","underscore","backbone","./UIView"],function(e,t,i,s){return s.extend({className:"ui-tab-bar-item",template:t.template('<span class="tab-bar-item-icon icon-<%= icon %>"></span><span class="tab-bar-item-text"><%= title %></span>'),events:{tapone:"taponeHandler"},icon:"",title:"",index:null,selected:!1,render:function(){return this.$el.empty(),this.$el.html(this.template({icon:this.icon,title:this.title})),this},taponeHandler:function(){this.superview.selectItem(this.index)},select:function(){this.$el.addClass("selected")},deselect:function(){this.$el.removeClass("selected")}})}),l("uikit/UITabBar",["jquery","underscore","backbone","./UIView","./UITabBarItem"],function(e,t,i,s,n){return s.extend({className:"ui-tab-bar",items:null,selectedIndex:0,render:function(){var e=this;return this.$el.empty(),this.items=[],t.each(this.superview.subviews,function(t,i){var s=new n({icon:t.icon,title:t.title,index:i,superview:e});e.items.push(s),e.$el.append(s.render().el)}),this.selectItem(this.selectedIndex),this},selectItem:function(e){this.selectedIndex=e,t.each(this.items,function(e){e.deselect()}),this.items[this.selectedIndex].select(),this.superview.bringSubviewToFront(this.superview.subviews[this.selectedIndex])}})}),l("uikit/UIScrollView",["jquery","underscore","backbone","./UIView"],function(e,t,i,s){return s.extend({className:"ui-view ui-scroll-view",$content:null,scale:1,currentScale:1,maximumScale:1e3,minimumScale:1e-7,firstPinch:!0,pinch:{x:0,y:0},translate:{x:0,y:0},pinchRelativeTranslate:{x:0,y:0},events:{touchstart:"touchstartHandler",touchend:"touchendHandler",pinch:"gestureHandler",swipemove:"gestureHandler"},render:function(){return this.$el.empty(),this.$el.append('<div class="scroll-content"></div>'),this.$content=this.$el.find(".scroll-content"),this.class&&this.setClass(this.class),this.applyTransforms(),this},addSubview:function(e){this.$content.append(e.render().el),e.superview=this,this.subviews.push(e)},setOffset:function(e){this.translate=e,this.applyTransforms()},setScale:function(e){var t=e;t<this.minimumScale?t=this.minimumScale:t>this.maximumScale&&(t=this.maximumScale),this.scale=t,this.currentScale=t,this.applyTransforms()},setScaleRelativeToPoint:function(e,t){var i={x:0,y:0};i.x=this.translate.x-t.x,i.y=this.translate.y-t.y,this.currentScale=this.scale*e,this.translate.x=i.x*e+t.x,this.translate.y=i.y*e+t.y,this.applyTransforms(),this.scale=this.currentScale},contentSize:function(){var e={top:0,right:0,bottom:0,left:0,width:0,height:0};return this.$content&&(e=this.$content[0].getBoundingClientRect()),{width:e.width,height:e.height}},applyTransforms:function(){var e="";e+="transform: ",e+="translate3d("+this.translate.x+"px, "+this.translate.y+"px, 0px) ",e+="scaleX("+this.currentScale+") scaleY("+this.currentScale+") ",e+=";",this.$content.attr("style",e)},touchstartHandler:function(){},touchendHandler:function(){this.scale=this.currentScale,this.firstPinch=!0},gestureHandler:function(e,t){var i,s,n=0,l=0;switch(e.preventDefault(),t.originalEvent.preventDefault(),i=t.description.split(":"),i[0]){case"pinch":s=this.scale*t.scale,s>=this.minimumScale&&s<=this.maximumScale&&(this.firstPinch&&(this.pinch.x=t.originalEvent.layerX,this.pinch.y=t.originalEvent.layerY,this.pinchRelativeTranslate.x=this.translate.x-this.pinch.x,this.pinchRelativeTranslate.y=this.translate.y-this.pinch.y),this.firstPinch=!1,this.currentScale=this.scale*t.scale,this.translate.x=this.pinchRelativeTranslate.x*t.scale+this.pinch.x,this.translate.y=this.pinchRelativeTranslate.y*t.scale+this.pinch.y);break;case"rotate":break;case"swipemove":"1"===i[1]&&(n=t.delta[0].startX,l=t.delta[0].startY,this.translate.x=n+this.translate.x,this.translate.y=l+this.translate.y);break;case"swipe":}this.testHandler(),this.applyTransforms()},testHandler:function(){}})}),l("uikit/UIActivityIndicatorView",["jquery","underscore","backbone","./UIView"],function(e,t,i,s){return s.extend({className:"ui-activity-indicator-view",isAnimating:!0,render:function(){return this.$el.empty(),this.isAnimating&&this.startAnimating(),this},startAnimating:function(){this.isAnimating=!0,this.$el.addClass("animating")},stopAnimating:function(){this.isAnimating=!1,this.$el.removeClass("animating")}})}),l("uikit/UIAccordionState",["jquery","underscore","backbone","./UIView","./UIButton"],function(e,t,i,s,n){return s.extend({className:"ui-view ui-accordion-state",index:0,item:null,button:null,opened:!1,$button:null,buttonHeight:40,render:function(){return this.button?(this.addSubview(this.button),this.$button=this.button.$el):(this.button=new n({label:this.item.title,align:"justify",iconOrder:1,action:function(){this.superview.toggle()}}),this.addSubview(this.button),this.$button=this.button.$el),this.addSubview(this.item),setTimeout(this.layout,0),this},layout:function(){this.buttonHeight=this.$button.outerHeight(!0),this.opened?this.open():this.close()},open:function(){this.superview.subviews.forEach(function(e){e.close()}),this.opened=!0,this.$el.removeAttr("style").addClass("state-opened")},close:function(){this.opened=!1,this.$el.attr("style","height: "+this.buttonHeight+"px;").removeClass("state-opened")},toggle:function(){this.opened?this.close():this.open()}})}),l("uikit/UIAccordion",["jquery","underscore","backbone","./UIView","./UIButton","./UIAccordionState"],function(e,t,i,s,n,l){return s.extend({className:"ui-view ui-accordion",items:null,buttons:null,openedIndex:null,addItems:function(){var e,t=this;this.items.forEach(function(i,s){e=new l({opened:s===t.openedIndex,index:s,item:i,button:t.buttons?t.buttons[s]:null}),t.addSubview(e)})}})}),l("uikit/UISelect",["jquery","underscore","backbone","./UIView","./UIButton"],function(e,t,i,s,n){return s.extend({className:"ui-view ui-select",listClass:"",collection:null,model:null,appearance:"down",oldSelectedIndex:null,selectedIndex:-1,selectedId:null,opened:!1,button:null,label:"",rect:null,listView:null,listContentView:null,overlayView:null,ItemView:null,changeHandler:null,initialize:function(e){var t=this;s.prototype.initialize.apply(this,[e]),this.collection.length&&(this.selectedIndex>-1?this.selectedId=this.collection.at(this.selectedIndex).get("id"):this.selectedId&&(this.model=this.collection.findWhere({id:this.selectedId}),this.selectedIndex=this.collection.indexOf(this.model))),this.oldSelectedIndex=this.selectedIndex,this.listenTo(this.collection,"update",function(){t.model=t.collection.findWhere({id:t.selectedId}),t.model?t.selectedIndex=t.collection.indexOf(t.model):(t.selectedIndex=0,t.collection.length&&t.selectedIndex>-1&&(t.selectedId=t.collection.at(t.selectedIndex).get("id"))),t.render()})},render:function(){var e=this,t="";return this.$el.empty(),this.$el.addClass(this.class),this.disabled&&this.$el.addClass("ui-dis"),t=this.collection.length&&this.selectedIndex>-1?this.collection.at(this.selectedIndex).get("title"):this.label,this.button=new n({label:t,disabled:!this.collection.length,align:"justify",iconOrder:1,action:function(){e.toggle()}}),this.addSubview(this.button),this.collection.length&&(this.opened?this.open():this.close()),this},toggle:function(){this.disabled||(this.opened?(this.opened=!1,this.close(),this.selectedIndex>-1&&(this.button.setLabel(this.collection.at(this.selectedIndex).get("title")),this.oldSelectedIndex!==this.selectedIndex&&this.changeHandler&&(this.changeHandler(),this.oldSelectedIndex=this.selectedIndex))):(this.opened=!0,this.open()))},open:function(){var t=this,n=this.$el[0].getBoundingClientRect(),l="";switch(this.rect={top:n.top,bottom:n.bottom,left:n.left,width:n.width,height:n.height},this.$el.addClass("state-opened"),this.overlayView=new s({class:"ui-select-overlay",state:function(){return"pending"},events:{tapone:function(){t.toggle()}}}),e("body").append(this.overlayView.render().el),i.trigger("uikit-modal",this.overlayView),this.listView=new s({class:"ui-select-list "+this.listClass}),this.overlayView.addSubview(this.listView),this.appearance){case"down":l="top: "+(this.rect.top+this.rect.height)+"px; left:"+this.rect.left+"px; width:"+this.rect.width+"px;";break;case"up":l="top: auto; bottom: "+(e(window).height()-this.rect.top)+"px; left:"+this.rect.left+"px; width:"+this.rect.width+"px;"}this.listView.$el.attr("style",l),this.listContentView=new s({class:"ui-select-list-content"}),this.listView.addSubview(this.listContentView),this.collection.each(function(e,i){t.listContentView.addSubview(new t.ItemView({model:e,events:{tapone:function(){t.oldSelectedIndex=t.selectedIndex,t.selectedIndex=i,t.selectedId=t.collection.at(t.selectedIndex).get("id"),console.log("this.selectedId = ",t.selectedId),t.toggle()}}}))}),setTimeout(this.layoutOpen,0)},layoutOpen:function(){var t,i=this.listContentView.$el.outerHeight(!0);switch(this.appearance){case"down":t=e(window).height()-(this.rect.top+this.rect.height);break;case"up":t=this.rect.top}t<i&&this.listContentView.$el.attr("style","height:"+t+"px;")},close:function(){this.$el.removeClass("state-opened"),this.overlayView&&this.overlayView.destroy()}})}),l("uikit/UISelectList",["jquery","underscore","backbone","./UIView"],function(e,t,s,n){return n.extend({className:"ui-view ui-selectlist",collection:null,attribute:"id",model:null,oldSelectedIndex:null,selectedIndex:-1,selectedId:null,listContentView:null,ItemView:null,itemViews:null,multiSelect:!1,limit:1,initialize:function(e){var t=this;n.prototype.initialize.apply(this,[e]),this.itemViews=[],this.multiSelect?(this.selectedIndex===-1&&(this.selectedIndex=[]),this.selectedId||(this.selectedId=[]),this.selectedIndex.length?this.selectedIndex.forEach(function(e){t.selectedId=[],t.selectedId.push(t.collection.at(e).get(t.attribute))}):this.selectedId.length&&(this.selectedIndex=[],this.selectedId.forEach(function(e){t.model=t.collection.findWhere(i({},t.attribute,e)),t.selectedIndex.push(t.collection.indexOf(t.model))}))):(this.collection.length&&(this.selectedIndex>-1?this.selectedId=this.collection.at(this.selectedIndex).get(this.attribute):this.selectedId&&(this.multiSelect?(this.selectedIndex=[],this.selectedId.forEach(function(e){t.model=t.collection.findWhere(i({},t.attribute,e)),t.selectedIndex.push(t.collection.indexOf(t.model))})):(this.model=this.collection.findWhere(i({},this.attribute,this.selectedId)),this.selectedIndex=this.collection.indexOf(this.model)))),this.oldSelectedIndex=this.selectedIndex),this.listenTo(this.collection,"update reset sort",function(){t.model=t.collection.findWhere(i({},t.attribute,t.selectedId)),t.model?t.selectedIndex=t.collection.indexOf(t.model):(t.selectedIndex=0,t.collection.length&&t.selectedIndex>-1&&(t.selectedId=t.collection.at(t.selectedIndex).get(t.attribute))),t.render()})},render:function(){var e=this;return this.listContentView&&this.listContentView.destroy(),this.itemViews.length&&(this.itemViews=[]),this.$el.empty(),this.$el.addClass(this.class),this.disabled&&this.$el.addClass("ui-dis"),this.listContentView=new n({class:"ui-selectlist-content"}),this.addSubview(this.listContentView),this.collection.each(function(t,i){var s=e,n=function(){var e=!1;return e=s.multiSelect?s.selectedIndex.indexOf(i)>-1:i===s.selectedIndex},l=e,a=new e.ItemView({model:t,selected:n(),events:{tapone:function(){l.disabled||this.disabled||l.toggle(i)},touchstart:function(e){(l.multiSelect||l.selectedIndex!==i)&&this.touchstartHandler(e)},touchend:function(e){(l.multiSelect||l.selectedIndex!==i)&&this.touchendHandler(e)}}});e.listContentView.addSubview(a),e.itemViews.push(a)}),this},toggle:function(e){var t=this;if(this.multiSelect){var i=!1,s=this.selectedIndex.indexOf(e);s>-1?(this.selectedIndex.splice(s,1),i=!0):this.selectedIndex.length<this.limit&&(this.selectedIndex.push(e),i=!0),i&&!function(){var e=[];t.selectedIndex.forEach(function(i){e.push(t.collection.at(i).get(t.attribute))}),t.selectedId=e;var i=!(t.selectedIndex.length<t.limit);t.itemViews.forEach(function(e,s){t.selectedIndex.indexOf(s)>-1?(e.unlock(),e.enable(),e.select()):(i?(e.disable(),e.lock()):(e.unlock(),e.enable()),e.deselect())}),t.changeHandler(t.selectedId)}()}else this.oldSelectedIndex=this.selectedIndex,this.selectedIndex=e,this.selectedId=this.collection.at(this.selectedIndex).get(this.attribute),this.selectedIndex>-1&&this.oldSelectedIndex!==this.selectedIndex&&(this.itemViews.forEach(function(e,i){i===t.selectedIndex?e.select():e.deselect()}),this.changeHandler(this.selectedId))},changeHandler:function(){}})}),l("uikit/UICheckbox",["jquery","underscore","backbone","./UIView"],function(e,t,i,s){return s.extend({className:"ui-checkbox",name:"",checked:!1,events:{tapone:"taponeHandler",touchstart:"touchstartHandler",touchend:"touchendHandler",swipemove:"swipemoveHandler"},render:function(){return this.$el.empty(),this.checked&&this.$el.addClass("checked"),this.$el.addClass(this.class),this.disabled&&this.$el.addClass("ui-dis"),this.hidden&&this.$el.addClass("ui-hid"),this},taponeHandler:function(){this.checked?(this.$el.removeClass("checked"),this.checked=!1):(this.$el.addClass("checked"),this.checked=!0),this.changeHandler(this.checked)},changeHandler:function(){}})}),l("uikit/UISwitch",["jquery","underscore","backbone","./UIView"],function(e,t,i,s){return s.extend({className:"ui-view ui-switch",template:t.template('<div class="ui-switch-borders"></div><div class="ui-switch-marker"></div>'),name:"",disabled:!1,checked:!1,events:{tapone:"taponeHandler",touchstart:"touchstartHandler",touchend:"touchendHandler",swipemove:"swipemoveHandler"},render:function(){return this.$el.empty(),this.$el.html(this.template()),this.checked&&this.$el.addClass("checked"),this.$el.addClass(this.class),this.disabled&&this.$el.addClass("ui-dis"),this.hidden&&this.$el.addClass("ui-hid"),this},taponeHandler:function(){this.disabled||(this.checked?(this.$el.addClass("unchecked").removeClass("checked"),this.checked=!1):(this.$el.addClass("checked").removeClass("unchecked"),this.checked=!0),this.changeHandler(this.checked))},changeHandler:function(){}})}),l("uikit/alertView",["jquery","underscore","backbone","./UIView","./UIButton","./UILabel"],function(e,t,i,s,n,l){return function(t){var a,o,c=e.Deferred();return a=s.extend({className:"ui-alert-view",template:'\n        <div class="ui-alert-content"></div>',$content:null,title:"&nbsp;",message:"",okButtonLabel:"OK",render:function(){return this.$el.empty(),this.$el.html(this.template),this.$content=this.$el.find(".ui-alert-content"),this.addSubview(new l({class:"alert-title-label",text:this.title}),this.$content),this.addSubview(new l({class:"alert-message-label",text:this.message}),this.$content),this.addSubview(new n({class:"alert-ok-btn",label:this.okButtonLabel,action:this.resolve}),this.$content),this},show:function(){e("body").append(this.render().el)},resolve:function(e){c.resolve(e),this.destroy()}}),o=new a(t),o.show(),i.trigger("uikit-modal",o),c.promise(o)}}),l("uikit/confirmView",["jquery","underscore","backbone","./UIView","./UIButton","./UILabel"],function(e,t,i,s,n,l){return function(t){var a,o,c=e.Deferred();return a=s.extend({className:"ui-confirm-view",template:'\n        <div class="ui-confirm-content">\n          <div class="text-place"></div>\n          <div class="buttons-place"></div>\n        </div>',$textPlace:null,$buttonsPlace:null,title:"&nbsp;",message:"",okButtonLabel:"OK",cancelButtonLabel:"Cancel",render:function(){return this.$el.empty(),this.$el.html(this.template),this.$textPlace=e(".text-place",this.$el),this.$buttonsPlace=e(".buttons-place",this.$el),this.addSubview(new l({class:"confirm-title-label",text:this.title
}),this.$textPlace),this.addSubview(new l({class:"confirm-message-label",text:this.message}),this.$textPlace),this.addSubview(new n({class:"confirm-cancel-btn",label:this.cancelButtonLabel,action:this.reject}),this.$buttonsPlace),this.addSubview(new n({class:"confirm-ok-btn",label:this.okButtonLabel,action:this.resolve}),this.$buttonsPlace),this},show:function(){e("body").append(this.render().el)},resolve:function(e){c.resolve(e),this.destroy()},reject:function(e){c.reject(e),this.destroy()}}),o=new a(t),o.show(),i.trigger("uikit-modal",o),c.promise(o)}}),l("uikit/modalView",["jquery","underscore","backbone","./UIView"],function(e,t,i,s){return function(t){var n,l,a=e.Deferred();return n=s.extend({className:"ui-modal-view",contentView:null,obj:null,events:{tapone:"notify"},render:function(){return this.$el.empty(),this.contentView?this.addSubview(this.contentView):console.error("contentView is needed"),this},show:function(){e("body").append(this.render().el)},resolve:function(e){this.destroy(),a.resolve(e)},reject:function(e){this.destroy(),a.reject(e)},notify:function(e){a.notify(e)}}),l=new n(t),l.show(),i.trigger("uikit-modal",l),a.promise(l)}}),l("uikit/promptView",["jquery","underscore","backbone","./UIView","./UIButton","./UILabel","./UITextField"],function(e,t,i,s,n,l,a){return function(t){var o,c,h=e.Deferred();return o=s.extend({className:"ui-prompt-view",template:'\n        <div class="ui-prompt-content">\n          <div class="text-place"></div>\n          <div class="input-place"></div>\n          <div class="buttons-place"></div>\n        </div>',$textPlace:null,$buttonsPlace:null,title:"&nbsp;",message:"",placeholder:"",value:"",okButtonLabel:"OK",cancelButtonLabel:"Cancel",textField:null,render:function(){return this.$el.empty(),this.$el.html(this.template),this.$textPlace=e(".text-place",this.$el),this.$inputPlace=e(".input-place",this.$el),this.$buttonsPlace=e(".buttons-place",this.$el),this.addSubview(new l({class:"prompt-title-label",text:this.title}),this.$textPlace),this.addSubview(new l({class:"prompt-message-label",text:this.message}),this.$textPlace),this.textField=new a({class:"prompt-input",autofocus:!0,placeholder:this.placeholder,value:this.value}),this.addSubview(this.textField,this.$inputPlace),this.addSubview(new n({class:"prompt-cancel-btn",label:this.cancelButtonLabel,action:this.reject}),this.$buttonsPlace),this.addSubview(new n({class:"prompt-ok-btn",label:this.okButtonLabel,action:this.resolveWithData}),this.$buttonsPlace),this},show:function(){e("body").append(this.render().el)},resolveWithData:function(){this.resolve(this.textField.value)},resolve:function(e){h.resolve(e),this.destroy()},reject:function(e){h.reject(e),this.destroy()}}),c=new o(t),c.show(),i.trigger("uikit-modal",c),h.promise(c)}}),l("uikit/actionSheet",["jquery","underscore","backbone","./UIView","./UIButton","./UILabel"],function(e,t,i,s,n,l){return function(t){var a,o,c=e.Deferred();return a=s.extend({className:"ui-action-sheet-view",template:'\n        <div class="ui-action-sheet-content">\n          <div class="ui-action-sheet-ok">\n            <div class="ui-action-title-place"></div>\n            <div class="ui-action-sheet-actions-scroll">\n              <div class="ui-action-sheet-actions"></div>\n            </div>\n          </div>\n          <div class="ui-action-cancel-place"></div>\n        </div>',$content:null,$titlePlace:null,$actions:null,$cancelPlace:null,title:"&nbsp;",actions:null,cancelButtonLabel:"Cancel",events:{touchstart:"touchstartHandler",touchend:"touchendHandler"},touchstartHandler:function(e){e.preventDefault()},touchendHandler:function(e){e.preventDefault()},render:function(){var e=this;return this.$el.empty(),this.$el.html(this.template),this.$content=this.$el.find(".ui-action-sheet-content"),this.$titlePlace=this.$el.find(".ui-action-title-place"),this.$actionsScroll=this.$el.find(".ui-action-sheet-actions-scroll"),this.$actions=this.$el.find(".ui-action-sheet-actions"),this.$cancelPlace=this.$el.find(".ui-action-cancel-place"),this.addSubview(new l({class:"action-sheet-message-label",text:this.title}),this.$titlePlace),this.actions&&this.actions.length&&this.actions.forEach(function(t,i){e.addSubview(new n({class:"action-sheet-action-btn",label:t.label,action:function(){e.resolve(i),t.action&&t.action()}}),e.$actions)}),this.addSubview(new n({class:"action-sheet-cancel-btn",label:this.cancelButtonLabel,action:this.reject}),this.$cancelPlace),setTimeout(function(){e.layout()},0),this},layout:function(){var e=this.$el.height()-200,t=this.$actions.height();console.log("maxHeight = ",e),console.log("actionsHeight = ",t),t>e&&this.$actionsScroll.attr("style","height: "+e+"px; -webkit-overflow-scrolling: touch;")},show:function(){e("body").append(this.render().el)},resolve:function(e){c.resolve(e),this.destroy()},reject:function(e){c.reject(e),this.destroy()}}),o=new a(t),o.show(),i.trigger("uikit-modal",o),c.promise(o)}}),l("uikit",["require","./uikit/UIView","./uikit/UIButton","./uikit/UISegmentedControl","./uikit/UIStepper","./uikit/UILabel","./uikit/UITextField","./uikit/UITextView","./uikit/UIImageView","./uikit/UINavigationBar","./uikit/UITabBarItem","./uikit/UITabBar","./uikit/UIScrollView","./uikit/UIActivityIndicatorView","./uikit/UIAccordion","./uikit/UISelect","./uikit/UISelectList","./uikit/UICheckbox","./uikit/UISwitch","./uikit/alertView","./uikit/confirmView","./uikit/modalView","./uikit/promptView","./uikit/actionSheet"],function(e){"use strict";return{version:"1.0.0",UIView:e("./uikit/UIView"),UIButton:e("./uikit/UIButton"),UISegmentedControl:e("./uikit/UISegmentedControl"),UIStepper:e("./uikit/UIStepper"),UILabel:e("./uikit/UILabel"),UITextField:e("./uikit/UITextField"),UITextView:e("./uikit/UITextView"),UIImageView:e("./uikit/UIImageView"),UINavigationBar:e("./uikit/UINavigationBar"),UITabBarItem:e("./uikit/UITabBarItem"),UITabBar:e("./uikit/UITabBar"),UIScrollView:e("./uikit/UIScrollView"),UIActivityIndicatorView:e("./uikit/UIActivityIndicatorView"),UIAccordion:e("./uikit/UIAccordion"),UISelect:e("./uikit/UISelect"),UISelectList:e("./uikit/UISelectList"),UICheckbox:e("./uikit/UICheckbox"),UISwitch:e("./uikit/UISwitch"),alert:e("./uikit/alertView"),confirm:e("./uikit/confirmView"),modal:e("./uikit/modalView"),prompt:e("./uikit/promptView"),actionSheet:e("./uikit/actionSheet")}}),l("jquery",function(){return e}),l("underscore",function(){return t}),l("backbone",function(){return Backbone}),n("uikit")});