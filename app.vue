
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Estilos globales */
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');

:root {
  --neon-cyan: #00ffff;
  --neon-purple: #ff00ff;
  --dark-bg: #0a0a0a;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Rajdhani', sans-serif;
  background-color: var(--dark-bg);
  color: #ffffff;
  overflow-x: hidden;
}

/* Scrollbar personalizado */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple));
  border-radius: 4px;
}

/* Clases de utilidad globales */
.glitch-title {
  position: relative;
  color: var(--neon-cyan);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  animation: glitchText 5s infinite;
}

.glitch-title::before,
.glitch-title::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.glitch-title::before {
  animation: glitchOffset 4s infinite;
  color: var(--neon-purple);
  left: 2px;
}

.glitch-title::after {
  animation: glitchOffset 4s infinite reverse;
  color: var(--neon-cyan);
  left: -2px;
}

@keyframes glitchText {
  0% { transform: skew(0deg); }
  20% { transform: skew(0deg); }
  21% { transform: skew(-5deg); }
  22% { transform: skew(5deg); }
  23% { transform: skew(0deg); }
  100% { transform: skew(0deg); }
}

@keyframes glitchOffset {
  0% { clip-path: inset(10% 0 0 0); }
  5% { clip-path: inset(80% 0 1% 0); }
  10% { clip-path: inset(20% 0 58% 0); }
  15% { clip-path: inset(40% 0 43% 0); }
  20% { clip-path: inset(90% 0 4% 0); }
  25% { clip-path: inset(5% 0 98% 0); }
  30% { clip-path: inset(80% 0 1% 0); }
  35% { clip-path: inset(20% 0 58% 0); }
  40% { clip-path: inset(40% 0 43% 0); }
  45% { clip-path: inset(90% 0 4% 0); }
  50% { clip-path: inset(5% 0 98% 0); }
  55% { clip-path: inset(80% 0 1% 0); }
  60% { clip-path: inset(20% 0 58% 0); }
  65% { clip-path: inset(40% 0 43% 0); }
  70% { clip-path: inset(90% 0 4% 0); }
  75% { clip-path: inset(5% 0 98% 0); }
  80% { clip-path: inset(80% 0 1% 0); }
  85% { clip-path: inset(20% 0 58% 0); }
  90% { clip-path: inset(40% 0 43% 0); }
  95% { clip-path: inset(90% 0 4% 0); }
  100% { clip-path: inset(5% 0 98% 0); }
}

/* Animaciones globales para transiciones de página */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>

<script setup>
// Configuración global
useHead({
  title: 'nex - Desarrollo de Software CyberPunk',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Desarrollo de software totalmente innovador al alcance de tus manos'
    }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
    }
  ]
})
</script>