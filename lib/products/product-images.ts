import type { StaticImageData } from 'next/image';
import product1 from '@/assets/images/products/product-1-bfrp.jpeg';
import product2 from '@/assets/images/products/product-2-aggregates.jpeg';
import product3 from '@/assets/images/products/product-3-insulation.jpeg';
import product4 from '@/assets/images/products/product-4-rebar-mesh.jpeg';
import product5 from '@/assets/images/products/product-5-custom.jpeg';

export const productImages: Record<number, StaticImageData> = {
  1: product1,
  2: product2,
  3: product3,
  4: product4,
  5: product5,
};
