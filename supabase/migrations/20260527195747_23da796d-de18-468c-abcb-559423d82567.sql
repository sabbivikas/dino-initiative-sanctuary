
DROP POLICY IF EXISTS "Anyone can insert reports" ON public.letter_reports;

CREATE POLICY "Anyone can insert valid reports"
ON public.letter_reports
FOR INSERT
TO anon, authenticated
WITH CHECK (
  letter_id IS NOT NULL
  AND EXISTS (SELECT 1 FROM public.kindness_letters kl WHERE kl.id = letter_reports.letter_id)
  AND (reason IS NULL OR char_length(reason) <= 500)
);
