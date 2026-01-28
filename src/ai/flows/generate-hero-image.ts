
/**
 * @fileOverview Hero image generation flow.
 *
 * - generateHeroImage - A function that generates a hero image for a blog post based on the article content.
 * - GenerateHeroImageInput - The input type for the generateHeroImage function.
 * - GenerateHeroImageOutput - The return type for the generateHeroImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroImageInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The content of the blog post to generate a hero image for.'),
});

export type GenerateHeroImageInput = z.infer<typeof GenerateHeroImageInputSchema>;

const GenerateHeroImageOutputSchema = z.object({
  imageUrl: z
    .string()
    .describe(
      'The data URI of the generated hero image, in base64 format. Expected format: data:<mimetype>;base64,<encoded_data>.'
    ),
});

export type GenerateHeroImageOutput = z.infer<typeof GenerateHeroImageOutputSchema>;

export async function generateHeroImage(
  input: GenerateHeroImageInput
): Promise<GenerateHeroImageOutput> {
  return generateHeroImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeroImagePrompt',
  input: {schema: GenerateHeroImageInputSchema},
  output: {schema: GenerateHeroImageOutputSchema},
  prompt: `Given the following article content, generate a visually appealing and relevant hero image.  Return the image as a base64 encoded data URI. 

Article Content: {{{articleContent}}}`,
});

const generateHeroImageFlow = ai.defineFlow(
  {
    name: 'generateHeroImageFlow',
    inputSchema: GenerateHeroImageInputSchema,
    outputSchema: GenerateHeroImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.articleContent,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate hero image.');
    }

    return {imageUrl: media.url};
  }
);
