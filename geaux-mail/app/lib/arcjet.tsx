<span class="k">import</span> <span class="nx">arcjet</span><span class="p">,</span> <span class="p">{</span>
  <span class="nx">shield</span><span class="p">,</span>
  <span class="nx">detectBot</span><span class="p">,</span>
  <span class="nx">fixedWindow</span><span class="p">,</span>
  <span class="nx">validateEmail</span><span class="p">,</span>
<span class="p">}</span> <span class="k">from</span> <span class="dl">"</span><span class="s2">@arcjet/next</span><span class="dl">"</span><span class="p">;</span>

<span class="k">export</span> <span class="k">default</span> <span class="nf">arcjet</span><span class="p">({</span>
  <span class="na">key</span><span class="p">:</span> <span class="nx">process</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">ARCJET_KEY</span><span class="o">!</span><span class="p">,</span>
  <span class="na">rules</span><span class="p">:</span> <span class="p">[</span>
    <span class="nf">shield</span><span class="p">({</span> <span class="na">mode</span><span class="p">:</span> <span class="dl">"</span><span class="s2">LIVE</span><span class="dl">"</span> <span class="p">}),</span>
    <span class="nf">detectBot</span><span class="p">({</span>
      <span class="na">mode</span><span class="p">:</span> <span class="dl">"</span><span class="s2">LIVE</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">allow</span><span class="p">:</span> <span class="p">[],</span>
    <span class="p">}),</span>
    <span class="nf">fixedWindow</span><span class="p">({</span>
      <span class="na">mode</span><span class="p">:</span> <span class="dl">"</span><span class="s2">LIVE</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">match</span><span class="p">:</span> <span class="dl">"</span><span class="s2">/api/submit</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">window</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2m</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">max</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
    <span class="p">}),</span>
    <span class="nf">validateEmail</span><span class="p">({</span>
      <span class="na">mode</span><span class="p">:</span> <span class="dl">"</span><span class="s2">LIVE</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">block</span><span class="p">:</span> <span class="p">[</span><span class="dl">"</span><span class="s2">DISPOSABLE</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">INVALID</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">NO_MX_RECORDS</span><span class="dl">"</span><span class="p">],</span>
    <span class="p">}),</span>
  <span class="p">],</span>
<span class="p">});</span>
