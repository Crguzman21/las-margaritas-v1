const products = [
    {
    id: 1,
    title: 'Arroz Roa x1000 g',
    price: '$ 1.30',
    stock: 100,
    img: 'https://media.surtiplaza.co/dimen/7702552000141.png',
    category: 'Abarrotes'
    },
    {
    id: 2,
    title: 'Espinaca x 500 g',
    price: '$ 1.60',
    stock: 70,
    img: 'https://www.buyfrescapp.com/wp-content/uploads/2024/12/BOG-CAT004-00004.png',
    category: 'Legumbres'
    },
    {
    id: 3,    
    title: 'Limpido x 3800 ml',
    price: '$ 2.06',
    stock: 60,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/24066995/Limpido-Regular-3800-ml-127214_b.jpg?v=638588439955800000',
    category: 'Aseo'
    },
    {
    id: 4,
    title: 'Leche Entera Colanta x 1Lt',
    price: '$ 0.87',
    stock: 120,
    img: 'https://colanta.com/sabe-mas/wp-content/uploads/Tabla-Nutricional-Leche-Entera-Colanta-1000-ml.jpg',
    category: 'Lácteos'
    },
    {
    id: 5,    
    title: 'Platano Verde',
    price: '$ 0.83',
    stock: 70,
    img: 'https://megatiendas.vtexassets.com/arquivos/ids/164316-800-450?v=638284929338470000&width=800&height=450&aspect=true',
    category: 'Legumbres'
    },

    {
    id: 6,
    title: 'Jabon Rey x4 unidades',
    price: '$ 2.68',
    stock: 60,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhOriIQsl0uKghPWj5Y18qbaqKiqgGzOWoA&s',
    category: 'Aseo'
    },
    {
    id: 7,
    title: 'Spaghetti Doria x 1000 g',
    price: '$ 1.80',
    stock: 80,
    img: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/186126/7702085019023-1.jpg?v=637813981180700000',
    category: 'Abarrotes'
    },
    {
    id: 8,
    title: 'Papa Capira x 500 g',
    price: '$ 0.76',
    stock: 70,
    img: 'https://terrabad.co/wp-content/uploads/2023/04/papa-capira-2.jpg',
    category: 'Legumbres'
    },
    {
    id: 9,
    title: 'Mantequilla Colanta Sin Sal x 125 g',
    price: '$ 1.79',
    stock: 40,
    img: 'https://colanta.vtexassets.com/arquivos/ids/157100-800-450?v=638110382829430000&width=800&height=450&aspect=true',
    category: 'Lácteos'
    },
    {
    id: 10,
    title: 'Lentejas Aburra x 500 g',
    price: '$ 1.15',
    stock: 80,
    img: 'https://colanta.vtexassets.com/arquivos/ids/158010/9646-1.png?v=638428555092470000',
    category: 'Abarrotes'
    },

    {
    id: 11,
    title: 'Azucar Riopaila x 1000 g',
    price: '$ 0.9',
    stock: 80,
    img: 'https://fudigo.com.co/cdn/shop/files/azucar-bolsa-1000g-riopaila-fudigo_d622824c-48b8-4455-9468-80bbefc07f2b_600x.svg?v=1716903536',
    category: 'Abarrotes'
    },
    {
    id: 12,
    title: 'Crema Dental Colgate Triple Accion 150 ml x 3unidades',
    price: '$ 6.24',
    stock: 60,
    img: 'https://http2.mlstatic.com/D_NQ_NP_895769-MLU73864680331_012024-O.webp',
    category: 'Aseo'
    },
    {
    id: 13,
    title: 'Yogurt Alpina x 240 g',
    price: '$ 0.96',
    stock: 40,
    img: 'https://carulla.vtexassets.com/arquivos/ids/16178135/Yogurt-ALPINA-ORIGINAL-TROZOS-FRUTA-MELOCOTO-240-gr-3568984_a.jpg?v=638544352596830000',
    category: 'Lácteos'
    },
    {
    id: 14,
    title: 'Papa Criolla x 500 g',
    price: '$ 0.67',
    stock: 70,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYEr2y8dAZH4NN68Uc8GVM4XN6XRAmzDixeA&s',
    category: 'Legumbres'
    },
    {
    id: 15,
    title: 'Crema De Leche Alqueria x 400 g',
    price: '$ 2.06',
    stock: 40,
    img: 'https://mercasur.com.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MTYxNiwicHVyIjoiYmxvYl9pZCJ9fQ==--06129b0be37e710f7f962d450a91d64ed5f4e5d3/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fZml0IjpbNjAwLDYwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--db42ba722be1e76788976c3dae164d352f833ae3/7702177022344?locale=es',
    category: 'Lácteos'
    },

    {
    id: 16,
    title: 'Jabón De Baño Palmolive',
    price: '$ 1.20',
    stock: 150,
    img: 'https://www.palmolive.co/content/dam/cp-sites/personal-care/palmolive-latam/redesign-2020/andina/pdp/aloe-y-oliva/jabon-en-barra-oliva-aloe-vera-110g.jpg',
    category: 'Aseo'
    },
    {
    id: 17,
    title: 'Detergente En Polvo Ariel x 1Kg',
    price: 2.84,
    stock: 60,
    img: 'https://exitocol.vteximg.com.br/arquivos/ids/26099529/Detergente-En-Polvo-Ariel-Doble-Poder-x-1-kg-1384919_a.jpg',
    category: 'Aseo'
    },
    {
    id: 18,
    title: 'Queso Mozzarella Colanta x 250 g',
    price: '$ 2.53',
    stock: 40,
    img: 'https://olimpica.vtexassets.com/arquivos/ids/1423070-800-450?v=638512992608200000&width=800&height=450&aspect=true',
    category: 'Lácteos'
    },
    {
    id: 19,
    title: 'Tomate x 500 g',
    price: '$ 0.69',
    stock: 50,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrHsBMC12HyCFtiLpp3vM-lZdox0pS7osVQ&s',
    category: 'Legumbres'
    },
    {
    id: 20,
    title: 'Fideos Letras x 250 g',
    price: '$ 0.5',
    stock: 80,
    img: 'https://lavaquita.co/cdn/shop/files/supermercados_la_vaquita_supervaquita_pasta_doria_250g_letra_1024x1024.png?v=1707248415',
    category: 'Abarrotes'
    },
];

export default products;