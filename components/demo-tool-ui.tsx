"use client"

import { makeAssistantToolUI } from "@assistant-ui/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export const DemoToolUI = makeAssistantToolUI<
  Record<string, any>,
  {}
>({
  toolName: "demo_tool",
  render: () => {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Card className="w-[380px] shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded-full" />
              <span>Demo Tool Card</span>
            </CardTitle>
            <CardDescription>
              This is a beautiful placeholder tool card using shadcn/ui components.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-6 w-3/4 mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button variant="outline" disabled>
              Cancel
            </Button>
            <Button disabled>
              Action
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  },
})
