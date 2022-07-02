"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[884],{3905:function(e,i,I){I.d(i,{Zo:function(){return l},kt:function(){return C}});var t=I(7294);function a(e,i,I){return i in e?Object.defineProperty(e,i,{value:I,enumerable:!0,configurable:!0,writable:!0}):e[i]=I,e}function n(e,i){var I=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),I.push.apply(I,t)}return I}function g(e){for(var i=1;i<arguments.length;i++){var I=null!=arguments[i]?arguments[i]:{};i%2?n(Object(I),!0).forEach((function(i){a(e,i,I[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(I)):n(Object(I)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(I,i))}))}return e}function r(e,i){if(null==e)return{};var I,t,a=function(e,i){if(null==e)return{};var I,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)I=n[t],i.indexOf(I)>=0||(a[I]=e[I]);return a}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)I=n[t],i.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(e,I)&&(a[I]=e[I])}return a}var o=t.createContext({}),s=function(e){var i=t.useContext(o),I=i;return e&&(I="function"==typeof e?e(i):g(g({},i),e)),I},l=function(e){var i=s(e.components);return t.createElement(o.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},d=t.forwardRef((function(e,i){var I=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),d=s(I),C=a,u=d["".concat(o,".").concat(C)]||d[C]||c[C]||n;return I?t.createElement(u,g(g({ref:i},l),{},{components:I})):t.createElement(u,g({ref:i},l))}));function C(e,i){var I=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var n=I.length,g=new Array(n);g[0]=d;var r={};for(var o in i)hasOwnProperty.call(i,o)&&(r[o]=i[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,g[1]=r;for(var s=2;s<n;s++)g[s]=I[s];return t.createElement.apply(null,g)}return t.createElement.apply(null,I)}d.displayName="MDXCreateElement"},7528:function(e,i,I){I.r(i),I.d(i,{assets:function(){return l},contentTitle:function(){return o},default:function(){return C},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var t=I(7462),a=I(3366),n=(I(7294),I(3905)),g=["components"],r={sidebar_position:2,sidebar_label:"Extra",description:"Computer networking on real-world application"},o="Computer Networking Extra",s={unversionedId:"ComputerNetworking/extra",id:"ComputerNetworking/extra",title:"Computer Networking Extra",description:"Computer networking on real-world application",source:"@site/docs/ComputerNetworking/extra.md",sourceDirName:"ComputerNetworking",slug:"/ComputerNetworking/extra",permalink:"/docs/ComputerNetworking/extra",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Extra",description:"Computer networking on real-world application"},sidebar:"docs",previous:{title:"Basic(Chinese Version)",permalink:"/docs/ComputerNetworking/basic"},next:{title:"UnityLearningNotes(Chinese Version)",permalink:"/docs/category/UnityLearningNotes"}},l={},c=[{value:"Layer",id:"layer",level:2},{value:"DNS",id:"dns",level:2},{value:"TCP",id:"tcp",level:2},{value:"I/O Multiplexing",id:"io-multiplexing",level:2},{value:"Restful API",id:"restful-api",level:2}],d={toc:c};function C(e){var i=e.components,r=(0,a.Z)(e,g);return(0,n.kt)("wrapper",(0,t.Z)({},d,r,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"computer-networking-extra"},"Computer Networking Extra"),(0,n.kt)("h2",{id:"layer"},"Layer"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Layer",src:I(3801).Z,width:"1668",height:"1050"}),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"Layer",src:I(2965).Z,width:"1704",height:"912"})),(0,n.kt)("h2",{id:"dns"},"DNS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DNS (Domain Name System) is a distributed client/server networked database that is used by TCP/IP applications to map between host names and IP addresses. You can use nslookup to search a domain name, and it will return True IP Adress. You can manually change your DNS server like 192.101.4.3 to use local DNS server for finding LAN(local area network) IP adress."),(0,n.kt)("li",{parentName:"ul"},"Name Space: the set of all names used with DNS constitutes the DNS ",(0,n.kt)("em",{parentName:"li"},"name space"),". hierarchically, case insensitive, a tree of domains with an unnamed root at the top."),(0,n.kt)("li",{parentName:"ul"},"Zone: the unit of administrative delegation, the subtree of domain name space, for example server01.example.com, server01 is the hostname, and example.com may be the  zone (com also can be the zone, decided by your separate setting). When you have multi server, you can assign request to certain server by using hostname+zone, or simply use zone to let cloud do distribution. On AWS, route 53 is a DNS service including private zone using local DNS server, it's called 53 due to DNS use port:53."),(0,n.kt)("li",{parentName:"ul"},"Cache:  Name servers can obtain the information directly from the zone database, the result of a zone transfer (master -> slave), or from another server in the course of processing resolution. Most name servers ",(0,n.kt)("em",{parentName:"li"},"cache")," zone information they learn, up to a time to live (",(0,n.kt)("em",{parentName:"li"},"TTL"),"). They use this cached information to answer queries."),(0,n.kt)("li",{parentName:"ul"},"Local DNS: If you didn't assign URL to specified IPs and have DNS served, usually when you send request by typing a URL on browser, the domain name will be send to DNS server on Internet and it will mapping IP adress, and then route you request to destination server. But when you using local DNS service like AWS private zone, your domain name will be sent to local DNS server and it will find IP adress on VPC(your private network on cloud), and directly route your request to zone server. To prevent a request don't have a handleing zone, we can set a root zone like .com or redirect request to another DNS server.",(0,n.kt)("br",{parentName:"li"}),"Below is a tesing local DNS server, it will return local IP adress when you search domain name.\n",(0,n.kt)("img",{alt:"DNS",src:I(6942).Z,width:"3352",height:"1870"}))),(0,n.kt)("h2",{id:"tcp"},"TCP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TCP and UDP have 4-tuple: source ip, destination ip, source port, destination port. While on IP level there's no port."),(0,n.kt)("li",{parentName:"ul"},"Half-close: close only a single direction of the data flow.\n",(0,n.kt)("img",{alt:"TCP",src:I(5987).Z,width:"639",height:"623"}),"  ")),(0,n.kt)("h2",{id:"io-multiplexing"},"I/O Multiplexing"),(0,n.kt)("p",null,"TCP connection is not blocking, actually it's I/O is using Linux Epoll Model.",(0,n.kt)("br",{parentName:"p"}),"\n","If the sever don't response while wating for data, the request is blocking.   "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"I/O Multiplexing",src:I(8005).Z,width:"854",height:"468"}),"\nOn below figure, client is trying to request data, whereas the server send back response to tell client data is not ready yet, and return OK when it's ready. On this case the I/O can be repeatlly called, so it's much more better. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"I/O Multiplexing",src:I(3107).Z,width:"858",height:"468"}),"\nTo better support multi I/O, Epoll use a event poll to handle all request in a queue, and it will put ready data to the ready list which client can take later. This gives TCP ability to handle mulity I/O request, and I think this is also why HTTP2.0 can be realized."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"I/O Multiplexing",src:I(1381).Z,width:"1266",height:"468"}),"\nIf you see fd(file descriptor) list, that's because on Linux everything is a file, and socket is a kind of descriptor link to the entry of file table."),(0,n.kt)("h2",{id:"restful-api"},"Restful API"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"REST is an acronym for Representational State Transfer and an architectural style for distributed hypermedia systems. Below are all legal RestFul API format.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"/devices\n/devices/{id}\n/configurations\n/configurations/{id}\n/devices/{id}/configurations\n/devices/{id}/configurations/{id}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"HTTP GET /devices?startIndex=0&size=20\nHTTP PUT /devices/{id}/configurations\nHTTP DELETE /devices/{id}/configurations/{id}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'<devices size="2">\n    <link rel="self" href="/devices"/>\n    <device id="12345">\n    <link rel="self" href="/devices/12345"/>\n    <id>12345</id>\n    <deviceFamily>apple-es</deviceFamily>\n    <OSVersion>10.0R2.10</OSVersion>\n    <platform>SRX100-LM</platform>\n    <serialNumber>32423457</serialNumber>\n    <name>apple-srx_100_lehar</name>\n    <hostName>apple-srx_100_lehar</hostName>\n    <ipAddr>192.168.21.9</ipAddr>\n    <status>active</status>\n    <configurations size="2">\n        <link rel="self" href="/configurations" />\n        <configuration id="42342">\n            <link rel="self" href="/configurations/42342" />\n        </configuration>\n        <configuration id="675675">\n            <link rel="self" href="/configurations/675675" />\n        </configuration>\n    </configurations>\n    <method href="/devices/12345/exec-rpc" rel="rpc"/>\n    <method href="/devices/12345/synch-config"rel="synch device configuration"/>\n</device>\n    </device>\n    <device id="556677">\n        ...\n    </device>\n</devices>\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Difference between each methods  ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GET(Read): The HTTP GET method is used to read (or retrieve) a representation of a resource. In the \u201chappy\u201d (or non-error) path, GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST). According to the design of the HTTP specification, GET (along with HEAD) requests are used only to read data and not change it.\nDo not expose unsafe operations via GET\u2014it should never modify any resources on the server."),(0,n.kt)("li",{parentName:"ul"},"Put(Update/Replace): PUT method requests for the attached entity (in the request body) to be stored into the server, like PUT /questions/{question-id}. PUT method is idempotent. So if we retry a request multiple times, that should be equivalent to a single request invocation. Use PUT when we want to modify a singular resource that is already a part of resources collection. Though PUT is idempotent, we should not cache its response. Generally, in practice, use PUT for UPDATE operations."),(0,n.kt)("li",{parentName:"ul"},"POST(Create): POST request-URI should be of a collection URI, like POST /questions. POST is NOT idempotent. So if we retry the request N times, we will end up having N resources with N different URIs created on the server. Use POST when you want to add a child resource under resources collection. Responses to this method are not cacheable, unless the response includes appropriate Cache-Control or Expires header fields. Always use POST for CREATE operations."),(0,n.kt)("li",{parentName:"ul"},'DELETE: Meaning defined as "delete the entire collection". On successful deletion, return HTTP status 200 (OK) along with a response body, perhaps the representation of the deleted item (often demands too much bandwidth), or a wrapped response (see Return Values below). Either that or return HTTP status 204 (NO CONTENT) with no response body. In other words, a 204 status with no body, or the JSEND-style response and HTTP status 200 are the recommended responses.'),(0,n.kt)("li",{parentName:"ul"},"PATCH(Update/Modify): PATCH is used for modify capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource. This resembles PUT, but the body contains a set of instructions describing how a resource currently residing on the server should be modified to produce a new version. This means that the PATCH body should not just be a modified part of the resource, but in some kind of patch language like JSON Patch or XML Patch.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Caching",(0,n.kt)("br",{parentName:"li"}),"Caching is the ability to store copies of frequently accessed data in several places along the request-response path. When a consumer requests a resource representation, the request goes through a cache or a series of caches (local cache, proxy cache, or reverse proxy) toward the service hosting the resource. By using HTTP headers, an origin server indicates whether a response can be cached and, if so, by whom, and for how long.",(0,n.kt)("br",{parentName:"li"}),"GET:requests should be cachable by default \u2013 until a special condition arises. Usually, browsers treat all GET requests as cacheable.",(0,n.kt)("br",{parentName:"li"}),"POST:requests are not cacheable by default but can be made cacheable if either an Expires header or a Cache-Control header with a directive, to explicitly allows caching, is added to the response.",(0,n.kt)("br",{parentName:"li"}),"Responses to PUT and DELETE requests are not cacheable at all.",(0,n.kt)("br",{parentName:"li"}),"Please note that HTTP dates are always expressed in GMT, never in local time.",(0,n.kt)("br",{parentName:"li"}),'Note that no-cache does not mean "don\'t cache". no-cache allows caches to store a response but requires them to revalidate it before reuse. If the sense of "don\'t cache" that you want is actually "don\'t store", then no-store is the directive to use.')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Cache-Control: max-age=604800 no-cache no-store\n")))}C.isMDXComponent=!0},2965:function(e,i,I){i.Z=I.p+"assets/images/ARPANET-3d495f93e44c34ba8083c73236a97578.png"},6942:function(e,i,I){i.Z=I.p+"assets/images/dns-ecf15f522084e64858e091d03041a9c7.png"},8005:function(e,i){i.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0xOTEgNjYwIDg1NCA0NjgiIHdpZHRoPSI4NTQiIGhlaWdodD0iNDY4Ij4KICA8ZGVmcz4KICAgIDxtYXJrZXIgb3JpZW50PSJhdXRvIiBvdmVyZmxvdz0idmlzaWJsZSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBpZD0iRmlsbGVkQXJyb3dfTWFya2VyIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHZpZXdCb3g9Ii0xIC00IDggOCIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iOCIgY29sb3I9IiM2NjZhNmIiPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNIDUuNzYgMCBMIDAgLTIuMTYgTCAwIDIuMTYgWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgIDwvbWFya2VyPgogICAgPGZvbnQtZmFjZSBmb250LWZhbWlseT0iQXZlbmlyIiBmb250LXNpemU9IjEzIiBwYW5vc2UtMT0iMiAxMSA1IDMgMiAyIDMgMiAyIDQiIHVuaXRzLXBlci1lbT0iMTAwMCIgdW5kZXJsaW5lLXBvc2l0aW9uPSItNzUiIHVuZGVybGluZS10aGlja25lc3M9IjUwIiBzbG9wZT0iMCIgeC1oZWlnaHQ9IjQ2OCIgY2FwLWhlaWdodD0iNzA4IiBhc2NlbnQ9IjFlMyIgZGVzY2VudD0iLTM2NS45OTczIiBmb250LXdlaWdodD0iNDAwIj4KICAgICAgPGZvbnQtZmFjZS1zcmM+CiAgICAgICAgPGZvbnQtZmFjZS1uYW1lIG5hbWU9IkF2ZW5pci1Sb21hbiIvPgogICAgICA8L2ZvbnQtZmFjZS1zcmM+CiAgICA8L2ZvbnQtZmFjZT4KICAgIDxmb250LWZhY2UgZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBwYW5vc2UtMT0iMiAwIDUgMyAwIDAgMCAyIDAgNCIgdW5pdHMtcGVyLWVtPSIxMDAwIiB1bmRlcmxpbmUtcG9zaXRpb249Ii0xMDAiIHVuZGVybGluZS10aGlja25lc3M9IjUwIiBzbG9wZT0iMCIgeC1oZWlnaHQ9IjUxNyIgY2FwLWhlaWdodD0iNzE0IiBhc2NlbnQ9Ijk1MS45OTU4IiBkZXNjZW50PSItMjEyLjk5NzQ0IiBmb250LXdlaWdodD0iNDAwIj4KICAgICAgPGZvbnQtZmFjZS1zcmM+CiAgICAgICAgPGZvbnQtZmFjZS1uYW1lIG5hbWU9IkhlbHZldGljYU5ldWUiLz4KICAgICAgPC9mb250LWZhY2Utc3JjPgogICAgPC9mb250LWZhY2U+CiAgICA8Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTQiIHVuaXRzLXBlci1lbT0iMTAwMCIgdW5kZXJsaW5lLXBvc2l0aW9uPSItNzUuNjgzNTkiIHVuZGVybGluZS10aGlja25lc3M9IjQ5LjMxNjQwNiIgc2xvcGU9IjAiIHgtaGVpZ2h0PSI1MjIuOTQ5MiIgY2FwLWhlaWdodD0iNzE3LjI4NTE2IiBhc2NlbnQ9Ijc3MC4wMTk1IiBkZXNjZW50PSItMjI5Ljk4MDQ3IiBmb250LXdlaWdodD0iNDAwIj4KICAgICAgPGZvbnQtZmFjZS1zcmM+CiAgICAgICAgPGZvbnQtZmFjZS1uYW1lIG5hbWU9IkhlbHZldGljYSIvPgogICAgICA8L2ZvbnQtZmFjZS1zcmM+CiAgICA8L2ZvbnQtZmFjZT4KICAgIDxtYXJrZXIgb3JpZW50PSJhdXRvIiBvdmVyZmxvdz0idmlzaWJsZSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBpZD0iRmlsbGVkQXJyb3dfTWFya2VyXzIiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgdmlld0JveD0iLTEgLTQgMTAgOCIgbWFya2VyV2lkdGg9IjEwIiBtYXJrZXJIZWlnaHQ9IjgiIGNvbG9yPSJibGFjayI+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0gOCAwIEwgMCAtMyBMIDAgMyBaIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgPC9tYXJrZXI+CiAgPC9kZWZzPgogIDxtZXRhZGF0YT4gUHJvZHVjZWQgYnkgT21uaUdyYWZmbGUgNy4xOC41XG4yMDIyLTA2LTI2IDA3OjAyOjMwICswMDAwPC9tZXRhZGF0YT4KICA8ZyBpZD0iSV9PIiBzdHJva2UtZGFzaGFycmF5PSJub25lIiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiPgogICAgPHRpdGxlPkkvTzwvdGl0bGU+CiAgICA8ZyBpZD0iSV9PX2Jsb2NrIj4KICAgICAgPHRpdGxlPmJsb2NrPC90aXRsZT4KICAgICAgPGcgaWQ9IkxpbmVfMzM2Ij4KICAgICAgICA8dGl0bGU+U3luY2hyb25vdXM8L3RpdGxlPgogICAgICAgIDxsaW5lIHgxPSI3OS42OTc5MiIgeTE9IjczMi41IiB4Mj0iMzI5Ljg3NzkiIHkyPSI3MzIuNSIgbWFya2VyLWVuZD0idXJsKCNGaWxsZWRBcnJvd19NYXJrZXIpIiBzdHJva2U9IiM2NjZhNmIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0iYmV2ZWwiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzMzNSI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc5LjgwMTkyIDcwOS42NzcxKSIgZmlsbD0iIzUxNTU1NiI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkF2ZW5pciIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iIzUxNTU1NiIgeD0iNjM5NDg4NWUtMTkiIHk9IjEzIj5TeXN0ZW0gY2FsbDwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzMzNCI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzg1Ljc5MTkgNzIzLjc3NikiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIuMTc1OTk4NTciIHk9IjE1Ij5ObyBkYXRhIHJlYWR5PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzMzIj4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NDYuMjczOSA4MzguNTc4KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjAiIHk9IjE1Ij5XYWl0IGZvciBkYXRhPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzMyIj4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTUuNDQ3OSA5MTQuMDQ2OSkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIyLjIyNCIgeT0iMTUiPkRhdGEgcmVhZHkgPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzMxIj4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NDYuMjczOSA5NzQuMjYyOSkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIwIiB5PSIxNSI+Q29weSBkYXRhIGZyb208L3RzcGFuPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjAiIHk9IjMzLjQ0OCI+S2VybmVsIHRvIHVzZXI8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iTGluZV8zMzAiPgogICAgICAgIDx0aXRsZT5TeW5jaHJvbm91czwvdGl0bGU+CiAgICAgICAgPGxpbmUgeDE9IjM0NC42OTc5IiB5MT0iMTAyNi44MjI5IiB4Mj0iOTQuNTE3OTIiIHkyPSIxMDI2LjgyMjkiIG1hcmtlci1lbmQ9InVybCgjRmlsbGVkQXJyb3dfTWFya2VyKSIgc3Ryb2tlPSIjNjY2YTZiIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49ImJldmVsIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18zMjkiPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3OS42Nzg0MiAxMDA0KSIgZmlsbD0iIzUxNTU1NiI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkF2ZW5pciIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iIzUxNTU1NiIgeD0iMS44MDciIHk9IjEzIj5SZXR1cm4gT0sgPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzI4Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQuMjM4MDg0IDEwMTguMDk4OSkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSI1LjM0NCIgeT0iMTUiPlByb2Nlc3MgPC90c3Bhbj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIwIiB5PSIzMy40NDgiPmRhdGFncmFtPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzI3Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODAuNzc1OSAxMDE4LjA5ODkpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iMS4wNDAwMDEyIiB5PSIxNSI+Q29weSBjb21wbGV0ZTwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzMyNiI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NS43NDQgODQ1LjYwNCkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIyLjIyNCIgeT0iMTUiPlByb2Nlc3MgYmxvY2tzIGluIDwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iOC43NDQiIHk9IjMzLjQ0OCI+Q2FsbCB0byByZWN2ZnJvbTwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzMyNSI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAxLjEyNTkyIDExMDYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjAiIHk9IjE0Ij5GaWd1cmUgNi4xLiBCbG9ja2luZyBJL08gbW9kZWw8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iTGluZV8zMjIiPgogICAgICAgIDxwYXRoIGQ9Ik0gLTI2LjQwMjA4MiA3MzIuNSBMIC0yNi40MDIwODIgNzMyLjUgQyAtMzEuMzcyNjQ1IDczMi41IC0zNS40MDIwOCA3MzYuNTI5NCAtMzUuNDAyMDggNzQxLjUgTCAtMzUuNDAyMDggODYzLjU0OTEgQyAtMzUuNDAyMDggODY3Ljc0MzMgLTM2LjcyMDY4NCA4NzEuODMxNCAtMzkuMTcxMzk1IDg3NS4yMzUyIEwgLTM5LjkwMjA4IDg3Ni4yNSBDIC00Mi41ODk5NzMgODc5Ljk4MzIgLTQyLjU4OTk3MyA4ODUuMDE2OCAtMzkuOTAyMDggODg4Ljc1IEwgLTM5LjE3MTM5NSA4ODkuNzY0OCBDIC0zNi43MjA2ODQgODkzLjE2ODYgLTM1LjQwMjA4IDg5Ny4yNTY3IC0zNS40MDIwOCA5MDEuNDUwOSBMIC0zNS40MDIwOCAxMDIzLjUgQyAtMzUuNDAyMDggMTAyOC40NzA2IC0zMS4zNzI2NDUgMTAzMi41IC0yNi40MDIwODIgMTAzMi41IEwgLTI2LjQwMjA4MiAxMDMyLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzIxIj4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAuMTU4MDgyIDY2NSkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSI0MjYzMjU2NGUtMjEiIHk9IjE1Ij5BcHBsaWNhdGlvbjwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzMyMCI+CiAgICAgICAgPHBhdGggZD0iTSA1MjMuMjczOSA3MzAuNSBMIDUyMy4yNzM5IDczMC41IEMgNTI4LjI0NDUgNzMwLjUgNTMyLjI3MzkgNzM0LjUyOTQgNTMyLjI3MzkgNzM5LjUgTCA1MzIuMjczOSA4MTYuMDMzOSBDIDUzMi4yNzM5IDgxOS45NDM5IDUzMy45MDQ4NiA4MjMuNjc2OCA1MzYuNzczOSA4MjYuMzMzMyBMIDUzNi43NzM5IDgyNi4zMzMzIEMgNTM5LjA3NTEgODI4LjQ2NDEgNTM5LjIxMzMgODMyLjA1NjggNTM3LjA4MjU2IDgzNC4zNTggQyA1MzYuOTgzNyA4MzQuNDY0OCA1MzYuODgwNyA4MzQuNTY3OCA1MzYuNzczOSA4MzQuNjY2NyBMIDUzNi43NzM5IDgzNC42NjY3IEMgNTMzLjkwNDg2IDgzNy4zMjMyIDUzMi4yNzM5IDg0MS4wNTYxIDUzMi4yNzM5IDg0NC45NjYxIEwgNTMyLjI3MzkgOTIxLjUgQyA1MzIuMjczOSA5MjYuNDcwNiA1MjguMjQ0NSA5MzAuNSA1MjMuMjczOSA5MzAuNSBMIDUyMy4yNzM5IDkzMC41IiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzMxOSI+CiAgICAgICAgPHBhdGggZD0iTSA1MjMuMjczOSA5NDIuNzEwOSBMIDUyMy4yNzM5IDk0Mi43MTA5IEMgNTI4LjI0NDUgOTQyLjcxMDkgNTMyLjI3MzkgOTQ2Ljc0MDMgNTMyLjI3MzkgOTUxLjcxMDkgTCA1MzIuMjczOSA5ODMuNTg1MyBDIDUzMi4yNzM5IDk4Ni42MDkgNTM0LjAzMDEgOTg5LjM1NzIgNTM2Ljc3MzkgOTkwLjYyNzUgTCA1MzYuNzczOSA5OTAuNjI3NSBDIDUzNy45MjQ1IDk5MS4xNjAyIDUzOC40MjU0IDk5Mi41MjQ4IDUzNy44OTI3NSA5OTMuNjc1NCBDIDUzNy42NjQxNiA5OTQuMTY5MSA1MzcuMjY3NjYgOTk0LjU2NTYgNTM2Ljc3MzkgOTk0Ljc5NDIgTCA1MzYuNzczOSA5OTQuNzk0MiBDIDUzNC4wMzAxIDk5Ni4wNjQ1IDUzMi4yNzM5IDk5OC44MTI4IDUzMi4yNzM5IDEwMDEuODM2NCBMIDUzMi4yNzM5IDEwMzMuNzEwOSBDIDUzMi4yNzM5IDEwMzguNjgxNCA1MjguMjQ0NSAxMDQyLjcxMDkgNTIzLjI3MzkgMTA0Mi43MTA5IEwgNTIzLjI3MzkgMTA0Mi43MTA5IiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzMxOCI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDEzLjUzNTkgNjY1KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjAiIHk9IjE1Ij5LZXJuZWw8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18zMTciPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4MC45Mjc5IDk0Mi40OTQ5KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjAiIHk9IjE1Ij5Db3B5IGRhdGFncmFtPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzE2Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUuMzc0MDgyIDcyMy43NzYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iMi4xMzgiIHk9IjE1Ij5SZWN2ZnJvbTwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzMwMyI+CiAgICAgICAgPGxpbmUgeDE9IjQzNi40OTU5IiB5MT0iOTY1Ljk0MjkiIHgyPSI0MzYuNDk1OSIgeTI9IjEwMDMuMTk4OSIgbWFya2VyLWVuZD0idXJsKCNGaWxsZWRBcnJvd19NYXJrZXJfMikiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkxpbmVfMzM3Ij4KICAgICAgICA8bGluZSB4MT0iNDM2LjQ5NTkiIHkxPSI3NDcuMjI0IiB4Mj0iNDM2LjQ5NTkiIHkyPSI4OTkuMTQ2OSIgbWFya2VyLWVuZD0idXJsKCNGaWxsZWRBcnJvd19NYXJrZXJfMikiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="},3107:function(e,i,I){i.Z=I.p+"assets/images/io2-8c5f2b4c90c2b0f9c22d796b98e617d8.svg"},1381:function(e,i,I){i.Z=I.p+"assets/images/io3-af4cda34943c6ceb46db2cb354cd747d.svg"},3801:function(e,i,I){i.Z=I.p+"assets/images/osi-501132d8caacbbaaf2a125a12d95234b.png"},5987:function(e,i,I){i.Z=I.p+"assets/images/tcp-863abdbf366ec12c8bcab8bcdcce699a.svg"}}]);