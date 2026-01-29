
import type { Post } from '@/lib/definitions';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const postImage1 = PlaceHolderImages.find(p => p.id === 'post-1');
const postImage2 = PlaceHolderImages.find(p => p.id === 'post-2');
const postImage3 = PlaceHolderImages.find(p => p.id === 'post-3');
const postImage4 = PlaceHolderImages.find(p => p.id === 'post-4');
const postImage5 = PlaceHolderImages.find(p => p.id === 'post-5');
const postImage6 = PlaceHolderImages.find(p => p.id === 'post-6');
const postImage7 = PlaceHolderImages.find(p => p.id === 'post-7');
const postImage8 = PlaceHolderImages.find(p => p.id === 'post-8');

export const posts: Post[] = [
  {
    id: '1',
    title: 'Ultra-realistic creative winter portrait of a young Indian man',
    category: "CREATIVE",
    imageUrl: postImage1?.imageUrl || 'https://picsum.photos/seed/aiwinter/400/600',
    imageHint: postImage1?.imageHint || 'winter portrait',
    content: 'An in-depth look at creating stunningly realistic portraits with AI, focusing on winter aesthetics and cultural representation.',
  },
  {
    id: '2',
    title: 'Exploring the Alps: A Journey Through Summer Meadows',
    category: 'TRAVEL',
    imageUrl: postImage2?.imageUrl || 'https://picsum.photos/seed/aisummer/400/600',
    imageHint: postImage2?.imageHint || 'summer landscape',
    content: 'Discover the breathtaking beauty of the Alpine summer, captured with advanced AI-powered photography techniques.',
  },
  {
    id: '3',
    title: 'Cyberpunk Revisited: Neon-Lit Streets of a Future Metropolis',
    category: 'FUTURISM',
    imageUrl: postImage3?.imageUrl || 'https://picsum.photos/seed/aicyberpunk/400/600',
    imageHint: postImage3?.imageHint || 'city street',
    content: 'A visual exploration of a cyberpunk city, with AI generating intricate details of a high-tech, dystopian future.',
  },
  {
    id: '4',
    title: 'Young boy in a superhero costume looking at the city',
    category: "BOYS",
    imageUrl: postImage4?.imageUrl || 'https://picsum.photos/seed/boyhero/400/600',
    imageHint: postImage4?.imageHint || 'boy superhero',
    content: 'A prompt that generates an image of a young boy in a superhero costume, looking out over a sprawling city from a high vantage point.',
  },
  {
    id: '5',
    title: 'Boy playing guitar in his room',
    category: 'BOYS',
    imageUrl: postImage5?.imageUrl || 'https://picsum.photos/seed/boyguitar/400/600',
    imageHint: postImage5?.imageHint || 'boy guitar',
    content: 'Create an image of a teenage boy passionately playing an acoustic guitar in a room filled with posters and musical instruments.',
  },
  {
    id: '6',
    title: 'Girl reading a book under a tree in a magical forest',
    category: 'GIRLS',
    imageUrl: postImage6?.imageUrl || 'https://picsum.photos/seed/girlreading/400/600',
    imageHint: postImage6?.imageHint || 'girl reading',
    content: 'Generate a whimsical image of a young girl with long hair reading a large, ancient book while sitting under a glowing, mystical tree.',
  },
  {
    id: '7',
    title: 'Girl painting a colorful mural on a brick wall',
    category: 'GIRLS',
    imageUrl: postImage7?.imageUrl || 'https://picsum.photos/seed/girlpainting/400/600',
    imageHint: postImage7?.imageHint || 'girl painting',
    content: 'An image of a girl in overalls, joyfully painting a vibrant and colorful mural on an urban brick wall.',
  },
  {
    id: '8',
    title: 'Stylish young boy posing',
    category: 'BOYS',
    imageUrl: postImage8?.imageUrl || 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtyk91Ds32sH75Rnc3rAhCAdyXQ9h8Vv_CmguDxC8uU76DUo00DUZfGZE9VCkkJlYyQQZWZrWtbuBu7A2qitqAcV1Pye_BBGouGNHOaYycXXusVL-b33Rqjpdt81lrmH7E9ZM37SlP8ICOwYMS-KeLvQ1kv69Kq3mq64odE529ZKAPvYj8MJXUdxEka7Zi/s1376/1000376785.jpg',
    imageHint: postImage8?.imageHint || 'boy posing',
    content: 'A prompt to generate an image of a stylish young boy posing for a photo, showcasing a cool and confident attitude.',
  }
];

