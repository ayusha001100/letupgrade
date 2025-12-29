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
            {
                id: "2.1",
                name: "Thinking in Steps: Breaking Down Work for AI",
                topic: "Task Decomposition",
                subtopic: "Step-based thinking",
                details: [
                    {
                        id: "2.1.1",
                        title: "Why complex tasks fail with single mega-prompts",
                        concepts: "AI struggles when instructions are too long, vague, or unclear. Mega-prompts overload the model, leading to confusion and hallucination. The model doesn’t know what to prioritize unless steps are separated. Good prompting = divide big problem into smaller, clear steps.",
                        examples: "❌ **Mega-prompt**: “Write a recruitment plan, create interview questions, design a JD, draft emails, and make a performance rubric in one go.” → Output becomes shallow and inconsistent.\n✅ **Step-by-step**: 1. Write JD -> 2. Create scoring criteria -> 3. Draft outreach emails -> 4. Make onboarding steps. Each step gets better quality.",
                        visualization: "Flow diagram: One giant block (messy output) vs Flow diagram showing Step 1 → Step 2 → Step 3 → Step 4 (clear outputs). “Task too big → AI confused” vs “Task broken → AI reliable”.",
                        practical: "- **HR**: Break hiring workflow into stages.\n- **Ops**: Break SOP creation into steps.\n- **Students**: Break assignments into sections.\n- **Managers**: Break reports into structured tasks."
                    },
                    {
                        id: "2.1.2",
                        title: "Decomposing a task into stages: Understand → Analyze → Generate → Polish",
                        concepts: "Every complex task has 4 universal steps:\n1. **Understand** → AI gathers context.\n2. **Analyze** → AI extracts insights, patterns, issues.\n3. **Generate** → AI produces the draft.\n4. **Polish** → AI improves tone, clarity, formatting.\nTeaching the model to follow this pipeline drastically improves quality.",
                        examples: "**Example: Creating a Report**\nStep 1: Understand - “Read this document and identify key topics.”\nStep 2: Analyze - “Extract insights, problems, opportunities.”\nStep 3: Generate - “Write a structured report with headings.”\nStep 4: Polish - “Rewrite concisely, professional tone.”",
                        visualization: "Four-step ladder: Understand → Analyze → Generate → Polish. Pipeline image showing each stage leading to the next. Before/after showing quality difference between mega-prompt vs step-wise prompting.",
                        practical: "- **Emails**: Understand → Rewrite → Polish.\n- **Planning**: Understand → Analyze → Propose → Refine.\n- **Marketing brief**: Extract → Outline → Write → Edit.\n- **Research**: Read → Summarize → Compare → Synthesize."
                    },
                    {
                        id: "2.1.3",
                        title: "Identifying where AI should help vs where you decide",
                        concepts: "AI can assist with structured tasks, but humans must control decision-making, judgment, prioritization, and interpretation. AI should not replace your critical thinking.",
                        examples: "**AI Should Do**: Drafting emails, creating outlines, summaries, rewrites, generating variations.\n**You Should Do**: Final tone approval, accuracy check, strategic decisions, picking best version, reviewing for bias or missing info.",
                        visualization: "Two-column chart: AI Responsibilities vs Human Responsibilities. Traffic light indicators: Green = AI safe, Yellow = AI assists, Red = human-only decisions.",
                        practical: "- **HR**: AI drafts, YOU decide hiring steps.\n- **Sales**: AI writes emails, YOU choose pitch angle.\n- **Students**: AI summarizes, YOU interpret learnings.\n- **Ops**: AI drafts SOP, YOU validate accuracy."
                    },
                    {
                        id: "2.1.4",
                        title: "3–4 worked examples from real work",
                        concepts: "Real examples show how step-wise prompting works. Seeing “before → after” builds confidence and makes AI more reliable and controllable.",
                        examples: "1. **Email Sequence**: Step 1: Understand target, Step 2: Generate 3 variations, Step 3: Polish tone.\n2. **JD + Interview Kit**: Step 1: Understand role, Step 2: Create JD, Step 3: Create questions, Step 4: Create scoring sheet.\n3. **Report Creation**: Step 1: Extract insights, Step 2: Organize, Step 3: Write, Step 4: Polish.",
                        visualization: "Step-by-step workflow boxes for each example. Before vs after outputs. Example prompt templates on screen.",
                        practical: "- Train teams internally.\n- Build repeatable AI workflows.\n- Create your own prompt playbooks.\n- Understand where AI fits in daily tasks."
                    }
                ],
                quiz: [
                    { question: "Why do 'mega-prompts' often lead to hallucinations?", options: ["AI is too fast", "They overload the model with too much vague info", "AI doesn't like long words", "The prompt is too colorful"], answer: 1 },
                    { question: "What is the second stage in the 4-step universal pipeline?", options: ["Understand", "Analyze", "Generate", "Polish"], answer: 1 },
                    { question: "Which of these should a human always do?", options: ["Summarize a 10-page doc", "Draft 5 email subject lines", "Make final strategic decisions", "Turn bullets into a table"], answer: 2 },
                    { question: "In the 4-step pipeline, what does 'Polish' involve?", options: ["Gathering context", "Extracting patterns", "Producing the first draft", "Improving tone and clarity"], answer: 3 },
                    { question: "Breaking a task into steps makes AI:", options: ["Slower and more expensive", "Less accurate", "More reliable and controllable", "Harder to use"], answer: 2 }
                ]
            },
            {
                id: "2.2",
                name: "Designing Prompt Chains (Mini-Workflows)",
                topic: "Prompt Workflows",
                subtopic: "Prompt chaining",
                details: [
                    {
                        id: "2.2.1",
                        title: "Types of steps in a chain: clarifier, transformer, generator, critic",
                        concepts: "Prompt chains are built from 4 fundamental types:\n1. **Clarifier** → Refines input.\n2. **Transformer** → Changes form (bullets to paragraph).\n3. **Generator** → Creates new output (emails, JDs).\n4. **Critic** → Evaluates quality and suggests improvements.\nEach step has a single purpose → higher accuracy.",
                        examples: "**Clarifier**: “List the 3 key points you understood before writing.”\n**Transformer**: “Convert these bullets into a summary.”\n**Generator**: “Write a JD based on this outline.”\n**Critic**: “Evaluate the JD for clarity.”",
                        visualization: "A 4-box diagram: Clarifier → Transformer → Generator → Critic. Example of raw input → clarified → transformed → final draft.",
                        practical: "- **HR**: Polishing JDs step-wise.\n- **Marketing**: Ideation → Copywriting → Editing.\n- **Ops**: SOP creation workflows.\n- **Students**: Outline → Draft → Revise."
                    },
                    {
                        id: "2.2.2",
                        title: "Chain templates: Brainstorm → Rank → Expand → Polish",
                        concepts: "This chain is for idea generation that requires structure, quality, and refinement.\n1. **Brainstorm** → Raw ideas.\n2. **Rank** → Pick best ones.\n3. **Expand** → Turn ideas into detail.\n4. **Polish** → Quality check.",
                        examples: "**Marketing Campaign**: \n- Brainstorm: “Give me 10 ideas.”\n- Rank: “Rank by creativity.”\n- Expand: “Expand top 2.”\n- Polish: “Pitch-ready tone.”",
                        visualization: "Step-by-step funnel: Many ideas → filtered → expanded → refined. Before/after example showing rough → professional output.",
                        practical: "- **Founders**: Brainstorming product features.\n- **Sales**: Crafting outreach angles.\n- **HR**: Employee engagement ideas.\n- **Students**: Brainstorming essay points."
                    },
                    {
                        id: "2.2.3",
                        title: "Chain templates: Extract → Organize → Summarize → Action items",
                        concepts: "Used for long text, meetings, documents, or policies.\n1. **Extract** → Key points.\n2. **Organize** → Group themes.\n3. **Summarize** → Overview.\n4. **Action Items** → Next steps.",
                        examples: "**Meeting Notes**: \n- Extract: “Extract decisions.”\n- Organize: “Group into Risks/Next Steps.”\n- Summarize: “Summarize in 5 bullets.”\n- Action Items: “List tasks with owners.”",
                        visualization: "Vertical stack: Extract → Organize → Summarize → Action Items. Example meeting notes → clean structured output.",
                        practical: "- **HR**: Meeting summaries.\n- **Ops**: SOP extraction.\n- **Students**: Summarizing chapters.\n- **BI**: Turning insights into actions."
                    },
                    {
                        id: "2.2.4",
                        title: "How to pass outputs from one step as inputs to the next",
                        concepts: "Even without built-in chaining, you can manually move outputs. Copy output from step 1 and feed it into step 2 while maintaining clarity. Ensures quality grows with each pass.",
                        examples: "**Manual Chaining**: Step 1 output (8 ideas) → Paste into Step 2 (Rank them) → Paste into Step 3 (Expand) → Paste into Step 4 (Polish).",
                        visualization: "Arrows showing movement: Step Output → Step Input → Next Step. Copy/paste demonstration. Accuracy improvement chart.",
                        practical: "- **HR**: Building JD + Interview kit.\n- **Marketing**: Content production.\n- **Founders**: Creating pitch decks.\n- **Ops**: SOP development chain."
                    }
                ],
                quiz: [
                    { question: "What does a 'Transformer' step do in a chain?", options: ["Creates new ideas", "Evaluates quality", "Changes the form of the input", "Asks for clarification"], answer: 2 },
                    { question: "Which chain template is best for a content brainstorming session?", options: ["Extract -> Organize -> Summarize", "Brainstorm -> Rank -> Expand -> Polish", "Critic -> Generator -> Clarifier", "Role -> Task -> Output"], answer: 1 },
                    { question: "What is 'manual passing' in prompt chaining?", options: ["Typing everything by hand", "Passing a physical document", "Copying output from one prompt and pasting it as input for the next", "Letting the AI decide the next step"], answer: 2 },
                    { question: "Why is a 'Critic' step useful in a prompt chain?", options: ["To make the AI feel bad", "To identify hallucinations and improve quality", "To slow down the output", "To change the language"], answer: 1 },
                    { question: "The 'Extract -> Organize -> Summarize' chain is most useful for:", options: ["Writing a novel", "Long documents or meeting notes", "Generating clickbait headlines", "Designing a logo"], answer: 1 }
                ]
            },
            {
                id: "2.3",
                name: "Advanced Prompt Techniques for Quality & Control",
                topic: "Output Control",
                subtopic: "Precision prompting",
                details: [
                    {
                        id: "2.3.1",
                        title: "Using constraints (tone, length, format, audience)",
                        concepts: "Constraints force AI to follow rules, making results more predictable. Types include: Tone (formal/friendly), Length (word counts/bullets), Format (table/checklist), and Audience (CEO/beginner).",
                        examples: "**With constraints**: “Explain remote work to a CEO in 4 bullet points, under 12 words each, in a confident tone.” vs **Without**: “Write about remote work.”",
                        visualization: "Before vs after constraints chart. Sliders showing tone, length, audience. Constraint box template (Tone/Length/Format/Audience).",
                        practical: "- **HR**: Tone-controlled policies.\n- **Sales**: Tailored emails.\n- **Students**: Concise summaries.\n- **Founders**: CEO-ready updates."
                    },
                    {
                        id: "2.3.2",
                        title: "Asking for multiple options, then narrowing down",
                        concepts: "Instead of one perfect answer, ask for multiple options. Avoids bias, explores creativity, and allows you to choose/refine the best version with follow-up prompts.",
                        examples: "Step 1: “Give me 5 subject lines.”\nStep 2: “Pick top 2 based on clarity.”\nStep 3: “Rewrite best one to be more persuasive.”",
                        visualization: "Decision tree: Options → Evaluate → Select → Improve. 5 ideas → 2 strong → 1 polished.",
                        practical: "- **Marketing**: Headline options.\n- **HR**: JD titles.\n- **Sales**: Pitch lines.\n- **Students**: Essay intros."
                    },
                    {
                        id: "2.3.3",
                        title: "Getting AI to show its reasoning / outline before full answer",
                        concepts: "Asking AI to 'think step-by-step' or give an outline first reduces hallucinations and mistakes. Helps you correct direction early before the full draft is written.",
                        examples: "Step 1: “Give me a 6-point outline first.”\nStep 2: “Great, now write section 1 only.”\nStep 3: “Explain how you arrived at these insights.”",
                        visualization: "Outline → Draft → Expanded Sections. Chain-of-thought bubbles. “Reasoning first, content second” diagram.",
                        practical: "- **HR**: Outline interview kits.\n- **Founders**: Strategy docs.\n- **Ops**: SOP steps.\n- **Students**: Essay outlines."
                    },
                    {
                        id: "2.3.4",
                        title: "Using checklists and rubrics inside prompts",
                        concepts: "Rubrics control quality by asking AI to evaluate content against standards (Accuracy, Clarity, Tone, etc.). Reduces bias and missing requirements.",
                        examples: "**Email Review**: “Score this email on clarity, tone (1–10). Then rewrite to improve weak areas.”\n**JD Review**: “Evaluate using rubric: Completeness, Inclusivity, Clarity.”",
                        visualization: "Rubric table: Criteria | Score | Notes. Checklist icons. Before vs after using rubric.",
                        practical: "- **HR**: JD quality checks.\n- **Marketing**: Content scoring.\n- **Students**: Essay improvement.\n- **Ops**: Process checks."
                    }
                ],
                quiz: [
                    { question: "Which of these is NOT a common prompt constraint?", options: ["Tone", "Format", "Length", "Color of CPU"], answer: 3 },
                    { question: "Why ask for multiple options first?", options: ["To waste tokens", "To explore creativity and avoid single-answer bias", "To confuse the AI", "To make the response longer"], answer: 1 },
                    { question: "Asking AI to 'think step-by-step' is a technique to:", options: ["Slow down the AI", "Reduce hallucinations and improve reasoning", "Make the AI more emotional", "Save battery life"], answer: 1 },
                    { question: "A 'rubric' in a prompt helps to:", options: ["Calculate math", "Standardize quality evaluation", "Translate languages", "Draw images"], answer: 1 },
                    { question: "Adding an 'Audience' constraint (e.g., 'for a CEO') affects:", options: ["The response speed", "The tone and depth of the content", "The character limit only", "The AI's knowledge base"], answer: 1 }
                ]
            },
            {
                id: "2.4",
                name: "Role-Specific AI Playbooks",
                topic: "Functional Use Cases",
                subtopic: "Playbook design",
                details: [
                    {
                        id: "2.4.1",
                        title: "Mapping 3–5 high-value workflows per function",
                        concepts: "Identify repeatable, time-consuming workflows with clear steps/inputs per role. AI accelerates workflows like Sales follow-ups, HR hiring, or Ops SOPs.",
                        examples: "**Sales**: Lead follow-up, Discovery prep.\n**HR**: Hiring, Onboarding checks.\n**Marketing**: Campaign planning.\n**Ops**: SOP creation, Reporting.",
                        visualization: "Workflow map per department. Grid showing: Function | Workflow | Frequency | AI Use Case.",
                        practical: "Build department-level playbooks and actionable templates."
                    },
                    {
                        id: "2.4.2",
                        title: "Converting each workflow into a sequence of prompts",
                        concepts: "A workflow is a chain of prompts (Clarify, Generate, Rank, Rewrite). A standardized sequence reduces errors and improves quality across the team.",
                        examples: "**Sales Flow**: Clarify offer → Generate 5 variations → Rank best → Rewrite tone → Format to email sequence.",
                        visualization: "Prompt chain diagram: Step → Prompt Type → Output → Input to Next. Cards showing each step.",
                        practical: "Standardize workflow automation and reduce rewrite time."
                    },
                    {
                        id: "2.4.3",
                        title: "Inputs and outputs at each step",
                        concepts: "AI quality depends on input quality. Define clear inputs (e.g., meeting notes), expected output format (e.g., table), and quality constraints for every step.",
                        examples: "| Step | Input | Output |\n| --- | --- | --- |\n| Extract needs | Manager notes | Role requirement list |\n| Create JD | Requirements | Final JD in 5 sections |",
                        visualization: "IO (Input/Output) diagram. Table template for workflow design. Arrows showing transitions.",
                        practical: "Define exact deliverables at each stage to ensure predictability."
                    },
                    {
                        id: "2.4.4",
                        title: "Example end-to-end playbook per function",
                        concepts: "Complete playbooks for different roles (HR, Sales, Marketing, Ops) ensure that anyone in the organization can use AI effectively for their specific tasks.",
                        examples: "HR: Extract → Organize → Draft JD → Bias Check → Polish.\nSales: Context → Draft → Critique Tone → Finalize.",
                        visualization: "Step-by-step workflow diagrams for various roles. Playbook blueprints.",
                        practical: "Deploy role-specific playbooks to your department to boost productivity."
                    }
                ],
                quiz: [
                    { question: "What is an AI 'Playbook'?", options: ["A game for AI", "A repeatable system made of prompts for a specific workflow", "A book about AI history", "A list of AI companies"], answer: 1 },
                    { question: "Why map functional workflows?", options: ["To find high-ROI areas for AI automation", "To fire employees", "To write longer prompts", "To test the internet speed"], answer: 0 },
                    { question: "An 'IO' diagram in a playbook shows:", options: ["Internet options", "Inputs and Outputs for each step", "Internal operations only", "Infinite loops"], answer: 1 },
                    { question: "Which role would most likely use an 'Onboarding Checklist' playbook?", options: ["Sales", "HR", "Legal", "Engineering"], answer: 1 },
                    { question: "The main goal of converting a workflow into a sequence of prompts is:", options: ["To make it more complicated", "To improve reliability and standardize quality", "To use more models", "To increase character count"], answer: 1 }
                ]
            },
            {
                id: "2.5",
                name: "Using AI as Critic, Reviewer & Coach",
                topic: "AI as Reviewer",
                subtopic: "Review workflows",
                details: [
                    {
                        id: "2.5.1",
                        title: "Prompting AI to critique drafts instead of writing from scratch",
                        concepts: "AI is more accurate when improving existing text. 'Critic mode' identifies clarity, tone, and missing context issues without inventing (hallucinating) new facts.",
                        examples: "**Prompt**: “Critique this email for clarity. Do not rewrite. Only give feedback.”\n**Output**: “Tone is too informal. Missing call to action.”",
                        visualization: "Before (raw email) → Critique notes → Improved version. Highlighter-style markup of weak areas.",
                        practical: "- **HR**: Improve policy drafts.\n- **Marketing**: Copywriting checks.\n- **Sales**: Outreach emails."
                    },
                    {
                        id: "2.5.2",
                        title: "Review prompts: clarity, tone, structure, bias, completeness checks",
                        concepts: "AI can act as a quality inspector across multiple categories: Clarity, Tone, Structure, Bias, and Completeness. Turns AI into a specialized auditor.",
                        examples: "**Review JD**: “Review for clarity and gender bias. Give feedback in a table with severity (High/Med/Low).”",
                        visualization: "Table-based reviewer output. Before vs after comparison. Color-coded feedback (Red/Yellow/Green).",
                        practical: "- **HR**: Unbiased JDs.\n- **Marketing**: Campaign structure check.\n- **Founders**: Pitch decks."
                    },
                    {
                        id: "2.5.3",
                        title: "Asking AI to simulate different reviewers: manager, client, HR, legal",
                        concepts: "AI can role-play as specific stakeholders (Manager: business impact, Client: trust, Legal: risk). Multi-angle feedback helps catch issues early.",
                        examples: "1. “Pretend you’re an HR reviewer. Evaluate for compliance.”\n2. “Now act as a client. Does this proposal build trust?”",
                        visualization: "Personas chart: Manager | Client | HR | Legal. Feedback overlay with varying perspectives.",
                        practical: "- **Sales**: Client-focused messaging.\n- **Legal**: Risk checks.\n- **Founders**: Investor angle reviews."
                    },
                    {
                        id: "2.5.4",
                        title: "Iterating: Draft → Critique → Revise → Final version loop",
                        concepts: "Best output comes from the 4-step loop: Draft → Critique → Revise → Final. Iteration produces polished results consistently.",
                        examples: "Step 1: Raw report draft.\nStep 2: AI identifies gaps.\nStep 3: “Rewrite using your critique.”\nStep 4: “Polish tone for leadership.”",
                        visualization: "Loop diagram: Draft → Critique → Revise → Final. Before/after comparison chart.",
                        practical: "- **Managers**: Weekly reports.\n- **Sales**: Proposals.\n- **Students**: Finished essays."
                    }
                ],
                quiz: [
                    { question: "Why use 'Critic mode' instead of 'Generator mode' sometimes?", options: ["It's faster", "It reduces hallucinations by focusing on editing existing facts", "It uses less power", "AI doesn't like creating things"], answer: 1 },
                    { question: "What does 'Bias' check in a review prompt look for?", options: ["Spelling errors", "Unfair assumptions or gendered language", "Word count", "Tone consistency"], answer: 1 },
                    { question: "Simulating a 'Legal' reviewer focuses on:", options: ["Creativity", "Compliance and Risk Management", "Humor", "Marketing impact"], answer: 1 },
                    { question: "The 4-step iteration loop ends with:", options: ["Critique", "Draft", "Final Refinement/Polish", "Deleting the file"], answer: 2 },
                    { question: "Which reviewer persona would focus most on 'Business Outcomes'?", options: ["Client", "Manager", "Legal", "Junior Intern"], answer: 1 }
                ]
            },
            {
                id: "2.6",
                name: "Guardrails, Mistakes & Safe Usage of Prompt Chains",
                topic: "Risk & Governance",
                subtopic: "Safe AI use",
                details: [
                    {
                        id: "2.6.1",
                        title: "Common failure modes: drift, contradictions, overfitting",
                        concepts: "Chain risks include: Drift (tone shifts), Contradictions (Step 4 vs Step 2), Overfitting (copying examples too literally), and Loss of Context.",
                        examples: "**Drift**: Formal JD becomes casual in later steps.\n**Contradiction**: One step targets 'CEOs' but the final step says 'ideal for students'.",
                        visualization: "Flow chart showing where drift occurs. Red flags on steps where AI deviates. Before/after behavior charts.",
                        practical: "- **Marketing**: Consistent messaging.\n- **HR**: Objective tone maintenance.\n- **Ops**: Conflict-free SOPs."
                    },
                    {
                        id: "2.6.2",
                        title: "Spotting when outputs go off-brief or off-brand",
                        concepts: "AI might follow structure but miss Brand Voice or Objectives. Off-brief outputs hurt trust. Users must actively check for alignment with brand guidelines.",
                        examples: "**Off-Brief**: Investor update that sounds 'too excited' or 'casual'.\n**Off-Brand**: Professional company voice appearing promotional or pushy.",
                        visualization: "Brand voice sliders (Formal → Casual). Checklist overlay: Audience? Tone? Purpose?",
                        practical: "- **Founders**: Investor comms.\n- **Sales**: Trust-based messaging.\n- **HR**: Neutral policy tone."
                    },
                    {
                        id: "2.6.3",
                        title: "Where to insert human review in a prompt chain",
                        concepts: "Human review shouldn't be only at the end. Key points: After extraction (verify facts), After outline (check direction), and Before final sending.",
                        examples: "**Report Flow**: 1. AI extracts -> 2. HUMAN verifies -> 3. AI outlines -> 4. HUMAN approves -> 5. AI drafts -> 6. HUMAN final sign-off.",
                        visualization: "Traffic light system: Green (AI), Yellow (AI+Human), Red (Human only). Workflow with checkpoints.",
                        practical: "- **Finance**: Verifying claims.\n- **HR**: Legal/Salary review.\n- **Legal**: Compliance sign-off."
                    },
                    {
                        id: "2.6.4",
                        title: "Simple personal rules for sensitive content, compliance, and approvals",
                        concepts: "Set personal guardrails: Never let AI make legal/financial decisions. Verify all data/numbers. Stop if content involves health or HR disputes.",
                        examples: "**Rule 1**: 'No AI content goes out without human sign-off.'\n**Rule 2**: 'Verify every single claim with a source.'",
                        visualization: "Red warning icons for sensitive areas. Compliance checklist. Do/Don't table.",
                        practical: "- **Finance**: Avoid false numbers.\n- **HR**: Prevent discriminatory language.\n- **Legal**: No invented claims."
                    }
                ],
                quiz: [
                    { question: "What is 'Drift' in a prompt chain?", options: ["The computer moving", "A slow shift away from the original goal or tone", "AI getting faster", "Generating a list"], answer: 1 },
                    { question: "Why is 'Human-in-the-loop' important?", options: ["To make the AI feel supported", "To ensure accuracy, compliance, and strategic alignment", "To use more tokens", "To slow down the process"], answer: 1 },
                    { question: "Which of these is a 'Red Flag' for AI output?", options: ["It uses a table", "It contradicts a previous step", "It is 200 words long", "It uses bullet points"], answer: 1 },
                    { question: "A personal guardrule for Finance tasks should be:", options: ["Let AI decide the budget", "Always verify data and numbers manually", "Trust AI for all tax calculations", "Use high temperature for numbers"], answer: 1 },
                    { question: "When should you stop using AI for a task?", options: ["If it takes more than 5 minutes", "If the task involves health risk, legal risk, or HR disputes", "If you feel tired", "If the AI uses a formal tone"], answer: 1 }
                ]
            },
            {
                id: "2.7",
                name: "Week 2 Application & Reflection",
                topic: "Practical Application",
                subtopic: "Hands-on build",
                details: [
                    {
                        id: "2.7.1",
                        title: "Build 1 complete prompt playbook for a real workflow",
                        concepts: "A playbook is a repeatable system. Map your inputs, ordered steps, critique points, and final format. Reduces task re-explanation and inconsistency.",
                        examples: "**Sales Follow-Up Playbook**: Extract Context → Draft → Critique → Polish.\n**HR JD Playbook**: Extract → Organize → Draft → Bias Check → Polish.",
                        visualization: "Workflow diagram: Input → Step → Output. Playbook blueprint (boxes and arrows).",
                        practical: "- **HR**: Interview scheduling.\n- **Sales**: Lead prioritization.\n- **Marketing**: Content repurposing."
                    },
                    {
                        id: "2.7.2",
                        title: "Test it on at least 1 real work example end-to-end",
                        concepts: "Testing reveals missing instructions, tone drift, and weak steps. Calibration is necessary for a reliable system.",
                        examples: "**Testing Report Gen**: Workflow to create project update. Test output vs stakeholder needs.",
                        visualization: "Example workflow test timeline. Before/after comparison. Test pass/fail matrix.",
                        practical: "- **HR**: Test hiring workflow.\n- **Marketing**: Test campaign planning."
                    },
                    {
                        id: "2.7.3",
                        title: "Note what worked, what broke, and where you had to step in manually",
                        concepts: "Reflect on hallucinations, missing data, and steps requiring human judgment. Reflection creates faster workflow improvement.",
                        examples: "**Worked**: Summarized notes perfectly. **Broke**: Invented numbers. **Fix**: Add guardrail 'Do not invent details'.",
                        visualization: "Red-green improvement chart. Failure point heatmap. Updated chain diagram.",
                        practical: "- **PM**: Remove incorrect specs.\n- **Sales**: Identify off-brand messaging."
                    },
                    {
                        id: "2.7.4",
                        title: "Decide 1–2 workflows you want to upgrade with AI in the next month",
                        concepts: "Choose high-repetition, time-consuming tasks with low compliance risk. Create a 30-day mastery plan.",
                        examples: "HR: Candidate follow-up. Sales: Pipeline updates. Marketing: Social recycling.",
                        visualization: "Impact vs Effort grid. 30-day AI roadmap. Priority matrix.",
                        practical: "Build a personalized AI copilot routine and improve 1 workflow every 2 weeks."
                    }
                ],
                quiz: [
                    { question: "What is the benefit of a repeatable Playbook?", options: ["Saves time and ensures consistency", "It's colors are nice", "It uses the newest models automatically", "It replaces the need for humans"], answer: 0 },
                    { question: "What should you do if AI 'breaks' a step by inventing info?", options: ["Give up", "Add a guardrail like 'Do not invent details'", "Restart the whole computer", "Use a shorter prompt"], answer: 1 },
                    { question: "Which workflow is a 'High Impact' candidate for AI?", options: ["Rare, low-stakes emails", "Low-repetition tasks", "High-repetition, time-consuming, structured tasks", "Designing a one-time wedding card"], answer: 2 },
                    { question: "Calibration during testing involves:", options: ["Checking the time", "Adjusting prompts based on observed errors or drift", "Changing your email address", "Buying a new mouse"], answer: 1 },
                    { question: "The 'Impact vs Effort' grid helps you:", options: ["Draw better diagrams", "Prioritize which workflows to automate first", "Calculate your salary", "Find new AI tools"], answer: 1 }
                ]
            }
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
