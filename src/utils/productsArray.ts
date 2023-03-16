type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: "iPhone 14 Pro" ,
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1500,
        image: "/images/iPhone-white.jpeg"
    },
    {
        id: 2,
        title: "iPhone 14 Pro Max" ,
        description: 'This is iPhone 14 Pro Max',
        type: 'phone',
        capacity: '128',
        price: 2000,
        image: '/images/iPhone_black.webp'
    },
    {
        id: 3,
        title: "iPhone 13" ,
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '64',
        price: 1000,
        image: "/images/iPhone-purple.jpeg"
    },
    {
        id: 4,
        title: "iPhone 12 Pro" ,
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '128',
        price: 1000,
        image: "/images/iPhone-red.jpeg"
    },
    {
        id: 5,
        title: "iPhone 12" ,
        description: 'This is iPhone 12',
        type: 'phone',
        capacity: '64',
        price: 500,
        image: "/images/iPhone-blue.jpeg"
    },
    {
        id: 6,
        title: "iPhone 11" ,
        description: 'This is iPhone 11',
        type: 'phone',
        capacity: '64',
        price: 500,
        image: "/images/iPhone-gold.jpeg"
    },
]

export default productsArray