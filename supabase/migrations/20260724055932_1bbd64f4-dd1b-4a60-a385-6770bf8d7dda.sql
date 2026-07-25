UPDATE public.portfolio_content
SET data = jsonb_set(
  data,
  '{tagline}',
  '"Building and shipping real products before my first PM role."'::jsonb
)
WHERE section = 'profile';