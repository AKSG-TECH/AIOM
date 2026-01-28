import type { NextApiRequest, NextApiResponse } from 'next';
import { generateHeroImage, GenerateHeroImageOutput } from '@/ai/flows/generate-hero-image';

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateHeroImageOutput | ErrorResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { articleContent } = req.body;

    if (!articleContent) {
      return res.status(400).json({ error: 'articleContent is required' });
    }

    const result = await generateHeroImage({ articleContent });
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error in generate-hero-image API route:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({ error: errorMessage });
  }
}
