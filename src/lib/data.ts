
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
const postImage11 = PlaceHolderImages.find(p => p.id === 'post-11');

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
    id: '6',
    title: 'Girl reading a book under a tree in a magical forest',
    category: 'GIRLS',
    imageUrl: postImage6?.imageUrl || 'https://picsum.photos/seed/girlreading/400/600',
    imageHint: postImage6?.imageHint || 'girl reading',
    content: 'Generate a whimsical image of a young girl with long hair reading a large, ancient book while sitting under a glowing, mystical tree.',
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
    title: 'Stylish young boy posing',
    category: 'BOYS',
    imageUrl: postImage10?.imageUrl || 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM8ohO2c8xzxwV9OaVqKpQW0OErpS39GAQ7GYi3kkKuFyftJBikD0SBlPZ_8wDlFzc3EZFy7G2TQrjxUCYBi4S_rabHg-09lD7tLEeuIKf5U0SApGXD9bjXsAIueUALOdNKvWaMbi0AYlfXGT3NmL4u18VEhjdkNGScoDWRasXquOhhpo9ijSwgfBEE4SB/s1536/1000378561.png',
    imageHint: postImage10?.imageHint || 'boy posing',
    content: 'A prompt to generate a photorealistic image of a stylish young boy posing.',
  },
  {
    id: '11',
    title: 'Girl with headphones in a neon-lit room',
    category: 'GIRLS',
    imageUrl: postImage11?.imageUrl || 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5uGaw2ah9Hp7VH_mHu34OP8i9t9C0JZdGan7b6cMhSQH7RA4N_xuvfrGoZFgdGodONI9HGnJ9M9E2gMyWQ85z1fYM4M_keTT4oUURvgJm7mEGVUQ_0zzLDhPChqGzU0uUDs0shSZsSPaH9Ow0QZi3lAlnWfd0iGPyvCCdu1li0JxklzQCj8nYNDs7zhRg/s1168/1000378552.jpg',
    imageHint: postImage11?.imageHint || 'girl headphones',
    content: 'A prompt to generate an image of a girl wearing headphones, sitting in a room with neon lights, giving a futuristic or gaming vibe.',
  }
];
