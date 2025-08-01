import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import footSrc from '@images/Hauptgerichte-416x234.jpg';

export default function CustomCarousel() {
  return (
    <div className="custom-carousel py-4">
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
            >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card>
                        <CardContent className="flex flex-col items-center justify-between p-0">
                            <img src={footSrc} className="w-full" alt="Food image" />
                            <div className="w-full flex flex-row justify-start p-4">
                                <h2 className="text-2xl">Spaghetti Bolognese</h2>
                            </div>
                            <span className="hidden text-xl">{index + 1}</span>
                        </CardContent>
                    </Card>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}