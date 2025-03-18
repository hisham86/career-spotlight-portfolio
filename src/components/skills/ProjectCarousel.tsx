
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ZoomIn } from 'lucide-react';

const projectImages = [
  "/lovable-uploads/47332e94-aa74-4456-a2f4-7362664bd640.png",
  "/lovable-uploads/ab387aa0-1470-4078-a552-ed46f9badd64.png",
  "/lovable-uploads/12a3a2c0-b0ce-4da3-be08-e98b9a01db1c.png",
  "/lovable-uploads/c224a53f-51b6-4fcf-992b-3d6628294533.png",
  "/lovable-uploads/cc8d0ef9-d6ac-48d9-ac93-32c155fb406b.png",
  "/lovable-uploads/ed2c37ba-e243-458d-862d-a0b2a74f074a.png",
  "/lovable-uploads/3e1a2ad7-996f-4c1c-a083-74b8012eadb8.png",
  "/lovable-uploads/fdd2ed2a-4175-40ce-b61a-5ea03f36e236.png",
  "/lovable-uploads/13ad04ed-d004-408c-8ff7-8fb91f3e60e8.png",
  "/lovable-uploads/50eaf6ae-1674-45b2-ae2f-83f5cdf290bf.png",
  "/lovable-uploads/57533bcd-e670-449e-8639-71859a7e2cd8.png",
  "/lovable-uploads/82edc845-685a-4334-bb23-5e5cb144ba6f.png",
  "/lovable-uploads/1944fb36-696d-4f92-aeec-609539fbe6f3.png"
];

const ProjectCarousel = () => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setOpenImage(imageSrc);
  };

  const handleCloseDialog = () => {
    setOpenImage(null);
  };

  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold mb-6 text-center">Launched Online Campaigns</h3>
      
      <div className="relative max-w-5xl mx-auto px-10">
        <Carousel className="w-full">
          <CarouselContent>
            {projectImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative group p-1">
                  <div className="overflow-hidden rounded-lg border border-border">
                    <div 
                      className="h-64 bg-cover bg-center cursor-pointer relative group"
                      style={{ backgroundImage: `url(${image})` }}
                      onClick={() => handleImageClick(image)}
                    >
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="text-white h-8 w-8" />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-background/80 hover:bg-background border-primary text-primary" />
          <CarouselNext className="right-0 bg-background/80 hover:bg-background border-primary text-primary" />
        </Carousel>
      </div>

      <Dialog open={!!openImage} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
          <ScrollArea className="max-h-[85vh] w-full">
            {openImage && (
              <img 
                src={openImage} 
                alt="Zoomed project" 
                className="w-full h-auto"
              />
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectCarousel;
