import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Free Tier",
      price: "0",
      description: "Perfect for testing and small development projects",
      features: [
        "1 virtual cluster",
        "2 CPU cores",
        "4GB RAM",
        "Basic support",
        "Community access"
      ],
      buttonText: "Start Free",
      popular: false
    },
    {
      name: "Professional",
      price: "5,000",
      description: "Ideal for growing development teams",
      features: [
        "5 virtual clusters",
        "8 CPU cores",
        "16GB RAM",
        "Priority support",
        "Advanced monitoring",
        "Custom namespaces",
        "Automated backups"
      ],
      buttonText: "Start Trial",
      popular: true
    },
    {
      name: "Teams",
      price: "20,000",
      description: "For large-scale production deployments",
      features: [
        "Unlimited virtual clusters",
        "32 CPU cores",
        "64GB RAM",
        "24/7 dedicated support",
        "Custom monitoring solutions",
        "High availability setup",
        "Disaster recovery",
        "Custom SLA"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-4xl md:text-6xl font-bold">
          Launch Your Virtual 
          <span className="inline-block bg-black text-white px-6  mx-2">
            Clusters
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 text-center py-6  ">
          Scale your Kubernetes development with vcluster technology
        </p>

       
      </div>


        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${
                plan.popular ? 'border-blue-500 border-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {plan.price === "0" ? "Free" : `${plan.price} CFA`}
                  </span>
                  {plan.price !== "0" && <span className="text-gray-600">/month</span>}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;