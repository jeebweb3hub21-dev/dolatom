export interface Laptop {
  id: string
  name: string
  specs: string[]
  /** Price in Naira; null means "Contact for price". */
  price: number | null
  condition: 'New' | 'Refurbished'
  badge?: string
}

export const laptops: Laptop[] = [
  {
    id: 'hp-250-g9',
    name: 'HP 250 G9',
    specs: ['Intel Core i3, 12th Gen', '8GB RAM · 256GB SSD', '15.6" HD display', 'Windows 11'],
    price: 385000,
    condition: 'New',
    badge: 'Student favourite',
  },
  {
    id: 'dell-latitude-7490',
    name: 'Dell Latitude 7490',
    specs: ['Intel Core i5, 8th Gen', '8GB RAM · 256GB SSD', '14" FHD display', 'Backlit keyboard'],
    price: 265000,
    condition: 'Refurbished',
    badge: 'Best value',
  },
  {
    id: 'lenovo-thinkpad-t480',
    name: 'Lenovo ThinkPad T480',
    specs: ['Intel Core i5, 8th Gen', '16GB RAM · 512GB SSD', '14" FHD display', 'Dual battery'],
    price: 310000,
    condition: 'Refurbished',
  },
  {
    id: 'hp-elitebook-840-g5',
    name: 'HP EliteBook 840 G5',
    specs: ['Intel Core i7, 8th Gen', '16GB RAM · 512GB SSD', '14" FHD display', 'Fingerprint reader'],
    price: 360000,
    condition: 'Refurbished',
  },
  {
    id: 'asus-vivobook-15',
    name: 'ASUS Vivobook 15',
    specs: ['AMD Ryzen 5', '8GB RAM · 512GB SSD', '15.6" FHD display', 'Windows 11'],
    price: 420000,
    condition: 'New',
  },
  {
    id: 'macbook-air-m1',
    name: 'Apple MacBook Air (M1)',
    specs: ['Apple M1 chip', '8GB RAM · 256GB SSD', '13.3" Retina display', 'macOS'],
    price: null,
    condition: 'New',
  },
]

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount)
}
