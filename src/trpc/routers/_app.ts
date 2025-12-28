import { agentsRouter } from '@/modules/agents/server/procedures';
import { meetingsRoutuer } from '@/modules/meetings/server/procedures';

import { createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: meetingsRoutuer
});
// export type definition of API
export type AppRouter = typeof appRouter;