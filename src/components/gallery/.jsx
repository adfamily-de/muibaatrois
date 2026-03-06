import React from "react";

// Hero slides
import Hero1 from "../assets/images/hero-slide-1.jpg";
import Hero2 from "../assets/images/hero-slide-2.jpg";
import Hero3 from "../assets/images/hero-slide-3.jpg";

// Combos
import Combo1 from "../assets/images/combo-1.jpg";
import Combo2 from "../assets/images/combo-2.jpg";
import Combo3 from "../assets/images/combo-3.jpg";

// Instagram
import Insta1 from "../assets/images/instagram-1.jpg";
import Insta2 from "../assets/images/instagram-2.jpg";
import Insta3 from "../assets/images/instagram-3.jpg";
import Insta4 from "../assets/images/instagram-4.jpg";
import Insta5 from "../assets/images/instagram-5.jpg";
import Insta6 from "../assets/images/instagram-6.jpg";

// Produtos
import Prod1 from "../assets/images/product-1.jpg";
import Prod2 from "../assets/images/product-2.jpg";
import Prod3 from "../assets/images/product-3.jpg";
import Prod4 from "../assets/images/product-4.jpg";

// Serviços
import Serv1 from "../assets/images/service-acessorios.jpg";
import Serv2 from "../assets/images/service-lavagem.jpg";
import Serv3 from "../assets/images/service-moda.jpg";
import Serv4 from "../assets/images/service-trancas.jpg";

// Testemunhos
import Test1 from "../assets/images/testimonial-1.jpg";
import Test2 from "../assets/images/testimonial-2.jpg";
import Test3 from "../assets/images/testimonial-3.jpg";

// Componente de seção genérico
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

// Componente principal
export default function Gallery() {
  return (
    <div className="px-4 sm:px-6 lg:px-16">
      <GallerySection title="Hero Slides" images={[Hero1, Hero2, Hero3]} />
      <GallerySection title="Combos" images={[Combo1, Combo2, Combo3]} />
      <GallerySection title="Instagram" images={[Insta1, Insta2, Insta3, Insta4, Insta5, Insta6]} />
      <GallerySection title="Products" images={[Prod1, Prod2, Prod3, Prod4]} />
      <GallerySection title="Services" images={[Serv1, Serv2, Serv3, Serv4]} />
      <GallerySection title="Testimonials" images={[Test1, Test2, Test3]} />
    </div>
  );
            }
