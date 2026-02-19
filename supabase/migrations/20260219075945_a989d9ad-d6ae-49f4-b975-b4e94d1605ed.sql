
-- Create status enum
CREATE TYPE public.letter_status AS ENUM ('pending', 'approved', 'rejected');

-- Create kindness_letters table
CREATE TABLE public.kindness_letters (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  message TEXT NOT NULL,
  tag TEXT,
  signature TEXT,
  region TEXT,
  hearts INTEGER NOT NULL DEFAULT 0,
  status letter_status NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.kindness_letters ENABLE ROW LEVEL SECURITY;

-- Anyone can read approved letters
CREATE POLICY "Anyone can read approved letters"
  ON public.kindness_letters
  FOR SELECT
  USING (status = 'approved');

-- Service role inserts via edge function (no direct client inserts)
-- No INSERT policy for anon - submissions go through edge function with service role

-- Create letter_reports table
CREATE TABLE public.letter_reports (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  letter_id UUID NOT NULL REFERENCES public.kindness_letters(id) ON DELETE CASCADE,
  reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.letter_reports ENABLE ROW LEVEL SECURITY;

-- Anyone can report a letter
CREATE POLICY "Anyone can insert reports"
  ON public.letter_reports
  FOR INSERT
  WITH CHECK (true);

-- No one can read reports from client (admin uses service role)
