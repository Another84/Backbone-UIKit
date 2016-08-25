!function(t,e){"function"==typeof define&&define.amd?define(["jquery","underscore","backbone"],e):t.uikit=e(t.$,t._,t.Backbone)}(this,function(t,e){var i,n,s;return function(t){function e(t,e){return k.call(t,e)}function a(t,e){var i,n,s,a,r,l,o,h,c,u,m,d,f=e&&e.split("/"),p=v.map,y=p&&p["*"]||{};if(t){for(t=t.split("/"),r=t.length-1,v.nodeIdCompat&&x.test(t[r])&&(t[r]=t[r].replace(x,"")),"."===t[0].charAt(0)&&f&&(d=f.slice(0,f.length-1),t=d.concat(t)),c=0;c<t.length;c++)if(m=t[c],"."===m)t.splice(c,1),c-=1;else if(".."===m){if(0===c||1===c&&".."===t[2]||".."===t[c-1])continue;c>0&&(t.splice(c-1,2),c-=2)}t=t.join("/")}if((f||y)&&p){for(i=t.split("/"),c=i.length;c>0;c-=1){if(n=i.slice(0,c).join("/"),f)for(u=f.length;u>0;u-=1)if(s=p[f.slice(0,u).join("/")],s&&(s=s[n])){a=s,l=c;break}if(a)break;!o&&y&&y[n]&&(o=y[n],h=c)}!a&&o&&(a=o,l=h),a&&(i.splice(0,l,a),t=i.join("/"))}return t}function r(e,i){return function(){var n=g.call(arguments,0);return"string"!=typeof n[0]&&1===n.length&&n.push(null),d.apply(t,n.concat([e,i]))}}function l(t){return function(e){return a(e,t)}}function o(t){return function(e){y[t]=e}}function h(i){if(e(b,i)){var n=b[i];delete b[i],w[i]=!0,m.apply(t,n)}if(!e(y,i)&&!e(w,i))throw new Error("No "+i);return y[i]}function c(t){var e,i=t?t.indexOf("!"):-1;return i>-1&&(e=t.substring(0,i),t=t.substring(i+1,t.length)),[e,t]}function u(t){return function(){return v&&v.config&&v.config[t]||{}}}var m,d,f,p,y={},b={},v={},w={},k=Object.prototype.hasOwnProperty,g=[].slice,x=/\.js$/;f=function(t,e){var i,n=c(t),s=n[0];return t=n[1],s&&(s=a(s,e),i=h(s)),s?t=i&&i.normalize?i.normalize(t,l(e)):a(t,e):(t=a(t,e),n=c(t),s=n[0],t=n[1],s&&(i=h(s))),{f:s?s+"!"+t:t,n:t,pr:s,p:i}},p={require:function(t){return r(t)},exports:function(t){var e=y[t];return"undefined"!=typeof e?e:y[t]={}},module:function(t){return{id:t,uri:"",exports:y[t],config:u(t)}}},m=function(i,n,s,a){var l,c,u,m,d,v,k=[],g=typeof s;if(a=a||i,"undefined"===g||"function"===g){for(n=!n.length&&s.length?["require","exports","module"]:n,d=0;d<n.length;d+=1)if(m=f(n[d],a),c=m.f,"require"===c)k[d]=p.require(i);else if("exports"===c)k[d]=p.exports(i),v=!0;else if("module"===c)l=k[d]=p.module(i);else if(e(y,c)||e(b,c)||e(w,c))k[d]=h(c);else{if(!m.p)throw new Error(i+" missing "+c);m.p.load(m.n,r(a,!0),o(c),{}),k[d]=y[c]}u=s?s.apply(y[i],k):void 0,i&&(l&&l.exports!==t&&l.exports!==y[i]?y[i]=l.exports:u===t&&v||(y[i]=u))}else i&&(y[i]=s)},i=n=d=function(e,i,n,s,a){if("string"==typeof e)return p[e]?p[e](i):h(f(e,i).f);if(!e.splice){if(v=e,v.deps&&d(v.deps,v.callback),!i)return;i.splice?(e=i,i=n,n=null):e=t}return i=i||function(){},"function"==typeof n&&(n=s,s=a),s?m(t,e,i,n):setTimeout(function(){m(t,e,i,n)},4),d},d.config=function(t){return d(t)},i._defined=y,s=function(t,i,n){if("string"!=typeof t)throw new Error("See almond README: incorrect module build, no module name");i.splice||(n=i,i=[]),e(y,t)||e(b,t)||(b[t]=[t,i,n])},s.amd={jQuery:!0}}(),s("libs/almond/almond-0.3.2",function(){}),s("uikit/UIView",["jquery","underscore","backbone"],function(t,e,i){return i.View.extend({className:"ui-view",animation:null,title:"",icon:"","class":"",oldClass:"",name:"",oldName:"",disabled:!1,hidden:!1,selected:!1,superview:null,subviews:null,items:null,userInteractionEnabled:!1,events:{},initialize:function(t){var i={},n=0;if(this.subviews=[],t)for(var s in t)this[s]=t[s];var a="ontouchend"in document;for(var s in this.events)switch(s){case"touchstart":a?i.touchstart=this.events[s]:i.mousedown=this.events[s],n++;break;case"touchend":a?i.touchend=this.events[s]:i.mouseup=this.events[s],n++;break;case"mousedown":a?i.touchstart=this.events[s]:i.mousedown=this.events[s],n++;break;case"mouseup":a?i.touchend=this.events[s]:i.mouseup=this.events[s],n++;break;case"swipemove":i[s]=this.events[s],n++;break;case"pinch":i[s]=this.events[s],n++;break;case"tapone":i[s]=this.events[s],n++;break;default:console.error("Sorry, unknown key")}n&&(this.events=i,this.userInteractionEnabled=!0),this.animation&&this.animation.keyframes&&(this.animation.keyframes.current=JSON.parse(JSON.stringify(this.animation.keyframes["0%"]))),e.bindAll(this),this.$el.on("webkitTransitionEnd",this.transitionEndHandler)},transitionEndHandler:function(t){t.stopPropagation()},destroy:function(){this.remove(),this.unbind(),e.each(this.subviews,function(t){t.destroy&&t.destroy()})},render:function(){return this.$el.empty(),this.name&&this.setName(this.name),this["class"]&&this.setClass(this["class"]),this.addItems(),this},size:function(){var t=this.$el[0].getBoundingClientRect();return{width:t.width,height:t.height}},touchstartHandler:function(t){this.userInteractionEnabled&&!this.disabled&&(t.stopPropagation(),this.select())},touchendHandler:function(t){this.userInteractionEnabled&&!this.disabled&&(t.stopPropagation(),this.deselect())},taponeHandler:function(t){this.userInteractionEnabled&&t.stopPropagation()},swipemoveHandler:function(t,e){t.stopPropagation()},setName:function(t){this.oldName=this.name,this.name=t,this.$el.removeClass(this.oldName).addClass(this.name)},setClass:function(t){this.oldClass=this["class"],this["class"]=t,this.$el.removeClass(this.oldClass).addClass(this["class"])},disable:function(){this.disabled=!0,this.$el.addClass("ui-dis")},enable:function(){this.disabled=!1,this.$el.removeClass("ui-dis")},hide:function(){this.hidden=!0,this.$el.addClass("ui-hid"),this.viewDidDisappear()},show:function(){this.hidden=!1,this.$el.removeClass("ui-hid"),this.viewDidAppear()},deselect:function(){this.selected=!1,this.$el.removeClass("ui-sel")},select:function(){this.selected=!0,this.$el.addClass("ui-sel")},addSubview:function(e,i){var n=this.$el,s=!1;i&&(i instanceof jQuery?i.length?n=i:(console.error("empty jquery object"),s=!0):"string"==typeof i&&(n=t(i,this.$el),n.length||(console.error("wrong selector ",i),s=!0))),s||(n.append(e.render().el),e.superview=this,this.subviews.push(e))},addItems:function(){var t=this;e.each(this.items,function(e){t.addSubview(e)})},bringSubviewToFront:function(t){e.each(this.subviews,function(e){e!=t&&e.hide()}),t.show()},sendSubviewToBack:function(t){},addTabBar:function(t){t.superview=this,this.$el.append(t.render().el),this.$el.addClass("view-has-tab-bar")},viewDidAppear:function(){},viewDidDisappear:function(){},goBack:function(t){t.remove(),this.subviews.pop()},calculateAnimatedStyles:function(t){var e,i;if(1>=t){for(e in this.animation.keyframes["100%"])if(this.animation.keyframes["100%"].hasOwnProperty(e))switch(e){case"transform":for(i in this.animation.keyframes["100%"].transform)if(this.animation.keyframes["100%"].transform.hasOwnProperty(i))switch(i){case"translate":case"rotate":case"scale":this.animation.keyframes["100%"][e][i].hasOwnProperty("x")&&(this.animation.keyframes.current[e][i].x=this.animation.keyframes["0%"][e][i].x+(this.animation.keyframes["100%"][e][i].x-this.animation.keyframes["0%"][e][i].x)*t),this.animation.keyframes["100%"][e][i].hasOwnProperty("y")&&(this.animation.keyframes.current[e][i].y=this.animation.keyframes["0%"][e][i].y+(this.animation.keyframes["100%"][e][i].y-this.animation.keyframes["0%"][e][i].y)*t),this.animation.keyframes["100%"][e][i].hasOwnProperty("z")&&(this.animation.keyframes.current[e][i].z=this.animation.keyframes["0%"][e][i].z+(this.animation.keyframes["100%"][e][i].z-this.animation.keyframes["0%"][e][i].z)*t)}break;case"opacity":this.animation.keyframes.current[e]=this.animation.keyframes["0%"][e]+(this.animation.keyframes["100%"][e]-this.animation.keyframes["0%"][e])*t}}else if(this.animation.keyframes.hasOwnProperty("200%")){var n=t-1;for(e in this.animation.keyframes["100%"])if(this.animation.keyframes["100%"].hasOwnProperty(e))switch(e){case"transform":for(i in this.animation.keyframes["100%"].transform)if(this.animation.keyframes["100%"].transform.hasOwnProperty(i))switch(i){case"translate":case"rotate":case"scale":this.animation.keyframes["100%"][e][i].hasOwnProperty("x")&&(this.animation.keyframes.current[e][i].x=this.animation.keyframes["100%"][e][i].x+(this.animation.keyframes["200%"][e][i].x-this.animation.keyframes["100%"][e][i].x)*n),this.animation.keyframes["100%"][e][i].hasOwnProperty("y")&&(this.animation.keyframes.current[e][i].y=this.animation.keyframes["100%"][e][i].y+(this.animation.keyframes["200%"][e][i].y-this.animation.keyframes["100%"][e][i].y)*n),this.animation.keyframes["100%"][e][i].hasOwnProperty("z")&&(this.animation.keyframes.current[e][i].z=this.animation.keyframes["100%"][e][i].z+(this.animation.keyframes["200%"][e][i].z-this.animation.keyframes["100%"][e][i].z)*n)}break;case"opacity":this.animation.keyframes.current[e]=this.animation.keyframes["100%"][e]+(this.animation.keyframes["200%"][e]-this.animation.keyframes["100%"][e])*n}}},applyAnimatedStyles:function(t){var e,i,n,s,a,r,l="";t&&(l+="transition: transform 0.6s cubic-bezier(0, 0, 0, 1), opacity 0.6s cubic-bezier(0, 0, 0, 1); "),this.animation.keyframes.current.transform&&(l+="transform:",this.animation.keyframes.current.transform.translate&&(e=this.animation.keyframes.current.transform.translate.x?this.animation.keyframes.current.transform.translate.x+"px":0,i=this.animation.keyframes.current.transform.translate.y?this.animation.keyframes.current.transform.translate.y+"px":0,n=this.animation.keyframes.current.transform.translate.z?this.animation.keyframes.current.transform.translate.z+"px":0,l+="translate3d("+e+", "+i+", "+n+") "),this.animation.keyframes.current.transform.rotate&&(this.animation.keyframes.current.transform.rotate.hasOwnProperty("x")&&(l+="rotate3d(1, 0, 0, "+this.animation.keyframes.current.transform.rotate.x+"deg) "),this.animation.keyframes.current.transform.rotate.hasOwnProperty("y")&&(l+="rotate3d(0, 1, 0, "+this.animation.keyframes.current.transform.rotate.y+"deg) "),this.animation.keyframes.current.transform.rotate.hasOwnProperty("z")&&(l+="rotate3d(0, 0, 1, "+this.animation.keyframes.current.transform.rotate.z+"deg) ")),this.animation.keyframes.current.transform.scale&&(s=this.animation.keyframes.current.transform.scale.x?this.animation.keyframes.current.transform.scale.x:1,a=this.animation.keyframes.current.transform.scale.y?this.animation.keyframes.current.transform.scale.y:1,r=this.animation.keyframes.current.transform.scale.z?this.animation.keyframes.current.transform.scale.z:1,l+="scale3d("+s+", "+a+", "+r+")"),l+="; "),this.animation.keyframes.current.hasOwnProperty("opacity")&&(l+="opacity:"+this.animation.keyframes.current.opacity+"; "),l&&this.$el.attr("style",l)},onSwipe:function(t){this.animation&&"swipe"==this.animation.on&&(this.calculateAnimatedStyles(t),this.applyAnimatedStyles(!1))},onBound:function(t){this.animation&&"swipe"==this.animation.on&&(this.calculateAnimatedStyles(t),this.applyAnimatedStyles(!0))},onAppear:function(){this.animation&&"appear"==this.animation.on&&(this.calculateAnimatedStyles(1),this.applyAnimatedStyles(!0))},onDisappear:function(){this.calculateAnimatedStyles(0),this.applyAnimatedStyles(!1)}})}),s("uikit/UIButton",["jquery","underscore","backbone","./UIView"],function(t,e,i,n){return n.extend({className:"ui-btn",template:'<span class="btn-icon"></span><span class="btn-label"></span>',$icon:null,$label:null,action:null,label:"",icon:"",iconOrder:0,align:"center",events:{tapone:"taponeHandler",touchstart:"touchstartHandler",touchend:"touchendHandler",swipemove:"swipemoveHandler"},render:function(){return this.$el.empty(),this.$el.html(this.template),this.$icon=t(".btn-icon",this.$el),this.$label=t(".btn-label",this.$el),this.label&&this.$label.html(this.label),this.icon&&this.$icon.addClass("icon--"+this.icon),this.iconOrder&&this.$icon.addClass("btn-icon--order"),"center"!=this.align&&this.$el.addClass("ui-btn--align-"+this.align),this.$el.addClass(this["class"]),this.disabled&&this.$el.addClass("ui-dis"),this.hidden&&this.$el.addClass("ui-hid"),this},setLabel:function(t){this.label=t,this.$label.html(this.label)},setIcon:function(t){this.icon=t,this.$icon.addClass("icon--"+t)},taponeHandler:function(t){this.action&&0==this.disabled?this.action():console.log("disabled or there is no action")}})}),s("uikit/UIStepper",["jquery","underscore","backbone","./UIView","./UIButton"],function(t,e,i,n,s){return n.extend({className:"ui-stepper",model:null,attribute:"",value:0,minimumValue:0,maximumValue:1e3,stepValue:1,autorepeat:!1,decButton:null,incButton:null,initialize:function(t){n.prototype.initialize.apply(this,[t]),this.model&&(this.value=this.model.get(this.attribute),(this.value<this.minimumValue||this.value>this.maximumValue)&&console.error("The value ("+this.value+") must be between the minimum ("+this.minimumValue+") and maximum ("+this.maximumValue+") values."))},render:function(){var t=this;return this.$el.empty(),this.setClass(this["class"]),this.disabled&&this.$el.addClass("ui-dis"),this.hidden&&this.$el.addClass("ui-hid"),this.decButton=new s({"class":"ui-stepper-dec-btn",label:"–",action:function(){t.decreaseValue()}}),this.addSubview(this.decButton),this.incButton=new s({"class":"ui-stepper-inc-btn",label:"+",action:function(){t.increaseValue()}}),this.addSubview(this.incButton),this.updateUI(),this},updateUI:function(){this.value<=this.minimumValue?(this.decButton.disable(),this.incButton.enable()):this.value>this.minimumValue&&this.value<this.maximumValue?(this.decButton.enable(),this.incButton.enable()):this.value>=this.maximumValue&&(this.decButton.enable(),this.incButton.disable())},updateModel:function(){this.model&&this.model.set(this.attribute,this.value)},decreaseValue:function(){var t=this.value-this.stepValue;t<=this.minimumValue&&(t=this.minimumValue),this.value=t,this.updateUI(),this.updateModel()},increaseValue:function(){var t=this.value+this.stepValue;t>=this.maximumValue&&(t=this.maximumValue),this.value=t,this.updateUI(),this.updateModel()}})}),s("uikit/UILabel",["jquery","underscore","backbone","./UIView"],function(t,e,i,n){return n.extend({className:"ui-label",tagName:"label",model:null,attribute:"",text:"",width:null,textAlignment:null,initialize:function(t){n.prototype.initialize.apply(this,[t]),this.model&&this.listenTo(this.model,"change",this.update)},render:function(){this.$el.empty(),this.setClass(this["class"]),this.$el.html(this.text);var t="";return null!==this.width&&(t+="width:"+this.width+"; "),null!==this.textAlignment&&(t+="text-align:"+this.textAlignment+"; "),t&&this.$el.attr("style",t),this.update(),this},update:function(){this.model&&this.setText(this.model.get(this.attribute))},setText:function(t){this.text=t,this.$el.html(this.text)}})}),s("uikit/UITextField",["jquery","underscore","backbone","./UIView"],function(t,e,i,n){return n.extend({className:"ui-text-field",templateInput:e.template('<input type="<%= type %>" class="input-text" id="<%= name %>" name="<%= name %>" placeholder="<%= placeholder %>" value="<%= value %>">'),templateData:e.template('<div class="data-text" id="<%= name %>"><%= value %></div>'),templatePhoneNumber:e.template('<div class="data-text"><a href="tel:+<%= value %>">+<%= value %></a></div>'),model:null,attribute:"",value:"",$input:null,type:"text",name:"",placeholder:"",editable:!0,phoneNumber:!1,initialize:function(t){n.prototype.initialize.apply(this,[t]),this.model&&(this.value=this.model.get(this.attribute))},render:function(){this.$el.empty();var e={};return e.type=this.type,e.name=this.name,e.value=this.value,e.placeholder=this.placeholder,this.editable?(this.$el.html(this.templateInput(e)),this.$input=t("input",this.$el),this.$input.on("change keyup paste",this.changeHandler)):this.phoneNumber?this.$el.html(this.templatePhoneNumber(e)):this.$el.html(this.templateData(e)),this.disabled&&this.$el.addClass("ui-dis"),this.hidden&&this.$el.addClass("ui-hid"),this["class"]&&this.setClass(this["class"]),this},setValue:function(t){this.value=t,this.render()},changeHandler:function(){this.value=this.$input.val(),this.model&&this.model.set(this.attribute,this.value)},focus:function(){this.$input.focus()}})}),s("uikit/UITextView",["jquery","underscore","backbone","./UIView"],function(t,e,i,n){return n.extend({className:"ui-text-view",templateTextarea:e.template('<textarea class="input-text" name="<%= name %>" placeholder="<%= placeholder %>" rows="" cols=""><%= text %></textarea>'),templateData:e.template('<div class="data-text"><%= text %></div>'),name:"",text:"",placeholder:"",editable:!0,textAlignment:"left",render:function(){this.$el.empty(),this.setClass(this["class"]);var e={};switch(e.name=this.name,e.text=this.text,e.placeholder=this.placeholder,this.editable?this.$el.html(this.templateTextarea(e)):this.$el.html(this.templateData(e)),this.disabled&&this.$el.addClass("ui-dis"),this.hidden&&this.$el.addClass("ui-hid"),this["class"]&&this.setClass(this["class"]),t("input",this.$el).on("change keyup paste",this.changeHandler),this.textAlignment){case"left":break;case"center":this.setClass("text-align-center");break;case"right":}return this},setText:function(t){this.text=t,this.$el.html(this.text)},changeHandler:function(){this.text=t("input",this.$el).attr("value")},focus:function(){console.log("UITextView::focus"),t("textarea",this.$el).focus()}})}),s("uikit/UIImageView",["jquery","underscore","backbone","./UIView"],function(t,e,i,n){return n.extend({className:"ui-image-view",imageUrl:null,frameWidth:null,frameHeight:null,imageWidth:0,imageHeight:0,status:null,image:null,initialize:function(t){n.prototype.initialize.apply(this,[t]),this.image=new Image},render:function(){this.$el.empty(),this.setClass(this["class"]);var t="";return null!==this.frameWidth&&(t+="width:"+this.frameWidth+"; "),null!==this.frameHeight&&(t+="height:"+this.frameHeight+"; "),"loaded"==this.status&&(t+="background-image: url("+this.imageUrl+");"),t+="background-size: "+this.imageWidth+" "+this.imageHeight+";",this.$el.attr("style",t),this},load:function(){console.log("UIImageView::load"),this.beforeLoad(),t(this.image).one("load",function(){this.complete(),this.success()}).one("error",function(){this.complete(),this.error()}).attr("src",this.imageUrl).each(function(){this.complete&&t(this).trigger("load")})},beforeLoad:function(){console.log("UIImageView::beforeLoad")},complete:function(){console.log("UIImageView::complete")},success:function(){console.log("UIImageView::success"),console.log("@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!"),alert("UIImageView::success"),this.status="loaded",this.render()},error:function(){console.log("UIImageView::error"),this.status="error",this.render()}})}),s("uikit/UINavigationBar",["jquery","underscore","backbone","./UIView"],function(t,e,i,n){return n.extend({className:"ui-view ui-navigation-bar",template:'\n            <div class="left-place"></div>\n            <div class="center-place"></div>\n            <div class="right-place"></div>\n        ',leftBarItems:null,centerBarItems:null,rightBarItems:null,events:{touchstart:"touchstartHandler",touchend:"touchendHandler",tapone:"taponeHandler",swipemove:"swipemoveHandler"},render:function(){var i,n,s,a=this;return this.$el.empty(),this.$el.html(this.template),i=t(".left-place",this.$el),n=t(".center-place",this.$el),s=t(".right-place",this.$el),e.each(this.leftBarItems,function(t){a.addSubview(t,i)}),e.each(this.centerBarItems,function(t){a.addSubview(t,n)}),e.each(this.rightBarItems,function(t){a.addSubview(t,s)}),this}})}),s("uikit/UITabBarItem",["jquery","underscore","backbone","./UIView"],function(t,e,i,n){return n.extend({className:"ui-tab-bar-item",template:e.template('<span class="tab-bar-item-icon icon-<%= icon %>"></span><span class="tab-bar-item-text"><%= title %></span>'),events:{tapone:"taponeHandler"},icon:"",title:"",index:null,selected:!1,render:function(){this.$el.empty();var t={};return t.icon=this.icon,t.title=this.title,this.$el.html(this.template(t)),this},taponeHandler:function(){console.log("UITabBarItem::action"),this.superview.selectItem(this.index)},select:function(){this.$el.addClass("selected")},deselect:function(){this.$el.removeClass("selected")}})}),s("uikit/UITabBar",["jquery","underscore","backbone","./UIView","./UITabBarItem"],function(t,e,i,n,s){return n.extend({className:"ui-tab-bar",items:null,selectedIndex:0,render:function(){this.$el.empty(),this.items=[];var t=this;return e.each(this.superview.subviews,function(e,i){var n=new s({icon:e.icon,title:e.title,index:i,superview:t});t.items.push(n),t.$el.append(n.render().el)}),this.selectItem(this.selectedIndex),this},selectItem:function(t){console.log("UITabBar::selectItem"),console.log("index = "+t),this.selectedIndex=t;e.each(this.items,function(t){t.deselect()}),this.items[this.selectedIndex].select(),this.superview.bringSubviewToFront(this.superview.subviews[this.selectedIndex])}})}),s("uikit/UIScrollView",["jquery","underscore","backbone","./UIView"],function(t,e,i,n){return n.extend({className:"ui-view ui-scroll-view",$content:null,scale:1,currentScale:1,maximumScale:1e3,minimumScale:1e-7,firstPinch:!0,pinch:{x:0,y:0},translate:{x:0,y:0},pinchRelativeTranslate:{x:0,y:0},events:{touchstart:"touchstartHandler",touchend:"touchendHandler",pinch:"gestureHandler",swipemove:"gestureHandler"},render:function(){return this.$el.empty(),this["class"]&&this.setClass(this["class"]),this.$el.append('<div class="scroll-content"></div>'),this.$content=t(".scroll-content",this.$el),this.applyTransforms(),this},addSubview:function(t){this.$content.append(t.render().el),t.superview=this,this.subviews.push(t)},setOffset:function(t){this.translate=t,this.applyTransforms()},setScale:function(t){t<this.minimumScale?t=this.minimumScale:t>this.maximumScale&&(t=this.maximumScale),this.scale=t,this.currentScale=t,this.applyTransforms()},setScaleRelativeToPoint:function(t,e){console.log("UIScrollView::setScaleRelativeToPoint("+t+", {"+e.x+":"+e.y+"})");var i={x:0,y:0};console.log("this.translate.x, = "+this.translate.x),console.log("this.translate.y, = "+this.translate.y),console.log("point.x, = "+e.x),console.log("point.y, = "+e.y),i.x=this.translate.x-e.x,i.y=this.translate.y-e.y,console.log("pinchRelativeTranslate = ",i),this.currentScale=this.scale*t,this.translate.x=i.x*t+e.x,this.translate.y=i.y*t+e.y,this.applyTransforms(),this.scale=this.currentScale},contentSize:function(){var t={top:0,right:0,bottom:0,left:0,width:0,height:0};return this.$content&&(t=this.$content[0].getBoundingClientRect()),{width:t.width,height:t.height}},applyTransforms:function(){console.log("UIScrollView::applyTransforms");var t="";t+="transform: ",t+="translate3d("+this.translate.x+"px, "+this.translate.y+"px, 0px) ",t+="scaleX("+this.currentScale+") scaleY("+this.currentScale+") ",t+=";",this.$content.attr("style",t)},touchstartHandler:function(t){console.log("UIScrollView::touchstartHandler")},touchendHandler:function(t){console.log("UIScrollView::touchendHandler"),this.scale=this.currentScale,this.firstPinch=!0},gestureHandler:function(t,e){t.preventDefault(),e.originalEvent.preventDefault();var i,n=e.description.split(":"),s=0,a=0;switch(n[0]){case"pinch":console.log("pinch"),i=this.scale*e.scale,i<this.minimumScale||i>this.maximumScale?console.log("< minimumScale ||  > maximumScale"):(this.firstPinch&&(this.pinch.x=e.originalEvent.layerX,this.pinch.y=e.originalEvent.layerY,console.log(this.pinch.x+" : "+this.pinch.y),this.pinchRelativeTranslate.x=this.translate.x-this.pinch.x,this.pinchRelativeTranslate.y=this.translate.y-this.pinch.y),this.firstPinch=!1,this.currentScale=this.scale*e.scale,this.translate.x=this.pinchRelativeTranslate.x*e.scale+this.pinch.x,this.translate.y=this.pinchRelativeTranslate.y*e.scale+this.pinch.y);break;case"rotate":console.log("rotate");break;case"swipemove":1==n[1]&&(console.log("swipemove with 1 finger"),s=e.delta[0].startX,a=e.delta[0].startY,this.translate.x=s+this.translate.x,this.translate.y=a+this.translate.y);break;case"swipe":console.log("swipe")}this.applyTransforms()}})}),s("uikit/UIActivityIndicatorView",["jquery","underscore","backbone","./UIView"],function(t,e,i,n){return n.extend({className:"ui-activity-indicator-view",isAnimating:!0,render:function(){return this.$el.empty(),this.isAnimating&&this.startAnimating(),this},startAnimating:function(){this.isAnimating=!0,this.$el.addClass("animating")},stopAnimating:function(){this.isAnimating=!1,this.$el.removeClass("animating")}})}),s("uikit/alertView",["jquery","underscore","backbone","./UIView","./UIButton","./UILabel"],function(t,e,i,n,s,a){return function(e,i){var r=n.extend({className:"ui-alert-view",template:'<div class="ui-alert-content"></div>',title:"",message:"",render:function(){var e,i=this;return this.$el.empty(),this.$el.html(this.template),e=t(".ui-alert-content",this.$el),this.addSubview(new a({"class":"alert-title-label",text:this.title}),e),this.addSubview(new a({"class":"alert-message-label",text:this.message}),e),this.addSubview(new s({"class":"alert-ok-btn",label:"OK",action:function(){i.hide()}}),e),this},show:function(){t("body").append(this.render().el)},hide:function(){this.destroy()}}),l=new r({title:e,message:i});l.show()}}),s("uikit/confirmView",["jquery","underscore","backbone","./UIView","./UIButton","./UILabel"],function(t,e,i,n,s,a){return function(e,i){var r=n.extend({className:"ui-confirm-view",template:'\n                    <div class="ui-confirm-content">\n                        <div class="text-place"></div>\n                        <div class="buttons-place"></div>\n                    </div>',title:"",message:"",render:function(){var e,i,n=this;return this.$el.empty(),this.$el.html(this.template),e=t(".text-place",this.$el),i=t(".buttons-place",this.$el),this.addSubview(new a({"class":"confirm-title-label",text:this.title}),e),this.addSubview(new a({"class":"confirm-message-label",text:this.message}),e),this.addSubview(new s({"class":"confirm-cancel-btn",label:"Cancel",action:function(){n.hide()}}),i),this.addSubview(new s({"class":"confirm-ok-btn",label:"OK",action:function(){n.hide()}}),i),this},show:function(){t("body").append(this.render().el)},hide:function(){this.destroy()}}),l=new r({title:e,message:i});l.show()}}),s("uikit/modalView",["jquery","underscore","backbone","./UIView"],function(t,e,i,n){return function(e){var i=n.extend({className:"ui-modal-view",contentView:null,render:function(){return this.$el.empty(),this.$el.html(this.template),this.contentView?this.addSubview(this.contentView):console.error("contentView is needed"),this},show:function(){t("body").append(this.render().el)},hide:function(){this.destroy()}}),s=new i({contentView:e});s.show()}}),s("uikit",["require","./uikit/UIView","./uikit/UIButton","./uikit/UIStepper","./uikit/UILabel","./uikit/UITextField","./uikit/UITextView","./uikit/UIImageView","./uikit/UINavigationBar","./uikit/UITabBarItem","./uikit/UITabBar","./uikit/UIScrollView","./uikit/UIActivityIndicatorView","./uikit/alertView","./uikit/confirmView","./uikit/modalView"],function(t){"use strict";return{version:"1.0.0",UIView:t("./uikit/UIView"),UIButton:t("./uikit/UIButton"),UIStepper:t("./uikit/UIStepper"),UILabel:t("./uikit/UILabel"),UITextField:t("./uikit/UITextField"),UITextView:t("./uikit/UITextView"),UIImageView:t("./uikit/UIImageView"),UINavigationBar:t("./uikit/UINavigationBar"),UITabBarItem:t("./uikit/UITabBarItem"),UITabBar:t("./uikit/UITabBar"),UIScrollView:t("./uikit/UIScrollView"),UIActivityIndicatorView:t("./uikit/UIActivityIndicatorView"),alert:t("./uikit/alertView"),confirm:t("./uikit/confirmView"),modal:t("./uikit/modalView")}}),s("jquery",function(){return t}),s("underscore",function(){return e}),s("backbone",function(){return Backbone}),n("uikit")});