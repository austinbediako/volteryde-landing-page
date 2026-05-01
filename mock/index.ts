import { NavLink, Step } from "@/types";

export const steps: Step[] = [
  {
    number: "1",
    title: "Download The Volteryde App",
    description:
      "Get Volteryde on Google Play or the App Store and sign up in minutes to start your electric bus journey.",
  },
  {
    number: "2",
    title: "Book Your Trip",
    description:
      "Open the app, choose your route, and reserve your seat instantly – no waiting, no hassle.",
  },
  {
    number: "3",
    title: "Enjoy the Ride",
    description:
      "Track your bus in real time, pay securely, and enjoy a smooth, comfortable, and eco-friendly trip.",
  },
];

export const faqs = [
  {
    question: "How do I book a ride on Volteryde?",
    answer:
      "Booking a ride is simple. Just open the Volteryde app, select your pickup location and destination, choose your preferred bus schedule, and confirm your booking.",
  },
  {
    question: "Does the bus pick me up from my house?",
    answer:
      "Our buses operate on designated routes and pick up passengers from specific stops. However, our stops are strategically located to be within a short walk from most residential areas.",
  },
  {
    question: "How do I pay for my trip?",
    answer:
      "You can easily pay for your trip using our in-app digital wallet. Top up your wallet using your preferred payment method and enjoy cash-free, secure transactions on every ride.",
  },
  {
    question: "Can I track my bus in real-time?",
    answer:
      "Yes! Our app provides live tracking for all our buses. You can see exactly where your bus is on the map and get accurate estimated arrival times to your stop.",
  },
  {
    question: "What happens if I cancel my trip?",
    answer:
      "You can cancel your trip through the app. Please refer to our cancellation policy in the app for details on refunds and any applicable cancellation fees.",
  },
];
export const navLinks: NavLink[] = [
  { label: "Volteryde", href: "/" },
  { label: "How Volteryde Works", href: "/#how-it-works" },
  { label: "Get Volteryde", href: "/#get-volteryde" },
];
