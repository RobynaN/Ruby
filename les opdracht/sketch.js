





/* Transformers: Prime-inspired Soundwave skin */
body {
  background: #080d18 !important;
  color: #d7e6f2 !important;
  font-family: "Arial Narrow", Arial, sans-serif;
  background-image: linear-gradient(rgba(57, 216, 255, .035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(57, 216, 255, .035) 1px, transparent 1px) !important;
  background-size: 24px 24px !important;
}

a,
a:visited {
  color: #39d8ff !important;
}

a:hover {
  color: #ffcf33 !important;
}

#header,
.header,
.module,
.work.meta,
.comment {
  background: #111c2d !important;
  border: 1px solid #31506b !important;
  box-shadow: 0 0 12px rgba(0, 199, 255, .16), inset 0 0 0 1px #182c43;
}

#header,
.header {
  background: linear-gradient(135deg, #0b1322 0%, #172c46 55%, #101629 100%) !important;
  border-bottom: 4px solid #39d8ff !important;
  position: relative;
  overflow: hidden;
}

#header:after,
.header:after {
  content: "TRANSFORMERS: PRIME // SOUNDWAVE // SUPERIOR";
  display: block;
  color: rgba(57, 216, 255, .5);
  font-size: .7em;
  letter-spacing: .25em;
  text-align: right;
  padding: 4px 12px;
  border-top: 1px solid rgba(57, 216, 255, .3);
  background: repeating-linear-gradient(90deg, transparent 0 8px, rgba(57, 216, 255, .08) 9px 10px);
}

h1, h2, h3, h4,
.heading {
  color: #ffcf33 !important;
  letter-spacing: .08em;
  text-transform: uppercase;
  text-shadow: 0 0 8px rgba(255, 207, 51, .35);
}

button,
input[type="submit"],
.button,
.actions a {
  background: #253b57 !important;
  color: #39d8ff !important;
  border: 1px solid #39d8ff !important;
  border-radius: 2px !important;
  text-transform: uppercase;
  box-shadow: 0 0 7px rgba(57, 216, 255, .25);
}

button:hover,
input[type="submit"]:hover,
.button:hover,
.actions a:hover {
  background: #39d8ff !important;
  color: #080d18 !important;
}

.tag,
.characters .tag,
.freeforms .tag {
  background: #182b43 !important;
  color: #39d8ff !important;
  border: 1px solid #39d8ff !important;
  border-radius: 2px !important;
  box-shadow: inset 0 0 0 1px rgba(57, 216, 255, .08), 0 0 5px rgba(57, 216, 255, .12);
}

nav a,
.navigation a,
.pagination a {
  color: #082034 !important;
  text-transform: uppercase;
  letter-spacing: .08em;
}

nav a:hover,
.navigation a:hover,
.pagination a:hover {
  color: #ffcf33 !important;
  text-shadow: 0 0 6px rgba(255, 207, 51, .6);
}

blockquote,
.note,
.notice {
  background: #0d1727 !important;
  border-left: 4px solid #ffcf33 !important;
  color: #b9d0df !important;
}

::-webkit-scrollbar {
  width: 10px;
  background: #080d18;
}

::-webkit-scrollbar-thumb {
  background: #31506b;
  border: 2px solid #080d18;
}

::-webkit-scrollbar-thumb:hover {
  background: #39d8ff;
}

hr {
  border-color: #31506b !important;
}

::selection {
  background: #39d8ff;
  color: #080d18;
}

/* Transformers: Prime details: dark Cybertronian console styling */
body:before {
  content: "DECEPTICON // TRANSFORMERS: PRIME // COMMUNICATIONS OFFICER";
  display: block;
  padding: 6px 14px;
  background: #050912;
  border-bottom: 1px solid #31506b;
  color: rgba(57, 216, 255, .65);
  font-size: .68em;
  letter-spacing: .22em;
  text-align: center;
  text-shadow: 0 0 6px rgba(57, 216, 255, .7);
}

.work.meta,
.comment,
.module {
  position: relative;
}

.work.meta:before,
.comment:before,
.module:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 3px;
  background: #ffcf33;
  box-shadow: 42px 0 #39d8ff, 84px 0 #ffcf33;
}

.userstuff,
.comment div,
.summary {
  line-height: 1.6;
}

code,
pre {
  background: #050912 !important;
  color: #39d8ff !important;
  border: 1px solid #31506b;
  box-shadow: inset 0 0 14px rgba(0, 0, 0, .45);
}

/* Cassette-deck accent for media and work thumbnails */
img,
.icon {
  border-color: #31506b !important;
  filter: saturate(.8) contrast(1.08);
}

img:hover,
.icon:hover {
  filter: saturate(1.25) contrast(1.1);
  box-shadow: 0 0 10px rgba(57, 216, 255, .45);
}

/* Transformers: Prime / Soundwave skin overrides */
:root {
  --soundwave-blue: #39d8ff;
  --soundwave-yellow: #ffcf33;
  --cybertron-black: #050912;
  --cybertron-panel: #111c2d;
}

body {
  background-color: var(--cybertron-black) !important;
  background-image: linear-gradient(rgba(57,216,255,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(57,216,255,.04) 1px, transparent 1px) !important;
  background-size: 24px 24px !important;
  color: #043761 !important;
  font-family: "Arial Narrow", Arial, sans-serif !important;
}

a, a:visited { color: var(--soundwave-blue) !important; }
a:hover { color: var(--soundwave-yellow) !important; }

#header {
  background: linear-gradient(135deg, #08101d, #172d47 55%, #0b1220) !important;
  border-bottom: 4px solid var(--soundwave-blue) !important;
}

#header h1.heading a,
#header h1.heading a:visited {
  color: var(--soundwave-blue) !important;
  font-family: "Arial Narrow", Arial, sans-serif;
  letter-spacing: .2em;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(57,216,255,.8);
}

#header h1.heading a::before {
  content: "SOUNDWAVE";
  display: inline;
  width: auto;
  height: auto;
  background: none;
}

