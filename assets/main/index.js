System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,o,n,e,r,a,s,p,u,c,h;return{setters:[function(i){t=i.applyDecoratedDescriptor,o=i.inheritsLoose,n=i.initializerDefineProperty,e=i.assertThisInitialized},function(i){r=i.cclegacy,a=i._decorator,s=i.CCFloat,p=i.Animation,u=i.Vec3,c=i.tween,h=i.Component}],execute:function(){var l,d,m,f,g,y,b;r._RF.push({},"06fdakKmrZLopX1B/JRGMMe","Bird",void 0);var v=a.ccclass,w=a.property;i("Bird",(l=v("Bird"),d=w({type:s,tooltip:" how high can it flies"}),m=w({type:s,tooltip:" how long can it flies"}),l((y=t((g=function(i){function t(){for(var t,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=i.call.apply(i,[this].concat(r))||this,n(t,"jumpheight",y,e(t)),n(t,"jumpDuration",b,e(t)),t.birdAnimation=void 0,t.birdLocation=void 0,t.hitSomething=void 0,t}o(t,i);var r=t.prototype;return r.onLoad=function(){this.resetBird(),this.birdAnimation=this.getComponent(p)},r.resetBird=function(){this.birdLocation=new u(0,0,0),this.node.setPosition(this.birdLocation),this.node.setRotationFromEuler(0,0,0),this.hitSomething=!1},r.fly=function(){var i=this;this.birdAnimation.stop(),c(this.node.position).to(this.jumpDuration,new u(this.node.position.x,this.node.position.y+this.jumpheight,0),{easing:"smooth",onUpdate:function(t,o){i.node.position=t}}).call((function(){i.node.setRotationFromEuler(0,0,30)})).start(),this.birdAnimation.play()},t}(h)).prototype,"jumpheight",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2.5}}),b=t(g.prototype,"jumpDuration",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3.5}}),f=g))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/BirdAudio.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var e,r,o,t,n,u,c,a,l;return{setters:[function(i){e=i.applyDecoratedDescriptor,r=i.inheritsLoose,o=i.initializerDefineProperty,t=i.assertThisInitialized},function(i){n=i.cclegacy,u=i._decorator,c=i.AudioClip,a=i.AudioSource,l=i.Component}],execute:function(){var p,s,d,f,y,h,A;n._RF.push({},"8c9daCcU5xHdIFpf6s2qqoI","BirdAudio",void 0);var b=u.ccclass,v=u.property;i("BirdAudio",(p=b("BirdAudio"),s=v({type:[c]}),d=v({type:a}),p((h=e((y=function(i){function e(){for(var e,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return e=i.call.apply(i,[this].concat(n))||this,o(e,"clips",h,t(e)),o(e,"audioSource",A,t(e)),e}return r(e,i),e.prototype.onAudioQueue=function(i){var e=this.clips[i];this.audioSource.playOneShot(e)},e}(l)).prototype,"clips",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),A=e(y.prototype,"audioSource",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=y))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Ground.ts","./Result.ts","./Bird.ts","./PipePool.ts","./BirdAudio.ts"],(function(e){var t,i,n,r,o,u,s,a,l,p,c,d,h,b,f,y,g,m,v,P,B,C;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,u=e._decorator,s=e.Button,a=e.Label,l=e.CCInteger,p=e.director,c=e.Node,d=e.input,h=e.Input,b=e.Collider2D,f=e.Contact2DType,y=e.KeyCode,g=e.Component},function(e){m=e.Ground},function(e){v=e.Result},function(e){P=e.Bird},function(e){B=e.PipePool},function(e){C=e.BirdAudio}],execute:function(){var w,G,T,O,z,S,_,A,D,Q,E,R,K,L,k,N,I,H,Y,F,U;o._RF.push({},"ff3e6yL6v1KbrGw87u5TAP3","GameControl",void 0);var j=u.ccclass,x=u.property;e("GameControl",(w=j("GameControl"),G=x({type:s,tooltip:"this is pause button"}),T=x({type:a}),O=x({type:m,tooltip:"this is ground"}),z=x({type:v,tooltip:" this is results"}),S=x({type:P}),_=x({type:C}),A=x({type:B}),D=x({type:l}),Q=x({type:l}),w((K=t((R=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return t=e.call.apply(e,[this].concat(o))||this,n(t,"pauseButton",K,r(t)),n(t,"labelButton",L,r(t)),t.canPause=!0,n(t,"ground",k,r(t)),n(t,"result",N,r(t)),n(t,"bird",I,r(t)),n(t,"clip",H,r(t)),n(t,"pipeQueue",Y,r(t)),n(t,"speed",F,r(t)),n(t,"pipeSpeed",U,r(t)),t.isOver=void 0,t}i(t,e);var o=t.prototype;return o.onLoad=function(){this.initListener(),this.result.resetScore(),this.isOver=!0,p.pause(),this.pauseButton&&this.pauseButton.node.on(c.EventType.TOUCH_END,this.togglePause,this)},o.initListener=function(){var e=this;d.on(h.EventType.KEY_DOWN,this.onKeyDown,this),this.node.on(c.EventType.TOUCH_START,(function(){1==e.isOver?(e.resetGame(),e.bird.resetBird(),e.startGame()):(e.bird.fly(),e.clip.onAudioQueue(0))}))},o.startGame=function(){this.result.hideResults(),p.resume()},o.gameOver=function(){this.result.showResults(),this.isOver=!0,this.bird.resetBird(),this.clip.onAudioQueue(3),this.pipeQueue.hidePipe(),this.canPause=!1,p.pause()},o.resetGame=function(){this.result.resetScore(),this.pipeQueue.reset(),this.isOver=!1,this.bird.resetBird(),this.pipeQueue.showPipe(),this.canPause=!0,this.startGame()},o.createPipe=function(){this.pipeQueue.addPool()},o.contactGroundPipe=function(){var e=this.bird.getComponent(b);e&&e.on(f.BEGIN_CONTACT,this.onBeginContact,this)},o.onBeginContact=function(e,t,i){t.node.getComponent("Ground_Trigger")||(this.bird.hitSomething=!0,this.clip.onAudioQueue(3))},o.birdStruck=function(){this.contactGroundPipe(),1==this.bird.hitSomething&&this.gameOver()},o.update=function(){0==this.isOver&&this.birdStruck(),this.result.addScore()},o.onKeyDown=function(e){switch(e.keyCode){case y.KEY_P:p.pause();break;case y.KEY_R:p.resume()}},o.togglePause=function(){this.canPause&&(p.isPaused()?(p.resume(),this.labelButton.string=p.isPaused()?">":"||"):p.pause())},t}(g)).prototype,"pauseButton",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(R.prototype,"labelButton",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(R.prototype,"ground",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=t(R.prototype,"result",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=t(R.prototype,"bird",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=t(R.prototype,"clip",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=t(R.prototype,"pipeQueue",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=t(R.prototype,"speed",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 300}}),U=t(R.prototype,"pipeSpeed",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),E=R))||E));o._RF.pop()}}}));

System.register("chunks:///_virtual/Ground.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameControl.ts"],(function(t){var o,i,n,e,r,a,s,d,h,p,u,l,c;return{setters:[function(t){o=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,e=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Node,d=t.UITransform,h=t.director,p=t.Canvas,u=t.Vec3,l=t.Component},function(t){c=t.GameControl}],execute:function(){var g,m,S,f,w,y,C,v,x;r._RF.push({},"6d7da+81OtHbqEAA1uV07q4","Ground",void 0);var W=a.ccclass,b=a.property;t("Ground",(g=W("Ground"),m=b({type:s,tooltip:"Ground 1 is here"}),S=b({type:s,tooltip:"Ground 2 is here"}),f=b({type:s,tooltip:"Ground 3 is here"}),g((C=o((y=function(t){function o(){for(var o,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return o=t.call.apply(t,[this].concat(r))||this,n(o,"ground1",C,e(o)),n(o,"ground2",v,e(o)),n(o,"ground3",x,e(o)),o.groundWidth1=void 0,o.groundWidth2=void 0,o.groundWidth3=void 0,o.tempStartlocation1=new u,o.tempStartlocation2=new u,o.tempStartlocation3=new u,o.gameControlSpeed=new c,o.gameSpeed=void 0,o}i(o,t);var r=o.prototype;return r.onLoad=function(){this.startUp()},r.startUp=function(){this.groundWidth1=this.ground1.getComponent(d).width,this.groundWidth2=this.ground2.getComponent(d).width,this.groundWidth3=this.ground3.getComponent(d).width,this.tempStartlocation1.x=0,this.tempStartlocation2.x=this.groundWidth1,this.tempStartlocation3.x=this.groundWidth1+this.groundWidth2,this.ground1.setPosition(this.tempStartlocation1),this.ground2.setPosition(this.tempStartlocation2),this.ground3.setPosition(this.tempStartlocation3)},r.update=function(t){this.gameSpeed=this.gameControlSpeed.speed,this.tempStartlocation1=this.ground1.position,this.tempStartlocation2=this.ground2.position,this.tempStartlocation3=this.ground3.position,this.tempStartlocation1.x-=this.gameSpeed*t,this.tempStartlocation2.x-=this.gameSpeed*t,this.tempStartlocation3.x-=this.gameSpeed*t;var o=h.getScene().getComponentInChildren(p);this.tempStartlocation1.x<=0-this.groundWidth1&&(this.tempStartlocation1.x=o.getComponent(d).width),this.tempStartlocation2.x<=0-this.groundWidth2&&(this.tempStartlocation2.x=o.getComponent(d).width),this.tempStartlocation3.x<=0-this.groundWidth3&&(this.tempStartlocation3.x=o.getComponent(d).width),this.ground1.setPosition(this.tempStartlocation1),this.ground2.setPosition(this.tempStartlocation2),this.ground3.setPosition(this.tempStartlocation3)},o}(l)).prototype,"ground1",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=o(y.prototype,"ground2",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=o(y.prototype,"ground3",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=y))||w));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Bird.ts","./BirdAudio.ts","./GameControl.ts","./Ground.ts","./PipePool.ts","./Pipes.ts","./Result.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PipePool.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,o,t,r,p,l,n,a,s,c,P;return{setters:[function(e){i=e.applyDecoratedDescriptor,o=e.inheritsLoose,t=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){p=e.cclegacy,l=e._decorator,n=e.Prefab,a=e.Node,s=e.instantiate,c=e.NodePool,P=e.Component}],execute:function(){var h,u,f,d,v,b,m;p._RF.push({},"270a8/wBdxIvpA38Ofj5DWz","PipePool",void 0);var y=l.ccclass,H=l.property;e("PipePool",(h=y("PipePool"),u=H({type:n}),f=H({type:a}),h((b=i((v=function(e){function i(){for(var i,o=arguments.length,p=new Array(o),l=0;l<o;l++)p[l]=arguments[l];return i=e.call.apply(e,[this].concat(p))||this,t(i,"prefrabPipes",b,r(i)),t(i,"pipePoolHome",m,r(i)),i.pool=new c,i.createPipe=void 0,i}o(i,e);var p=i.prototype;return p.initPool=function(){for(var e=0;e<3;e++)this.createPipe=s(this.prefrabPipes),0==e?this.pipePoolHome.addChild(this.createPipe):this.pool.put(this.createPipe)},p.addPool=function(){this.pool.size()>0?this.createPipe=this.pool.get():this.createPipe=s(this.prefrabPipes),this.pipePoolHome.addChild(this.createPipe)},p.reset=function(){this.pipePoolHome.removeAllChildren(),this.pool.clear(),this.initPool()},p.hidePipe=function(){this.pipePoolHome.active=!1},p.showPipe=function(){this.pipePoolHome.active=!0},i}(P)).prototype,"prefrabPipes",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=i(v.prototype,"pipePoolHome",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=v))||d));p._RF.pop()}}}));

System.register("chunks:///_virtual/Pipes.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,o,p,s,n,a,r,h,c,m,P;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,p=t.assertThisInitialized},function(t){s=t.cclegacy,n=t._decorator,a=t.Node,r=t.find,h=t.UITransform,c=t.Vec3,m=t.screen,P=t.Component}],execute:function(){var d,l,u,S,w,f,L;s._RF.push({},"457afYja71BKZZ3odjPOqX8","Pipes",void 0);var v=n.ccclass,b=n.property,y=function(t,i){return Math.random()*(i-t)+t};t("Pipes",(d=v("Pipes"),l=b({type:a,tooltip:"Top Pipe"}),u=b({type:a,tooltip:"Bottom Pipe"}),d((f=i((w=function(t){function i(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return i=t.call.apply(t,[this].concat(s))||this,o(i,"topPipe",f,p(i)),o(i,"bottomPipe",L,p(i)),i.tempStartLocationUp=new c(0,0,0),i.tempStartLocationDown=new c(0,0,0),i.scene=m.windowSize,i.game=void 0,i.pipeSpeed=void 0,i.tempSpeed=void 0,i.acceleration=1,i.initialPipeSpeed=void 0,i.elapsedTime=0,i.isTopPipe=void 0,i.isPass=void 0,i}e(i,t);var s=i.prototype;return s.onLoad=function(){this.game=r("GameControl").getComponent("GameControl"),this.pipeSpeed=this.game.pipeSpeed,this.initialPipeSpeed=this.pipeSpeed,this.isTopPipe=Math.random()<.5,this.initPosition(),this.isPass=!1},s.initPosition=function(){var t=y(90,100),i=y(150,400);this.tempStartLocationUp.x=this.topPipe.getComponent(h).width+.5*this.scene.width,this.tempStartLocationUp.y=i,this.tempStartLocationDown.x=this.bottomPipe.getComponent(h).width+.5*this.scene.width,this.tempStartLocationDown.y=i-10*t,this.isTopPipe?this.bottomPipe.active=!1:this.topPipe.active=!1,this.topPipe.setPosition(this.tempStartLocationUp),this.bottomPipe.setPosition(this.tempStartLocationDown)},s.update=function(t){this.tempSpeed=this.initialPipeSpeed+this.elapsedTime+this.acceleration,this.isTopPipe?(this.tempStartLocationUp=this.topPipe.position,this.tempStartLocationUp.x-=this.tempSpeed,this.topPipe.setPosition(this.tempStartLocationUp)):(this.tempStartLocationDown=this.bottomPipe.position,this.tempStartLocationDown.x-=this.tempSpeed,this.bottomPipe.setPosition(this.tempStartLocationDown)),(this.isTopPipe?this.topPipe.position.x:this.bottomPipe.position.x)<0-this.scene.width&&(this.game.createPipe(),this.destroy()),this.elapsedTime+=t},i}(P)).prototype,"topPipe",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=i(w.prototype,"bottomPipe",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=w))||S));s._RF.pop()}}}));

System.register("chunks:///_virtual/Result.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,i,o,n,c,s,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,c=e._decorator,s=e.Label,u=e.Component}],execute:function(){var a,l,h,p,S,d,f,g,b;n._RF.push({},"fe12f/6wqxNzYlC7vaw4Axo","Result",void 0);var m=c.ccclass,y=c.property;e("Result",(a=m("Result"),l=y({type:s}),h=y({type:s}),p=y({type:s}),a((f=t((d=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return t=e.call.apply(e,[this].concat(n))||this,i(t,"scoreLabel",f,o(t)),i(t,"highScore",g,o(t)),i(t,"resultEnd",b,o(t)),t.maxScore=0,t.currentScore=void 0,t.currentTime=0,t.pointsPerSecond=1,t}r(t,e);var n=t.prototype;return n.updateScore=function(e){this.currentScore=e,this.scoreLabel.string=String(this.currentScore)},n.resetScore=function(){this.updateScore(0),this.currentTime=0,this.hideResults()},n.addScore=function(){this.currentTime+=.1,this.currentScore=Math.floor(this.currentTime*this.pointsPerSecond),this.updateScore(this.currentScore)},n.showResults=function(){this.maxScore=Math.max(this.maxScore,this.currentScore),this.highScore.string="High Score: "+this.maxScore,this.resultEnd.node.active=!0,this.highScore.node.active=!0},n.hideResults=function(){this.highScore.node.active=!1,this.resultEnd.node.active=!1},t}(u)).prototype,"scoreLabel",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=t(d.prototype,"highScore",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=t(d.prototype,"resultEnd",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=d))||S));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});