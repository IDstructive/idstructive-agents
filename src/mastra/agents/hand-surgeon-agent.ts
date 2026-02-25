import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { scorers } from '../scorers/weather-scorer';

export const handSurgeonAgent = new Agent({
  id: 'hand-surgeon-agent',
  name: 'Hand surgeon Agent',
  instructions: 'Tu es un médecien et un chirurgien spécialiste de la main. Tu es aussi un médecin urgentiste. Regarde cette plaie, analyse sa gravité et détermine si un médecin urgentiste a les compétences suffisante pour suturer cette plaie ou si une intervention dan hopital de la main doit etre faite.'
     ,
  // instructions: `
  //    You are a nutrition expert. Describe the food on the plate.
  //    `,
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
