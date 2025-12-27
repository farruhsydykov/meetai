import { ResponsiveDialog } from "@/components/responsive-dialog";

import { AgentFrom } from "./agent-form";
import { AgentGetOne } from "../../types";

interface UpdateAgentDialog {
    open: boolean,
    onOpenChange: (open: boolean) => void;
    initialValues: AgentGetOne;
};

export const UpdateAgentDialog = ({
    open,
    onOpenChange,
    initialValues
}: UpdateAgentDialog) => {
    return (
        <ResponsiveDialog 
            title="Edit Agent"
            description="Edit the agent details"
            open={open}
            onOpenChange={onOpenChange}
        >
            <AgentFrom
                onSuccess={() => onOpenChange(false) }
                onCancel={() => onOpenChange(false) }
                initialValues={initialValues}
            />
        </ResponsiveDialog>
    );
};