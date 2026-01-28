import type { NextApiRequest, NextApiResponse } from 'next';
import { summarizeArticleForTicker, SummarizeArticleForTickerOutput } from '@/ai/flows/summarize-article-for-ticker';

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SummarizeArticleForTickerOutput | ErrorResponse>
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

    const result = await summarizeArticleForTicker({ articleContent });
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error in summarize-article-for-ticker API route:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({ error: errorMessage });
  }
}
