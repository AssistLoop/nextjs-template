# Next.js AssistLoop Template

A Next.js starter template for building AI-powered customer support with AssistLoop agents.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAssistLoop%2Fnextjs-template&env=NEXT_PUBLIC_ASSISTLOOP_AGENT_ID&envDescription=Agent%20ID%20from%20AssistLoop%20dashboard&integration-ids=oac_JcDufklR2a4mGqWCzSOB1klc&products=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22assistloop%22%2C%22productSlug%22%3A%22assistloop%22%2C%22protocol%22%3A%22ai%22%7D%5D)

## AssistLoop AI Integration

This template comes pre-configured with AssistLoop integration. Here's how to set it up:

### 1. Create AssistLoop Account

Visit [AssistLoop.ai](https://assistloop.ai) to create your account and set up your first AI agent.

### 2. Get Your Agent ID

1. Log into your AssistLoop dashboard
2. Create a new agent or select an existing one
3. Navigate to **Settings** > **Integration**
4. Copy your Agent ID

### 3. Configure Environment Variables

You need 1 environment variable: `NEXT_PUBLIC_ASSISTLOOP_AGENT_ID`

Pull environment variables from Vercel:

```bash
vercel env pull .env.local
```

Or create `.env.local` manually:

```env
NEXT_PUBLIC_ASSISTLOOP_AGENT_ID=your_agent_id_here
```

### 4. Train Your AI Agent

- **Upload Documentation** – Add your docs, FAQs, and knowledge base articles
- **Import Website Content** – Crawl your website to train on existing content
- **Connect Chat History** – Use past conversations to improve responses
- **Define Custom Actions** – Set up lead collection, meeting booking, and task automation

## Features

| Feature | Description |
|---------|-------------|
| **Train on Your Data** | Docs, FAQs, website content, and chat history |
| **Human Handoff** | Smooth escalation to live agents when needed |
| **Custom AI Actions** | Collect leads, book meetings, automate tasks |
| **Analytics & History** | Review conversations and track performance |
| **Brand Customization** | Match the chat widget to your brand |
| **Multiple AI Models** | Choose from different LLM providers |

## AssistLoop Resources

- [Documentation](https://assistloop.ai/docs/integrations/vercel) – Complete Vercel integration guide
- [Pricing](https://assistloop.ai/pricing) – Plans and pricing information

## Tech Stack

- [Next.js 15](https://nextjs.org) – React framework


## License

MIT
