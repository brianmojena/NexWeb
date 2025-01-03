// components/HeroSection.vue
<template>
  <section class="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Fondo animado -->
    <div class="absolute inset-0">
      <div class="cyber-grid"></div>
      <div class="glitch-lines"></div>
      <div class="digital-rain"></div>
    </div>

    <!-- Contenido central -->
    <div class="text-center z-10 px-4 relative">
      <div class="glitch-container mb-6">
        <!-- Texto principal con efecto explosivo -->
        <div class="explosive-text">
          <span class="text-6xl md:text-8xl font-bold cyber-glitch" data-text="Bienvenido al">
            Bienvenido al
          </span>
        </div>

        <!-- Texto "Futuro" con efecto especial -->
        <div class="future-text-container mt-4">
          <span class="future-text text-7xl md:text-9xl font-bold" data-text="FUTURO">FUTURO</span>
        </div>
      </div>

      <!-- Subtítulo con efecto de revelación -->
      <p class="cyber-subtitle text-xl md:text-2xl mb-8 text-gray-400">
        Desarrollo de software totalmente innovador al alcance de tus manos...
      </p>

      <!-- Botón con efecto neón -->
      <button class="cyber-button">
        <span>Descubre nuestros servicios</span>
        <div class="cyber-button-glitch"></div>
      </button>
    </div>

    <!-- Partículas y efectos adicionales -->
    <div class="particles"></div>
  </section>
</template>

<style scoped>
.hero-section {
  background: radial-gradient(circle at center, rgba(0, 255, 255, 0.1), transparent 60%);
}

/* Grid cyberpunk */
.cyber-grid {
  position: absolute;
  inset: 0;
  background-image:
      linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

/* Líneas de glitch */
.glitch-lines::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
      transparent 0%,
      rgba(0, 255, 255, 0.05) 0.5%,
      transparent 1%
  );
  animation: glitchLines 4s infinite;
}

/* Lluvia digital */
.digital-rain {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg,
  rgba(0, 255, 255, 0.1) 25%,
  transparent
  );
  mask-image: repeating-linear-gradient(0deg,
  #000 0px, #000 1px,
  transparent 2px, transparent 4px
  );
  animation: digitalRain 20s linear infinite;
}

/* Texto explosivo */
.explosive-text {
  opacity: 0;
  animation: explodeIn 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards;
}

.cyber-glitch {
  color: #fff;
  text-shadow:
      0 0 10px rgba(0, 255, 255, 0.8),
      0 0 20px rgba(0, 255, 255, 0.5),
      0 0 30px rgba(0, 255, 255, 0.3);
  position: relative;
}

/* Texto "FUTURO" */
.future-text-container {
  overflow: hidden;
}

.future-text {
  display: inline-block;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0;
  transform: scale(3);
  filter: blur(10px);
  animation: futureReveal 2s forwards 1s;
  position: relative;
}

.future-text::before,
.future-text::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.future-text::before {
  animation: glitchEffect 5s infinite;
  left: 2px;
  text-shadow: -2px 0 #ff00ff;
}

.future-text::after {
  animation: glitchEffect 5s infinite reverse;
  left: -2px;
  text-shadow: 2px 0 #00ffff;
}

/* Subtítulo */
.cyber-subtitle {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards 2.5s;
}

/* Botón cyberpunk */
.cyber-button {
  position: relative;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  overflow: hidden;
  transition: all 0.3s;
  opacity: 0;
  animation: fadeInUp 1s forwards 3s;
}

.cyber-button:hover {
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
  transform: scale(1.05);
}

.cyber-button-glitch {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
      45deg,
      transparent,
      rgba(0, 255, 255, 0.3),
      transparent
  );
  transform: translateX(-100%);
  transition: transform 0.3s;
}

.cyber-button:hover .cyber-button-glitch {
  transform: translateX(100%);
}

/* Partículas */
.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particles::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      circle at center,
      #00ffff 1px,
      transparent 1px
  );
  background-size: 50px 50px;
  animation: particleFloat 20s linear infinite;
}

/* Animaciones */
@keyframes explodeIn {
  0% {
    opacity: 0;
    transform: scale(5) rotate(45deg);
    filter: blur(20px);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8) rotate(-10deg);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0);
    filter: blur(0);
  }
}

@keyframes futureReveal {
  0% {
    opacity: 0;
    transform: scale(3);
    filter: blur(10px);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
    filter: blur(5px);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
}

@keyframes glitchEffect {
  0% { clip-path: inset(50% 0 30% 0); }
  20% { clip-path: inset(20% 0 60% 0); }
  40% { clip-path: inset(70% 0 10% 0); }
  60% { clip-path: inset(10% 0 80% 0); }
  80% { clip-path: inset(40% 0 40% 0); }
  100% { clip-path: inset(50% 0 30% 0); }
}

@keyframes gridMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(50px); }
}

@keyframes digitalRain {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes glitchLines {
  0% { transform: scaleY(1); }
  50% { transform: scaleY(1.1); }
  51% { transform: scaleY(1.2); }
  52% { transform: scaleY(1); }
  100% { transform: scaleY(1); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes particleFloat {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-50px) rotate(360deg);
  }
}
</style>