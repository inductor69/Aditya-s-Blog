import { css } from 'styled-components'
import theme from '@styles/theme'
import media from '@styles/media'
import 'prism-material-themes/themes/material-default.css';

const { fonts } = theme

const PrismStyles = css`
  code[class*='language-'],
  pre[class*='language-'] {
    text-align: left;
    max-height: 75vh;
    white-space: pre-wrap;
    line-height: 1.7;
    -moz-tab-size: 2;
    tab-size: 2;
    hyphens: none;
    font-family: ${fonts.JetBrainsMono};
    font-size: 16px;
    font-weight: 700;
    overflow-x: auto !important;
    border-radius: 0;
    line-height: 1.7;
    overflow-x: auto !important;
    ${media.phablet`
    font-size: 12px;
  `};
  }
  /* Code blocks */
  pre[class*="language-"] {
	padding: 2em;
	margin: 0.5em 0;
	overflow: auto;
  }
  
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
	background: #292d3e;
  }
  
  :not(pre) > code[class*="language-"] {
	padding: 0.1em;
	white-space: normal;
  }
  
  .token.script.language-javascript {
	color: #a6accd;
  }
  
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
	color: #676e95;
  }
  
  .token.attr-name,
  .token.namespace,
  .token.deleted {
	color: #bb80b3;
  }
  
  .token.function,
  .token.function-name {
	color: #82aaff;
  }
  
  .token.unit,
  .token.url,
  .token.boolean,
  .token.number {
	color: #f78c6c;
  }
  
  .token.color,
  .token.hexcode,
  .token.builtin,
  .token.property,
  .token.class,
  .token.class-name,
  .token.constant,
  .token.symbol {
	color: #ffcb6b;
  }
  
  .token.id,
  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword {
	color: #c792ea;
  }
  
  .token.pseudo-class,
  .token.pseudo-element,
  .token.inserted,
  .token.attribute,
  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
	color: #c3e88d;
  }
  
  .token.punctuation,
  .token.operator,
  .token.entity,
  .token.url {
	color: #89ddff;
  }
  
  .token.tag {
	color: #f07178;
  }
  
  .token.parameter,
  .token.deleted {
	color: #ff5370;
  }
  
  .token.important,
  .token.bold {
	font-weight: bold;
  }
  
  .token.italic {
	font-style: italic;
  }
  
  .token.entity {
	cursor: help;
  }
`

export default PrismStyles
