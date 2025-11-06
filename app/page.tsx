"use client";

import DemoToolUI from "@/components/demo-tool-ui";
import { args, result } from "@/lib/demo-tool-props";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import {
  AssistantChatTransport,
  useChatRuntime,
} from "@assistant-ui/react-ai-sdk";

export default function Home() {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api: "/api/chat",
    }),
  });
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <DemoToolUI.unstable_tool.render
        type="tool-call"
        toolCallId="test"
        toolName="demo_tool"
        args={args}
        argsText={JSON.stringify(args)}
        result={result}
        status={{ type: "complete" }}
        addResult={() => {}}
        resume={() => {}}
      />
    </AssistantRuntimeProvider>
  );
}
