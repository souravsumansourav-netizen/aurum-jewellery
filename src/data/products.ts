export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  { id: 'p1', name: 'Diamond Rivière Necklace', price: 124000, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=533&fit=crop' },
  { id: 'p2', name: 'Emerald Drop Earrings', price: 87500, category: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=533&fit=crop' },
  { id: 'p3', name: 'Gold Mangalsutra', price: 52000, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=533&fit=crop' },
  { id: 'p4', name: 'Polki Kundan Earrings', price: 43000, category: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=533&fit=crop' },
  { id: 'p5', name: 'Ruby Cocktail Ring', price: 68000, category: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=533&fit=crop' },
  { id: 'p6', name: 'Pearl Strand Bracelet', price: 31500, category: 'Bracelets', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=533&fit=crop' },
  { id: 'p7', name: 'Gold Bangle Set', price: 94000, category: 'Bangles', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=533&fit=crop' },
  { id: 'p8', name: 'Sapphire Solitaire Ring', price: 112000, category: 'Rings', image: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=400&h=533&fit=crop' },
  { id: 'p9', name: 'Diamond Stud Earrings', price: 78000, category: 'Earrings', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=533&fit=crop' },
];

export const similarProducts: Product[] = [
  { id: 's1', name: 'Antique Gold Choker', price: 38000, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=533&fit=crop' },
  { id: 's2', name: 'Jhumka Drop Earrings', price: 22000, category: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=533&fit=crop' },
  { id: 's3', name: 'Floral Diamond Ring', price: 55000, category: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=533&fit=crop' },
  { id: 's4', name: 'Gold Kada Bracelet', price: 41000, category: 'Bangles', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=533&fit=crop' },
];
