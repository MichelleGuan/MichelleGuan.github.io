# MichelleGuan.github.io

This website is built using [Docusaurus 2](https://docusaurus.io/)

Master branch is auto generated through yarn deploy command, the souce code is on Dev branch.

And I added my-friends-blog plugin extend on official tweet(TS) and customized theming/homepage/sidebar/nav, you can take them if you need.

By the way, Docusaurus has built-in support for MDX v1, which allows you to write JSX within your Markdown files and render them as React components, so if you are also confused about the markdown functionalities or find out your HTML not working here, treat it as react render menthod, import your package in it, and use JSX syntax.   
```js
$ npm install --save react-tex
import {Tex} from 'react-tex';
```
```html
<Tex texContent={latex}/>
<div contentEditable='true' dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/cWDJoK8zw58' />" }}></div>
![Image](./images/AWS-01.png)<p style={{textAlign:'center'}}>_Figure 3.7 Kernel data structures for open files_</p>
<div style={{textAlign:'center'}}><img src={require('./images/pipline.png').default} /></div>
```