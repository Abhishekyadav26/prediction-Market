"use client"
import { useReadContract } from "thirdweb/react";
import { Navbar } from "./Navbar";
import { predictionMartketContractContract } from "@/app/constants/contracts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { MarketCardSkeleton } from "./skeletonCards";
import MarketCard from "@/components/marketCard";

export default function PredictionMartketDashboard() {
    const { data: marketCount, isLoading: isLoadingmarketCount } = useReadContract({
        contract: predictionMartketContractContract,
        method: "function marketCount() view returns (uint256)",
        params: [],
    });

    const skeltonCards = Array.from ({length : 6}, (_,index)=>{
        <MarketCardSkeleton key={index}/>
    })

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow container mx-auto p-4">
                <Navbar />
                <Tabs>
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="pending">Pending Resolution</TabsTrigger>
                    <TabsTrigger value="resolved">Resolved</TabsTrigger>
                    {isLoadingmarketCount ? (
                        <TabsContent value="active" className="mt-6">
                              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {skeltonCards}
                              </div>
                        </TabsContent>
                    ) : (
                        <>
                           <TabsContent value="active">
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {
                                    Array.from({ length: Number(marketCount)}, (_, index)=>(
                                        <MarketCard 
                                            key={index}
                                            index={index} 
                                            filter="active"
                                        />
                                    ))
                                }
                            </div>
                           </TabsContent>

                           <TabsContent value="Pending">
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {
                                    Array.from({ length: Number(marketCount)}, (_, index)=>(
                                        <MarketCard
                                            key={index}
                                            index={index} 
                                            filter="pending"
                                        />
                                    ))
                                }
                            </div>
                           </TabsContent>

                           <TabsContent value="Resolved">
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {
                                    Array.from({ length: Number(marketCount)}, (_, index)=>(
                                        <MarketCard 
                                            key={index}
                                            index={index} 
                                            filter="resolved"
                                        />
                                    ))
                                }
                            </div>
                           </TabsContent>
                        </>
                    )}
                </TabsList>
                </Tabs>
            </div>
        </div>
    )
}