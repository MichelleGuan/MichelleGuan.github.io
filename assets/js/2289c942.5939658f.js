"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9550],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=o,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5073:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={sidebar_position:1},l="Front End Part",c={unversionedId:"ProjectReview/front-end",id:"ProjectReview/front-end",title:"Front End Part",description:"Technology Stack",source:"@site/docs/ProjectReview/front-end.md",sourceDirName:"ProjectReview",slug:"/ProjectReview/front-end",permalink:"/docs/ProjectReview/front-end",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Project Review",permalink:"/docs/category/project-review"},next:{title:"CMS Part",permalink:"/docs/ProjectReview/cms"}},d={},u=[{value:"Technology Stack",id:"technology-stack",level:3},{value:"Features",id:"features",level:3},{value:"Package",id:"package",level:3},{value:"Routing",id:"routing",level:3},{value:"Internationalization",id:"internationalization",level:3},{value:"Theming",id:"theming",level:3},{value:"Security",id:"security",level:3},{value:"Data Flow",id:"data-flow",level:3},{value:"Unit testing",id:"unit-testing",level:3}],h={toc:u};function p(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"front-end-part"},"Front End Part"),(0,i.kt)("h3",{id:"technology-stack"},"Technology Stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The old Front-end project is based on handlebar.js and mariontte.js, which simplifies Backbone application code with robust views and architecture solutions including router. Then we add react as mariontte child view, and build all new features with react/redux. And on next-stage FE project which was also on development, we use react and rxjs. Both project choose flow.js as static type checker, and sass as css extension, we also use storybook, webpack, highchart.js. On old project we use foundation based sass library doing cutomized abstract varibles and mixins, and we have diferrent theming."),(0,i.kt)("li",{parentName:"ul"},"After dalian team take over, we build a react form widgets using formik, provide components including selectBox, checkBox, inpt, button, radio, textArea and so on. And all components are wrapped with HOC to provide error handling and validation services. We also create a react wrapper service base on marionette, using bundle-loader to load moudules and chart depenedencies, and onAttach() call react render method to createFactory as entry view and onDestoty() call react dom unmountComponentAtNode, so all new react components can be managed in react-adapter and easy to migrate to new project."),(0,i.kt)("li",{parentName:"ul"},"Personaly, I also did some common react hooks like useDebouce, useOnClickOutside, useOnKeyPress and so on. And added some common methods including mobile/ touch-device check, local storage expiry method, env chacker, URL env formatter etc.\n",(0,i.kt)("img",{parentName:"li",src:"https://github.com/MichelleGuan/Blog/blob/main/images/useOnClickOustside.png",alt:"Image"}),(0,i.kt)("img",{parentName:"li",src:"https://github.com/MichelleGuan/Blog/blob/main/images/setURL.png",alt:"Image"})),(0,i.kt)("li",{parentName:"ul"},"To integrate React with Marionette, it's fine to use react as child UI view no matter use react wrapper service or showChildView() on a certain dom. But when you put Marionette view on React view's children, it won't be attached at all only initalized, due to react is a virtual dom framework. There are few work arounds I found, you can listening react dom change on marionette init, and manually render view, or passing $el through wrapper marionette view and use marionette methods there. ")),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Below are some features I did during my last job",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","A sticky footer comopent can be set to any article pages through CMS, all widgets inside are configurable, including title, text, image, check box, button, collapsed/expended color and expire time, and on mobile/PC we load different settings if any. Each sticky footer can be set to several pages, and they share same local storage."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","A fund search plugin can be set to all sites homepage or article page through CMS. It returns scrollable fund result list after user input setting digital charactors, FE will do caching, fields matching and ilegal char filtering. And it has a sticky column on the bottom of list, leads to fund listing page carries search param, this is read through each site's config and on some sites like HK can be multiple. "),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","I build up a FE base user authority system, including show different flags on article listing and detail pages by checking user type and article type, for example, a professional user will see lock tag articles on listing page before he login, and a privite user will see pro tag articles. And a login popup triggered whenever user try to access lock content on listing page, for private user, the authentication popup will shown first. And we have notification shown to remind user we have more content, or when user enter a URL that don't match the authority, they will get specific notification like 'this is for institutional user only you have to change your role'. The technological difficulty is we have many user type and article type, they can be combined and contained, the system need to handle each condition to certain behaviour. And this feature have to be written in marrionette to compatible with old part while also support react part."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Refactor authentication overlay, this overlay need to be controlled by each countries config files which include forced part like close on legal policy page, or soft part like close on history wall page through regular expressions. The overlay also need to be controlled by CMS team, they want to have highest control priority, so when article request done we need to handle it, for certian URL patterns like campaign we also need specific behaviour. And it can be triggered on all pages, no matter it's react view or marionette view, and trigger behaviour should not been impacted by config or CMS. We create a overlay checker and use marionette Radio.channel on routing to bind overlay behaviour so react view can pass $el and call through router file."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," "," I also did a calculator for HK to input diffrent calculate logic like saving and investing, and change the form column, validator, error handling simply with a config file through the react form widgets we build, this component can be re-use on many calculate features since it's all decoupled. And Channel switcher for all sites, user can jump to other sites and re-choose their user roles through authentication overlay. And a seperate PDF UI generator, which read table and text config, to generte fund info table for FB/FS, this is called by AWS lambda functions. Also I did all FE  job for Middle East site launch, setting it's own sitemap, article and fund pages and enhance the fund listing config feature. Last but not least, on the first year, I join code-a-thod compitation and wrote an environmental protection visualization project using D3.js, three.js and won the prize."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," "," Besides I invovled in widgets/ framework deveopment, enhance unit testing with hooks, sinon, optimize project performance. Doing some django CMS development job including support editorial project python/django development. Writing many documents on conflunce, giving technical solutions to engagement managers. (On django CMS project, I replace gulp with webpack, intergrate company sass library and create new project from Divio cloud, and did some componet development)")))),(0,i.kt)("h3",{id:"package"},"Package"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We use UglifyJS to minify code, as it removes whitespace and unnecessary characters within a file to make it smaller and thus, load faster. It also provide options to remove unreachable code and reduce variables/property characters. However Uglify will not auto obfuscate your code, it has mangle options and you need to manually set it, also remember to close warning and sorceMap on Prod.  "),(0,i.kt)("li",{parentName:"ul"},"For versions,  DefinePlugin replaces variables in code with other values or expressions at compile time, so we add it at the bottom of plugins to replace versionHash, env options and path. And we change output chunkFileName to include versionHash, which will update chunk name each time we deploy for version management and avoid cache-control issue(default will be no-cache and return 304 Not Modified when assets name don't change ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"},"See more: http caching"),").  "),(0,i.kt)("li",{parentName:"ul"},"On devServer, we can set allowed hosts and headers (control access methods like get post put delete, origin and headers like x-requested-with, content-type). And we can set proxy for api and static request, direct them to target server and use bypass to config certain url.   "),(0,i.kt)("li",{parentName:"ul"},"Before webpack V4 we used CommonsChunkPlugin, chunks (and modules imported inside them) were connected by a parent-child relationship in the internal webpack graph. The CommonsChunkPlugin was used to avoid duplicated dependencies across them. Common chunked file can be loaded once initially, and stored in cache for later use.  Now we have optimization.splitChunks, Webpack will automatically split chunks if it's shared or too large, and provide severel options including which chunk to optimize, minChunk, chacheGroups and so on.    "),(0,i.kt)("li",{parentName:"ul"},"We use webpack-split-by-path to split chunk, we don't use webpack auto split since we have some dynamic dependency, we require some JS file manually. Webpack-split-by-path will package all path array files to named chunk, and it starts from the top, files will only been packaged once, so we can package base chunk at the bottom, and the index.js will only load a small scale base chunk.",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("a",{parentName:"li",href:"https://webpack.js.org/guides/code-splitting/"},"See more: Webpack official code-splitting"),(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("a",{parentName:"li",href:"https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758"},"See more: The 100% correct way to split your chunks with Webpack"),"  "),(0,i.kt)("li",{parentName:"ul"},"Besides, we use bundle analyzer to analyze each chunk's size and try to split large ones. And use copyWebpackPlugin to move images/font folder to build path(Starting in version 3.0.0, copyWebpackPlugin stopped using filesystem to copy files and depending on webpack's in-memory fs, when use webpack-dev-server, you need to force it with the write-file-webpack-plugin.) And we need license-webpack-plugin to outputs licenses from 3rd party libraries to a file, this can also be used to filter certain license type like MIT. LoaderOptionsPlugin is added to set minimize and debug options base on env."),(0,i.kt)("li",{parentName:"ul"},"For small scale projects, like PDF UI generator, we can direcly use Create React App, it will auto config a react application with all react dependencies, scss support, eslint/prettier and even unit testing driven by Jest. When you run create-react-app it goto node.js file tasks/cra.js, which use fs, path and child_process to add customized packages into packageJson, and then it will call create-react-app/index.js that only checks your node version and init createReactApp.js.  They use semver to check package version(format legal check, themplate version supprt check and compare to latest), write seperate logic for yarn, run default or customized template, then use node comand to install all packages.  However there are many disadvantages, especially you can't use webpack.config.js, you have to use libraries like customize-cra or react-app-rewired which have limited capabilities to change build settings.  I did write config-overrides.js to change build path since I need to seperate package for header and footer, the syntax is different with webpack and they don't provide a nice doc. So don't use CRA when you need to custom build config.\n",(0,i.kt)("img",{parentName:"li",src:"https://github.com/MichelleGuan/Blog/blob/main/images/createReactApp.png",alt:"Image"}))),(0,i.kt)("h3",{id:"routing"},"Routing"),(0,i.kt)("p",null,"We use marionette route on old project and use react route on next-stage."),(0,i.kt)("h3",{id:"internationalization"},"Internationalization"),(0,i.kt)("p",null,"On old project, we load certain terms and config after get countryCode and language through start.js, which comes from URL, and use moments to do time Internationalization. Whereas on pure react app, we can simply use react-intl."),(0,i.kt)("h3",{id:"theming"},"Theming"),(0,i.kt)("p",null,"We did theming trough a dramatizing way. We add comments(//##include-theme##) on scss code, for variables like breakpoints, which based on country, we will build all country's variables in and genetate to different country's scss code in one file. So we can then use the certain counrty's scss code start with it's class.  "),(0,i.kt)("h3",{id:"security"},"Security"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We didn't use restful API, and currently there's only 200 code on old project, all error messsages will include in success message. This is mainly cause by the secure concern, since if we provide detailed error message on error code including 500/403, the attacker might infer our file stucture or find security holes. But from my option, we can just give a cutomized not found page, which already exist, no matter the error code, and follow restful API."),(0,i.kt)("li",{parentName:"ul"},"We did add human identification to avoide dos attack, and doing encryption for user info(HTTPs itself only encrypt public key). For CSRF, we use tocken solution, on all reset operations we will add csrf tocken for few incoming instruct through Ajax setup (we can also add set-cookie:same site, or check origin/refer header, or double check the cookie). Also on server side we have white list."),(0,i.kt)("li",{parentName:"ul"},"For cookieXSS, which attacker might include JS files though cookie, we can simply set cookie to HTTPs only, and block Javascript access cookie. For HTTP man-in-the-middle attack, we did have a VPN on company level, multi-factor authentication also works."),(0,i.kt)("li",{parentName:"ul"},"Besides, all input length should be limited and FE should check the input type and validity before send it to BE. Also we should limit URL length on cloud level, and avoide store sensitive message on FE, expecially on cookie storage, since it is send to BE each request.")),(0,i.kt)("h3",{id:"data-flow"},"Data Flow"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On our project, front-end did many data proceccing work, we handle sitemap and articles, and for some sites, we even use two different sitemaps depeneds on user roles. For fund data, front-end recieve all fund data array on listing page and all certain fund infos on detail pages, thus we have data proxys and services to sort and process data to structures we can render. This is due to the limitations of back-end design since it's a really old project, but the good thing is, when you doing fund search or article filter, it can be super fast, since they are all memorized on cache after first request. On all new writtern components data layer and UI layer are seperated, so we can directly migrate UI part to new project."),(0,i.kt)("li",{parentName:"ul"},"The original project use redux on complex react component like chart compare, and we use saga to handle asynchronous state. I don't think redux is the best state management library for react, although it can gurentee the predictable of state. Redux is not good at manage asynchronous state and we have to include saga or thunk for that, if you only want to manage synchronize state cross components, contextAPI and hooks are way more enough. On top of that, Redux is an in-memory state store, so if application crashes, you will lose entire application state, which means that you have to use a caching solution to create a backup of your application state, which again creates extra overhead. By the way, react is an unidirection data flow framework, so for single souce data component we don't need to do state management.  "),(0,i.kt)("li",{parentName:"ul"},"On next-state project we use Rxjs, and maybe Redux-Observable which is a redux solution based on Rxjs in the future. RxJS is a library composing asynchronous and event-based programs using observable sequences. It provides Observable, satellite types (Observer, Schedulers, Subjects) and operators (map, filter, reduce, every, etc) to allow handling asynchronous events as collections. On backbone.js we have event on and trigger, but it's more like a syntactic sugar for eventListener, if you need to trigger a callback after several asynchronous states ready, you still need to use setInterval or requestAnimationFrame or doing counts after each trigger. Rxjs just packing them, and allow you to handle event as collections while providing many powerful methods. Moreover, it's easy to do unit testing with TestScheduler, you only need to check whether states in collections are what you expected, other async things are all handled by frameworks, otherwise you will need to write unit testing for event listener, setInterval or requestAnimationFrame.\n",(0,i.kt)("a",{parentName:"li",href:"https://www.toptal.com/react-native/react-redux-rxjs-tutorial"},"See more: Building Reactive Apps with Redux, RxJS, and Redux-Observable in React Native"))),(0,i.kt)("h3",{id:"unit-testing"},"Unit testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We using Karma(execute JavaScript code in multiple real browsers using istanbul), mocha, chai and react test library. The reason we don't choose Jest, is to support marionette/backbone."),(0,i.kt)("li",{parentName:"ul"},"Usually we only need to use expect and assert to check result, describe testing functions and use 'it' for each conditions. To test UI, we render react with @testing-library/react, and use beforeEach/ afterEach hooks to create testing dom, which will run on each condition. Inside chai.js expect() method, we can write all dom operartions, even syntax not supported by chai.js. We also use snapshot to track UI changes. Persionally I don't like chai, since it even not support Map, Set or WeakMap, and we have to do work around."),(0,i.kt)("li",{parentName:"ul"},"We can use renderHook that has three return values: result, rerender, unmount, to test react customized hooks. However rerender can't been called after unmount, and it don't contain any destory method, so I have to test some conditions on components use this hook."),(0,i.kt)("li",{parentName:"ul"},"Also we have sinon to check if a callback is trigged, and fireEvent to mock most events. If you want to test a result after few mimutes, you can create Promise contains setTimeOut and use async await.")))}p.isMDXComponent=!0}}]);