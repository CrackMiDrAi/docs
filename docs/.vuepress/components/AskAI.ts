import { computed, defineComponent, h } from 'vue';
import type { VNode } from 'vue';

const ScriptLink = 'https://registry.npmmirror.com/page-agent/latest/files/dist/iife/page-agent.demo.js';

const Icon = (
  `<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" style="vertical-align:middle">
    <path fill="currentColor" d="M16.15 13.05L14 16.5q-.275.425-.762.35t-.613-.575l-.7-2.8L5.1 20.3q-.275.275-.687.288T3.7 20.3q-.275-.275-.275-.7t.275-.7l6.825-6.85l-2.8-.7q-.5-.125-.575-.612t.35-.763l3.45-2.125l-.3-4.075q-.05-.5.4-.725t.825.1L15 5.775l3.775-1.525q.475-.2.825.15t.15.825L18.225 9l2.625 3.1q.325.375.1.825t-.725.4zm-12.8-6.7Q3.2 6.2 3.2 6t.15-.35l1.3-1.3Q4.8 4.2 5 4.2t.35.15l1.3 1.3q.15.15.15.35t-.15.35l-1.3 1.3Q5.2 7.8 5 7.8t-.35-.15zm14.3 14.3l-1.3-1.3q-.15-.15-.15-.35t.15-.35l1.3-1.3q.15-.15.35-.15t.35.15l1.3 1.3q.15.15.15.35t-.15.35l-1.3 1.3q-.15.15-.35.15t-.35-.15"/>
  </svg>`
);

const attachPageAgent = () => {
  const oldScriptDom = document.querySelector<HTMLScriptElement>('script#page-agent');
  if (oldScriptDom)
    document.body.removeChild(oldScriptDom);

  const scriptDom = document.createElement('script');

  scriptDom.src = ScriptLink;
  scriptDom.crossOrigin = 'true';
  scriptDom.id = 'page-agent';

  document.body.appendChild(scriptDom);
};

export default defineComponent({
  name: 'AskAI',

  setup() {
    return (): VNode =>
      h(
        'div',
        { class: 'vp-nav-item vp-action' },
        h('a', {
          class: 'vp-action-link',
          'aria-label': '询问 AI',
          title: '询问 AI',
          href: 'javascript:false;',
          innerHTML: Icon,
          onClick: attachPageAgent
        }),
      );
  },
});
