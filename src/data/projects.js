export const projects = [
  {
    id: 1,
    title: "Roadscapes — VLM Comparison Under Day & Night Conditions",
    description:
      "A benchmarking pipeline evaluating four vision-language models — Phi-3, Qwen2-VL, LLaVA, and PaliGemma — on road-scene QA tasks using the Roadscapes dataset. Models were scored across Object Counting, Object Description, and Surrounding Description, separately for day and night conditions, with automated comparison tables and charts generated for category-wise and overall accuracy.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Hugging Face Transformers", "Vision-Language Models"],
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/Vishalofficail5",
    demo: null,
    stats: [
      { label: "Qwen2-VL", value: "49.33%" },
      { label: "Phi-3", value: "45.83%" },
      { label: "LLaVA", value: "42.83%" },
      { label: "PaliGemma", value: "40.00%" },
    ],
  },
];
