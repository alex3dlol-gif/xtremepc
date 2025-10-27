import React, { useState } from "react";
import { Card } from "./ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ReviewsSlider() {
  const reviews = [
    "/rewie/Снимок экрана 2025-10-27 150007.png",
    "/rewie/Снимок экрана 2025-10-27 145948.png",
    "/rewie/Снимок экрана 2025-10-27 145927.png",
    "/rewie/Снимок экрана 2025-10-27 145908.png",
    "/rewie/Снимок экрана 2025-10-27 145847.png",
    "/rewie/Снимок экрана 2025-10-27 145801.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-6 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl mb-3">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ОТЗЫВЫ
              </span>
            <span className="block mt-2">НАШИХ КЛИЕНТОВ</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="relative overflow-hidden bg-card border-primary/20">
            <div className="relative aspect-[4/3]">
              <img
                src={reviews[currentIndex]}
                alt={`Review ${currentIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {reviews.length > 1 && (
                <>
                  <div
                    onClick={prevSlide}
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#333',
                      zIndex: 10,
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)'}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </div>
                  <div
                    onClick={nextSlide}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#333',
                      zIndex: 10,
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)'}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </div>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex
                            ? 'bg-primary w-8'
                            : 'bg-gray-400 hover:bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

