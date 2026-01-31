
import type { Post } from '@/lib/definitions';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const postImage2 = PlaceHolderImages.find(p => p.id === 'post-2');
const postImage4 = PlaceHolderImages.find(p => p.id === 'post-4');
const postImage6 = PlaceHolderImages.find(p => p.id === 'post-6');
const postImage8 = PlaceHolderImages.find(p => p.id === 'post-8');
const postImage9 = PlaceHolderImages.find(p => p.id === 'post-9');
const postImage10 = PlaceHolderImages.find(p => p.id === 'post-10');
const postImage11 = PlaceHolderImages.find(p => p.id === 'post-11');
const postImage12 = PlaceHolderImages.find(p => p.id === 'post-12');

export const posts: Post[] = [
  {
    id: '2',
    title: 'Stylish man in black posing against a stone wall',
    category: 'BOYS',
    imageUrl: postImage2?.imageUrl || 'https://picsum.photos/seed/aisummer/400/600',
    imageHint: postImage2?.imageHint || 'man posing',
    content: 'A hyper-realistic, cinematic medium-full shot of a stylish young man leaning casually against a textured, ancient stone wall. He has a cool, confident expression with a subtle smirk, looking slightly away from the camera. He is wearing high-end modern streetwear: a fitted black leather jacket over a white t-shirt, dark denim jeans, and stylish boots. The lighting is golden hour sunlight filtering through nearby leaves, casting soft, dappled shadows on the wall and his face. The stone wall is weathered with moss and cracks, contrasting with his clean, modern look. High definition, 8k resolution, sharp focus on the face, shallow depth of field (bokeh background), professional photography style.',
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
    title: 'Man in Black Leather Jacket Collage Poster',
    category: 'BOYS',
    imageUrl: postImage10?.imageUrl || 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM8ohO2c8xzxwV9OaVqKpQW0OErpS39GAQ7GYi3kkKuFyftJBikD0SBlPZ_8wDlFzc3EZFy7G2TQrjxUCYBi4S_rabHg-09lD7tLEeuIKf5U0SApGXD9bjXsAIueUALOdNKvWaMbi0AYlfXGT3NmL4u18VEhjdkNGScoDWRasXquOhhpo9ijSwgfBEE4SB/s1536/1000378561.png',
    imageHint: postImage10?.imageHint || 'man poster',
    content: "Ultra-realistic 4K collage-style photo poster of a man wearing a black leather jacket, white tee, and jeans with white shoes. Multiple creative shots blended together one close-up portrait, one full-body pose, and one side profile all set against a dark, moody background with glowing abstract shapes and shadows.\n\n\nStylish cinematic poster vibe with dramatic lighting and high contrast.",
  },
  {
    id: '11',
    title: 'Indian Girl in Green Saree',
    category: 'GIRLS',
    imageUrl: postImage11?.imageUrl || 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5uGaw2ah9Hp7VH_mHu34OP8i9t9C0JZdGan7b6cMhSQH7RA4N_xuvfrGoZFgdGodONI9HGnJ9M9E2gMyWQ85z1fYM4M_keTT4oUURvgJm7mEGVUQ_0zzLDhPChqGzU0uUDs0shSZsSPaH9Ow0QZi3lAlnWfd0iGPyvCCdu1li0JxklzQCj8nYNDs7zhRg/s1168/1000378552.jpg',
    imageHint: postImage11?.imageHint || 'girl saree',
    content: "Create A beautiful Indian girl dressed in a traditional decent hot light green net saree with bollywood style with intricate golden embroidery blouse.hairs are open and gajra tucked in her hair. She is wear earrings, bangles she taking a mirror selfie completely 100% unchanged face and cloth.  full body picture.",
  },
  {
    id: '12',
    title: 'Indian Woman in a Blue Gown',
    category: 'GIRLS',
    imageUrl: postImage12?.imageUrl || 'https://picsum.photos/seed/womangown/400/600',
    imageHint: postImage12?.imageHint || 'woman gown',
    content: "CONVERT, 4K HD REALISTIC, A STUNNING PORTRAIT OF A YOUNG INDIAN WOMAN WITH LONG, BRAUN HAIR. SHE IS WEARING A BEAUTIFUL FITTED BLUE COLOR SOFT PETAL FABRIC FLORTACH LONG GOWN UPPERCASE, MACHING CHUNRI MACHING HEEL FULLBODY PICTURE. CAMERA LOOKS. A DIAMOND BRACELET ON LEFT WRIST AND A BEAUTIFUL WATCH ON RIGHT WRIST. HER HAIR IS MESSY BUN WITH MATCHING ACCESSORIES. AND HANGING LITTLE DIAMOND EARRINGS AND THIN NECKLACE WITH BEAUTIFUL RUBY PENDANT ON IT. SHE IS LOOKING SLIGHTLY HOT STYLE. I WANT EXACT WOMAN SAME FACE AS, I UPLOADED NO ALTERATION 100% SAME.\n\nRATIO 9:16",
  }
];
