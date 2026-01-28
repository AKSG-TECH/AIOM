'use server';
/**
 * @fileOverview A flow to summarize a blog post for display in a news ticker.
 *
 * - summarizeArticleForTicker - A function that summarizes a blog post.
 * - SummarizeArticleForTickerInput - The input type for the summarizeArticleForTicker function.
 * - SummarizeArticleForTickerOutput - The return type for the summarizeArticleForTicker function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeArticleForTickerInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The full content of the blog article to summarize.'),
});
export type SummarizeArticleForTickerInput = z.infer<
  typeof SummarizeArticleForTickerInputSchema
>;

const SummarizeArticleForTickerOutputSchema = z.object({
  tickerSummary: z
    .string()
    .describe(
      'A short, concise summary of the article suitable for display in a news ticker.'
    ),
});
export type SummarizeArticleForTickerOutput = z.infer<
  typeof SummarizeArticleForTickerOutputSchema
>;

export async function summarizeArticleForTicker(
  input: SummarizeArticleForTickerInput
): Promise<SummarizeArticleForTickerOutput> {
  return summarizeArticleForTickerFlow(input);
}

const summarizeArticleForTickerPrompt = ai.definePrompt({
  name: 'summarizeArticleForTickerPrompt',
  input: {schema: SummarizeArticleForTickerInputSchema},
  output: {schema: SummarizeArticleForTickerOutputSchema},
  prompt: `Summarize the following blog article content into a very short summary (under 20 words) suitable for display in a news ticker:\n\n{{{articleContent}}}`,
});

const summarizeArticleForTickerFlow = ai.defineFlow(
  {
    name: 'summarizeArticleForTickerFlow',
    inputSchema: SummarizeArticleForTickerInputSchema,
    outputSchema: SummarizeArticleForTickerOutputSchema,
  },
  async input => {
    const {output} = await summarizeArticleForTickerPrompt(input);
    return output!;
  }
);
