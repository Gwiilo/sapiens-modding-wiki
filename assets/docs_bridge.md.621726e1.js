import{_ as e,c as a,o,a as t}from"./app.dce89229.js";const g='{"title":"Bridge","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"}],"relativePath":"docs/bridge.md","lastUpdated":1654549993000}',i={name:"docs/bridge.md"},d=t('<h1 id="bridge" tabindex="-1">Bridge <a class="header-anchor" href="#bridge" aria-hidden="true">#</a></h1><p>In Sapiens, many lua classes contain a method called <code>setBridge</code> that take a <code>bridge</code> parameter. This parameter directly maps to a C++ class inside of the games source code. Every bridge parameter is also unique: No two lua scripts are initialized with the same bridge object.</p><p>Because every <code>bridge</code> parameter is called <code>bridge</code>, and points to C++ code, there isn&#39;t any good way of knowing which methods or attributes are available. You should check out the lua source for the class you are using, and look for the methods and attributes you need.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><p>For example in <code>server.lua</code> you can find <code>function server:setBridge(bridge_)</code>.</p><p>This bridge maps to a &quot;server&quot; C++ class, which contains various methods, including:</p><ul><li><code>bridge:callClientFunction</code></li><li><code>bridge:callClientFunctionForAllClients</code></li><li><code>bridge:getSpawnPos</code></li><li>...</li></ul>',7),r=[d];function s(c,l,n,h,p,u){return o(),a("div",null,r)}var m=e(i,[["render",s]]);export{g as __pageData,m as default};
