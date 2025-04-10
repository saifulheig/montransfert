import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import StepProgressBar from "@/components/StepProgressBar";
import { GoogleMap, DirectionsRenderer, useJsApiLoader, Autocomplete } from "@react-google-maps/api";

type Car = {
  id: number;
  name: string;
  image: string;
  baseFare: number;
  pricePerKm: number;
  places: number;
};

const cars: Car[] = [
  { id: 1, name: "Mercedes-Benz V-Class", image: "images/slide2.jpg", baseFare: 10, pricePerKm: 4.5, places: 7 },
  { id: 2, name: "Tesla Model Y", image: "images/slide3.webp", baseFare: 7, pricePerKm: 3.0, places: 4 },
  /**{ id: 3, name: "Hybrid Toyota Auris Touring", image: "images/slide322.jpg", baseFare: 0.0, pricePerKm: 1.0, places: 4 },*/
  { id: 3, name: "Mercedes-Class S", image: "images/class_s.png", baseFare: 10, pricePerKm: 4.5, places: 4 },
];

export default function SelectCar() {
  const router = useRouter();
  const { pickup, dropoff, date, time } = router.query;
  const [distance, setDistance] = useState<number | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  useEffect(() => {
    if (pickup && dropoff) {
      fetchDistance(pickup as string, dropoff as string);
    }
  }, [pickup, dropoff]);

  const fetchDistance = async (origin: string, destination: string) => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
      console.error("Google Maps API key is missing");
      return;
    }

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK" && response?.rows[0].elements[0].status === "OK") {
          const distanceInMeters = response.rows[0].elements[0].distance.value;
          setDistance(distanceInMeters / 1000); // Convert to km
        } else {
          console.error("Error fetching distance:", status);
        }
      }
    );
  };

  const handleSelectCar = (car: Car) => {
    setSelectedCar(car);
  };

  const handleConfirmBooking = () => {
    if (!selectedCar || distance === null) {
      alert("Please select a car first.");
      return;
    }

    let totalCost = selectedCar.baseFare + distance * selectedCar.pricePerKm;

    // Pricing logic
    if (selectedCar.name === "Tesla Model Y" && totalCost < 29) {
      totalCost = 29;
    } else if (selectedCar.name === "Mercedes-Benz V-Class" && totalCost < 49) {
      totalCost = 49;
    }

    totalCost = totalCost.toFixed(2);

    router.push({
      pathname: "/confirm-booking",
      query: {
        pickup,
        dropoff,
        date,
        time,
        car: selectedCar.name,
        price: totalCost,
      },
    });
  };

  return (
    <div className="p-6">
      <StepProgressBar />
      <h2 className="text-2xl font-bold mb-4">Sélectionnez votre véhicule préféré</h2>
      <p>
        <strong>De:</strong> {pickup} | <strong>À:</strong> {dropoff}
      </p>
      <p>
        <strong>Date:</strong> {date} | <strong>Heure:</strong> {time}
      </p>
      <p className="mt-2">
        <strong>Distance estimée :</strong>{" "}
        {distance !== null ? `${distance} km` : "Calcul en cours..."}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className={`border p-4 rounded-lg shadow-lg cursor-pointer ${
              selectedCar?.id === car.id ? "border-blue-500" : ""
            }`}
            onClick={() => handleSelectCar(car)}
          >
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{car.name}</h3>
            <p>{car.places} places</p>
           
          </div>
        ))}
      </div>

      {selectedCar && distance !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Voiture choisie: {selectedCar.name}</h3>
          <p>
            <strong>Coût estimé:</strong>{" "}
            {
              (() => {
                let estimatedCost = selectedCar.baseFare + distance * selectedCar.pricePerKm;
                if (selectedCar.name === "Tesla Model Y" && estimatedCost < 29) return "CHF 29.00";
                if (selectedCar.name === "Mercedes-Benz V-Class" && estimatedCost < 49) return "CHF 49.00";
                if (selectedCar.name === "Mercedes-Class S" && estimatedCost < 49) return "CHF 49.00";
                return `CHF ${estimatedCost.toFixed(2)}`;
              })()
            }
          </p>
          <button
            className="mt-3 bg-[#deba91] text-black p-2 rounded"
            onClick={handleConfirmBooking}
          >
            Confirmer votre réservation
          </button>
        </div>
      )}
    </div>
  );
}
