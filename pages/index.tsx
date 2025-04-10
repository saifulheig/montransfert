import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { GoogleMap, DirectionsRenderer, useJsApiLoader, Autocomplete } from "@react-google-maps/api";

import GoogleRouteMap from "@/components/GoogleRouteMap";
import Hero from '../components/Hero';
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import ContactSection from '../components/ContactSection1';
import SafetyQuality from '../components/SafetyQuality';
import PortSection from '../components/PortSection';
import GallerySection from '../components/GallerySection';
import TouristSection from '../components/TouristSection';
//import ProgressBar from "../components/ProgressBar";
import StepProgressBar from "@/components/StepProgressBar";




/** 
const containerStyle = {
  width: "100%",
  height: "400px",
};*/

//const defaultCenter = { lat: 46.5200, lng: 6.6333 }; // Default to Lausanne, Switzerland

export default function Home() { 


  /**
  const router = useRouter();
  const [pickup, setPickup] = useState<string>("");
  const [dropoff, setDropoff] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  const pickupRef = useRef<google.maps.places.Autocomplete | null>(null);
  const dropoffRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    libraries: ["places"],
  });

  useEffect(() => {
    if (loadError) {
      console.error("Google Maps failed to load:", loadError);
    }
  }, [loadError]);

  const handlePlaceSelect = (type: "pickup" | "dropoff") => {
    if (type === "pickup" && pickupRef.current) {
      const place = pickupRef.current.getPlace();
      if (place?.formatted_address) {
        setPickup(place.formatted_address);
      }
    } else if (type === "dropoff" && dropoffRef.current) {
      const place = dropoffRef.current.getPlace();
      if (place?.formatted_address) {
        setDropoff(place.formatted_address);
      }
    }
  };

  const calculateRoute = async () => {
    if (!pickup || !dropoff) {
      alert("Please enter both locations.");
      return;
    }

    try {
      const directionsService = new google.maps.DirectionsService();
      const distanceMatrixService = new google.maps.DistanceMatrixService();

      // Get route directions
      const routeResults = await directionsService.route({
        origin: pickup,
        destination: dropoff,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      setDirections(routeResults);

      // Get distance and time estimates
      distanceMatrixService.getDistanceMatrix(
        {
          origins: [pickup],
          destinations: [dropoff],
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK" && response.rows[0].elements[0].status === "OK") {
            setDistance(response.rows[0].elements[0].distance.text);
            setDuration(response.rows[0].elements[0].duration.text);
          } else {
            console.error("Error fetching distance matrix:", status);
          }
        }
      );
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!pickup || !dropoff || !date || !time) {
      alert("All fields are required.");
      return;
    }

    router.push({
      pathname: "/select-car",
      query: { pickup, dropoff, date, time },
    });
  };*/


  return (
    
   <div>
    <Hero /> {/* You can conditionally render this if needed */}
  <h1 className="text-4xl font-bold text-center mb-6 mt-4">
  Tarif et réservation en ligne en toute simplicité.
  </h1>
    <StepProgressBar />

    <GoogleRouteMap />
    {/*<GoogleRouteMap countryCode="ch" />*/}

    <ContactSection />
    <SafetyQuality />
    <PortSection />
    <GallerySection />
    <TouristSection />
    {/*<ContactForm />*/}

     
    </div>
  );
}
