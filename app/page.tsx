// Make page client component for Tremor 2.0
'use client'

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import { redirect } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Home() {
  // const [coords, setCoords] = useState();
  // useEffect (()=> {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //     setCoords
  //   });
  // })
  redirect('/location/New%20York%20City/40.71427000/-74.00597000');
  // return (
  //   <div className="min-h-screen bg-gradient-to-t from-[#d8e6ff] to-[#ffffff] p-10 flex flex-col justify-center items-center">
  //     <Card className="max-w-4xl mx-auto">
  //       <Text className="text-6xl font-bold text-center mb-10">Weatherall</Text>
  //       <Subtitle className="text-xl text-center">Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0 + More!</Subtitle>

  //       <Divider className="my-10" />

  //       <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
  //         <CityPicker />
  //       </Card>
  //     </Card>
  //   </div>
  // )
}
