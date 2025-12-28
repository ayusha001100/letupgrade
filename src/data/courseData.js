export const courseData = [
    {
        id: 1,
        title: "Week 1: Foundations of LLMs",
        overview: "Introduction to LLMs for Non-Tech Pros",
        modules: [
            {
                id: "1.1",
                name: "Introduction to LLMs for Non-Tech Pros",
                topic: "Foundations of LLMs",
                subtopic: "What LLMs are and how they work",
                details: [
                    {
                        id: "1.1.1",
                        title: "What is an LLM (high-level view)",
                        concepts: "**LLM = Large Language Model**\n\n- **\"Large\"** → huge amount of text\n- **\"Language\"** → works only with text\n- **\"Model\"** → predicts the next word\n\nLLMs don’t understand, they predict.",
                        examples: "- AI email writing\n- AI rewriting WhatsApp messages\n- AI making resumes sound professional",
                        visualization: "- “Super-powered auto-complete” animation\n- Next-word prediction chain\n- Input → LLM → Output flow",
                        practical: "- **HR**: emails, job descriptions\n- **Students**: summaries, assignments\n- **Founders**: investor messages\n- **Lawyers**: first-draft legal text"
                    },
                    {
                        id: "1.1.2",
                        title: "Training data & patterns (no math, just intuition)",
                        concepts: "AI learns **patterns** from text, not facts. It doesn’t store the internet.\n\n- **Pattern learning**: tone, grammar, style, structure",
                        examples: "- How AI writes like Shakespeare if trained on Shakespeare\n- How AI can mimic formal vs casual tone\n- Pattern example: “Due to ___, your appointment is ___”",
                        visualization: "- “Cloud of text → pattern extraction” diagram\n- Heatmap of common word pairings\n- Pattern-matching puzzle analogy",
                        practical: "- Rewrite tone\n- Summarize complex documents\n- Generate structured formats (bullet points, emails, reports)"
                    },
                    {
                        id: "1.1.3",
                        title: "Tokens & context window (why long inputs matter)",
                        concepts: "- **Tokens** = pieces of words\n- **Context window** = AI’s “short-term memory”\n- Why long PDFs confuse AI\n- Why instructions at the top matter",
                        examples: "- “International” → “Inter” + “national”\n- Feeding a 50-page PDF → AI forgets early parts\n- ChatGPT forgetting what you said 20 messages ago",
                        visualization: "- Token meter filling up\n- Context window box showing memory limit\n- “Sliding window” concept showing how older info gets pushed out",
                        practical: "- Divide long prompts\n- Put key instructions at the top\n- Ask AI to summarize **BEFORE** asking tasks\n- Upload docs in chunks"
                    },
                    {
                        id: "1.1.4",
                        title: "Why LLMs feel “smart” but still make mistakes",
                        concepts: "- **Fluency** ≠ intelligence\n- **Prediction** ≠ understanding\n- AI does not verify truth\n- Why it answers confidently even when wrong",
                        examples: "- AI explaining a fake concept confidently\n- Incorrect math answers said with confidence\n- Wrong assumptions because the prompt was vague",
                        visualization: "- “Language Fluency vs Knowledge Accuracy” graph\n- Two funnels: Prediction vs Understanding\n- Confidence dial showing “high confidence, wrong answer”",
                        practical: "- Always review AI output\n- Ask AI to list uncertainties\n- Use verification prompts (“show your reasoning”)\n- Compare answers with trusted sources"
                    },
                    {
                        id: "1.1.5",
                        title: "Hallucinations: what they are, how to spot them",
                        concepts: "- **Hallucination** = incorrect but confident output\n- Happens when AI fills gaps with invented info\n- Not a bug — a natural prediction behavior",
                        examples: "- Fake citations\n- Wrong names, dates, prices\n- AI inventing policy details when unsure",
                        visualization: "- “Prediction jumps” animation\n- Gaps in knowledge → AI fills them\n- Warning sign overlay (“Looks real, but isn’t”)",
                        practical: "- Ask AI: “Are you sure? Show evidence.”\n- Ask: “Quote the source.”\n- Use retrieval-based methods (RAG, document uploads)\n- Teach students to cross-check anything factual"
                    }
                ],
                quiz: [
                    { question: "What does the 'L' in LLM stand for?", options: ["Large", "Linear", "Logical", "Local"], answer: 0 },
                    { question: "What is the main task an LLM performs?", options: ["Saving files", "Predicting the next word", "Calculating complex math", "Browsing the web"], answer: 1 },
                    { question: "What are 'tokens'?", options: ["Digital coins", "Pieces of words", "Security keys", "AI avatars"], answer: 1 },
                    { question: "A 'hallucination' refers to when an AI:", options: ["Crashes", "Runs out of memory", "Provides a confident but incorrect answer", "Answers too slowly"], answer: 2 },
                    { question: "The 'context window' determines the AI's:", options: ["Screen size", "Short-term memory limit", "Internet connection speed", "Number of specialized roles"], answer: 1 }
                ]
            },
            {
                id: "1.2",
                name: "Where LLMs Fit in Your Workday",
                topic: "Practical Use-Cases",
                subtopic: "AI strengths vs limitations",
                details: [
                    {
                        id: "1.2.1",
                        title: "Types of tasks AI is good at",
                        concepts: "AI does not fix unclear instructions — it **amplifies** them. If the prompt is vague, missing details, or contradictory → output becomes low-quality. LLMs rely heavily on **clarity + specificity**.",
                        examples: "- **Prompt**: “Write a report.” → Too vague → poor output.\n- **Prompt**: “Explain this simply to a 12-year-old about climate change in 3 bullet points.” → Clear → good output.",
                        visualization: "- Two-sided diagram titled “Garbage In vs Quality In”\n- Left: Cloudy, messy prompt → messy output\n- Right: Structured prompt → clear output",
                        practical: "- Use prompt checklists before sending to AI.\n- Improve productivity by reducing AI rework."
                    },
                    {
                        id: "1.2.2",
                        title: "Examples by function",
                        concepts: "The **“5-Part Prompt Formula”**: Role, Context, Task, Constraints, Output Format. This turns vague instructions into reliable, repeatable results.",
                        examples: "- **Role**: “You are an HR writing expert.”\n- **Context**: “We are hiring a marketing intern in India.”\n- **Task**: “Write a JD.”\n- **Constraints**: “Keep it under 150 words; beginner-friendly.”\n- **Output Format**: “Bullet points only.”",
                        visualization: "- A 5-layer cake model\n- Side-by-side comparison: “Normal prompt vs Structured prompt”",
                        practical: "- Create templates for HR, Sales, Ops, Founders, Students.\n- Helps reduce AI hallucination by adding context."
                    },
                    {
                        id: "1.2.3",
                        title: "Identifying repeatable tasks",
                        concepts: "LLMs perform best when the output format is **explicitly defined**. Structured outputs improve readability and reduce errors.",
                        examples: "- **Unstructured**: “Explain benefits of remote work.”\n- **Structured**: “Explain benefits of remote work in a table with columns: Benefit | Impact | Who It Helps.”",
                        visualization: "- Icons representing Table, Bullets, Checklist",
                        practical: "- HR: interview scorecards\n- Sales: product comparison sheets\n- Ops: SOP checklists"
                    }
                ],
                quiz: [
                    { question: "What is the 'amplification' effect of LLMs?", options: ["They make text louder", "They amplify the clarity or confusion of prompts", "They increase the file size", "They make computer fans run faster"], answer: 1 },
                    { question: "Which is a part of the '5-Part Prompt Formula'?", options: ["Color", "Price", "Role", "Speed"], answer: 2 },
                    { question: "Why should you use structured outputs like tables?", options: ["They use less power", "They look pretty", "They improve readability and reduce errors", "They are easier for AI to draw"], answer: 2 },
                    { question: "When is AI most reliable?", options: ["Predicting the future", "Restructuring existing data", "Giving non-reviewed medical advice", "Solving unsolved math problems"], answer: 1 },
                    { question: "The 'Task' part of a prompt should be:", options: ["Vague", "Implicit", "Explicit and clear", "Hidden"], answer: 2 }
                ]
            },
            {
                id: "1.3",
                name: "Prompting Fundamentals – Structure",
                topic: "Prompt Design Basics",
                subtopic: "Prompt components & structure",
                details: [
                    {
                        id: "1.3.1",
                        title: "Why “garbage in → garbage out” in prompts",
                        concepts: "AI does not guess your intention — it uses what you give it. Vague input → vague output. AI **amplifies** your clarity and your confusion.",
                        examples: "❌ **Bad**: “Make this better.”\n✅ **Better**: “Rewrite the following paragraph to sound more confident and concise, in 4 bullet points.”",
                        visualization: "Funnel: Input (Prompt) → AI Processing → Output Quality",
                        practical: "Clarify audience, tone, and purpose before writing."
                    },
                    {
                        id: "1.3.2",
                        title: "Core structure: Role + Context + Task + Constraints + Output format",
                        concepts: "**The 5-Part Prompt Formula:**\n- **Role** → Who should AI act as\n- **Context** → Background information\n- **Task** → What you want\n- **Constraints** → Rules/Length\n- **Output Format** → Bullets, table, etc.",
                        examples: "**Role**: HR expert\n**Context**: Hiring intern in India\n**Task**: Write JD\n**Constraints**: < 120 words\n**Output Format**: Bullets",
                        visualization: "A 5-layer stack of requirements",
                        practical: "HR: JDs, Sales: Proposals, Founders: updates."
                    },
                    {
                        id: "1.3.3",
                        title: "Giving background & examples to reduce mistakes",
                        concepts: "AI performs best when you specify exact output formatting. Examples help the AI understand the **style** you want.",
                        examples: "✅ **Structured**: “List top 6 benefits of remote work in a table: Benefit | Impact | Who it helps.”",
                        visualization: "Side-by-side: Paragraph vs Table",
                        practical: "Interview scorecards, product comparison tables."
                    },
                    {
                        id: "1.3.4",
                        title: "Asking for structured outputs",
                        concepts: "AI performs best when format is defined. Structure reduces **fluff + hallucinations**.",
                        examples: "- **Checklist**: “Create an onboarding checklist with 8 steps.”\n- **Table**: “Compare ChatGPT, Gemini, Claude.”",
                        visualization: "Before vs after format comparison icons",
                        practical: "SOP checklists, Decision frameworks."
                    }
                ],
                quiz: [
                    { question: "What happens with 'Garbage In' prompts?", options: ["The AI fixes them", "You get 'Garbage Out'", "The AI asks for more money", "The AI learns from your mistakes"], answer: 1 },
                    { question: "In the 5-Part Formula, 'Constraints' refers to:", options: ["The AI's hardware limits", "Rules or length requirements", "Your internet speed", "The number of users"], answer: 1 },
                    { question: "Why give background information (Context)?", options: ["To use more tokens", "To slow down the AI", "To help the AI provide more relevant results", "To test the AI's memory"], answer: 2 },
                    { question: "Specifying an 'Output Format' (e.g., JSON, Bullets) helps with:", options: ["System security", "Reducing fluff and hallucinations", "Saving battery life", "Making the AI feel smarter"], answer: 1 },
                    { question: "Which role is most likely to use a prompt for 'interview scorecards'?", options: ["Sales", "Engineering", "HR", "Founders"], answer: 2 }
                ]
            },
            {
                id: "1.4",
                name: "Prompting Fundamentals – Techniques",
                topic: "Advanced Prompting",
                subtopic: "Iteration & reasoning techniques",
                details: [
                    {
                        id: "1.4.1",
                        title: "Single-shot vs few-shot prompting",
                        concepts: "**Single-shot** = One instruction. **Few-shot** = Provide examples. More examples = More accurate, consistent output.",
                        examples: "Few-shot: “Rewrite texts in a friendly tone. Example 1: ... Example 2: ... Now rewrite this: ...”",
                        visualization: "Examples → Pattern recognized → Better output",
                        practical: "Marketing: Tone-matching past campaigns."
                    },
                    {
                        id: "1.4.2",
                        title: "Iterative prompting: refine instead of restart",
                        concepts: "AI improves through **refinement**, not restarting. Treat AI like a writer going through drafts.",
                        examples: "“Rewrite to be clearer.” → “Give me 3 shorter versions.” → “Combine version 1 intro with version 3 tone.”",
                        visualization: "Draft 1 → Draft 2 → Draft 3 → Final Staircase",
                        practical: "Build reports through gradual refinement."
                    },
                    {
                        id: "1.4.3",
                        title: "Asking LLM to think in steps (breakdown, reasoning)",
                        concepts: "LLMs perform better when forced to reason **step-by-step**. Asking for breakdown helps eliminate mistakes.",
                        examples: "“Break this problem into 5 steps.”\n“Explain your reasoning before giving the final answer.”",
                        visualization: "Flowchart: Big problem → small steps → solution",
                        practical: "Students: breaking assignments; Ops: creating SOPs."
                    },
                    {
                        id: "1.4.4",
                        title: "Using AI as critic/editor vs creator",
                        concepts: "AI can be used in two modes: **Critic** (find issues) and **Editor** (rewrite). Review first, then rewrite.",
                        examples: "**Critic**: “What’s wrong with this email?”\n**Editor**: “Rewrite this to be more concise.”",
                        visualization: "Split screen: Review mode vs Rewrite mode",
                        practical: "HR: refine policies; Founders: polish updates."
                    }
                ],
                quiz: [
                    { question: "What is 'Few-shot' prompting?", options: ["Giving no examples", "Giving a few examples of desired output", "Asking 5 questions at once", "Restarting the prompt 3 times"], answer: 1 },
                    { question: "Iterative prompting means:", options: ["Giving up if the first try fails", "Refining the result through follow-up prompts", "Only using one prompt per day", "Using multiple AI models at once"], answer: 1 },
                    { question: "Why ask an LLM to 'think step-by-step'?", options: ["To make it work harder", "To improve reasoning and accuracy", "To use more data", "To lengthen the response"], answer: 1 },
                    { question: "Using AI as a 'Critic' means asking it to:", options: ["Write a new story", "Find issues or improvements in existing text", "Design a logo", "Browse the news"], answer: 1 },
                    { question: "What is a 'Single-shot' prompt?", options: ["A prompt with one example", "A prompt with no examples", "A prompt that ends quickly", "A very long prompt"], answer: 1 }
                ]
            },
            {
                id: "1.5",
                name: "Using Different Models at Work",
                topic: "Tool Awareness",
                subtopic: "Model comparison & settings",
                details: [
                    {
                        id: "1.5.1",
                        title: "Overview of major tools (ChatGPT, Gemini, Claude)",
                        concepts: "- **ChatGPT**: Productivity, reasoning.\n- **Gemini**: Multi-modal (text+image+video), research.\n- **Claude**: Long context, safe, great with documents.",
                        examples: "ChatGPT for SOPs, Gemini for YouTube summaries, Claude for 150-page PDFs.",
                        visualization: "Comparison table: Strengths, weaknesses, use cases.",
                        practical: "Pick the right tool for the specific job."
                    },
                    {
                        id: "1.5.2",
                        title: "When to use which",
                        concepts: "Correct model choice depends on document length, multimodality, and need for accuracy.",
                        examples: "Large PDFs → Claude. Analyzing images → Gemini. Team collab → ChatGPT Enterprise.",
                        visualization: "Flowchart: Task → Recommended Model",
                        practical: "Founders speed up research; Students choose right tool for assignments."
                    },
                    {
                        id: "1.5.3",
                        title: "Basic settings: temperature, system instructions",
                        concepts: "- **Temperature**: Low (accurate) vs High (creative).\n- **System Instructions**: Set AI personality/rules.",
                        examples: "Temp 0.1: “Summarize accurately.”\nTemp 0.8: “Write a creative story.”",
                        visualization: "Temperature slider graphic.",
                        practical: "Marketing teams control tone across campaigns."
                    },
                    {
                        id: "1.5.4",
                        title: "Data privacy & safety",
                        concepts: "**Never paste sensitive data!** Public AI tools may store inputs for training.",
                        examples: "Don't paste customer lists, financials, or login details. Use anonymized data.",
                        visualization: "Do/Don't chart with Red Lock icon.",
                        practical: "Prevent accidental data leaks."
                    }
                ],
                quiz: [
                    { question: "Which model is known for having a very long 'context window'?", options: ["ChatGPT 3.5", "Claude", "Gemini 1.0", "Llama 2"], answer: 1 },
                    { question: "What does 'Temperature' control in AI settings?", options: ["CPU heat", "The balance between accuracy and creativity", "The speed of response", "The font size"], answer: 1 },
                    { question: "A 'Temperature' of 0.1 is best for:", options: ["Poetry", "Accurate summarization", "Brainstorming", "Roleplay"], answer: 1 },
                    { question: "Why should you avoid pasting sensitive data into public AI tools?", options: ["It's too slow", "Data may be stored for training", "It uses too many tokens", "The AI might steal your money"], answer: 1 },
                    { question: "Which tool is best for multi-modal research according to the content?", options: ["Claude", "Gemini", "ChatGPT", "Notion AI"], answer: 1 }
                ]
            },
            {
                id: "1.6",
                name: "Building Your Personal AI Copilot System",
                topic: "System Design",
                subtopic: "Personal workflow automation",
                details: [
                    {
                        id: "1.6.1",
                        title: "Mapping your weekly tasks",
                        concepts: "Identify tasks that repeat weekly for highest ROI. AI helps with emails, reports, summaries.",
                        examples: "Monday status updates, meeting summaries, converting notes to clear action items.",
                        visualization: "Table: Task → AI Use Case → Time Saved",
                        practical: "HR: write weekly hiring reports."
                    },
                    {
                        id: "1.6.2",
                        title: "Designing 2–3 “prompt systems”",
                        concepts: "Prompt systems = reusable templates. They save time and create consistency.",
                        examples: "Email System: “Rewrite to be polite/concise.” Analysis System: “Extract 5 insights.”",
                        visualization: "Input → Process Prompt → Output Format Blueprint",
                        practical: "Ops: SOP creation system."
                    },
                    {
                        id: "1.6.3",
                        title: "Creating a simple personal prompt library",
                        concepts: "A prompt library helps you store best prompts so you don’t rewrite them (Notion/Sheet).",
                        examples: "| Category | Name | Prompt | Output |\n| --- | --- | --- | --- |",
                        visualization: "Mockup of a categorized Notion table.",
                        practical: "Saves 60–90 minutes per week."
                    },
                    {
                        id: "1.6.4",
                        title: "Review checklist",
                        concepts: "Verify AI output before use. Humans provide: accuracy, context, judgment.",
                        examples: "Checklist: Accuracy, Tone, Missing info, Formatting.",
                        visualization: "Checklist graphic (✓ Accuracy, ✓ Tone).",
                        practical: "Founders checking financial statements."
                    }
                ],
                quiz: [
                    { question: "What are 'Prompt Systems'?", options: ["The computer's OS", "Reusable templates for consistent results", "The AI's internal neurons", "The login screen"], answer: 1 },
                    { question: "Where is a good place to create a 'Prompt Library'?", options: ["In a paper notebook", "In Notion or a Spreadsheet", "On a sticky note", "In the trash"], answer: 1 },
                    { question: "The highest ROI tasks for AI are usually:", options: ["Rare, one-time tasks", "Repeatable weekly tasks", "Simple math", "Drawing circles"], answer: 1 },
                    { question: "A 'Review Checklist' for AI output should check for:", options: ["Accuracy and tone", "The AI's name", "The date", "The font color"], answer: 0 },
                    { question: "How much time can a prompt library save per week?", options: ["5 minutes", "10-20 minutes", "60-90 minutes", "No time saved"], answer: 2 }
                ]
            },
            {
                id: "1.7",
                name: "Week 1 Application & Reflection",
                topic: "Application",
                subtopic: "Real-world practice & reflection",
                details: [
                    {
                        id: "1.7.1",
                        title: "Choose 1–2 real tasks and redo them with AI",
                        concepts: "Comparing manual vs AI-assisted work reveals strengths and limitations.",
                        examples: "Rewrite long email, Convert messy notes, Rewrite WhatsApp formally.",
                        visualization: "Split screen: Before → After (Time manual vs AI).",
                        practical: "HR: rewrite policy announcements."
                    },
                    {
                        id: "1.7.3",
                        title: "Common failure patterns",
                        concepts: "AI fails when prompts are unclear. Weak outputs = weak instructions.",
                        examples: "Vague prompts, Missing context, Missing role FIXes: Add role, context, structure.",
                        visualization: "“Problem → Fix” chart.",
                        practical: "Teach team how to fix AI errors."
                    }
                ],
                quiz: [
                    { question: "What is the best way to understand AI's limits?", options: ["Read books only", "Compare manual work vs AI-assisted work", "Ask the AI directly", "Do nothing"], answer: 1 },
                    { question: "Which is a common failure pattern in prompting?", options: ["Being too specific", "Providing too much context", "Using vague instructions", "Using structured formats"], answer: 2 },
                    { question: "If an AI gives a weak output, the likely cause is:", options: ["Weak instructions", "The internet is slow", "The AI is tired", "The computer is old"], answer: 0 },
                    { question: "How should you redo a real task with AI for learning?", options: ["Replace everything immediately", "Compare the process and output of manual vs AI", "Just use AI and don't check it", "Delete the old method"], answer: 1 },
                    { question: "What is a 'FIX' for a vague prompt?", options: ["Make it shorter", "Add role, context, and structure", "Use a different model only", "Ask nicely"], answer: 1 }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Week 2: Prompt Engineering & Workflows",
        overview: "Practical Application",
        modules: [
            { id: "2.1", name: "Thinking in Steps: Breaking Down Work for AI", topic: "Task Decomposition", subtopic: "Step-based thinking" },
            { id: "2.2", name: "Designing Prompt Chains (Mini-Workflows)", topic: "Prompt Workflows", subtopic: "Prompt chaining" },
            { id: "2.3", name: "Advanced Prompt Techniques for Quality & Control", topic: "Output Control", subtopic: "Precision prompting" },
            { id: "2.4", name: "Role-Specific AI Playbooks", topic: "Functional Use Cases", subtopic: "Playbook design" },
            { id: "2.5", name: "Using AI as Critic, Reviewer & Coach", topic: "AI as Reviewer", subtopic: "Review workflows" },
            { id: "2.6", name: "Guardrails, Mistakes & Safe Usage of Prompt Chains", topic: "Risk & Governance", subtopic: "Safe AI use" },
            { id: "2.7", name: "Week 2 Application & Reflection", topic: "Practical Application", subtopic: "Hands-on build" }
        ]
    },
    {
        id: 3,
        title: "Week 3: RAG & Organization Knowledge",
        overview: "Practical Design",
        modules: [
            { id: "3.1", name: "Why LLMs Need Your Company’s Data", topic: "Org Knowledge Gaps", subtopic: "Limits of base LLMs" },
            { id: "3.2", name: "RAG in Plain English (Retrieval-Augmented Generation)", topic: "RAG Basics", subtopic: "How RAG works" },
            { id: "3.3", name: "Designing Good Document Sets & Questions", topic: "RAG Design", subtopic: "Docs & queries" },
            { id: "3.4", name: "RAG Use-Cases by Function", topic: "Functional RAG", subtopic: "Use-case mapping" },
            { id: "3.5", name: "Interacting With “Chat With Docs” Tools Effectively", topic: "Tool Usage", subtopic: "Asking better questions" },
            { id: "3.6", name: "Evaluating RAG Answers: Quality, Gaps & Risks", topic: "Quality Control", subtopic: "RAG evaluation" },
            { id: "3.7", name: "Mapping a RAG Use-Case in Your Own Org", topic: "Practical Design", subtopic: "RAG concept" }
        ]
    },
    {
        id: 4,
        title: "Week 4: Business KPIs & AI Data Analysis",
        overview: "Practical Application",
        modules: [
            { id: "4.1", name: "Business KPIs 101 for Non-Tech Pros", topic: "Business Metrics", subtopic: "KPI fundamentals" },
            { id: "4.2", name: "Mapping Your Role to KPIs & Data Sources", topic: "Role-Based Metrics", subtopic: "KPI ownership" },
            { id: "4.3", name: "Reading & Cleaning Basic Data Tables", topic: "Data Basics", subtopic: "Table hygiene" },
            { id: "4.4", name: "Asking Better Questions From Data", topic: "Analytical Thinking", subtopic: "Question framing" },
            { id: "4.5", name: "Using AI as a Junior Analyst in Sheets/Excel", topic: "AI-Assisted Analysis", subtopic: "Pattern discovery" },
            { id: "4.6", name: "From Numbers to Narrative: Telling the Business Story", topic: "Data Storytelling", subtopic: "Insight communication" },
            { id: "4.7", name: "Week 4 Application & Reflection", topic: "Practical Application", subtopic: "End-to-end analysis" }
        ]
    },
    { id: 5, title: "Week 5: AI Strategy", overview: "Coming Soon", modules: [] },
    { id: 6, title: "Week 6: AI for Productivity", overview: "Coming Soon", modules: [] },
    { id: 7, title: "Week 7: Advanced Workflows", overview: "Coming Soon", modules: [] },
    { id: 8, title: "Week 8: AI Ethics & Governance", overview: "Coming Soon", modules: [] },
    { id: 9, title: "Week 9: Custom AI Agents", overview: "Coming Soon", modules: [] },
    { id: 10, title: "Week 10: Multi-Modal AI", overview: "Coming Soon", modules: [] },
    { id: 11, title: "Week 11: Future of Work", overview: "Coming Soon", modules: [] },
    { id: 12, title: "Week 12: Final Capstone Project", overview: "Coming Soon", modules: [] }
];
