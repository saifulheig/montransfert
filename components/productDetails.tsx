import Image from "next/image";
import { Inconsolata} from "next/font/google";
import { Roboto } from 'next/font/google';
import Head from "next/head";
/**
const roboto = Roboto({
  subsets: ['latin'],       
  weight: ['400', '700'],   
  variable: '--font-roboto', 
})
*/

//const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inconsolata" });

interface Product {
  name: string;
  question: string;
  answer: string;
  details: string[];
  title: number;
  image: string;
}

interface ProductDetailsProps {
  product: Product | null;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  if (!product) {
    return <h1 className="p-5 text-red-500 text-center text-2xl">Product Not Found</h1>;
  }

  return (
    <div className ="bg-white text-balck">
      <Head>
<title>{product.name}-Montransfert</title>
</Head>
      
      <div className="max-w-7xl mx-auto w-[90%] pt-5 pb-16">
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold mb-8">Présentation du Mercedes Classe V</h1>
      <div className=" flex flex-col items-center ">
      {/* Product Container */}
      <div className="w-full  bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-l-lg" />
        </div>

        {/* Product Info */}
        <div className="p-6 flex flex-col justify-center md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{product.question}</h1>
          <p className="text-gray-600 mt-2">{product.answer}</p>

          {/* Features */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Features:</h2>
          <ul className="mt-3 space-y-2">
            {product.details.map((detail, index) => (
              <li key={index} className="flex items-center space-x-3 text-gray-700">
                <span className="text-[#deba91] text-xl">✔</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
      </div>
 
    </div>
  );
}
