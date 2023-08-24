import{b as fe}from"./@babel-4ef42ede.js";import{l as he}from"./postcss-value-parser-bfac0914.js";import{c as ce}from"./css-unit-converter-9e08bb2c.js";var re={exports:{}};function pe(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ue={};(function(t){var _=function(){function b(f,o){Object.defineProperty(this,"name",{enumerable:!1,writable:!1,value:"JisonParserError"}),f==null&&(f="???"),Object.defineProperty(this,"message",{enumerable:!1,writable:!0,value:f}),this.hash=o;var i;if(o&&o.exception instanceof Error){var e=o.exception;this.message=e.message||f,i=e.stack}i||(Error.hasOwnProperty("captureStackTrace")?Error.captureStackTrace(this,this.constructor):i=new Error(f).stack),i&&Object.defineProperty(this,"stack",{enumerable:!1,writable:!1,value:i})}typeof Object.setPrototypeOf=="function"?Object.setPrototypeOf(b.prototype,Error.prototype):b.prototype=Object.create(Error.prototype),b.prototype.constructor=b,b.prototype.name="JisonParserError";function h(f){for(var o=[],i=f.pop,e=f.rule,n=0,s=i.length;n<s;n++)o.push([i[n],e[n]]);return o}function c(f){for(var o={},i=f.idx,e=f.goto,n=0,s=i.length;n<s;n++){var a=i[n];o[a]=e[n]}return o}function m(f){for(var o=[],i=f.len,e=f.symbol,n=f.type,s=f.state,a=f.mode,r=f.goto,y=0,x=i.length;y<x;y++){for(var P=i[y],p={},v=0;v<P;v++){var R=e.shift();switch(n.shift()){case 2:p[R]=[a.shift(),r.shift()];break;case 0:p[R]=s.shift();break;default:p[R]=[3]}}o.push(p)}return o}function u(f,o,i){i=i||0;for(var e=0;e<o;e++)this.push(f),f+=i}function l(f,o){for(f=this.length-f,o+=f;f<o;f++)this.push(this[f])}function g(f){for(var o=[],i=0,e=f.length;i<e;i++){var n=f[i];typeof n=="function"?(i++,n.apply(o,f[i])):o.push(n)}return o}var d={trace:function(){},JisonParserError:b,yy:{},options:{type:"lalr",hasPartialLrUpgradeOnConflict:!0,errorRecoveryTokenDiscardCount:3},symbols_:{$accept:0,$end:1,ADD:3,ANGLE:16,CHS:22,COMMA:14,CSS_CPROP:13,CSS_VAR:12,DIV:6,EMS:20,EOF:1,EXS:21,FREQ:18,LENGTH:15,LPAREN:7,MUL:5,NESTED_CALC:9,NUMBER:11,PERCENTAGE:28,PREFIX:10,REMS:23,RES:19,RPAREN:8,SUB:4,TIME:17,VHS:24,VMAXS:27,VMINS:26,VWS:25,css_value:33,css_variable:32,error:2,expression:29,math_expression:30,value:31},terminals_:{1:"EOF",2:"error",3:"ADD",4:"SUB",5:"MUL",6:"DIV",7:"LPAREN",8:"RPAREN",9:"NESTED_CALC",10:"PREFIX",11:"NUMBER",12:"CSS_VAR",13:"CSS_CPROP",14:"COMMA",15:"LENGTH",16:"ANGLE",17:"TIME",18:"FREQ",19:"RES",20:"EMS",21:"EXS",22:"CHS",23:"REMS",24:"VHS",25:"VWS",26:"VMINS",27:"VMAXS",28:"PERCENTAGE"},TERROR:2,EOF:1,originalQuoteName:null,originalParseError:null,cleanupAfterParse:null,constructParseErrorInfo:null,yyMergeLocationInfo:null,__reentrant_call_depth:0,__error_infos:[],__error_recovery_infos:[],quoteName:function(o){return'"'+o+'"'},getSymbolName:function(o){if(this.terminals_[o])return this.terminals_[o];var i=this.symbols_;for(var e in i)if(i[e]===o)return e;return null},describeSymbol:function(o){if(o!==this.EOF&&this.terminal_descriptions_&&this.terminal_descriptions_[o])return this.terminal_descriptions_[o];if(o===this.EOF)return"end of input";var i=this.getSymbolName(o);return i?this.quoteName(i):null},collect_expected_token_set:function(o,i){var e=this.TERROR,n=[],s={};if(!i&&this.state_descriptions_&&this.state_descriptions_[o])return[this.state_descriptions_[o]];for(var a in this.table[o])if(a=+a,a!==e){var r=i?a:this.describeSymbol(a);r&&!s[r]&&(n.push(r),s[r]=!0)}return n},productions_:h({pop:g([29,u,[30,10],31,31,32,32,u,[33,15]]),rule:g([2,u,[3,5],4,7,u,[1,4],2,4,6,u,[1,14],2])}),performAction:function(o,i,e){var n=this.yy;switch(n.parser,n.lexer,o){case 0:this.$=e[i-1];break;case 1:return this.$=e[i-1],e[i-1];case 2:case 3:case 4:case 5:this.$={type:"MathExpression",operator:e[i-1],left:e[i-2],right:e[i]};break;case 6:this.$=e[i-1];break;case 7:this.$={type:"Calc",value:e[i-1]};break;case 8:this.$={type:"Calc",value:e[i-1],prefix:e[i-5]};break;case 9:case 10:case 11:this.$=e[i];break;case 12:this.$={type:"Value",value:parseFloat(e[i])};break;case 13:this.$={type:"Value",value:parseFloat(e[i])*-1};break;case 14:this.$={type:"CssVariable",value:e[i-1]};break;case 15:this.$={type:"CssVariable",value:e[i-3],fallback:e[i-1]};break;case 16:this.$={type:"LengthValue",value:parseFloat(e[i]),unit:/[a-z]+/.exec(e[i])[0]};break;case 17:this.$={type:"AngleValue",value:parseFloat(e[i]),unit:/[a-z]+/.exec(e[i])[0]};break;case 18:this.$={type:"TimeValue",value:parseFloat(e[i]),unit:/[a-z]+/.exec(e[i])[0]};break;case 19:this.$={type:"FrequencyValue",value:parseFloat(e[i]),unit:/[a-z]+/.exec(e[i])[0]};break;case 20:this.$={type:"ResolutionValue",value:parseFloat(e[i]),unit:/[a-z]+/.exec(e[i])[0]};break;case 21:this.$={type:"EmValue",value:parseFloat(e[i]),unit:"em"};break;case 22:this.$={type:"ExValue",value:parseFloat(e[i]),unit:"ex"};break;case 23:this.$={type:"ChValue",value:parseFloat(e[i]),unit:"ch"};break;case 24:this.$={type:"RemValue",value:parseFloat(e[i]),unit:"rem"};break;case 25:this.$={type:"VhValue",value:parseFloat(e[i]),unit:"vh"};break;case 26:this.$={type:"VwValue",value:parseFloat(e[i]),unit:"vw"};break;case 27:this.$={type:"VminValue",value:parseFloat(e[i]),unit:"vmin"};break;case 28:this.$={type:"VmaxValue",value:parseFloat(e[i]),unit:"vmax"};break;case 29:this.$={type:"PercentageValue",value:parseFloat(e[i]),unit:"%"};break;case 30:var s=e[i];s.value*=-1,this.$=s;break}},table:m({len:g([24,1,5,23,1,18,u,[0,3],1,u,[0,16],u,[23,4],l,[28,3],0,0,16,1,6,6,u,[0,3],5,1,2,l,[37,3],l,[20,3],5,0,0]),symbol:g([4,7,9,11,12,u,[15,19,1],1,1,u,[3,4,1],l,[30,19],l,[29,4],7,4,10,11,l,[22,14],l,[19,3],l,[43,22],l,[23,69],l,[139,4],8,l,[51,24],4,l,[138,15],13,l,[186,5],8,l,[6,6],l,[5,5],9,8,14,l,[159,47],l,[60,10]]),type:g([u,[2,19],u,[0,5],1,u,[2,24],u,[0,4],l,[22,19],l,[43,42],l,[23,70],l,[28,25],l,[45,25],l,[113,54]]),state:g([1,2,8,6,7,30,l,[4,3],33,37,l,[5,3],38,l,[4,3],39,l,[4,3],40,l,[4,3],42,l,[21,4],50,l,[5,3],51,l,[4,3]]),mode:g([u,[1,179],u,[2,3],l,[5,5],l,[6,4],u,[1,57]]),goto:g([5,3,4,24,u,[9,15,1],u,[25,5,1],l,[24,19],31,35,32,34,l,[18,14],36,l,[38,19],l,[19,57],l,[118,4],41,l,[24,19],43,35,l,[16,14],44,u,[2,3],28,29,2,u,[3,3],28,29,3,l,[53,4],u,[45,5,1],l,[100,42],52,l,[5,4],53])}),defaultActions:c({idx:g([6,7,8,u,[10,16,1],33,34,39,40,41,45,47,52,53]),goto:g([9,10,11,u,[16,14,1],12,1,30,13,u,[4,4,1],14,15,8])}),parseError:function(o,i,e){if(i.recoverable)typeof this.trace=="function"&&this.trace(o),i.destroy();else throw typeof this.trace=="function"&&this.trace(o),e||(e=this.JisonParserError),new e(o,i)},parse:function(o){var i=this,e=new Array(128),n=new Array(128),s=new Array(128),a=this.table,r=0,y=0;this.TERROR;var x=this.EOF;this.options.errorRecoveryTokenDiscardCount|0;var P=[0,54],p;this.__lexer__?p=this.__lexer__:p=this.__lexer__=Object.create(this.lexer);var v={parseError:void 0,quoteName:void 0,lexer:void 0,parser:void 0,pre_parse:void 0,post_parse:void 0,pre_lex:void 0,post_lex:void 0};typeof assert!="function"||assert,this.yyGetSharedState=function(){return v};function R(E,O){for(var T in O)typeof E[T]>"u"&&Object.prototype.hasOwnProperty.call(O,T)&&(E[T]=O[T])}R(v,this.yy),v.lexer=p,v.parser=this,typeof v.parseError=="function"?this.parseError=function(O,T,q){return q||(q=this.JisonParserError),v.parseError.call(this,O,T,q)}:this.parseError=this.originalParseError,typeof v.quoteName=="function"?this.quoteName=function(O){return v.quoteName.call(this,O)}:this.quoteName=this.originalQuoteName,this.cleanupAfterParse=function(O,T,q){var U;if(T){var F;(v.post_parse||this.post_parse)&&(F=this.constructParseErrorInfo(null,null,null,!1)),v.post_parse&&(U=v.post_parse.call(this,v,O,F),typeof U<"u"&&(O=U)),this.post_parse&&(U=this.post_parse.call(this,v,O,F),typeof U<"u"&&(O=U)),F&&F.destroy&&F.destroy()}if(this.__reentrant_call_depth>1)return O;if(p.cleanupAfterLex&&p.cleanupAfterLex(q),v&&(v.lexer=void 0,v.parser=void 0,p.yy===v&&(p.yy=void 0)),v=void 0,this.parseError=this.originalParseError,this.quoteName=this.originalQuoteName,e.length=0,n.length=0,s.length=0,r=0,!q){for(var z=this.__error_infos.length-1;z>=0;z--){var Q=this.__error_infos[z];Q&&typeof Q.destroy=="function"&&Q.destroy()}this.__error_infos.length=0}return O},this.constructParseErrorInfo=function(O,T,q,U){var F={errStr:O,exception:T,text:p.match,value:p.yytext,token:this.describeSymbol(y)||y,token_id:y,line:p.yylineno,expected:q,recoverable:U,state:C,action:J,new_state:M,symbol_stack:e,state_stack:n,value_stack:s,stack_pointer:r,yy:v,lexer:p,parser:this,destroy:function(){var Q=!!this.recoverable;for(var ee in this)this.hasOwnProperty(ee)&&typeof ee=="object"&&(this[ee]=void 0);this.recoverable=Q}};return this.__error_infos.push(F),F};function $(){var E=p.lex();return typeof E!="number"&&(E=i.symbols_[E]||E),E||x}function w(){var E=p.fastLex();return typeof E!="number"&&(E=i.symbols_[E]||E),E||x}var H=$,C,J,k,W,G={$:!0,_$:void 0,yy:v},V,j,X,M,L=!1;try{if(this.__reentrant_call_depth++,p.setInput(o,v),typeof p.canIUse=="function"){var Z=p.canIUse();Z.fastLex&&typeof w=="function"&&(H=w)}for(s[r]=null,n[r]=0,e[r]=0,++r,this.pre_parse&&this.pre_parse.call(this,v),v.pre_parse&&v.pre_parse.call(this,v),M=n[r-1];;){if(C=M,this.defaultActions[C])J=2,M=this.defaultActions[C];else if(y||(y=H()),W=a[C]&&a[C][y]||P,M=W[1],J=W[0],!J){var N,K=this.describeSymbol(y)||y,Y=this.collect_expected_token_set(C);typeof p.yylineno=="number"?N="Parse error on line "+(p.yylineno+1)+": ":N="Parse error: ",typeof p.showPosition=="function"&&(N+=`
`+p.showPosition(79-10,10)+`
`),Y.length?N+="Expecting "+Y.join(", ")+", got unexpected "+K:N+="Unexpected "+K,V=this.constructParseErrorInfo(N,null,Y,!1),k=this.parseError(V.errStr,V,this.JisonParserError),typeof k<"u"&&(L=k);break}switch(J){default:if(J instanceof Array){V=this.constructParseErrorInfo("Parse Error: multiple actions possible at state: "+C+", token: "+y,null,null,!1),k=this.parseError(V.errStr,V,this.JisonParserError),typeof k<"u"&&(L=k);break}V=this.constructParseErrorInfo("Parsing halted. No viable error recovery approach available due to internal system failure.",null,null,!1),k=this.parseError(V.errStr,V,this.JisonParserError),typeof k<"u"&&(L=k);break;case 1:e[r]=y,s[r]=p.yytext,n[r]=M,++r,y=0;continue;case 2:if(X=this.productions_[M-1],j=X[1],k=this.performAction.call(G,M,r-1,s),typeof k<"u"){L=k;break}r-=j;var le=X[0];e[r]=le,s[r]=G.$,M=a[n[r-1]][le],n[r]=M,++r;continue;case 3:r!==-2&&(L=!0,r--,typeof s[r]<"u"&&(L=s[r]));break}break}}catch(E){if(E instanceof this.JisonParserError)throw E;if(p&&typeof p.JisonLexerError=="function"&&E instanceof p.JisonLexerError)throw E;V=this.constructParseErrorInfo("Parsing aborted due to exception.",E,null,!1),L=!1,k=this.parseError(V.errStr,V,this.JisonParserError),typeof k<"u"&&(L=k)}finally{L=this.cleanupAfterParse(L,!0,!0),this.__reentrant_call_depth--}return L}};d.originalParseError=d.parseError,d.originalQuoteName=d.quoteName;var D=function(){function f(i,e){Object.defineProperty(this,"name",{enumerable:!1,writable:!1,value:"JisonLexerError"}),i==null&&(i="???"),Object.defineProperty(this,"message",{enumerable:!1,writable:!0,value:i}),this.hash=e;var n;if(e&&e.exception instanceof Error){var s=e.exception;this.message=s.message||i,n=s.stack}n||(Error.hasOwnProperty("captureStackTrace")?Error.captureStackTrace(this,this.constructor):n=new Error(i).stack),n&&Object.defineProperty(this,"stack",{enumerable:!1,writable:!1,value:n})}typeof Object.setPrototypeOf=="function"?Object.setPrototypeOf(f.prototype,Error.prototype):f.prototype=Object.create(Error.prototype),f.prototype.constructor=f,f.prototype.name="JisonLexerError";var o={EOF:1,ERROR:2,__currentRuleSet__:null,__error_infos:[],__decompressed:!1,done:!1,_backtrack:!1,_input:"",_more:!1,_signaled_error_token:!1,conditionStack:[],match:"",matched:"",matches:!1,yytext:"",offset:0,yyleng:0,yylineno:0,yylloc:null,constructLexErrorInfo:function(e,n,s){if(e=""+e,s==null&&(s=!(e.indexOf(`
`)>0&&e.indexOf("^")>0)),this.yylloc&&s){if(typeof this.prettyPrintRange=="function")this.prettyPrintRange(this.yylloc),/\n\s*$/.test(e)||(e+=`
`),e+=`
  Erroneous area:
`+this.prettyPrintRange(this.yylloc);else if(typeof this.showPosition=="function"){var a=this.showPosition();a&&(e.length&&e[e.length-1]!==`
`&&a[0]!==`
`?e+=`
`+a:e+=a)}}var r={errStr:e,recoverable:!!n,text:this.match,token:null,line:this.yylineno,loc:this.yylloc,yy:this.yy,lexer:this,destroy:function(){var x=!!this.recoverable;for(var P in this)this.hasOwnProperty(P)&&typeof P=="object"&&(this[P]=void 0);this.recoverable=x}};return this.__error_infos.push(r),r},parseError:function(e,n,s){if(s||(s=this.JisonLexerError),this.yy){if(this.yy.parser&&typeof this.yy.parser.parseError=="function")return this.yy.parser.parseError.call(this,e,n,s)||this.ERROR;if(typeof this.yy.parseError=="function")return this.yy.parseError.call(this,e,n,s)||this.ERROR}throw new s(e,n)},yyerror:function(e){var n="";this.yylloc&&(n=" on line "+(this.yylineno+1));var s=this.constructLexErrorInfo("Lexical error"+n+": "+e,this.options.lexerErrorsAreRecoverable),a=Array.prototype.slice.call(arguments,1);return a.length&&(s.extra_error_attributes=a),this.parseError(s.errStr,s,this.JisonLexerError)||this.ERROR},cleanupAfterLex:function(e){if(this.setInput("",{}),!e){for(var n=this.__error_infos.length-1;n>=0;n--){var s=this.__error_infos[n];s&&typeof s.destroy=="function"&&s.destroy()}this.__error_infos.length=0}return this},clear:function(){this.yytext="",this.yyleng=0,this.match="",this.matches=!1,this._more=!1,this._backtrack=!1;var e=this.yylloc?this.yylloc.last_column:0;this.yylloc={first_line:this.yylineno+1,first_column:e,last_line:this.yylineno+1,last_column:e,range:[this.offset,this.offset]}},setInput:function(e,n){if(this.yy=n||this.yy||{},!this.__decompressed){for(var s=this.rules,a=0,r=s.length;a<r;a++){var y=s[a];typeof y=="number"&&(s[a]=s[y])}var x=this.conditions;for(var P in x){for(var p=x[P],v=p.rules,r=v.length,R=new Array(r+1),$=new Array(r+1),a=0;a<r;a++){var w=v[a],y=s[w];R[a+1]=y,$[a+1]=w}p.rules=$,p.__rule_regexes=R,p.__rule_count=r}this.__decompressed=!0}return this._input=e||"",this.clear(),this._signaled_error_token=!1,this.done=!1,this.yylineno=0,this.matched="",this.conditionStack=["INITIAL"],this.__currentRuleSet__=null,this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0,range:[0,0]},this.offset=0,this},editRemainingInput:function(e,n){var s=e.call(this,this._input,n);return typeof s!="string"?s&&(this._input=""+s):this._input=s,this},input:function(){if(!this._input)return null;var e=this._input[0];this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e;var n=1,s=!1;if(e===`
`)s=!0;else if(e==="\r"){s=!0;var a=this._input[1];a===`
`&&(n++,e+=a,this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a,this.yylloc.range[1]++)}return s?(this.yylineno++,this.yylloc.last_line++,this.yylloc.last_column=0):this.yylloc.last_column++,this.yylloc.range[1]++,this._input=this._input.slice(n),e},unput:function(e){var n=e.length,s=e.split(/(?:\r\n?|\n)/g);if(this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.yyleng=this.yytext.length,this.offset-=n,this.match=this.match.substr(0,this.match.length-n),this.matched=this.matched.substr(0,this.matched.length-n),s.length>1){this.yylineno-=s.length-1,this.yylloc.last_line=this.yylineno+1;var a=this.match,r=a.split(/(?:\r\n?|\n)/g);r.length===1&&(a=this.matched,r=a.split(/(?:\r\n?|\n)/g)),this.yylloc.last_column=r[r.length-1].length}else this.yylloc.last_column-=n;return this.yylloc.range[1]=this.yylloc.range[0]+this.yyleng,this.done=!1,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else{var e="";this.yylloc&&(e=" on line "+(this.yylineno+1));var n=this.constructLexErrorInfo("Lexical error"+e+": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).",!1);this._signaled_error_token=this.parseError(n.errStr,n,this.JisonLexerError)||this.ERROR}return this},less:function(e){return this.unput(this.match.slice(e))},pastInput:function(e,n){var s=this.matched.substring(0,this.matched.length-this.match.length);e<0?e=s.length:e||(e=20),n<0?n=s.length:n||(n=1),s=s.substr(-e*2-2);var a=s.replace(/\r\n|\r/g,`
`).split(`
`);return a=a.slice(-n),s=a.join(`
`),s.length>e&&(s="..."+s.substr(-e)),s},upcomingInput:function(e,n){var s=this.match;e<0?e=s.length+this._input.length:e||(e=20),n<0?n=e:n||(n=1),s.length<e*2+2&&(s+=this._input.substring(0,e*2+2));var a=s.replace(/\r\n|\r/g,`
`).split(`
`);return a=a.slice(0,n),s=a.join(`
`),s.length>e&&(s=s.substring(0,e)+"..."),s},showPosition:function(e,n){var s=this.pastInput(e).replace(/\s/g," "),a=new Array(s.length+1).join("-");return s+this.upcomingInput(n).replace(/\s/g," ")+`
`+a+"^"},deriveLocationInfo:function(e,n,s,a){var r={first_line:1,first_column:0,last_line:1,last_column:0,range:[0,0]};return e&&(r.first_line=e.first_line|0,r.last_line=e.last_line|0,r.first_column=e.first_column|0,r.last_column=e.last_column|0,e.range&&(r.range[0]=e.range[0]|0,r.range[1]=e.range[1]|0)),(r.first_line<=0||r.last_line<r.first_line)&&(r.first_line<=0&&n&&(r.first_line=n.last_line|0,r.first_column=n.last_column|0,n.range&&(r.range[0]=e.range[1]|0)),(r.last_line<=0||r.last_line<r.first_line)&&s&&(r.last_line=s.first_line|0,r.last_column=s.first_column|0,s.range&&(r.range[1]=e.range[0]|0)),r.first_line<=0&&a&&(r.last_line<=0||a.last_line<=r.last_line)&&(r.first_line=a.first_line|0,r.first_column=a.first_column|0,a.range&&(r.range[0]=a.range[0]|0)),r.last_line<=0&&a&&(r.first_line<=0||a.first_line>=r.first_line)&&(r.last_line=a.last_line|0,r.last_column=a.last_column|0,a.range&&(r.range[1]=a.range[1]|0))),r.last_line<=0&&(r.first_line<=0?(r.first_line=this.yylloc.first_line,r.last_line=this.yylloc.last_line,r.first_column=this.yylloc.first_column,r.last_column=this.yylloc.last_column,r.range[0]=this.yylloc.range[0],r.range[1]=this.yylloc.range[1]):(r.last_line=this.yylloc.last_line,r.last_column=this.yylloc.last_column,r.range[1]=this.yylloc.range[1])),r.first_line<=0&&(r.first_line=r.last_line,r.first_column=0,r.range[1]=r.range[0]),r.first_column<0&&(r.first_column=0),r.last_column<0&&(r.last_column=r.first_column>0?r.first_column:80),r},prettyPrintRange:function(e,n,s){e=this.deriveLocationInfo(e,n,s);const a=3,r=1,y=2;var x=this.matched+this._input,P=x.split(`
`),p=Math.max(1,n?n.first_line:e.first_line-a),v=Math.max(1,s?s.last_line:e.last_line+r),R=1+Math.log10(v|1)|0,$=new Array(R).join(" "),w=[],H=P.slice(p-1,v+1).map(function(G,V){var j=V+p,X=($+j).substr(-R),M=X+": "+G,L=new Array(R+1).join("^"),Z=2+1,N=0;if(j===e.first_line?(Z+=e.first_column,N=Math.max(2,(j===e.last_line?e.last_column:G.length)-e.first_column+1)):j===e.last_line?N=Math.max(2,e.last_column+1):j>e.first_line&&j<e.last_line&&(N=Math.max(2,G.length+1)),N){var K=new Array(Z).join("."),Y=new Array(N).join("^");M+=`
`+L+K+Y,G.trim().length>0&&w.push(V)}return M=M.replace(/\t/g," "),M});if(w.length>2*y){var C=w[y-1]+1,J=w[w.length-y]-1,k=new Array(R+1).join(" ")+"  (...continued...)";k+=`
`+new Array(R+1).join("-")+"  (---------------)",H.splice(C,J-C+1,k)}return H.join(`
`)},describeYYLLOC:function(e,n){var s=e.first_line,a=e.last_line,r=e.first_column,y=e.last_column,x=a-s,P=y-r,p;if(x===0?(p="line "+s+", ",P<=1?p+="column "+r:p+="columns "+r+" .. "+y):p="lines "+s+"(column "+r+") .. "+a+"(column "+y+")",e.range&&n){var v=e.range[0],R=e.range[1]-1;R<=v?p+=" {String Offset: "+v+"}":p+=" {String Offset range: "+v+" .. "+R+"}"}return p},test_match:function(e,n){var s,a,r,y,x;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.yylloc.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column,range:this.yylloc.range.slice(0)},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done}),y=e[0],x=y.length,a=y.split(/(?:\r\n?|\n)/g),a.length>1?(this.yylineno+=a.length-1,this.yylloc.last_line=this.yylineno+1,this.yylloc.last_column=a[a.length-1].length):this.yylloc.last_column+=x,this.yytext+=y,this.match+=y,this.matched+=y,this.matches=e,this.yyleng=this.yytext.length,this.yylloc.range[1]+=x,this.offset+=x,this._more=!1,this._backtrack=!1,this._input=this._input.slice(x),s=this.performAction.call(this,this.yy,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var P in r)this[P]=r[P];return this.__currentRuleSet__=null,!1}else if(this._signaled_error_token)return s=this._signaled_error_token,this._signaled_error_token=!1,s;return!1},next:function(){if(this.done)return this.clear(),this.EOF;this._input||(this.done=!0);var e,n,s,a;this._more||this.clear();var r=this.__currentRuleSet__;if(!r&&(r=this.__currentRuleSet__=this._currentRules(),!r||!r.rules)){var y="";this.options.trackPosition&&(y=" on line "+(this.yylineno+1));var x=this.constructLexErrorInfo("Internal lexer engine error"+y+': The lex grammar programmer pushed a non-existing condition name "'+this.topState()+'"; this is a fatal error and should be reported to the application programmer team!',!1);return this.parseError(x.errStr,x,this.JisonLexerError)||this.ERROR}for(var P=r.rules,p=r.__rule_regexes,v=r.__rule_count,R=1;R<=v;R++)if(s=this._input.match(p[R]),s&&(!n||s[0].length>n[0].length)){if(n=s,a=R,this.options.backtrack_lexer){if(e=this.test_match(s,P[R]),e!==!1)return e;if(this._backtrack){n=void 0;continue}else return!1}else if(!this.options.flex)break}if(n)return e=this.test_match(n,P[a]),e!==!1?e:!1;if(this._input){var y="";this.options.trackPosition&&(y=" on line "+(this.yylineno+1));var x=this.constructLexErrorInfo("Lexical error"+y+": Unrecognized text.",this.options.lexerErrorsAreRecoverable),$=this._input,w=this.topState(),H=this.conditionStack.length;return e=this.parseError(x.errStr,x,this.JisonLexerError)||this.ERROR,e===this.ERROR&&!this.matches&&$===this._input&&w===this.topState()&&H===this.conditionStack.length&&this.input(),e}else return this.done=!0,this.clear(),this.EOF},lex:function(){var e;for(typeof this.pre_lex=="function"&&(e=this.pre_lex.call(this,0)),typeof this.options.pre_lex=="function"&&(e=this.options.pre_lex.call(this,e)||e),this.yy&&typeof this.yy.pre_lex=="function"&&(e=this.yy.pre_lex.call(this,e)||e);!e;)e=this.next();return this.yy&&typeof this.yy.post_lex=="function"&&(e=this.yy.post_lex.call(this,e)||e),typeof this.options.post_lex=="function"&&(e=this.options.post_lex.call(this,e)||e),typeof this.post_lex=="function"&&(e=this.post_lex.call(this,e)||e),e},fastLex:function(){for(var e;!e;)e=this.next();return e},canIUse:function(){var e={fastLex:!(typeof this.pre_lex=="function"||typeof this.options.pre_lex=="function"||this.yy&&typeof this.yy.pre_lex=="function"||this.yy&&typeof this.yy.post_lex=="function"||typeof this.options.post_lex=="function"||typeof this.post_lex=="function")&&typeof this.fastLex=="function"};return e},begin:function(e){return this.pushState(e)},pushState:function(e){return this.conditionStack.push(e),this.__currentRuleSet__=null,this},popState:function(){var e=this.conditionStack.length-1;return e>0?(this.__currentRuleSet__=null,this.conditionStack.pop()):this.conditionStack[0]},topState:function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:"INITIAL"},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]]:this.conditions.INITIAL},stateStackSize:function(){return this.conditionStack.length},options:{trackPosition:!0},JisonLexerError:f,performAction:function(e,n,s){switch(n){case 1:break;default:return this.simpleCaseActionClusters[n]}},simpleCaseActionClusters:{0:13,2:5,3:6,4:3,5:4,6:15,7:15,8:15,9:15,10:15,11:15,12:16,13:16,14:16,15:16,16:17,17:17,18:18,19:18,20:19,21:19,22:19,23:20,24:21,25:22,26:23,27:25,28:24,29:26,30:27,31:28,32:11,33:9,34:12,35:10,36:7,37:8,38:14,39:1},rules:[/^(?:(--[\d\-A-Za-z]*))/,/^(?:\s+)/,/^(?:\*)/,/^(?:\/)/,/^(?:\+)/,/^(?:-)/,/^(?:(\d+(\.\d*)?|\.\d+)px\b)/,/^(?:(\d+(\.\d*)?|\.\d+)cm\b)/,/^(?:(\d+(\.\d*)?|\.\d+)mm\b)/,/^(?:(\d+(\.\d*)?|\.\d+)in\b)/,/^(?:(\d+(\.\d*)?|\.\d+)pt\b)/,/^(?:(\d+(\.\d*)?|\.\d+)pc\b)/,/^(?:(\d+(\.\d*)?|\.\d+)deg\b)/,/^(?:(\d+(\.\d*)?|\.\d+)grad\b)/,/^(?:(\d+(\.\d*)?|\.\d+)rad\b)/,/^(?:(\d+(\.\d*)?|\.\d+)turn\b)/,/^(?:(\d+(\.\d*)?|\.\d+)s\b)/,/^(?:(\d+(\.\d*)?|\.\d+)ms\b)/,/^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/,/^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/,/^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/,/^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/,/^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/,/^(?:(\d+(\.\d*)?|\.\d+)em\b)/,/^(?:(\d+(\.\d*)?|\.\d+)ex\b)/,/^(?:(\d+(\.\d*)?|\.\d+)ch\b)/,/^(?:(\d+(\.\d*)?|\.\d+)rem\b)/,/^(?:(\d+(\.\d*)?|\.\d+)vw\b)/,/^(?:(\d+(\.\d*)?|\.\d+)vh\b)/,/^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/,/^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/,/^(?:(\d+(\.\d*)?|\.\d+)%)/,/^(?:(\d+(\.\d*)?|\.\d+)\b)/,/^(?:(calc))/,/^(?:(var))/,/^(?:([a-z]+))/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],inclusive:!0}}};return o}();d.lexer=D;function S(){this.yy={}}return S.prototype=d,d.Parser=S,new S}();typeof pe<"u"&&(t.parser=_,t.Parser=_.Parser,t.parse=function(){return _.parse.apply(_,arguments)})})(ue);var B={},ie={exports:{}};(function(t,_){Object.defineProperty(_,"__esModule",{value:!0});var b=ce,h=c(b);function c(l){return l&&l.__esModule?l:{default:l}}function m(l,g,d){switch(l.type){case"LengthValue":case"AngleValue":case"TimeValue":case"FrequencyValue":case"ResolutionValue":return u(l,g,d);default:return{left:l,right:g}}}function u(l,g,d){return g.type===l.type&&(g={type:l.type,value:(0,h.default)(g.value,g.unit,l.unit,d),unit:l.unit}),{left:l,right:g}}_.default=m,t.exports=_.default})(ie,ie.exports);var _e=ie.exports;Object.defineProperty(B,"__esModule",{value:!0});B.flip=se;var ye=_e,te=ve(ye);function ve(t){return t&&t.__esModule?t:{default:t}}function A(t,_){return t.type==="MathExpression"?Ee(t,_):t.type==="Calc"?A(t.value,_):t}function oe(t,_){return t.type===_.type&&t.value===_.value}function I(t){switch(t){case"LengthValue":case"AngleValue":case"TimeValue":case"FrequencyValue":case"ResolutionValue":case"EmValue":case"ExValue":case"ChValue":case"RemValue":case"VhValue":case"VwValue":case"VminValue":case"VmaxValue":case"PercentageValue":case"Value":return!0}return!1}function ge(t,_){var b=(0,te.default)(t.left,t.right,_),h=A(b.left,_),c=A(b.right,_);return h.type==="MathExpression"&&c.type==="MathExpression"&&(h.operator==="/"&&c.operator==="*"||h.operator==="-"&&c.operator==="+"||h.operator==="*"&&c.operator==="/"||h.operator==="+"&&c.operator==="-")&&(oe(h.right,c.right)?b=(0,te.default)(h.left,c.left,_):oe(h.right,c.left)&&(b=(0,te.default)(h.left,c.right,_)),h=A(b.left,_),c=A(b.right,_)),t.left=h,t.right=c,t}function se(t){return t==="+"?"-":"+"}function ne(t){return I(t.type)?t.value=-t.value:t.type=="MathExpression"&&(t.left=ne(t.left),t.right=ne(t.right)),t}function de(t,_){var b=t,h=b.left,c=b.right,m=b.operator;if(h.type==="CssVariable"||c.type==="CssVariable")return t;if(c.value===0)return h;if(h.value===0&&m==="+")return c;if(h.value===0&&m==="-")return ne(c);if(h.type===c.type&&I(h.type)&&(t=Object.assign({},h),m==="+"?t.value=h.value+c.value:t.value=h.value-c.value),I(h.type)&&(c.operator==="+"||c.operator==="-")&&c.type==="MathExpression"){if(h.type===c.left.type)return t=Object.assign({},t),t.left=A({type:"MathExpression",operator:m,left:h,right:c.left},_),t.right=c.right,t.operator=m==="-"?se(c.operator):c.operator,A(t,_);if(h.type===c.right.type)return t=Object.assign({},t),t.left=A({type:"MathExpression",operator:m==="-"?se(c.operator):c.operator,left:h,right:c.right},_),t.right=c.left,A(t,_)}if(h.type==="MathExpression"&&(h.operator==="+"||h.operator==="-")&&I(c.type)){if(c.type===h.left.type)return t=Object.assign({},h),t.left=A({type:"MathExpression",operator:m,left:h.left,right:c},_),A(t,_);if(c.type===h.right.type)return t=Object.assign({},h),h.operator==="-"?(t.right=A({type:"MathExpression",operator:m==="-"?"+":"-",left:c,right:h.right},_),t.operator=m==="-"?"-":"+"):t.right=A({type:"MathExpression",operator:m,left:h.right,right:c},_),t.right.value<0&&(t.right.value*=-1,t.operator=t.operator==="-"?"+":"-"),A(t,_)}return t}function me(t,_){if(!I(t.right.type))return t;if(t.right.type!=="Value")throw new Error('Cannot divide by "'+t.right.unit+'", number expected');if(t.right.value===0)throw new Error("Cannot divide by zero");return t.left.type==="MathExpression"?I(t.left.left.type)&&I(t.left.right.type)?(t.left.left.value/=t.right.value,t.left.right.value/=t.right.value,A(t.left,_)):t:I(t.left.type)?(t.left.value/=t.right.value,t.left):t}function xe(t){if(t.left.type==="MathExpression"&&t.right.type==="Value"){if(I(t.left.left.type)&&I(t.left.right.type))return t.left.left.value*=t.right.value,t.left.right.value*=t.right.value,t.left}else{if(I(t.left.type)&&t.right.type==="Value")return t.left.value*=t.right.value,t.left;if(t.left.type==="Value"&&t.right.type==="MathExpression"){if(I(t.right.left.type)&&I(t.right.right.type))return t.right.left.value*=t.left.value,t.right.right.value*=t.left.value,t.right}else if(t.left.type==="Value"&&I(t.right.type))return t.right.value*=t.left.value,t.right}return t}function Ee(t,_){switch(t=ge(t,_),t.operator){case"+":case"-":return de(t,_);case"/":return me(t,_);case"*":return xe(t)}return t}B.default=A;var ae={exports:{}};(function(t,_){Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(u,l,g){var d=m(l,g);return l.type==="MathExpression"&&(d=u+"("+d+")"),d};var b=B,h={"*":0,"/":0,"+":1,"-":1};function c(u,l){if(l!==!1){var g=Math.pow(10,l);return Math.round(u*g)/g}return u}function m(u,l){switch(u.type){case"MathExpression":{var g=u.left,d=u.right,D=u.operator,S="";return g.type==="MathExpression"&&h[D]<h[g.operator]?S+="("+m(g,l)+")":S+=m(g,l),S+=" "+u.operator+" ",d.type==="MathExpression"&&h[D]<h[d.operator]?S+="("+m(d,l)+")":(d.type==="MathExpression"&&D==="-"&&["+","-"].includes(d.operator)&&(d.operator=(0,b.flip)(d.operator)),S+=m(d,l)),S}case"Value":return c(u.value,l);case"CssVariable":return u.fallback?"var("+u.value+", "+m(u.fallback,l)+")":"var("+u.value+")";case"Calc":return u.prefix?"-"+u.prefix+"-calc("+m(u.value,l)+")":"calc("+m(u.value,l)+")";default:return c(u.value,l)+u.unit}}t.exports=_.default})(ae,ae.exports);var be=ae.exports;(function(t,_){Object.defineProperty(_,"__esModule",{value:!0});var b=he,h=d(b),c=ue,m=B,u=d(m),l=be,g=d(l);function d(S){return S&&S.__esModule?S:{default:S}}var D=/((?:\-[a-z]+\-)?calc)/;_.default=function(S){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5;return(0,h.default)(S).walk(function(o){if(!(o.type!=="function"||!D.test(o.value))){var i=h.default.stringify(o.nodes);if(!(i.indexOf("constant")>=0||i.indexOf("env")>=0)){var e=c.parser.parse(i),n=(0,u.default)(e,f);o.type="word",o.value=(0,g.default)(o.value,n,f)}}},!0).toString()},t.exports=_.default})(re,re.exports);var Re=re.exports;const Oe=fe(Re);export{Oe as r};