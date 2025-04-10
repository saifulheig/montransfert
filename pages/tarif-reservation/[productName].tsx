import { GetServerSideProps } from "next";
import ProductDetails from "@/components/productDetails";

interface Product {
  name: string;
  question: string;
  answer: string;
  details: string[];
  title: number;
  image: string;
}

interface ProductPageProps {
  product: Product | null;
}

export default function ProductPage({ product }: ProductPageProps) {
  return <ProductDetails product={product} />;
}

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (context) => {
  const faqs: Product[] = [
    {
      name: "Toyota",
      question: "Toyota Auris Touring Hybrid",
      answer:
        "La Toyota Auris Touring Hybrid est un break hybride pratique, économique et spacieux. Elle combine moteur thermique et électrique pour une conduite fluide, silencieuse et éco-responsable.",
      details: [
        "Système multimédia avec Apple CarPlay et Android Auto",
        "Sécurité Toyota Safety Sense",
        "Climatisation automatique",
        "Caméra de recul et capteurs de stationnement",
        "Accès sans clé et démarrage à distance",
        "Sièges et volant chauffants",
        "Faible consommation de carburant grâce à son moteur hybride",
      ],
      title: 270,
      image: "/images/faq1.jpeg",
    },
    {
      name: "Mercedes",
      question: "Mercedes Classe V",
      answer:
        "La Mercedes Classe V est un monospace premium qui associe design sophistiqué, espace généreux et technologies avancées.",
      details: [
        "Design & Confort : Extérieur raffiné, intérieur modulable (jusqu’à 8 places), sièges en cuir, toit panoramique",
        "Performance : Motorisations diesel, boîte auto 9G-TRONIC, suspensions optimisées",
        "Technologie & Sécurité : MBUX, écran tactile, régulateur adaptatif, caméra 360°, freinage d’urgence",
      ],
      title: 90,
      image: "/images/faq2.jpg",
    },
    {
      name: "Tesla",
      question: "Tesla Model Y",
      answer:
        "La Tesla Model Y est un SUV électrique polyvalent qui allie performance, autonomie et technologie de pointe.",
      details: [
        "Technologie & Confort : Écran 15″, toit panoramique, sièges chauffants, audio premium",
        "Performance : Transmission intégrale, Autopilot, 0-100 km/h en 3,7s (Performance)",
        "Autonomie & Recharge : Jusqu’à 533 km, Superchargeurs Tesla, recharge rapide",
        "Connectivité : Appli mobile, mises à jour OTA, navigation intelligente",
        "Sécurité : Caméras 360°, Mode Sentinelle, freinage d’urgence",
      ],
      title: 60,
      image: "/images/faq3.jpg",
    },
  ];

  const productName = (context.params?.productName as string)?.toLowerCase();
  const product = faqs.find((faq) => faq.name.toLowerCase() === productName) || null;

  return { props: { product } };
};
