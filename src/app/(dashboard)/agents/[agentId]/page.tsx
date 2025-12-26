import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";

import {
    AgentIdView,
    AgentsIdViewError,
    AgentsIdViewLoading
} from "@/modules/agents/ui/views/agent-id-view";

interface Props {
    params: Promise<{ agentId: string }>
}

const Page = async ({ params }: Props) => {
    const { agentId } = await params;

    const queryCLient = getQueryClient();
    void queryCLient.prefetchQuery(
        trpc.agents.getOne.queryOptions({ id: agentId })
    );

    return (
        <HydrationBoundary state={dehydrate(queryCLient)}>
            <Suspense fallback={<AgentsIdViewLoading />}>
                <ErrorBoundary fallback={<AgentsIdViewError />}>
                    <AgentIdView agentId={agentId}/>
                </ErrorBoundary>
            </Suspense>
        </HydrationBoundary>
        
    );
}

export default Page;