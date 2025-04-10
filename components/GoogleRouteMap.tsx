import { useState, useEffect, useRef } from "react";
import { GoogleMap, DirectionsRenderer, useJsApiLoader, Autocomplete } from "@react-google-maps/api";

import { useRouter } from "next/router";

const containerStyle = { width: "100%", height: "400px" };
const defaultCenter = { lat: 46.5200, lng: 6.6333 }; // Lausanne, Switzerland

export default function GoogleRouteMap() {
  const router = useRouter();
  
  const [pickup, setPickup] = useState<{ address: string; location: google.maps.LatLngLiteral } | null>(null);
  const [dropoff, setDropoff] = useState<{ address: string; location: google.maps.LatLngLiteral } | null>(null);
  const [date, setDate] = useState<string>("");  // Date for the ride
  const [time, setTime] = useState<string>("");  // Time for the ride
  
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  
  const pickupRef = useRef<google.maps.places.Autocomplete | null>(null);
  const dropoffRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    libraries: ["places"],
  });

  const handlePlaceSelect = (type: "pickup" | "dropoff") => {
    const ref = type === "pickup" ? pickupRef.current : dropoffRef.current;
    if (ref) {
      const place = ref.getPlace();
      if (place?.geometry?.location) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        if (type === "pickup") {
          setPickup({ address: place.formatted_address || "", location });
        } else {
          setDropoff({ address: place.formatted_address || "", location });
        }
      }
    }
  };

  useEffect(() => {
    if (pickup && dropoff) {
      calculateRoute();
    }
  }, [pickup, dropoff]);

  const calculateRoute = async () => {
    if (!pickup || !dropoff) return;

    try {
      const directionsService = new google.maps.DirectionsService();
      const distanceMatrixService = new google.maps.DistanceMatrixService();

      // Get route directions
      const routeResults = await directionsService.route({
        origin: pickup.location,
        destination: dropoff.location,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      setDirections(routeResults);

      // Get distance and time estimates
      distanceMatrixService.getDistanceMatrix(
        {
          origins: [pickup.location],
          destinations: [dropoff.location],
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

  const handleSelectCar = () => {
    if (!pickup || !dropoff || !date || !time || !distance || !duration) {
      alert("Please fill in all fields before continuing.");
      return;
    }

    router.push({
      pathname: "/select-car",
      query: {
        pickup: pickup.address,
        dropoff: dropoff.address,
        date,
        time,
        distance,
        duration,
      },
    });
  };

  return (
    <div className="flex flex-col md:flex-row py-16 gap-10 bg-white max-w-7xl mx-auto w-[90%]">
      {/* Left: Inputs for Pickup, Dropoff, Date, and Time */}
      <div className="w-full md:w-[40%] space-y-6">
        <h2 className="text-xl font-bold mb-4">Détails De Votre Trajet</h2>
        
        {/* Address Inputs */}
        <div className="space-y-4">
          {isLoaded && (
            <Autocomplete 
              onLoad={(autocomplete) => (pickupRef.current = autocomplete)} 
              onPlaceChanged={() => handlePlaceSelect("pickup")}
              options={{
                componentRestrictions: { country: "ch" }, // Restrict to Switzerland
              }}
            >
              <input type="text" placeholder="De" className="w-full p-2 border rounded" required />
            </Autocomplete>
          )}
          {isLoaded && (
            <Autocomplete 
              onLoad={(autocomplete) => (dropoffRef.current = autocomplete)} 
              onPlaceChanged={() => handlePlaceSelect("dropoff")}
              options={{
                componentRestrictions: { country: "ch" }, // Restrict to Switzerland
              }}
            >
              <input type="text" placeholder="À" className="w-full p-2 border rounded" required />
            </Autocomplete>
          )}
        </div>

        {/* Date and Time Inputs */}
        <div className="space-y-4">
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="time"
            className="w-full p-2 border rounded"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        {/* Button to Select Car */}
        <button onClick={handleSelectCar} className="w-full bg-[#deba91] text-black p-3 rounded mt-4">
        Choisir une voiture
        </button>
      </div>

      {/* Right: Google Map */}
      <div className="w-full md:w-[60%] h-96 border rounded-lg overflow-hidden relative">
        {!isLoaded ? (
          <p>Loading map...</p>
        ) : (
          <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={12}>
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        )}

        {/* Distance & Duration Display */}
        {distance && duration && (
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded shadow-md">
            <p><strong>Distance:</strong> {distance} | <strong>Estimated Time:</strong> {duration}</p>
          </div>
        )}
      </div>
    </div>
  );
}
