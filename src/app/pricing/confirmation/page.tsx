"use client"
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Home, ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';
const SubscriptionConfirmation = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50  -mt-14">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Merci pour votre abonnement !
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Veuillez vérifier votre boîte de réception dans environ une heure.
              Nous vous enverrons un email contenant les informations importantes
              concernant votre abonnement
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-700">
                Si vous ne recevez pas l'email dans l'heure qui suit,
                veuillez vérifier votre dossier spam.
              </p>
            </div>
          </div>

          <Button 
           onClick={handleNavigate}
            className="w-full flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <ArrowRight className="w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionConfirmation;