"use client"

import Script from "next/script"

export function AssistLoopWidget() {
  return (
    <Script
      src="https://assistloop.ai/assistloop-widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        (window as any).AssistLoopWidget?.init({
          agentId: process.env.NEXT_PUBLIC_ASSISTLOOP_AGENT_ID,
        })
      }}
    />
  )
}
