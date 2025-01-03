
<template>
  <div>
    <HeroSection />
    <ServicesSection :servicios="servicios" />
    <ProjectSection :proyectos="proyectos" />
    <ContactSection />
  </div>
</template>

<script setup>
import HeroSection from "~/components/HeroSection.vue";
import ServicesSection from "~/components/ServicesSection.vue";
import ProjectSection from "~/components/ProjectSection.vue";
import ContactSection from "~/components/ContactSection.vue";

const servicios = [
  {
    titulo: "Desarrollo Web",
    descripcion: "Sitios web futuristas y funcionales que desafían los límites de la realidad digital"
  },
  {
    titulo: "Aplicaciones Móviles",
    descripcion: "Apps innovadoras que transforman tu dispositivo en una extensión cibernética"
  },
  {
    titulo: "Inteligencia Artificial",
    descripcion: "Soluciones IA que anticipan el mañana y redefinen la interacción humano-máquina"
  }
];

const proyectos = [
  {
    titulo: "NexMusic",
    descripcion: "Reproductor de música revolucionario",
    imagen: "/placeholder.svg?height=300&width=400"
  },
  {
    titulo: "NexWallet",
    descripcion: "Sustituto perfecto de Transfermovil, próximamente en el resto del mundo",
    imagen: "/placeholder.svg?height=300&width=400"
  },
  {
    titulo: "Nex Quest",
    descripcion: "Administración de tareas sencilla para el uso diario",
    imagen: "/placeholder.svg?height=300&width=400"
  }
];
</script>