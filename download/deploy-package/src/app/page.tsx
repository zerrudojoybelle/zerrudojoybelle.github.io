"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ============================================
// DEMO WEBSITE COMPONENTS (Modal-based)
// ============================================

// Cat Blog Demo
function CatBlogDemo({ onClose }: { onClose: () => void }) {
  const catBreeds = [
    { name: "Persian", rarity: "Common", origin: "Iran", temperament: "Calm, Quiet", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop", description: "Known for their long fur and flat faces." },
    { name: "Siamese", rarity: "Common", origin: "Thailand", temperament: "Vocal, Social", image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=300&fit=crop", description: "Distinctive blue almond-shaped eyes." },
    { name: "Bengal", rarity: "Rare", origin: "USA", temperament: "Active, Playful", image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop", description: "Wild-looking spotted or marbled coat." },
    { name: "Savannah", rarity: "Legendary", origin: "USA", temperament: "Intelligent, Curious", image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=300&fit=crop", description: "Exotic hybrid with wild African roots." },
    { name: "Maine Coon", rarity: "Uncommon", origin: "USA", temperament: "Gentle, Friendly", image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=300&fit=crop", description: "One of the largest domestic cat breeds." },
    { name: "Scottish Fold", rarity: "Rare", origin: "Scotland", temperament: "Sweet, Affectionate", image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=400&h=300&fit=crop", description: "Famous for their folded ears." },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "bg-gray-200 text-gray-700";
      case "Uncommon": return "bg-green-100 text-green-700";
      case "Rare": return "bg-blue-100 text-blue-700";
      case "Legendary": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#F0F0F0] px-6 py-4 flex justify-between items-center z-10">
          <h1 className="font-heading text-xl font-bold text-[#1A1A1A]">🐱 Cat Encyclopedia</h1>
          <button onClick={onClose} className="text-[#6B7280] hover:text-[#1A1A1A] text-2xl">&times;</button>
        </div>
        
        {/* Hero */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-[#1A1A1A] mb-2">Discover the World of Cats</h2>
          <p className="text-[#6B7280]">Explore different breeds, their rarity, and unique characteristics</p>
        </div>

        {/* Blog Posts */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catBreeds.map((cat, index) => (
              <div key={index} className="bg-white border border-[#F0F0F0] rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image src={cat.image} alt={cat.name} fill unoptimized className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading font-bold text-lg text-[#1A1A1A]">{cat.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${getRarityColor(cat.rarity)}`}>{cat.rarity}</span>
                  </div>
                  <p className="text-sm text-[#6B7280] mb-2">{cat.description}</p>
                  <div className="flex gap-4 text-xs text-[#6B7280]">
                    <span>📍 {cat.origin}</span>
                    <span>💝 {cat.temperament}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Hair Clips Shop Demo
function HairClipsShopDemo({ onClose }: { onClose: () => void }) {
  const products = [
    { name: "Pearl Cascade Clip", price: 299, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop", category: "Premium" },
    { name: "Floral Garden Set", price: 199, image: "https://images.unsplash.com/photo-1615529179035-e760f5d96e9e?w=400&h=400&fit=crop", category: "Bestseller" },
    { name: "Minimalist Gold Bar", price: 149, image: "https://images.unsplash.com/photo-1611082033019-1d611d2d0d30?w=400&h=400&fit=crop", category: "New" },
    { name: "Butterfly Dream", price: 249, image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop", category: "Popular" },
  ];

  const qrCode = "https://api.qrserver.com/api/v1/create-qr-code/?size=200x200&data=GCash%3A09171234567%20Belle%20Zerrudo%20Hair%20Clips%20Shop";

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#F0F0F0] px-6 py-4 flex justify-between items-center z-10">
          <h1 className="font-heading text-xl font-bold text-[#1A1A1A]">✨ Belle&apos;s Artisan Hair Clips</h1>
          <button onClick={onClose} className="text-[#6B7280] hover:text-[#1A1A1A] text-2xl">&times;</button>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-[#1A1A1A] mb-2">Handcrafted with Love 💕</h2>
          <p className="text-[#6B7280]">Unique artisan hair accessories made in Cavite, Philippines</p>
        </div>

        {/* Products Grid */}
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-[#1A1A1A] mb-4">Our Collection</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-[#F0F0F0] rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-40 relative">
                  <Image src={product.image} alt={product.name} fill unoptimized className="object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute top-2 left-2 bg-[#F4C430] text-xs px-2 py-1 rounded-full text-[#1A1A1A] font-medium">{product.category}</span>
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-sm text-[#1A1A1A]">{product.name}</h4>
                  <p className="text-[#F4C430] font-bold">₱{product.price}</p>
                  <button className="w-full mt-2 bg-[#1A1A1A] text-white text-xs py-2 rounded-full hover:bg-[#333] transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Section */}
          <div className="bg-[#FFF8E1] rounded-xl p-6 text-center">
            <h3 className="font-heading text-lg font-bold text-[#1A1A1A] mb-2">💳 Scan to Pay with GCash</h3>
            <p className="text-sm text-[#6B7280] mb-4">Quick and secure payment via QR code</p>
            <div className="inline-block bg-white p-4 rounded-xl shadow-sm">
              <Image src={qrCode} alt="GCash QR Code" unoptimized width={180} height={180} />
            </div>
            <p className="text-xs text-[#6B7280] mt-3">GCash: 0917-123-4567 • Belle Zerrudo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Real Estate Demo
function RealEstateDemo({ onClose }: { onClose: () => void }) {
  const properties = [
    { name: "Modern Villa", location: "Tagaytay City", price: "₱15M", beds: 4, baths: 3, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop" },
    { name: "Cozy Condo Unit", location: "Makati CBD", price: "₱8.5M", beds: 2, baths: 2, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop" },
    { name: "Beach House", location: "Batangas", price: "₱12M", beds: 3, baths: 2, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop" },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8">
        {/* Header */}
        <div className="sticky top-0 bg-[#1A1A1A] text-white px-6 py-4 flex justify-between items-center z-10">
          <h1 className="font-heading text-xl font-bold">🏠 Prime Realty PH</h1>
          <button onClick={onClose} className="text-white/70 hover:text-white text-2xl">&times;</button>
        </div>

        {/* Hero */}
        <div className="relative h-64">
          <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=400&fit=crop" alt="Real Estate" fill unoptimized className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white">
              <h2 className="font-heading text-3xl font-bold mb-2">Find Your Dream Home</h2>
              <p className="text-white/80">Premium properties across the Philippines</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#F4C430] p-6 text-center">
          <p className="font-heading font-bold text-lg text-[#1A1A1A]">📞 Schedule a Viewing Today! Call: +63 917-123-4567</p>
        </div>

        {/* Properties */}
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-[#1A1A1A] mb-4">Featured Properties</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <div key={index} className="bg-white border border-[#F0F0F0] rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 relative">
                  <Image src={property.image} alt={property.name} fill unoptimized className="object-cover" />
                  <span className="absolute top-3 right-3 bg-[#F4C430] text-[#1A1A1A] font-bold px-3 py-1 rounded-full text-sm">{property.price}</span>
                </div>
                <div className="p-4">
                  <h4 className="font-heading font-bold text-lg text-[#1A1A1A]">{property.name}</h4>
                  <p className="text-sm text-[#6B7280]">📍 {property.location}</p>
                  <div className="flex gap-4 mt-2 text-sm text-[#6B7280]">
                    <span>🛏 {property.beds} Beds</span>
                    <span>🚿 {property.baths} Baths</span>
                  </div>
                  <button className="w-full mt-4 bg-[#1A1A1A] text-white py-2 rounded-full text-sm hover:bg-[#333] transition-colors">
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Business Website Demo
function BusinessWebsiteDemo({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#F0F0F0] px-6 py-4 flex justify-between items-center z-10">
          <h1 className="font-heading text-xl font-bold text-[#1A1A1A]">☕ Brew & Bean Café</h1>
          <button onClick={onClose} className="text-[#6B7280] hover:text-[#1A1A1A] text-2xl">&times;</button>
        </div>

        {/* Hero */}
        <div className="relative h-72">
          <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=500&fit=crop" alt="Café" fill unoptimized className="object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="font-heading text-4xl font-bold mb-2">Brew & Bean Café</h2>
              <p className="text-white/90">Your neighborhood coffee haven since 2020</p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="p-8 bg-[#FFF8E1]">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold text-[#1A1A1A] mb-4">Our Story</h3>
            <p className="text-[#6B7280] leading-relaxed">Founded in Bacoor, Cavite, Brew & Bean started as a small dream to bring quality coffee to our community. Every cup is crafted with passion, using beans sourced from local Philippine farmers.</p>
          </div>
        </div>

        {/* Services */}
        <div className="p-8">
          <h3 className="font-heading text-xl font-bold text-[#1A1A1A] text-center mb-6">What We Offer</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#FAFAFA] rounded-xl">
              <div className="text-4xl mb-3">☕</div>
              <h4 className="font-heading font-bold text-[#1A1A1A] mb-2">Artisan Coffee</h4>
              <p className="text-sm text-[#6B7280]">Handcrafted beverages made with love</p>
            </div>
            <div className="text-center p-6 bg-[#FAFAFA] rounded-xl">
              <div className="text-4xl mb-3">🥐</div>
              <h4 className="font-heading font-bold text-[#1A1A1A] mb-2">Fresh Pastries</h4>
              <p className="text-sm text-[#6B7280]">Baked fresh every morning</p>
            </div>
            <div className="text-center p-6 bg-[#FAFAFA] rounded-xl">
              <div className="text-4xl mb-3">📶</div>
              <h4 className="font-heading font-bold text-[#1A1A1A] mb-2">Free Wi-Fi</h4>
              <p className="text-sm text-[#6B7280]">Perfect spot for remote work</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#1A1A1A] text-white p-8">
          <div className="text-center">
            <h3 className="font-heading text-xl font-bold mb-4">Visit Us</h3>
            <p className="text-white/70 mb-2">📍 123 Main Street, Bacoor, Cavite</p>
            <p className="text-white/70 mb-2">📞 +63 917-123-4567</p>
            <p className="text-white/70">🕐 Mon-Sat: 7AM - 9PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN WEBSITE COMPONENTS
// ============================================

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Work" },
    { href: "#process", label: "Process" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-anim ${
          isScrolled
            ? "py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            : "py-4"
        } bg-white/90 backdrop-blur-xl border-b border-[#F0F0F0]`}
      >
        <div className="max-w-[1100px] mx-auto px-7 flex justify-between items-center">
          <a href="#hero" className="font-heading text-lg font-bold text-[#1A1A1A] tracking-tight hover:opacity-80 transition-opacity">
            Belle<span className="text-[#F4C430]">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-[#6B7280] font-medium hover:text-[#1A1A1A] transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="bg-[#F4C430] text-[#1A1A1A] font-heading text-xs font-semibold px-5 py-2 rounded-full hover:bg-[#E6B820] transition-all duration-300 shadow-[0_2px_8px_rgba(244,196,48,0.3)] hover:shadow-[0_6px_20px_rgba(244,196,48,0.4)] hover:-translate-y-0.5"
              >
                Let&apos;s talk ↗
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-5.5 h-0.5 bg-[#1A1A1A] rounded transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`w-5.5 h-0.5 bg-[#1A1A1A] rounded transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-5.5 h-0.5 bg-[#1A1A1A] rounded transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[60px] left-0 right-0 bg-white border-b border-[#F0F0F0] px-7 py-5 z-40 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1A1A1A] py-1 border-b border-[#F0F0F0]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium text-[#1A1A1A] py-1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

// Hero Section
function HeroSection() {
  const services = [
    "Landing Page",
    "Basic Business Website",
    "Portfolio / Blog",
    "Basic E-commerce",
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-7 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="hero-anim-1">
              <span className="inline-block bg-[#FFF8E1] text-[#92700A] font-heading text-[11px] font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full mb-4">
                👋 Web Designer · Bacoor, Cavite, PH & Worldwide
              </span>
            </div>

            <h1 className="hero-anim-2 font-heading text-[clamp(32px,5.5vw,64px)] font-bold leading-[1.05] tracking-tight text-[#1A1A1A] mt-4 mb-2">
              Websites that{" "}
              <span className="relative inline-block">
                <span className="relative z-10">grow</span>
                <span className="absolute bottom-1 left-[-2px] right-[-2px] h-2.5 bg-[#F4C430] rounded z-0 opacity-50"></span>
              </span>{" "}
              your
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>business.
            </h1>

            <p className="hero-anim-3 text-base text-[#6B7280] leading-relaxed max-w-[460px] font-light mt-5 mb-9">
              I design strategic, beautiful websites that help businesses stand out, connect with their audience, and grow — whether you&apos;re based locally in Cavite or anywhere in the world.
            </p>

            <div className="hero-anim-4 flex flex-wrap gap-3.5">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F4C430] text-[#1A1A1A] font-heading text-sm font-semibold rounded-full hover:bg-[#E6B820] transition-all duration-300 shadow-[0_4px_16px_rgba(244,196,48,0.35)] hover:shadow-[0_10px_32px_rgba(244,196,48,0.45)] hover:-translate-y-1"
              >
                View my work ↗
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[#1A1A1A] font-heading text-sm font-semibold rounded-full border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,26,26,0.15)]"
              >
                Let&apos;s talk
              </a>
            </div>

            {/* Stats */}
            <div className="hero-anim-4 flex flex-wrap gap-9 mt-14 pt-7 border-t border-[#F0F0F0]">
              <div>
                <div className="font-heading text-3xl font-bold text-[#1A1A1A]">4</div>
                <div className="text-xs text-[#6B7280] mt-0.5">Services</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-[#1A1A1A]">PH</div>
                <div className="text-xs text-[#6B7280] mt-0.5">& Worldwide</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-[#1A1A1A]">✦</div>
                <div className="text-xs text-[#6B7280] mt-0.5">Open for work</div>
              </div>
            </div>
          </div>

          {/* Right Card - Services */}
          <div className="hero-anim-3 bg-[#FAFAFA] border border-[#F0F0F0] rounded-3xl p-7 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
            <div className="flex justify-between items-center mb-5 pb-4 border-b border-[#F0F0F0]">
              <span className="font-heading text-xs font-semibold text-[#6B7280] tracking-wider">SERVICES</span>
              <span className="flex items-center gap-1.5 bg-[#F0FFF4] border border-[#BBF7D0] rounded-full px-3 py-1 text-[11px] font-semibold text-[#166534]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_6px_rgba(34,197,94,0.8)]"></span>
                Available
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="px-4 py-3.5 bg-white border border-[#F0F0F0] rounded-xl flex justify-between items-center cursor-pointer transition-all duration-300 hover:border-[#F4C430] hover:bg-[#FFF8E1]"
                >
                  <span className="text-[13px] font-medium text-[#1A1A1A]">{service}</span>
                  <span className="text-base">→</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#F0F0F0] text-[11px] text-[#B0B0B0] text-center">
              Bacoor, Cavite, Philippines · Serving clients worldwide
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section - Enhanced
function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    "Web Design", "UI/UX Design", "Figma", "HTML/CSS", "JavaScript",
    "Responsive Design", "WordPress", "SEO Basics", "Tailwind CSS"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-28 bg-[#FAFAFA]">
      <div className="max-w-[1100px] mx-auto px-7">
        <div className="grid lg:grid-cols-2 gap-[70px] items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="rounded-3xl overflow-hidden border border-[#F0F0F0] shadow-[0_8px_40px_rgba(0,0,0,0.08)] h-[480px] relative">
              <Image
                src="/profile-photo.png"
                alt="Belle Zerrudo - Web Designer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F4C430] rounded-2xl -z-10 opacity-50"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#F4C430] rounded-xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="reveal">
            <span className="inline-block bg-[#FFF8E1] text-[#92700A] font-heading text-[11px] font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full mb-4">
              About Me
            </span>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4">
              Hi, I&apos;m Belle Zerrudo
            </h2>

            <div className="w-12 h-1 bg-[#F4C430] rounded mb-6"></div>

            <p className="text-[#6B7280] leading-relaxed mb-4">
              I&apos;m a web designer based in <strong className="text-[#1A1A1A]">Bacoor, Cavite, Philippines</strong>, passionate about creating beautiful, functional websites that help businesses grow. 
            </p>

            <p className="text-[#6B7280] leading-relaxed mb-4">
              <strong className="text-[#1A1A1A]">My Design Philosophy:</strong> Every website should tell a story. I believe in clean, purposeful design — where every element serves the user. I don&apos;t just make things look pretty; I create digital experiences that convert visitors into customers.
            </p>

            <p className="text-[#6B7280] leading-relaxed mb-4">
              <strong className="text-[#1A1A1A]">Why I Started:</strong> Growing up in Cavite, I saw many talented local businesses struggle with their online presence. Beautiful sari-sari stores, skilled artisans, and amazing food spots — all invisible online. I made it my mission to bridge that gap, helping local entrepreneurs compete in the digital marketplace.
            </p>

            <p className="text-[#6B7280] leading-relaxed mb-6">
              Whether you&apos;re a small business owner in Bacoor, a startup in Manila, or an entrepreneur anywhere in the world — I&apos;m here to help you establish a strong online presence that truly represents your brand.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 bg-[#F5F5F5] border border-[#F0F0F0] rounded-full text-xs font-medium text-[#1A1A1A] transition-all duration-300 hover:bg-[#FFF8E1] hover:border-[#F4C430] hover:text-[#92700A] hover:-translate-y-0.5 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F4C430] text-[#1A1A1A] font-heading text-sm font-semibold rounded-full hover:bg-[#E6B820] transition-all duration-300 shadow-[0_4px_16px_rgba(244,196,48,0.35)] hover:shadow-[0_10px_32px_rgba(244,196,48,0.45)] hover:-translate-y-1"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "🚀",
      title: "Landing Page",
      description: "High-converting single-page websites designed to capture leads and drive action. Perfect for product launches, campaigns, or showcasing a specific service.",
    },
    {
      icon: "💼",
      title: "Basic Business Website",
      description: "Professional multi-page websites that establish your online presence. Includes home, about, services, and contact pages tailored to your brand.",
    },
    {
      icon: "✨",
      title: "Portfolio / Blog",
      description: "Showcase your work or share your thoughts with a beautifully designed portfolio or blog. Clean layouts that put your content in the spotlight.",
    },
    {
      icon: "🛒",
      title: "Basic E-commerce",
      description: "Get your products online with a simple yet effective e-commerce solution. Easy to manage and designed to convert browsers into buyers.",
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-7">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-[#FFF8E1] text-[#92700A] font-heading text-[11px] font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full mb-4">
            Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4">
            What I Can Do For You
          </h2>
          <div className="w-12 h-1 bg-[#F4C430] rounded mx-auto mb-6"></div>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            From simple landing pages to complete business websites, I offer design solutions tailored to your needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal bg-white border border-[#F0F0F0] rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-[#F4C430] group"
            >
              <div className="w-14 h-14 rounded-[14px] bg-[#FFF8E1] flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:bg-[#F4C430] group-hover:scale-110 group-hover:-rotate-3">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-[#1A1A1A] mb-3">
                {service.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Portfolio Section - Enhanced with Demo Modals
function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Cat Encyclopedia Blog",
      category: "Blog / Portfolio",
      description: "A beautifully designed blog showcasing different cat breeds with rarity classifications, origins, and temperament information. Mobile-first design with engaging visuals.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop",
      demo: "cat-blog",
      caseStudy: "Designed an engaging, mobile-first blog layout that makes learning about cat breeds fun and visually appealing.",
    },
    {
      title: "Artisan Hair Clips Shop",
      category: "E-commerce with QR Payment",
      description: "A charming e-commerce site for handcrafted hair accessories featuring GCash QR code integration for seamless local payments.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop",
      demo: "hair-clips",
      caseStudy: "Solved the payment challenge for small businesses by integrating GCash QR codes, enabling instant mobile payments.",
    },
    {
      title: "Prime Realty PH",
      category: "Real Estate Landing Page",
      description: "A premium landing page for a real estate company featuring property listings, inquiry forms, and strong call-to-action elements.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      demo: "real-estate",
      caseStudy: "Created a high-converting landing page with clear CTAs and property showcase to drive inquiries for real estate agents.",
    },
    {
      title: "Brew & Bean Café",
      category: "Business Website",
      description: "A complete business website for a local café including menu showcase, about section, location details, and contact information.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
      demo: "business",
      caseStudy: "Designed a warm, inviting website that captures the café&apos;s personality and drives foot traffic to the physical location.",
    },
  ];

  return (
    <>
      <section id="portfolio" ref={sectionRef} className="py-28 bg-[#FAFAFA]">
        <div className="max-w-[1100px] mx-auto px-7">
          <div className="text-center mb-16 reveal">
            <span className="inline-block bg-[#FFF8E1] text-[#92700A] font-heading text-[11px] font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full mb-4">
              Portfolio
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4">
              Recent Work
            </h2>
            <div className="w-12 h-1 bg-[#F4C430] rounded mx-auto mb-6"></div>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Each project is crafted with care and attention to detail. Click to explore live demos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="reveal bg-white border border-[#F0F0F0] rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:border-[rgba(244,196,48,0.4)] group cursor-pointer"
                onClick={() => setActiveDemo(project.demo)}
              >
                <div className="h-52 overflow-hidden relative">
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[rgba(26,26,26,0.5)] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
                    <span className="text-white font-heading font-semibold text-sm px-5 py-2 border border-white rounded-full">
                      View Live Demo →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[11px] text-[#F4C430] font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#1A1A1A] mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-start gap-2 bg-[#FFF8E1] p-3 rounded-lg">
                    <span className="text-[#F4C430]">💡</span>
                    <p className="text-xs text-[#92700A]"><strong>Case Study:</strong> {project.caseStudy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F4C430] text-[#1A1A1A] font-heading text-sm font-semibold rounded-full hover:bg-[#E6B820] transition-all duration-300 shadow-[0_4px_16px_rgba(244,196,48,0.35)] hover:shadow-[0_10px_32px_rgba(244,196,48,0.45)] hover:-translate-y-1"
            >
              Start Your Project ↗
            </a>
          </div>
        </div>
      </section>

      {/* Demo Modals */}
      {activeDemo === "cat-blog" && <CatBlogDemo onClose={() => setActiveDemo(null)} />}
      {activeDemo === "hair-clips" && <HairClipsShopDemo onClose={() => setActiveDemo(null)} />}
      {activeDemo === "real-estate" && <RealEstateDemo onClose={() => setActiveDemo(null)} />}
      {activeDemo === "business" && <BusinessWebsiteDemo onClose={() => setActiveDemo(null)} />}
    </>
  );
}

// Process Section (Replacing Testimonials)
function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      step: "01",
      title: "Discovery",
      description: "We start with a chat to understand your business, goals, target audience, and vision. This helps me create a website that truly represents your brand.",
      icon: "💬",
    },
    {
      step: "02",
      title: "Planning",
      description: "I create a sitemap and wireframe to outline your website structure. You&apos;ll see the blueprint before any design work begins.",
      icon: "📋",
    },
    {
      step: "03",
      title: "Design",
      description: "This is where the magic happens! I design your website with your brand colors, typography, and imagery. You&apos;ll get to review and request revisions.",
      icon: "🎨",
    },
    {
      step: "04",
      title: "Development",
      description: "I bring the design to life with clean, responsive code. Your website will look great on all devices — desktop, tablet, and mobile.",
      icon: "💻",
    },
    {
      step: "05",
      title: "Launch",
      description: "After final approval, I help you launch your website. I also provide basic training so you can make small updates yourself.",
      icon: "🚀",
    },
    {
      step: "06",
      title: "Support",
      description: "My relationship doesn&apos;t end at launch. I offer ongoing support and maintenance packages to keep your website running smoothly.",
      icon: "🤝",
    },
  ];

  return (
    <section id="process" ref={sectionRef} className="py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-7">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-[#FFF8E1] text-[#92700A] font-heading text-[11px] font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full mb-4">
            My Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4">
            How We&apos;ll Work Together
          </h2>
          <div className="w-12 h-1 bg-[#F4C430] rounded mx-auto mb-6"></div>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            A clear, organized process ensures your project stays on track and delivers results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="reveal bg-[#FAFAFA] border border-[#F0F0F0] rounded-[20px] p-6 transition-all duration-300 hover:bg-[#FFF8E1] hover:border-[#F4C430] hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 font-heading text-5xl font-bold text-[#F0F0F0] group-hover:text-[#F4C430]/20 transition-colors">
                {step.step}
              </div>
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="font-heading text-lg font-bold text-[#1A1A1A] mb-2">{step.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section with Functional Form
function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mwvrwlol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-28 bg-[#FAFAFA]">
      <div className="max-w-[1100px] mx-auto px-7">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="reveal">
            <span className="inline-block bg-[#FFF8E1] text-[#92700A] font-heading text-[11px] font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full mb-4">
              Contact
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4">
              Let&apos;s Work Together
            </h2>
            <div className="w-12 h-1 bg-[#F4C430] rounded mb-6"></div>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s discuss how we can bring your vision to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFF8E1] rounded-xl flex items-center justify-center text-lg">
                  📍
                </div>
                <div>
                  <div className="text-xs text-[#6B7280]">Location</div>
                  <div className="text-sm font-medium text-[#1A1A1A]">Bacoor, Cavite, Philippines</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFF8E1] rounded-xl flex items-center justify-center text-lg">
                  📱
                </div>
                <div>
                  <div className="text-xs text-[#6B7280]">Viber / WhatsApp</div>
                  <a href="https://wa.me/639193896492" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#1A1A1A] hover:text-[#F4C430] transition-colors">
                    +63 919 389 6492
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFF8E1] rounded-xl flex items-center justify-center text-lg">
                  🌍
                </div>
                <div>
                  <div className="text-xs text-[#6B7280]">Serving</div>
                  <div className="text-sm font-medium text-[#1A1A1A]">Clients Worldwide</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFF8E1] rounded-xl flex items-center justify-center text-lg">
                  ✉️
                </div>
                <div>
                  <div className="text-xs text-[#6B7280]">Email</div>
                  <a href="mailto:zerrudojoybelle@gmail.com" className="text-sm font-medium text-[#1A1A1A] hover:text-[#F4C430] transition-colors">
                    zerrudojoybelle@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-[#FAFAFA] border border-[#F0F0F0] rounded-xl p-5 text-center transition-all duration-300 hover:bg-[#FFF8E1] hover:border-[#F4C430] hover:-translate-y-1">
                <div className="font-heading text-3xl font-bold text-[#1A1A1A]">100%</div>
                <div className="text-xs text-[#6B7280] mt-1">Client Satisfaction</div>
              </div>
              <div className="bg-[#FAFAFA] border border-[#F0F0F0] rounded-xl p-5 text-center transition-all duration-300 hover:bg-[#FFF8E1] hover:border-[#F4C430] hover:-translate-y-1">
                <div className="font-heading text-3xl font-bold text-[#1A1A1A]">24h</div>
                <div className="text-xs text-[#6B7280] mt-1">Response Time</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="reveal bg-white border border-[#F0F0F0] rounded-[20px] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-heading text-xl font-bold text-[#1A1A1A] mb-2">Message Sent!</h3>
                <p className="text-[#6B7280] mb-6">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <Button
                  onClick={() => setSubmitStatus("idle")}
                  className="bg-[#F4C430] text-[#1A1A1A] font-heading font-semibold rounded-full hover:bg-[#E6B820]"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#F0F0F0] rounded-xl text-sm text-[#1A1A1A] placeholder:text-[#B0B0B0] focus:border-[#F4C430] focus:bg-white focus:ring-0 focus:shadow-[0_0_0_4px_rgba(244,196,48,0.12)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#F0F0F0] rounded-xl text-sm text-[#1A1A1A] placeholder:text-[#B0B0B0] focus:border-[#F4C430] focus:bg-white focus:ring-0 focus:shadow-[0_0_0_4px_rgba(244,196,48,0.12)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Service Interested In</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#F0F0F0] rounded-xl text-sm text-[#1A1A1A] focus:border-[#F4C430] focus:bg-white focus:ring-0 focus:shadow-[0_0_0_4px_rgba(244,196,48,0.12)] transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Basic Business Website">Basic Business Website</option>
                    <option value="Portfolio / Blog">Portfolio / Blog</option>
                    <option value="Basic E-commerce">Basic E-commerce</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#F0F0F0] rounded-xl text-sm text-[#1A1A1A] placeholder:text-[#B0B0B0] focus:border-[#F4C430] focus:bg-white focus:ring-0 focus:shadow-[0_0_0_4px_rgba(244,196,48,0.12)] transition-all resize-none"
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again or email me directly at zerrudojoybelle@gmail.com
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F4C430] text-[#1A1A1A] font-heading font-semibold py-6 rounded-full hover:bg-[#E6B820] transition-all duration-300 shadow-[0_4px_16px_rgba(244,196,48,0.35)] hover:shadow-[0_10px_32px_rgba(244,196,48,0.45)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message ↗"}
                </Button>

                <p className="text-xs text-[#6B7280] text-center">
                  Or email me directly at{" "}
                  <a href="mailto:zerrudojoybelle@gmail.com" className="text-[#F4C430] hover:underline">
                    zerrudojoybelle@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com/bellezerrudo", icon: "📘" },
    { name: "Instagram", url: "https://instagram.com/bellezerrudo", icon: "📸" },
    { name: "LinkedIn", url: "https://linkedin.com/in/bellezerrudo", icon: "💼" },
    { name: "GitHub", url: "https://github.com/zerrudojoybelle", icon: "🐙" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white/70 py-10">
      <div className="max-w-[1100px] mx-auto px-7">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="#hero" className="font-heading text-xl font-bold text-white">
              Belle<span className="text-[#F4C430]">.</span>
            </a>
            <span className="text-sm">Web Designer</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm hover:text-[#F4C430] transition-colors">About</a>
            <a href="#services" className="text-sm hover:text-[#F4C430] transition-colors">Services</a>
            <a href="#portfolio" className="text-sm hover:text-[#F4C430] transition-colors">Work</a>
            <a href="#process" className="text-sm hover:text-[#F4C430] transition-colors">Process</a>
            <a href="#contact" className="text-sm hover:text-[#F4C430] transition-colors">Contact</a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-lg hover:bg-[#F4C430] hover:text-[#1A1A1A] transition-all duration-300 hover:-translate-y-1"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} Belle Zerrudo. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Made with 💛 in Bacoor, Cavite, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
