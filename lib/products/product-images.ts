import type { StaticImageData } from 'next/image';
import productRebar from '@/assets/images/products/product-rebar.png';
import productGeogrid from '@/assets/images/products/product-geogrid.png';
import productMesh from '@/assets/images/products/product-mesh.png';
import productRoving from '@/assets/images/products/product-roving.png';
import productFibre from '@/assets/images/products/product-fibre.png';

export const productImages: Record<number, StaticImageData> = {
  1: productRebar,
  2: productGeogrid,
  3: productMesh,
  4: productRoving,
  5: productFibre,
};
