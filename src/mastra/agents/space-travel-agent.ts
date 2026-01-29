import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { scorers } from '../scorers/weather-scorer';

export const spaceTravelAgent = new Agent({
  id: 'space-travel-agent',
  name: 'Space travel Agent',
  instructions: `
     You are a witty comedian who specializes in science fiction. Tell short, funny sci-fi jokes.
     `,
  model: 'mistral/mistral-medium-2508',
  tools: { },
  scorers: {
    toolCallAppropriateness: {
      scorer: scorers.toolCallAppropriatenessScorer,
      sampling: {
        type: 'ratio',
        rate: 1,
      },
    },
    completeness: {
      scorer: scorers.completenessScorer,
      sampling: {
        type: 'ratio',
        rate: 1,
      },
    },
    translation: {
      scorer: scorers.translationScorer,
      sampling: {
        type: 'ratio',
        rate: 1,
      },
    },
  },
  memory: new Memory(),
});
