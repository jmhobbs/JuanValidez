/*!
	JuanValidez Library v0.1.0
	https://github.com/jmhobbs/JuanValidez

	Copyright 2011, John Hobbs
	Licensed under the MIT license.
	https://github.com/jmhobbs/JuanValidez/blob/master/LICENSE
*/
var JuanValidez=function(){var a={};return{validators:function(){var b,c=[];for(b in a){c.push(b)}return c},addValidator:function(b,c){a[b]=c},removeValidator:function(b){if(a[b]){delete a[b]}},runValidator:function(d,e,c){c=("undefined"==typeof c)?[]:c;try{if(!a[d]){throw new TypeError("No such validator: "+d)}return a[d].apply(e,c)}catch(b){if(window.console&&window.console.log){console.log(b)}return false}},validate:function(g,c){if("undefined"==typeof c||""===c.replace(/^\s*(\S*)\s*$/,"$1")){return[]}var j=c.split(" "),b=[],f=true,h,d,e;for(i in j){d=j[i].split(":");e=d[0];d=d.slice(1).join(":").split(",");h=this.runValidator(e,g,d);if(!h){b.push(e);f=false}}return b}}}();JuanValidez.addValidator("required",function(){return this.replace(/^\s*(\S*)\s*/,"$1")!=""});JuanValidez.addValidator("length",function(b,a){if("undefined"===typeof a){return(this.length>=b)}else{return(this.length>=b&&this.length<=a)}});JuanValidez.addValidator("integer",function(){return/^[0-9]+$/.test(this)});JuanValidez.addValidator("email",function(){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this)});JuanValidez.addValidator("match",function(a){return this==a});JuanValidez.addValidator("lol",function(){return/\b(lol|rofl)/i.test(this)});