import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Luxury Villa in Bali",
    rating: 4.8,
    address: {
      city: "Bali",
      country: "Indonesia",
      state: "Bali",
      street: "Jalan Raya Ubud"
    },
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800"
    ],
    description: "Experience luxury in this stunning villa with breathtaking views of the rice terraces. This spacious property features modern amenities while maintaining traditional Balinese charm. Perfect for families or groups looking for a peaceful retreat.",
    category: ["WiFi", "Pool", "Kitchen", "Air Conditioning", "Parking", "Garden"],
    price: 250,
    offers: {
      bed: "3 bedrooms",
      shower: "2 bathrooms",
      occupants: "6 guests"
    },
    discount: "10% off for stays longer than 7 days",
    reviews: [
      {
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        comment: "Absolutely stunning property! The villa exceeded all our expectations. The host was incredibly responsive and helpful.",
        date: "2024-11-15"
      },
      {
        name: "Michael Chen",
        avatar: "https://i.pravatar.cc/150?img=2",
        rating: 4.5,
        comment: "Great location and beautiful villa. The pool area was perfect for relaxing. Would definitely recommend!",
        date: "2024-11-10"
      },
      {
        name: "Emma Williams",
        avatar: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        comment: "Perfect getaway spot! The views are incredible and the villa is even better in person. Can't wait to return!",
        date: "2024-11-05"
      }
    ]
  },
  {
    name: "Modern Apartment in Tokyo",
    rating: 4.6,
    address: {
      city: "Tokyo",
      country: "Japan",
      state: "Tokyo",
      street: "Shibuya"
    },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1502672260066-6bc35f0af07e?w=800"
    ],
    description: "Contemporary apartment in the heart of Tokyo. Walking distance to major attractions, restaurants, and shopping districts.",
    category: ["WiFi", "Washer", "Kitchen", "Elevator", "City View"],
    price: 180,
    offers: {
      bed: "2 bedrooms",
      shower: "1 bathroom",
      occupants: "4 guests"
    },
    reviews: [
      {
        name: "David Kim",
        avatar: "https://i.pravatar.cc/150?img=4",
        rating: 4.5,
        comment: "Perfect location! The apartment was clean and well-maintained.",
        date: "2024-11-12"
      }
    ]
  },
  {
    name: "Cozy Cottage in Swiss Alps",
    rating: 4.9,
    address: {
      city: "Zermatt",
      country: "Switzerland",
      state: "Valais"
    },
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800"
    ],
    description: "Charming mountain cottage with stunning Alpine views. Perfect for winter ski trips or summer hiking adventures.",
    category: ["WiFi", "Fireplace", "Kitchen", "Heating", "Mountain View", "Parking"],
    price: 320,
    offers: {
      bed: "4 bedrooms",
      shower: "3 bathrooms",
      occupants: "8 guests"
    },
    reviews: [
      {
        name: "Sophie Martin",
        avatar: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        comment: "Amazing experience! The cottage is beautiful and the location is perfect for skiing.",
        date: "2024-11-08"
      }
    ]
  }
];
