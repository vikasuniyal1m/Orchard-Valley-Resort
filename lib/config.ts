export const siteConfig = {
  resortName: "Orchard Valley Resort",
  tagline: "Your Mountain Escape",
  description:
    "Luxury treehouses, orchard stays, and valley view accommodations near Shimla — set among apple orchards and pine forests with breathtaking mountain views and authentic Himachali hospitality.",
  whatsappNumber: "919877606623",
  whatsappDefaultMessage:
    "Hi Orchard Valley Resort! I'd like to know more about your rooms and availability.",
  address:
    "Orchard Valley Resort, Kandaghat-Chail, Kufri-Shimla Road, At Koti, Shimla, Himachal Pradesh 171012",
  email: "admin@orchardvalleyresort.in",
  phoneDisplay: "+91 98776 06623",
  phoneDisplaySecondary: "+91 80916 96623",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Koti,Kufri-Shimla+Road,Himachal+Pradesh+171012&output=embed",
  googleListingUrl:
    "https://www.google.com/travel/search?q=orchard%20valley%20resort%20chail",
};

export function buildWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message || siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
