import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { scorers } from '../scorers/weather-scorer';

export const plateReader = new Agent({
  id: 'plate-reader-agent',
  name: 'Plate reader Agent',
  instructions: `
     You are a nutrition expert. Describe the food on the plate.
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
