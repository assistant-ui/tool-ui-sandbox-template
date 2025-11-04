"use client"

import { DemoToolUI } from "@/components/demo-tool-ui";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { AssistantChatTransport, useChatRuntime } from "@assistant-ui/react-ai-sdk";


export default function Home() {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api: "/api/chat",
    }),
  });
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <DemoToolUI.unstable_tool.render />
    </AssistantRuntimeProvider>
  )
  // return <Assistant />;
}
