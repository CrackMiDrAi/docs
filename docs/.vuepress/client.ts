import { defineClientConfig } from 'vuepress/client';
import AskAI from './components/AskAI';

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component('AskAI', AskAI);
  },
});
