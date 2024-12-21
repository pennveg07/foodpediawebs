import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function seedingFoods() {
  const foods = [
    {
      title: 'soto banjar',
      price: 10000,
      description: 'soto banjar dengan daging sapi asli',
      image:
        'https://www.maggi.id/sites/default/files/styles/image_744_x_419/public/srh_recipes/1d433617305f7c0ff167e223d6027eba.jpg?h=4f5b30f1&itok=ExTz_LQk',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/soto-ayam-soto-mie-jolali-menteng-82cea644-a657-44eb-8620-d6c771f1c9ad',
    },
    {
      title: 'steak wagyu',
      price: 50000,
      description: 'steak sapi premium dengan kualitas terbaik',
      image:
        'https://www.masakapahariini.com/wp-content/uploads/2022/07/tingkat-kematangan-steak-besar.jpg',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/fiesta-steak-grand-indonesia-059c6d5b-5549-454e-9505-fa76fc904868',
    },
    {
      title: 'sushi salmon',
      price: 30000,
      description: 'Salmon sushi segar dengan olahan terbaik',
      image:
        'https://img-global.cpcdn.com/recipes/c2e8eb590e6b5eed/400x400cq70/photo.jpg',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/gion-the-sushi-bar-plaza-indonesia-2fe9e729-d146-4164-9a4c-73d7f2597d78',
    },
    {
      title: 'Sake Jepang',
      price: 20000,
      description: 'Sake dengan kualitas terbaik',
      image:
        'https://redandwhiteshops.com/wp-content/uploads/2022/11/Culture-and-Drinking-Traditional-Japanese-Sake-Etiquette-1024x768.jpg',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/sake-senopati-43da9800-f6fa-403b-933f-99a53b8ccc28',
    },
    {
      title: 'Nasi Goreng',
      price: 25000,
      description: 'Nasi Goreng dengan wok untuk memasaknya',
      image:
        'https://img.kurio.network/ewrCJ9eRNpljU-80vrqWDQkN7o4=/1200x675/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/10/a7e9eaa0-1c22-42b0-a11f-0a5ad1d30126.jpeg',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/nasi-goreng-dan-ayam-bakar-cafe-oren-tanah-abang-f1fc686e-711e-4b9e-aefa-4d4e2cc3fd9f',
    },
    {
      title: 'Bakso Sehat',
      price: 30000,
      description: 'Bakso Sehat yang sehat banget',
      image:
        'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/9c4d9429-588b-46ab-8394-d65f0f0da0ce_file20191001-17424-1041cfs.jpeg?auto=format',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/bakso-sehat-bakso-atom-premium-thamrin-city-082d2178-ef2a-4ab5-a993-9d14560371cf',
    },
    {
      title: 'Bakmie abun',
      price: 25000,
      description: 'Bakmie abun paling enak',
      image:
        'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/e075ce73-ba86-453d-bad5-494a83264ca1_Go-Biz_20210524_114341.jpeg?auto=format',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/bakmie-abun-246-rusun-kebon-kacang-xi-246-788aebbb-87b5-4993-b832-b1afc566fccd',
    },
    {
      title: 'Sate Senayan',
      price: 40000,
      description: 'Sate senayan dengan kematangan yang sempurna',
      image:
        'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/427e5bbc-5a05-43c7-8ad6-1759b2ba775f_brand-image_1597798729063.jpg?auto=format',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/sate-seafood-senayan-by-sate-khas-senayan-grand-indonesia-ff5cd6d6-cf49-43ef-96cf-f9e8b66a2510',
    },
    {
      title: 'Rujak Bukan Sultan',
      price: 19000,
      description:
        'Rujak dengan campuran bubum kacang yang tercampur sempurnah',
      image:
        'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/445399eb-14ea-454b-9d00-8eecf509389c_Go-Biz_20241110_234426.jpeg?auto=format',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/rujak-bukan-sultan-jl-kebon-kacang-raya-75ae2db9-6ed6-41dc-bbf0-6cbc1a10a1a3',
    },
    {
      title: 'Ayam Goreng Ternate',
      price: 13000,
      description: 'Ayam goreng krenyes dengan kematangan yang perfect',
      image:
        'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/bf40f18b-81d5-493a-8b0c-49864f720227_Go-Biz_20240701_215029.jpeg?auto=format',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/ayam-goreng-ternate-thamrin-jakarta-pusat-ba63f419-32c5-41f9-8e5e-202252db5ab5',
    },
    {
      title: 'soto banjar',
      price: 10000,
      description: 'soto banjar dengan daging sapi asli',
      image:
        'https://www.maggi.id/sites/default/files/styles/image_744_x_419/public/srh_recipes/1d433617305f7c0ff167e223d6027eba.jpg?h=4f5b30f1&itok=ExTz_LQk',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/soto-ayam-soto-mie-jolali-menteng-82cea644-a657-44eb-8620-d6c771f1c9ad',
    },
    {
      title: 'steak wagyu',
      price: 50000,
      description: 'steak sapi premium dengan kualitas terbaik',
      image:
        'https://www.masakapahariini.com/wp-content/uploads/2022/07/tingkat-kematangan-steak-besar.jpg',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/fiesta-steak-grand-indonesia-059c6d5b-5549-454e-9505-fa76fc904868',
    },
    {
      title: 'sushi salmon',
      price: 30000,
      description: 'Salmon sushi segar dengan olahan terbaik',
      image:
        'https://img-global.cpcdn.com/recipes/c2e8eb590e6b5eed/400x400cq70/photo.jpg',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/gion-the-sushi-bar-plaza-indonesia-2fe9e729-d146-4164-9a4c-73d7f2597d78',
    },
    {
      title: 'Sake Jepang',
      price: 20000,
      description: 'Sake dengan kualitas terbaik',
      image:
        'https://redandwhiteshops.com/wp-content/uploads/2022/11/Culture-and-Drinking-Traditional-Japanese-Sake-Etiquette-1024x768.jpg',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/sake-senopati-43da9800-f6fa-403b-933f-99a53b8ccc28',
    },
    {
      title: 'Nasi Goreng',
      price: 25000,
      description: 'Nasi Goreng dengan wok untuk memasaknya',
      image:
        'https://img.kurio.network/ewrCJ9eRNpljU-80vrqWDQkN7o4=/1200x675/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/10/a7e9eaa0-1c22-42b0-a11f-0a5ad1d30126.jpeg',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/nasi-goreng-dan-ayam-bakar-cafe-oren-tanah-abang-f1fc686e-711e-4b9e-aefa-4d4e2cc3fd9f',
    },
    {
      title: 'Bakso Sehat',
      price: 30000,
      description: 'Bakso Sehat yang sehat banget',
      image:
        'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/9c4d9429-588b-46ab-8394-d65f0f0da0ce_file20191001-17424-1041cfs.jpeg?auto=format',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/bakso-sehat-bakso-atom-premium-thamrin-city-082d2178-ef2a-4ab5-a993-9d14560371cf',
    },
    {
      title: 'Bakmie abun',
      price: 25000,
      description: 'Bakmie abun paling enak',
      image:
        'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/e075ce73-ba86-453d-bad5-494a83264ca1_Go-Biz_20210524_114341.jpeg?auto=format',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/bakmie-abun-246-rusun-kebon-kacang-xi-246-788aebbb-87b5-4993-b832-b1afc566fccd',
    },
    {
      title: 'Sate Senayan',
      price: 40000,
      description: 'Sate senayan dengan kematangan yang sempurna',
      image:
        'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/427e5bbc-5a05-43c7-8ad6-1759b2ba775f_brand-image_1597798729063.jpg?auto=format',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/sate-seafood-senayan-by-sate-khas-senayan-grand-indonesia-ff5cd6d6-cf49-43ef-96cf-f9e8b66a2510',
    },
    {
      title: 'Rujak Bukan Sultan',
      price: 19000,
      description:
        'Rujak dengan campuran bubum kacang yang tercampur sempurnah',
      image:
        'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/445399eb-14ea-454b-9d00-8eecf509389c_Go-Biz_20241110_234426.jpeg?auto=format',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/rujak-bukan-sultan-jl-kebon-kacang-raya-75ae2db9-6ed6-41dc-bbf0-6cbc1a10a1a3',
    },
    {
      title: 'Ayam Goreng Ternate',
      price: 13000,
      description: 'Ayam goreng krenyes dengan kematangan yang perfect',
      image:
        'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/bf40f18b-81d5-493a-8b0c-49864f720227_Go-Biz_20240701_215029.jpeg?auto=format',
      gofood:
        'https://gofood.co.id/en/jakarta/restaurant/ayam-goreng-ternate-thamrin-jakarta-pusat-ba63f419-32c5-41f9-8e5e-202252db5ab5',
    },
  ];

  await prisma.food.createMany({
    data: foods,
  });
}

async function main() {
  await seedingFoods();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
  });
