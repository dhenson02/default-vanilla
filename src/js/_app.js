!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(this,function(){"use strict";var e=require("reqwest"),t=require("immutable"),n=t.Map,d=require("fastdom"),i=document.getElementById("main"),o=document.getElementById("clicker"),r=function(t){var o=document.createElement("textarea");o.style=n({borderColor:"#AACCEE",borderWidth:"3px",borderStyle:"solid"}).toObject(),d.measure(function(){e({url:"/",data:{height:document.body.innerHeight,width:document.body.innerWidth},success:function(e){var t=document.createTextNode(JSON.stringify(arguments));d.mutate(function(){o.appendChild(t),i.appendChild(o)})},error:function(e){var t=document.createTextNode(JSON.stringify(arguments));d.mutate(function(){o.appendChild(t),i.appendChild(o)})}})})};o.addEventListener("click",r,!1)});