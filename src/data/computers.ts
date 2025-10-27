export interface Computer {
  id: number;
  name: string;
  processor: string;
  gpu: string;
  ram: string;
  storage: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
}

const baseURL = import.meta.env.BASE_URL;

export const computers: Computer[] = [
  {
    id: 1,
    name: "XtremePC - Vortex",
    processor: "Intel Core i5-12400F",
    gpu: "NVIDIA RTX 5060",
    ram: "16GB DDR4 3200 MHz",
    storage: "1TB NVMe SSD",
    price: 87000,
    category: "Игровой",
    image: `${baseURL}pics/1/114.970.png`,
    images: [`${baseURL}pics/1/113.970.png`, `${baseURL}pics/1/114.970.png`, `${baseURL}pics/1/115.970.png`]
  },
  {
    id: 2,
    name: "XtremePC - Thunder",
    processor: "Intel Core i5-12400F",
    gpu: "NVIDIA RTX 5060 Ti 8GB",
    ram: "16GB DDR4 3200 MHz",
    storage: "1TB NVMe SSD",
    price: 96000,
    category: "Игровой",
    image: `${baseURL}pics/2/18.970.png`,
    images: [`${baseURL}pics/2/18.970.png`, `${baseURL}pics/2/19.970.png`, `${baseURL}pics/2/20.970.png`]
  },
  {
    id: 3,
    name: "XtremePC - Blaze",
    processor: "Intel Core i5-13400F",
    gpu: "NVIDIA RTX 5060 Ti 8GB",
    ram: "32GB DDR4 3200 MHz",
    storage: "1TB NVMe SSD",
    price:也为 ${baseURL}pics/3/137.970.png`,
    images: [`${baseURL}pics/3/137.970.png`, `${baseURL}pics/3/138.970.png`, `${baseURL}pics/3/139.970.png`]
  },
  {
    id: 4,
    name: "XtremePC - Phantom X",
    processor: "AMD Ryzen 5 7500F",
    gpu: "NVIDIA RTX 5060 Ti 8GB",
    ram: "32GB DDR5 6000 MHz",
    storage: "1TB NVMe SSD",
    price: 115000,
    category: "Игровой",
    image: `${baseURL}pics/4/53.970.png`,
    images: [`${baseURL}pics/4/52.970.png`, `${baseURL}pics/4/53.970.png`, `${baseURL}pics/4/54.970.png`]
  },
  {
    id: 5,
    name: "XtremePC - Venom",
    processor: "AMD Ryzen 7 7700",
    gpu: "NVIDIA RTX 5060 Ti 16GB",
    ram: "32GB DDR5 6000 MHz",
    storage: "1TB NVMe SSD",
    price: 145000,
    category: "Игровой",
    image: `${baseURL}pics/5/10.970.png`,
    images: [`${baseURL}pics/5/9.970.png`, `${baseURL}pics/5/10.970.png`, `${baseURL}pics/5/11.970.png`]
  },
  {
    id: 6,
    name: "XtremePC - Warlock",
    processor: "Intel Core i5-14600KF",
    gpu: "NVIDIA RTX 5070",
    ram: "32GB DDR5 6000 MHz",
    storage: "2TB NVMe SSD",
    price: 157000,
    category: "Игровой",
    image: `${baseURL}pics/6/109.970.png`,
    images: [`${baseURL}pics/6/109.970.png`, `${baseURL}pics/6/111.970.png`, `${baseURL}pics/6/112.970.png`]
  },
  {
    id: 7,
    name: "XtremePC - Shadowstrike",
    processor: "AMD Ryzen 7 7800X3D",
    gpu: "NVIDIA RTX 5070",
    ram: "32GB DDR5 6000 MHz",
    storage: "2TB NVMe SSD",
    price: 193000,
    category: "Игровой",
    image: `${baseURL}pics/7/71.970.png`,
    images: [`${baseURL}pics/7/71.970.png`, `${baseURL}pics/7/72.970.png`, `${baseURL}pics/7/73.970.png`]
  },
  {
    id: 8,
    name: "XtremePC - Dragonslayer",
    processor: "Intel Core i5-14600KF",
    gpu: "NVIDIA RTX 5070",
    ram: "32GB DDR5 6000 MHz",
    storage: "2TB NVMe SSD",
    price: 210000,
    category: "Игровой",
    image: `${baseURL}pics/8/128.970.png`,
    images: [`${baseURL}pics/8/128.970.png`, `${baseURL}pics/8/130.970.png`, `${baseURL}pics/8/131.970.png`]
  },
  {
    id: 9,
    name: "XtremePC - Cyberlegend",
    processor: "AMD Ryzen 7 9800X3D",
    gpu: "NVIDIA RTX 5070 Ti",
    ram: "64GB DDR5 6000 MHz",
    storage: "2TB NVMe SSD",
    price: 283000,
    category: "Игровой",
    image: `${baseURL}pics/9/81.970.png`,
    images: [`${baseURL}pics/9/81.970.png`, `${baseURL}pics/9/82.970.png`, `${baseURL}pics/9/85.970.png`]
  }
];
