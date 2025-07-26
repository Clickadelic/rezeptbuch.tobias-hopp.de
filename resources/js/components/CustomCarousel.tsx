import { Card, CardContent } from "@/Components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/Components/ui/carousel"

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
                    <div>
                    <Card>
                        <CardContent className="flex flex-col items-center justify-between p-0 border-tl-rounded border-tr-rounded overflow-hidden">
                            <img src={footSrc} className="w-full border-tl-rounded border-tr-rounded" alt="Food image" />
                            <div className="w-full flex flex-row justify-start px-2 py-4">
                                <h2 className="text-2xl font-semibold">Spaghetti Bolognese</h2>
                            </div>
                            <span className="hidden text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}