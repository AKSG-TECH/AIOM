
import type { Post } from '@/lib/definitions';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const postImage1 = PlaceHolderImages.find(p => p.id === 'post-1');
const postImage2 = PlaceHolderImages.find(p => p.id === 'post-2');
const postImage3 = PlaceHolderImages.find(p => p.id === 'post-3');

export const posts: Post[] = [
  {
    id: '1',
    title: 'Ultra-realistic creative winter portrait of a young Indian man',
    category: "CREATIVE",
    imageUrl: postImage1?.imageUrl || 'https://picsum.photos/seed/aiwinter/400/600',
    imageHint: postImage1?.imageHint || 'winter portrait',
    date: 'January 27, 2026',
    content: 'An in-depth look at creating stunningly realistic portraits with AI, focusing on winter aesthetics and cultural representation.',
  },
  {
    id: '2',
    title: 'Exploring the Alps: A Journey Through Summer Meadows',
    category: 'TRAVEL',
    imageUrl: postImage2?.imageUrl || 'https://picsum.photos/seed/aisummer/400/600',
    imageHint: postImage2?.imageHint || 'summer landscape',
    date: 'February 15, 2026',
    content: 'Discover the breathtaking beauty of the Alpine summer, captured with advanced AI-powered photography techniques.',
  },
  {
    id: '3',
    title: 'Cyberpunk Revisited: Neon-Lit Streets of a Future Metropolis',
    category: 'FUTURISM',
    imageUrl: postImage3?.imageUrl || 'https://picsum.photos/seed/aicyberpunk/400/600',
    imageHint: postImage3?.imageHint || 'city street',
    date: 'March 03, 2026',
    content: 'A visual exploration of a cyberpunk city, with AI generating intricate details of a high-tech, dystopian future.',
  },
];
