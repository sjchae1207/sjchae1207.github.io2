"use strict";(self.webpackChunkzoomkoding_com=self.webpackChunkzoomkoding_com||[]).push([[682],{3533:function(e,t,a){var n=a(7294),r=a(9317),c=a(4785),l=a(2778);t.Z=function(e){var t=e.projects;return!t||t.length<2?null:n.createElement("div",{className:"project-section"},n.createElement(r.Z,{title:"Projects"}),t.map((function(e,t){return 0===t?null:n.createElement("div",{className:"project",key:t},n.createElement("div",{className:"head"},e.title,"  ",e.links&&n.createElement(c.Z,{links:e.links,style:{color:"#a8a8a8",fontSize:24}})),n.createElement("div",{className:"body"},n.createElement(l.Z,{className:"thumbnail",src:e.thumbnailUrl}),e.techStack&&n.createElement("div",{className:"tech-stack"},e.techStack.map((function(e,t){return n.createElement("div",{key:t,className:"tech"},e)}))),n.createElement("div",{className:"description"},e.description)))})))}},9317:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.title;return n.createElement("div",{className:"section-header-wrapper"},n.createElement("div",{className:"section-header"},n.createElement("h2",null,t)))}},6125:function(e,t,a){var n=a(7294),r=a(9317),c=a(4785);t.Z=function(e){var t=e.timestamps;return!t||t.length<2?null:n.createElement("div",{className:"timestamp-section"},n.createElement(r.Z,{title:"Timestamps"}),n.createElement("div",{className:"body"},t.map((function(e,t){return 0===t?null:n.createElement("div",{className:"timestamp",key:t},n.createElement("div",{className:"date"},e.date),n.createElement("div",{className:"activity"},e.activity," ",e.links&&n.createElement(c.Z,{links:e.links})))}))))}},1066:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),r=a(4985),c=a(579),l=a(8256),i=a(6125),s=a(3533);a(9317),a(4785);var m=function(e){var t=e.intros;return!t||t.length<2?null:n.createElement("div",{className:"intro-section"},t.map((function(e,t){return 0===t?null:n.createElement("div",{className:"intro",key:t},n.createElement("div",{className:"description"},e.description_before_link," ",n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.linkText),e.description_after_link," "))})))};var o=function(e){var t=e.data.site.siteMetadata,a=t.author,o=t.about,u=t.language,d=o.intros,v=o.timestamps,E=o.projects;return n.createElement(r.Z,null,n.createElement(c.Z,{title:"About"}),n.createElement(l.Z,{author:a,language:u}),n.createElement(m,{intros:d}),n.createElement(i.Z,{timestamps:v}),n.createElement(s.Z,{projects:E}))}}}]);
//# sourceMappingURL=component---src-pages-about-js-58df02ae49cf8d8ab601.js.map