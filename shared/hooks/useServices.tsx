import { OfferedService, Service } from "@shared/types";

export const useOfferedServices: () => OfferedService[] = () => {
  return [
    {
      name: "Product selling",
      description: "Sell your products",
      imgSrc: "/assets/trade.png",
      link: "/sell",
    },
    {
      name: "Mobile Services",
      description: "Delivery apps, Ride hailing",
      imgSrc: "/assets/delivery.png",
      link: "/services",
    },
    {
      name: "Formal Document Appointments",
      description: "NBI Clearance, SSS, Pagibig, etc",
      imgSrc: "/assets/documents.png",
      link: "/documents",
    },
  ];
};

export const useServices: () => Service[] = () => {
  return [
    {
      id: 1,
      name: "FoodDoge",
      description: "Food delivery on the go",
      imgSrc: "/assets/paw.png",
    },
    {
      id: 2,
      name: "Errands.com",
      description: "Ask for errands, buy something",
      imgSrc: "/assets/done.png",
    },
  ];
};