#header .menu,
#header .primary,
#greeting .menu,
#outer,
#main,
.wrapper,
.listbox,
.module,
.comment,
li.blurb,
.work.meta {
  background-color: var(--cybertron-panel) !important;
  background-image: none !important;
  border-color: #31506b !important;
  box-shadow: 0 0 12px rgba(0,199,255,.16), inset 0 0 0 1px #182c43 !important;
}

#header .menu a,
#header .menu li a,
#footer a,
#footer li,
#footer .heading {
  color: var(--soundwave-blue) !important;
}

h1, h2, h3, h4, .heading {
  color: var(--soundwave-yellow) !important;
  letter-spacing: .08em;
  text-transform: uppercase;
  text-shadow: 0 0 8px rgba(255,207,51,.35);
}

button,
input[type="submit"],
.actions a,
.actions button,
.actions input {
  background: #253b57 !important;
  color: var(--soundwave-blue) !important;
  border: 1px solid var(--soundwave-blue) !important;
  border-radius: 2px !important;
  text-transform: uppercase;
}

button:hover,
input[type="submit"]:hover,
.actions a:hover,
.actions button:hover,
.actions input:hover {
  background: var(--soundwave-blue) !important;
  color: var(--cybertron-black) !important;
}

.tag,
.characters .tag,
.relationships .tag,
.freeforms .tag {
  background: #182b43 !important;
  color: var(--soundwave-blue) !important;
  border: 1px solid var(--soundwave-blue) !important;
  border-radius: 2px !important;
}

blockquote,
.notice,
.comment_notice,
.kudos_notice {
  background: #0d1727 !important;
  border-left: 4px solid var(--soundwave-yellow) !important;
  color: #b9d0df !important;
}

hr { border-color: #31506b !important; }
::selection { background: var(--soundwave-blue); color: var(--cybertron-black); }

/* Keep every text element white; reserve Soundwave colors for the UI surfaces. */
body,
a,
a:visited,
a:hover,
#header h1.heading a,
#header h1.heading a:visited,
#header .menu a,
#header .menu li a,
#footer a,
#footer li,
#footer .heading,
h1, h2, h3, h4, .heading,
button,
input,
textarea,
select,
.button,
.actions a,
.actions button,
.actions input,
.tag,
.characters .tag,
.relationships .tag,
.freeforms .tag,
blockquote,
.note,
.notice,
.comment_notice,
.kudos_notice,
code,
pre {
  color: #fff !important;
}

body:before,
#header:after,
.header:after {
  color: #fff !important;
}

::selection {
  background: var(--soundwave-blue);
  color: #fff !important;
}

/* Replace remaining light surfaces with dark grey while keeping text white. */
#outer,
#main,
.wrapper,
.listbox,
.module,
.comment,
.comment div,
.comment form,
.work.meta,
li.blurb,
textarea,
input,
select,
option,
.userstuff {
  background-color: #161616 !important;
  background-image: none !important;
  color: #fff !important;
}

.comment a,
.comment p,
.comment label,
.comment span,
.comment div,
.work.meta,
.work.meta a,
.module,
.module a,
textarea,
input,
select,
option {
  color: #fff !important;
}