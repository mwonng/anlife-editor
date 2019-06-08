export default
`/*默认样式，最佳实践*/

/*全局属性*/
.layout {
  font-size: 16px;
  color: black;
  padding: 10px;
  line-height: 1.6;
  word-spacing: 0px;
  letter-spacing: 0px;
  word-wrap: break-word;
  font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  word-break:break-all;
}

/*段落*/
p {
  font-family: Avenir, "PingFangSC-Light" !important;
  font-size: 15px !important;
  color: #232B2D;
  line-height: 1.8em !important;
  margin: 0.5em 1em;
        padding: 0.5em 1em;
  text-align: justify;
}

/*标题*/

pre {
  overflow-x: auto;
}
pre code {
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  border-radius: 0px;
  font-size: 12px;
  padding: 2px;
}
pre code span {
  line-height: 26px;
}

/*行内代码*/
p code, li code{
  font-size: 14px;
  word-wrap: break-word;
  padding: 2px 4px;
  border-radius: 4px;
  margin: 0 2px;
  background-color: rgba(27,31,35,.05);
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  word-break: break-all;
}

/* 微信代码块 */
.code-snippet__fix {
  word-wrap: break-word !important;
  ont-size: 14px;
  margin: 10px 0;
  display: block;
  color: #333;
  position: relative;
  background-color: rgba(0,0,0,0.03);
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  display: flex;
  line-height: 20px;
  font-size: 12px;
}
.code-snippet__fix .code-snippet__line-index {
  counter-reset: line;
  flex-shrink: 0;
  height: 100%;
  padding: 1em;
  list-style-type: none;
  margin: 0;
}
.code-snippet__fix .code-snippet__line-index li {
  list-style-type: none;
  text-align: right;
}
.code-snippet__fix .code-snippet__line-index li::before {
  min-width: 1.5em;
  text-align: right;
  left: -2.5em;
  counter-increment: line;
  content: counter(line);
  display: inline;
  color: rgba(0,0,0,0.3);
}
.code-snippet__fix pre {
  overflow-x: auto;
  padding: 1em;
  padding-left: 1em;
  padding-left: 0;
  white-space: normal;
  flex: 1;
  -webkit-overflow-scrolling: touch;
}
.code-snippet__fix code {
  text-align: left;
  font-size: 14px;
  display: block;
  white-space: pre;
  display: flex;
  position: relative;
  font-family: Consolas,"Liberation Mono",Menlo,Courier,monospace;
  background: rgba(0,0,0,0);
  font-size: 12px;
}
.code-snippet__fix code span {
  line-height: 20px;
}
.code-snippet__fix ol li {
  margin: 0;
  padding: 2px;
  line-height: 20px;
}


p {
  margin: 0 0 1.2em 0 !important;
}
table, pre, dl, blockquote, q, ul, ol {
  margin: 1.2em 0;
}
ul, ol {
  padding-left: 2em;
}
li {
  margin: 0.5em 0;
}

li p {
  margin: 0.5em 0 !important;
}
ul ul, ul ol, ol ul, ol ol {
  margin: 0;
  padding-left: 1em;
}
ol ol, ul ol {
  list-style-type: lower-roman;
}
ul ul ol, ul ol ol, ol ul ol, ol ol ol {
  list-style-type: lower-alpha;
}
dl {
  padding: 0;
}
dl dt {
  font-size: 1em;
  font-weight: bold;
  font-style: italic;
}
dl dd {
  margin: 0 0 1em;
  padding: 0 1em;
}
blockquote, q  {
  border-left: 3px solid #777777;
  background-color: #FAFAFA;
  padding: 0em 1em;
  margin: 0em 1em;
  color: #777777;
  quotes: none;
}
blockquote::before, blockquote::after, q::before, q::after {
  content: none;
}
h1, h2, h3, h4, h5, h6 {
  margin: 1.3em 0 1em;
  padding: 0;
  font-weight: bold;
}

h1 {
  font-size: 1.6em;
  border-bottom: 1px solid #ddd;
}

h2   {
  padding: 0 1em;
  margin: 1em .5em;
  font-size: 1.3em;
  text-align: center;
  color: #FFD150;
  border-bottom: 1px solid #DDDDDD;
}
h3 {
  padding: 0 1em;
  margin: 1em;
  font-size: 1.3em;
  color: #9999FF;
  text-align: center;
  border-bottom: 1px solid #DDDDDD;
}
h4 {
  font-size: 1.2em;
}
h5 {
  font-size: 1em;
}
h6 {
  font-size: 1em;
  color: #777;
}
table {
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1em;
  font: inherit;
  border: 0;
}
tbody {
  margin: 0;
  padding: 0;
  border: 0;
}
table tr {
  border: 0;
  border-top: 1px solid #CCC;
  background-color: white;
  margin: 0;
  padding: 0;
}
table tr:nth-child(2n) {
  background-color: #F8F8F8;
}
table tr th, table tr td {
  font-size: 1em;
  border: 1px solid #CCC;
  margin: 0;
  padding: 0.5em 1em;
}
table tr th {
 font-weight: bold;
  background-color: #F0F0F0;
}
strong {
  color: #333333;
  font-weight: bold;
}

`
