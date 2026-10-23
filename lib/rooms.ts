export type Room = {
  slug: string;
  name: string;
  price: string;
  note?: string;
  capacity: string;
  rating: string;
  tagline: string;
  description: string[];
  features: string[];
  highlights: string[];
  images: string[];
};

export const rooms: Room[] = [
  {
    slug: "luxury-treehouse-retreat",
    name: "Luxury Treehouse Retreat",
    price: "₹15,000/night",
    note: "Extra guest ₹1,000/person",
    capacity: "Up to 10 persons",
    rating: "4.6",
    tagline: "2 duplex treehouses + 1 valley view room",
    description: [
      "A unique treehouse stay surrounded by apple orchards and panoramic Himalayan views, designed for families, couples, and groups seeking privacy and comfort near Shimla.",
      "Spread across two duplex treehouses and an additional valley view room, each space offers private balconies and sit-out areas so you can soak in the mountain air at your own pace.",
    ],
    features: ["3 Washrooms", "Private Balcony & Sit-out", "Complimentary WiFi & Parking", "Hot Water", "Restaurant Access", "Bonfire Area Access", "3 Meals Daily Included"],
    highlights: [
      "Treehouse accommodation in apple orchards",
      "Panoramic Himalayan mountain views",
      "Private outdoor spaces",
      "All-inclusive meal package",
      "Social bonfire gatherings",
    ],
    images: ["room-6.jpeg", "room-7.jpeg", "room-11.jpeg", "room-13.jpeg"],
  },
  {
    slug: "orchard-house",
    name: "Orchard House",
    price: "₹8,000/night",
    capacity: "Up to 8 persons",
    rating: "4.8",
    tagline: "Private 2BHK with living & dining zones",
    description: [
      "A spacious private stay nestled among apple orchards with beautiful mountain surroundings — built for families and groups seeking expanded living quarters, comfort, and seclusion.",
      "Multiple comfortable bedrooms and a private living and dining zone give your group room to spread out, with direct access to all resort facilities.",
    ],
    features: ["Private 2BHK", "Multiple Bedrooms", "Private Living & Dining", "Complimentary WiFi & Parking", "Hot Water", "Restaurant Access", "Bonfire Facilities"],
    highlights: [
      "Orchard-facing location with mountain vistas",
      "Ideal for family gatherings and group stays",
      "Private layout, away from the main building",
      "Authentic mountain hospitality",
    ],
    images: ["room-1.jpeg", "room-2.jpeg", "room-3.jpeg", "room-4.jpeg"],
  },
  {
    slug: "valley-view-cottage",
    name: "Valley View Cottage",
    price: "₹3,000/night",
    capacity: "Up to 2 persons",
    rating: "4.9",
    tagline: "Private 2BHK Orchard Stay",
    description: [
      "Wake up to breathtaking Himalayan valley views from this cozy, comfortable room — ideal for couples and small families seeking a peaceful stay amidst nature.",
      "A comfortable double bed and private attached washroom make this our most intimate stay, with full access to resort facilities just steps away.",
    ],
    features: ["Attached Washroom", "Comfortable Double Bed", "Smart TV", "Complimentary WiFi & Parking", "Hot Water", "Restaurant Access", "Valley View"],
    highlights: [
      "Panoramic valley vistas overlooking the Himalayas",
      "Designed for couples and small families",
      "Serene, nature-surrounded setting",
    ],
    images: ["room-9.jpeg", "room-8.jpeg", "room-10.jpeg", "room-12.jpeg"],
  },
];

export function getRoomBySlug(slug: string) {
  return rooms.find((r) => r.slug === slug);
}
