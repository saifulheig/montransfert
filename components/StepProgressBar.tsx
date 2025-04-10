import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const steps = [
  { path: "/", label: "Étape 1" },
  { path: "/select-car", label: "Étape 2" },
  { path: "/confirm-booking", label: "Étape 3" },
];

const StepProgressBar = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const stepIndex = steps.findIndex((step) => step.path === router.pathname);
    if (stepIndex !== -1) {
      setCurrentStep(stepIndex + 1);
    }
  }, [router.pathname]);

  return (
    <div className="flex flex-col items-center justify-center mt-8 w-full">
      {/* Progress Bar Container */}
      <div className="relative flex items-center justify-between md:w-2/5 w-full">
        {/* Full Background Line (Starts inside first circle, ends inside last circle) */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-2 bg-gray-300 rounded-full w-full"></div>

        {/* Animated Progress Line */}
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 h-2 bg-yellow-500 rounded-full transition-all duration-300"
          style={{
            width: `${(currentStep - 1) / (steps.length - 1) * 100}%`, // Progress width based on current step
            left: "50%", // Start at the middle of the first circle
            transform: "translateX(-50%)", // Center the progress line on the first circle
          }}
        ></div>

        {/* Step Circles */}
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Circle */}
            <div
              className={`w-15 h-15 flex items-center justify-center rounded-full text-white font-bold z-10 
              ${currentStep >= index + 1 ? "bg-yellow-500" : "bg-gray-400"}`}
            >
              {index + 1}
            </div>
            {/* Label */}
            <p className="text-xs mt-1 font-medium">{step.label}</p>
          </div>
        ))}
      </div>

      {/* Step Count Text */}
      <p className="text-center mt-3 text-sm font-semibold">
      Étape {currentStep} sur {steps.length}
      </p>
    </div>
  );
};

export default StepProgressBar;
