import Gallery from "./components/galeria/gallery";

function App() {
  return (
    <div className="App">
      <Gallery />
    </div>
  );
}

export default App;
import { useState, useEffect } from 'react'
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  ChevronLeft, 
  ChevronRight,
  Star,
  Scissors,
  ShoppingBag,
  Sparkles,
  Menu,
  X,
  Calendar,
  Check,
  ArrowRight,
  MessageCircle,
  Gem,
  Shirt
} from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import './App.css'

// WhatsApp integration
const WHATSAPP_MAIN = '+258847640849'
const WHATSAPP_SECONDARY = '+258872221549'

const openWhatsApp = (phone: string, message: string) => {
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
}

// Hero slides data
const heroSlides = [
  {
    image: '/images/hero-slide-1.jpg',
    title: 'Seu cabelo, sua coroa',
    subtitle: 'Onde a beleza do cabelo encontra o estilo da moda',
    cta1: 'Agendar no Salão',
    cta2: 'Ver Boutique',
  },
  {
    image: '/images/hero-slide-2.jpg',
    title: 'Moda que empodera',
    subtitle: 'Descubra as últimas tendências em moda feminina',
    cta1: 'Ver Coleção',
    cta2: 'Fazer Marcação',
  },
  {
    image: '/images/hero-slide-3.jpg',
    title: 'Terça da Lavagem',
    subtitle: '20% de desconto em todas as lavagens',
    cta1: 'Aproveitar no WhatsApp',
    cta2: 'Ver Serviços',
  },
]

// Services data
const services = [
  {
    id: 1,
    title: 'Lavagem & Tratamentos',
    description: 'Cuidados especiais para seu cabelo com produtos de qualidade',
    image: '/images/service-lavagem.jpg',
    icon: Sparkles,
  },
  {
    id: 2,
    title: 'Tranças Africanas',
    description: 'Box braids, twists, cornrows e muito mais',
    image: '/images/service-trancas.jpg',
    icon: Scissors,
  },
  {
    id: 3,
    title: 'Moda Trend',
    description: 'As últimas tendências em moda feminina',
    image: '/images/service-moda.jpg',
    icon: Shirt,
  },
  {
    id: 4,
    title: 'Acessórios',
    description: 'Bijuterias finas, bolsas e complementos',
    image: '/images/service-acessorios.jpg',
    icon: Gem,
  },
]

// Combos data
const combos = [
  {
    id: 1,
    name: 'Combo Básico',
    services: ['Lavagem simples', 'Escova modeladora'],
    originalPrice: 600,
    comboPrice: 500,
    savings: 100,
    image: '/images/combo-1.jpg',
  },
  {
    id: 2,
    name: 'Combo Hidratação',
    services: ['Lavagem completa', 'Hidratação profunda'],
    originalPrice: 750,
    comboPrice: 650,
    savings: 100,
    image: '/images/combo-2.jpg',
  },
  {
    id: 3,
    name: 'Combo Trança Perfeita',
    services: ['Lavagem pré-trança', 'Box Braids'],
    originalPrice: 2800,
    comboPrice: 2500,
    savings: 300,
    image: '/images/combo-3.jpg',
  },
]

// Products data
const products = [
  {
    id: 1,
    name: 'Vestido Floral Tropical',
    price: 2500,
    image: '/images/product-1.jpg',
    category: 'Vestidos',
    isNew: true,
  },
  {
    id: 2,
    name: 'Blusa Elegante Seda',
    price: 1800,
    image: '/images/product-2.jpg',
    category: 'Blusas',
    isNew: false,
  },
  {
    id: 3,
    name: 'Jumpsuit Casual',
    price: 3200,
    image: '/images/product-3.jpg',
    category: 'Macacões',
    isNew: true,
  },
  {
    id: 4,
    name: 'Conjunto Dourado',
    price: 1500,
    image: '/images/product-4.jpg',
    category: 'Acessórios',
    isNew: false,
  },
]

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    text: 'A melhor experiência em salão de beleza! As meninas são super profissionais e atenciosas. Minhas tranças ficaram perfeitas!',
    rating: 5,
    image: '/images/testimonial-1.jpg',
    service: 'Box Braids',
  },
  {
    id: 2,
    name: 'Maria Santos',
    text: 'Adorei a boutique! Encontrei peças lindas e exclusivas. O atendimento é impecável e o ambiente é super acolhedor.',
    rating: 5,
    image: '/images/testimonial-2.jpg',
    service: 'Moda Boutique',
  },
  {
    id: 3,
    name: 'Joana Costa',
    text: 'O combo de hidratação é maravilhoso! Meu cabelo nunca esteve tão saudável. Recomendo a todas!',
    rating: 5,
    image: '/images/testimonial-3.jpg',
    service: 'Combo Hidratação',
  },
]

