UPDATE portfolio_content
SET data = jsonb_build_object(
  'paragraphs', jsonb_build_array(
    'I''ve built and shipped four products end-to-end — Kartify, CafeOS, Tapinfi and FinMate — before ever holding a Product Manager title. Each one ran through the full product loop: customer discovery, JTBD framing, prioritization, scoping, shipping, and post-launch measurement. The craft is already the work I do.',
    'My BA and QA background is not a side story — it''s the same PM work under a different job title. Requirements gathering, acceptance criteria, stakeholder negotiation, bug triage and release validation are exactly what Product Managers do before a feature gets written. The self-initiated products are even stronger evidence: nobody assigned them, nobody paid me for them, and I still chose the problems, ran the research and shipped the builds. That kind of unprompted judgment is harder to teach than a title.',
    'I want to be one of the leading AI Product Managers of the next decade. Not for the title — because the products that matter will be the ones that explain their reasoning, not just their output, and that''s the same principle I designed into Kartify. That''s the trajectory I''m on.'
  ),
  'stats', jsonb_build_array(
    jsonb_build_object('label', 'Products Shipped', 'value', 4, 'suffix', ''),
    jsonb_build_object('label', 'Case Studies', 'value', 6, 'suffix', ''),
    jsonb_build_object('label', 'Frameworks Practiced', 'value', 5, 'suffix', '+'),
    jsonb_build_object('label', 'AI Experiments', 'value', 20, 'suffix', '+')
  )
),
updated_at = now()
WHERE section = 'about';