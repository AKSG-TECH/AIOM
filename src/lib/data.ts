
import type { Post } from '@/lib/definitions';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const postImage2 = PlaceHolderImages.find(p => p.id === 'post-2');
const postImage4 = PlaceHolderImages.find(p => p.id === 'post-4');
const postImage5 = PlaceHolderImages.find(p => p.id === 'post-5');
const postImage6 = PlaceHolderImages.find(p => p.id === 'post-6');
const postImage7 = PlaceHolderImages.find(p => p.id === 'post-7');
const postImage8 = PlaceHolderImages.find(p => p.id === 'post-8');
const postImage9 = PlaceHolderImages.find(p => p.id === 'post-9');
const postImage10 = PlaceHolderImages.find(p => p.id === 'post-10');

export const posts: Post[] = [
  {
    id: '2',
    title: 'Stylish man in black posing against a stone wall',
    category: 'BOYS',
    imageUrl: postImage2?.imageUrl || 'https://picsum.photos/seed/aisummer/400/600',
    imageHint: postImage2?.imageHint || 'man posing',
    content: 'A prompt to generate an image of a stylish young man posing against an old stone wall, showcasing a cool and confident attitude.',
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
    category: 'VIDEOS',
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
    category: 'VIDEOS',
    imageUrl: postImage7?.imageUrl || 'https://picsum.photos/seed/girlpainting/400/600',
    imageHint: postImage7?.imageHint || 'girl painting',
    content: 'An image of a girl in overalls, joyfully painting a vibrant and colorful mural on an urban brick wall.',
  },
  {
    id: '8',
    title: 'Stylish young boy posing',
    category: 'BOYS',
    imageUrl: postImage8?.imageUrl || 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGqQKU1KFWRRfkxYql8LI8Q5cqgVGWzDv33x-PGQP12ZQ4qBNm2o3ZMFTwA-Q4AxyCKrfNRSGOLpHkhoA4YJOYvje28l1QU1DNKIDzX2-GXnCWO_Gj5As5jEEOy5bxVML_z0dW97Rw-mvGvPSTzwKDFynXLkvT8X2O3AyzLzqY1y6BFLHQJqUGwuDGAqCS/s2752/1000376761.png',
    imageHint: postImage8?.imageHint || 'boy posing',
    content: "Ultra-photorealistic giant statue based on the uploaded photo, keeping the face exactly the same without changes. The statue stands tall in the middle of a (place you want) roundabout near a famous landmark, under construction with scaffolding. Workers in yellow helmets and orange vests are climbing, welding, and building. Some areas remain exposed metal framework, while other sections are detailed and finished. Surroundings capture (Place you want) city: crowded streets with colorful rickshaws, buses, and cars circling the roundabout, vendors with tea stalls, fruit carts, and umbrellas, shop signs, big billboards, and messy hanging wires. Daytime sky with tropical trees, vibrant and lively atmosphere.",
  },
  {
    id: '9',
    title: 'Stylish young boy posing in a suit',
    category: 'BOYS',
    imageUrl: postImage9?.imageUrl || 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtyk91Ds32sH75Rnc3rAhCAdyXQ9h8Vv_CmguDxC8uU76DUo00DUZfGZE9VCkkJlYyQQZWZrWtbuBu7A2qitqAcV1Pye_BBGouGNHOaYycXXusVL-b33Rqjpdt81lrmH7E9ZM37SlP8ICOwYMS-KeLvQ1kv69Kq3mq64odE529ZKAPvYj8MJXUdxEka7Zi/s1376/1000376785.jpg',
    imageHint: postImage9?.imageHint || 'boy posing suit',
    content: 'Ultra-photorealistic giant statue based on the uploaded photo, keeping the face exactly the same without changes. The statue stands tall in the middle of a (place you want) roundabout near a famous landmark, under construction with scaffolding. Workers in yellow helmets and orange vests are climbing, welding, and building. Some areas remain exposed metal framework, while other sections are detailed and finished. Surroundings capture (Place you want) city: crowded streets with colorful rickshaws, buses, and cars circling the roundabout, vendors with tea stalls, fruit carts, and umbrellas, shop signs, big billboards, and messy hanging wires. Daytime sky with tropical trees, vibrant and lively atmosphere.',
  },
  {
    id: '10',
    title: 'Stylish Man in Black Leaning on Wall',
    category: 'BOYS',
    imageUrl: postImage10?.imageUrl || 'https://storage.googleapis.com/res-blockcraft/image/622543c4-42b2-4d51-872f-53c0765c9247.jpg',
    imageHint: postImage10?.imageHint || 'man posing',
    content: 'Generate an image of a confident man in a black outfit, casually leaning against an ancient, carved stone wall covered in ivy.',
  }
];
