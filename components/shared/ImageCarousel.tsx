'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { getCloudinaryUrl, IMAGE_SIZES } from '@/lib/cloudinary';
import { Button } from '@/components/ui/button';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <>
      {/* Carousel */}
      <div className="relative group">
        {/* Main Image */}
        <div 
          className="relative aspect-video rounded-lg overflow-hidden bg-muted cursor-pointer"
          onClick={() => setIsFullscreen(true)}
        >
          {images[currentIndex] && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
            <Image
              src={getCloudinaryUrl(images[currentIndex], {
                width: IMAGE_SIZES.hero,
              })}
              alt={`${alt} - ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Image {currentIndex + 1}</p>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}

        {/* Counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 h-20 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                index === currentIndex
                  ? 'border-cyan-500 scale-105'
                  : 'border-border opacity-50 hover:opacity-100'
              }`}
            >
              {image && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
                <Image
                  src={getCloudinaryUrl(image, { width: 200 })}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <span className="text-xs">{index + 1}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 z-10"
          >
            <X className="w-6 h-6" />
          </Button>

          <div className="relative w-full h-full max-w-6xl max-h-full">
            {images[currentIndex] && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
              <Image
                src={getCloudinaryUrl(images[currentIndex], {
                  width: IMAGE_SIZES.full,
                })}
                alt={`${alt} - ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Image {currentIndex + 1}</p>
              </div>
            )}
          </div>

          {/* Fullscreen Navigation */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </>
          )}
        </div>
      )}
    </>
  );
}