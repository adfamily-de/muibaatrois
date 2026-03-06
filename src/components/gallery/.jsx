
import React from "react";

// Imagens
import Hero1 from "../assets/images/hero-slide-1.jpg";
import Hero2 from "../assets/images/hero-slide-2.jpg";
import Hero3 from "../assets/images/hero-slide-3.jpg";

import Combo1 from "../assets/images/combo-1.jpg";
import Combo2 from "../assets/images/combo-2.jpg";
import Combo3 from "../assets/images/combo-3.jpg";

// Exemplo de componente para uma seção
function GallerySection({ title, images }) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} ${i + 1}`}
            className="w-48 h-auto rounded-lg shadow-md object-cover"
          />
        ))}
      </div>
    </section>
  );
}

export default function Gallery() {
  return (
    <div className="px-4 sm:px-6 lg:px-16">
      <GallerySection title="Hero Slides" images={[Hero1, Hero2, Hero3]} />
      <GallerySection title="Combos" images={[Combo1, Combo2, Combo3]} />
      {/* Adicione aqui Instagram, Produtos, Serviços, Testemunhos */}
    </div>
  );
}