// Instagram feed data
const instagramFeed = [
  '/images/instagram-1.jpg',
  '/images/instagram-2.jpg',
  '/images/instagram-3.jpg',
  '/images/instagram-4.jpg',
  '/images/instagram-5.jpg',
  '/images/instagram-6.jpg',
]

// FAQ data
const faqData = [
  {
    question: 'Como faço para agendar um serviço?',
    answer: 'Você pode agendar pelo WhatsApp (+258 847640849), pelo formulário de marcação no site ou ligando diretamente para o salão.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos dinheiro, transferência bancária, M-Pesa, M-Kesh e eMola.',
  },
  {
    question: 'Qual o prazo para trocas na boutique?',
    answer: 'Você tem até 7 dias para trocar peças, desde que estejam com a etiqueta e sem sinais de uso.',
  },
  {
    question: 'Preciso agendar com antecedência?',
    answer: 'Recomendamos agendar com pelo menos 2 dias de antecedência, especialmente para serviços de tranças e penteados.',
  },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [bookingDate, setBookingDate] = useState<Date | undefined>(undefined)
  const [showBookingDialog, setShowBookingDialog] = useState(false)

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-advance hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen bg-bege-claro">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <Sparkles className={`w-8 h-8 ${isScrolled ? 'text-terracotta' : 'text-white'}`} />
              <span className={`font-display text-2xl font-bold ${isScrolled ? 'text-preto' : 'text-white'}`}>
                Beleza <span className="text-terracotta">Divina</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {['Início', 'Serviços', 'Combos', 'Boutique', 'Depoimentos', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors hover:text-terracotta ${
                    isScrolled ? 'text-preto' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => openWhatsApp(WHATSAPP_MAIN, 'Olá! Gostaria de fazer uma marcação no Beleza Divina.')}
                className="btn-whatsapp text-sm"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? 'text-preto' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="section-padding py-4 space-y-4">
              {['Início', 'Serviços', 'Combos', 'Boutique', 'Depoimentos', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-medium text-preto hover:text-terracotta transition-colors"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => openWhatsApp(WHATSAPP_MAIN, 'Olá! Gostaria de fazer uma marcação no Beleza Divina.')}
                className="btn-whatsapp w-full"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="início" className="relative h-screen overflow-hidden">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative h-full flex items-center section-padding">
          <div className="max-w-2xl text-white pt-20">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openWhatsApp(WHATSAPP_MAIN, `Olá! Vi no site: ${heroSlides[currentSlide].title} e gostaria de agendar.`)}
                className="btn-primary"
              >
                {heroSlides[currentSlide].cta1}
              </button>
              <a 
                href="#serviços" 
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                {heroSlides[currentSlide].cta2}
              </a>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-terracotta w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-20 section-padding">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-terracotta">Nossos Serviços</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-preto mt-2">
            Beleza & Estilo
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Oferecemos uma experiência completa de beleza, desde cuidados capilares até as últimas tendências em moda feminina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl shadow-tropical hover:shadow-tropical-lg transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <service.icon className="w-10 h-10 mb-3 text-terracotta" />
                <h3 className="font-display text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm mb-4">{service.description}</p>
                <button
                  onClick={() => openWhatsApp(WHATSAPP_MAIN, `Olá! Tenho interesse em ${service.title}. Pode me dar mais informações?`)}
                  className="inline-flex items-center gap-2 text-terracotta font-medium hover:gap-3 transition-all"
                >
                  Saber mais <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Combine Section */}
      <section className="py-20 bg-verde-tropical/10">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-tropical-lg">
                <img
                  src="/images/combo-1.jpg"
                  alt="Combine Beleza + Estilo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-terracotta text-white p-6 rounded-2xl shadow-xl">
                <p className="font-script text-2xl">10% OFF</p>
                <p className="text-sm">na boutique</p>
              </div>
            </div>
            <div>
              <span className="font-script text-3xl text-terracotta">Promoção Especial</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-preto mt-2 mb-6">
                Combine Beleza + Estilo
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Agende seu penteado no salão e ganhe <span className="font-bold text-terracotta">10% de desconto</span> em qualquer peça da boutique!
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Válido para todos os serviços de cabelo',
                  'Desconto aplicado na mesma visita',
                  'Não cumulativo com outras promoções',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-verde-tropical" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openWhatsApp(WHATSAPP_MAIN, 'Olá! Quero aproveitar a promoção Combine Beleza + Estilo. Gostaria de agendar!')}
                className="btn-primary"
              >
                <Sparkles className="w-5 h-5" />
                Aproveitar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Combos Section */}
      <section id="combos" className="py-20 section-padding">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-terracotta">Economize</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-preto mt-2">
            Combos Especiais
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Aproveite nossos combos exclusivos e economize nos seus cuidados de beleza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-verde-tropical text-white px-3 py-1 rounded-full text-sm font-medium">
                  Economize {combo.savings} MZN
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-preto mb-3">{combo.name}</h3>
                <ul className="space-y-2 mb-4">
                  {combo.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-4 h-4 text-verde-tropical" />
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-muted-foreground line-through">{combo.originalPrice} MZN</span>
                  <span className="font-display text-3xl font-bold text-terracotta">{combo.comboPrice} MZN</span>
                </div>
                <button
                  onClick={() => openWhatsApp(WHATSAPP_MAIN, `Olá! Quero agendar o ${combo.name}. Preço: ${combo.comboPrice} MZN`)}
                  className="btn-secondary w-full"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar Combo
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-terracotta/10">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-script text-3xl text-terracotta">Marcações</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-preto mt-2 mb-6">
              Agende seu Horário
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Escolha o serviço, dia e horário que melhor se adequa à sua agenda. Entraremos em contato para confirmar sua marcação.
            </p>
            
            <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
              <DialogTrigger asChild>
                <button className="btn-primary text-lg px-8 py-4">
                  <Calendar className="w-5 h-5" />
                  Fazer Marcação Online
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl">Agendar Serviço</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" placeholder="Seu nome" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Contacto (WhatsApp)</Label>
                    <Input id="phone" placeholder="+258 __ ___ ____" />
                  </div>
                  <div>
                    <Label>Serviço desejado</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lavagem">Lavagem & Tratamentos</SelectItem>
                        <SelectItem value="trancas">Tranças Africanas</SelectItem>
                        <SelectItem value="maquiagem">Maquiagem</SelectItem>
                        <SelectItem value="unhas">Manicure & Pedicure</SelectItem>
                        <SelectItem value="combo">Combo Especial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Data preferida</Label>
                    <CalendarComponent
                      mode="single"
                      selected={bookingDate}
                      onSelect={setBookingDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                    />
                  </div>
                  <div>
                    <Label htmlFor="notes">Observações</Label>
                    <Textarea id="notes" placeholder="Alguma informação adicional..." />
                  </div>
                  <button
                    onClick={() => {
                      setShowBookingDialog(false)
                      openWhatsApp(WHATSAPP_MAIN, 'Olá! Fiz uma marcação pelo site. Aguardo confirmação. Obrigada!')
                    }}
                    className="btn-primary w-full"
                  >
                    Confirmar via WhatsApp
                  </button>
                </div>
              </DialogContent>
            </Dialog>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <Phone className="w-10 h-10 text-terracotta mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Por Telefone</h3>
                <p className="text-muted-foreground">+258 847640849</p>
                <p className="text-muted-foreground">+258 872221549</p>
              </div>
              <div className="glass-card p-6">
                <Clock className="w-10 h-10 text-terracotta mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Horário</h3>
                <p className="text-muted-foreground">Seg-Sex: 8h às 18h</p>
                <p className="text-muted-foreground">Sábado: 9h às 16h</p>
              </div>
              <div className="glass-card p-6">
                <MapPin className="w-10 h-10 text-terracotta mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Localização</h3>
                <p className="text-muted-foreground">Maputo, Moçambique</p>
                <p className="text-muted-foreground">Centro da cidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique Section */}
      <section id="boutique" className="py-20 section-padding">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-terracotta">Nova Coleção</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-preto mt-2">
            Produtos em Destaque
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Descubra as últimas tendências em moda feminina e acessórios exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-tropical hover:shadow-tropical-lg transition-all duration-500"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-verde-tropical text-white px-3 py-1 rounded-full text-sm font-medium">
                    Novo
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openWhatsApp(WHATSAPP_SECONDARY, `Olá! Quero comprar: ${product.name} - ${product.price} MZN. Tem disponível?`)}
                    className="btn-whatsapp transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Comprar no WhatsApp
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <h3 className="font-display text-lg font-bold text-preto">{product.name}</h3>
                <p className="font-display text-xl font-bold text-terracotta mt-2">
                  {product.price.toLocaleString()} MZN
                </p>
                <p className="text-sm text-muted-foreground">
                  ou 3x de {Math.round(product.price / 3).toLocaleString()} MZN
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => openWhatsApp(WHATSAPP_SECONDARY, 'Olá! Gostaria de ver mais produtos da boutique. Pode me enviar o catálogo?')}
            className="btn-secondary"
          >
            <ShoppingBag className="w-5 h-5" />
            Ver Mais Produtos
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-verde-tropical/10">
        <div className="section-padding">
          <div className="text-center mb-16">
            <span className="font-script text-3xl text-terracotta">Clientes Satisfeitas</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-preto mt-2">
              O que dizem sobre nós
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="glass-card p-8 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-dourado text-dourado" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-display font-bold text-preto">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 section-padding">
        <div className="text-center mb-12">
          <Instagram className="w-10 h-10 text-terracotta mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-preto">
            Siga-nos no Instagram
          </h2>
          <p className="text-muted-foreground mt-2">@belezadivina</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramFeed.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com/belezadivina"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded-lg group"
            >
              <img
                src={image}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </a>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-terracotta/10">
        <div className="section-padding max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-script text-3xl text-terracotta">Dúvidas</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-preto mt-2">
              Perguntas Frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6 border-none">
                <AccordionTrigger className="font-display text-lg text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-script text-3xl text-terracotta">Fale Connosco</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-preto mt-2">
              Entre em Contacto
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-terracotta/10 rounded-lg">
                  <Phone className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Telefone</h3>
                  <p className="text-muted-foreground">+258 847640849</p>
                  <p className="text-muted-foreground">+258 872221549</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-terracotta/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Endereço</h3>
                  <p className="text-muted-foreground">Maputo, Moçambique</p>
                  <p className="text-muted-foreground">Centro da cidade</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-terracotta/10 rounded-lg">
                  <Clock className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-muted-foreground">Sábado: 9h às 16h</p>
                  <p className="text-muted-foreground">Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-display font-bold text-xl mb-4">Envie uma mensagem</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Nome</Label>
                  <Input id="contact-name" placeholder="Seu nome" />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <Label htmlFor="contact-message">Mensagem</Label>
                  <Textarea id="contact-message" placeholder="Sua mensagem..." rows={4} />
                </div>
                <button
                  onClick={() => openWhatsApp(WHATSAPP_MAIN, 'Olá! Enviei uma mensagem pelo site. Aguardo resposta. Obrigada!')}
                  className="btn-primary w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar pelo WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-preto text-white py-16">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-8 h-8 text-terracotta" />
                <span className="font-display text-2xl font-bold">
                  Beleza <span className="text-terracotta">Divina</span>
                </span>
              </div>
              <p className="text-white/70 mb-6">
                Onde a beleza do cabelo encontra o estilo da moda. Sua jornada de transformação começa aqui.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/belezadivina" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-terracotta transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/belezadivina" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-terracotta transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {['Início', 'Serviços', 'Combos', 'Boutique', 'Contacto'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-terracotta transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Serviços</h4>
              <ul className="space-y-3">
                {['Lavagem & Tratamentos', 'Tranças Africanas', 'Maquiagem', 'Manicure & Pedicure', 'Moda Feminina'].map((item) => (
                  <li key={item}>
                    <a href="#serviços" className="text-white/70 hover:text-terracotta transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Contacto</h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-terracotta" />
                  +258 847640849
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-terracotta" />
                  +258 872221549
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-terracotta" />
                  Maputo, Moçambique
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-terracotta" />
                  Seg-Sáb: 8h-18h
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
            <p>&copy; 2024 Beleza Divina. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <button
            onClick={() => openWhatsApp(WHATSAPP_MAIN, 'Olá! Vim pelo site e gostaria de mais informações sobre os serviços da Beleza Divina.')}
            className="btn-whatsapp shadow-2xl hover:scale-110 transition-transform"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="hidden sm:inline">Fale Connosco</span>
          </button>
          <div className="absolute bottom-full right-0 mb-2 w-64 bg-white rounded-lg shadow-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <p className="text-sm text-preto font-medium">Precisa de ajuda?</p>
            <p className="text-xs text-muted-foreground">Estamos online! Clique para conversar.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
