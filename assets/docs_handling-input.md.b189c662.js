import{_ as e,c as a,o as n,a as s}from"./app.f12dbf00.js";const g='{"title":"Handling Input","description":"","frontmatter":{},"headers":[{"level":2,"title":"Hammerstone","slug":"hammerstone"},{"level":2,"title":"Adding your action to the KeyMap","slug":"adding-your-action-to-the-keymap"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"Example","slug":"example"},{"level":2,"title":"Listening to your Action","slug":"listening-to-your-action"}],"relativePath":"docs/handling-input.md","lastUpdated":1655776475000}',t={name:"docs/handling-input.md"},o=s(`<h1 id="handling-input" tabindex="-1">Handling Input <a class="header-anchor" href="#handling-input" aria-hidden="true">#</a></h1><p>Input handling is the ability to listen and react to key strikes, mouse movements, and other physical-input.</p><h2 id="hammerstone" tabindex="-1">Hammerstone <a class="header-anchor" href="#hammerstone" aria-hidden="true">#</a></h2><p>Hammerstone API contains an input handling wrapper, <a href="https://github.com/SirLich/hammerstone-framework/blob/master/scripts/hammerstone/input/inputManager.lua" target="_blank" rel="noopener noreferrer">which you can find here.</a></p><h2 id="adding-your-action-to-the-keymap" tabindex="-1">Adding your action to the KeyMap <a class="header-anchor" href="#adding-your-action-to-the-keymap" aria-hidden="true">#</a></h2><p>The first step is overwriting <code>scripts/mainThread/keyBinding.lua</code>. I think it&#39;s also possible to add bindings from other files, but I think there may be an ordering dependency here, so I suggest overwriting in-place.</p><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>There is a mod-exposed api:</p><ul><li><code>keyMapping</code></li><li><code>doubleMapping</code></li><li><code>addGroup</code></li><li><code>addMapping</code></li></ul><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><p>Here is a sample code, which adds a custom keybinding:</p><div class="language-lua"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mod</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">onload</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keyMapping</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	keyMapping.</span><span style="color:#82AAFF;">addMapping</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">game</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">testBinding</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, keyMapping.keyCodes.f5, </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span></code></pre></div><h2 id="listening-to-your-action" tabindex="-1">Listening to your Action <a class="header-anchor" href="#listening-to-your-action" aria-hidden="true">#</a></h2><p>The next step is actually listening to your action. This can be done using</p>`,14),i=[o];function l(p,r,d,c,h,u){return n(),a("div",null,i)}var m=e(t,[["render",l]]);export{g as __pageData,m as default};