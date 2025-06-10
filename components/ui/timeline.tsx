"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<HTMLOListElement, React.HTMLAttributes<HTMLOListElement>>(
  ({ className, ...props }, ref) => <ol ref={ref} className={cn("relative", className)} {...props} />,
)
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn("relative", className)} {...props} />,
)
TimelineItem.displayName = "TimelineItem"

const TimelineConnector = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("absolute left-3 top-3 h-full w-px bg-border", className)} {...props} />
  ),
)
TimelineConnector.displayName = "TimelineConnector"

const TimelineDot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background",
        className,
      )}
      {...props}
    />
  ),
)
TimelineDot.displayName = "TimelineDot"

const TimelineContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("ml-10 pb-8", className)} {...props} />,
)
TimelineContent.displayName = "TimelineContent"

export { Timeline, TimelineItem, TimelineConnector, TimelineDot, TimelineContent }
