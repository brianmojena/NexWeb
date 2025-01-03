
<template>
  <section class="py-20 relative z-10">
    <div class="container mx-auto px-4">
      <h2 class="glitch-title text-4xl font-bold mb-12 text-center">
        Nuestros Servicios
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(servicio, index) in servicios"
             :key="servicio.titulo"
             class="cyber-card"
             :style="{ animationDelay: `${index * 0.2}s` }">
          <div class="card-content">
            <h3 class="text-xl font-bold mb-4 text-cyan-400">{{ servicio.titulo }}</h3>
            <p class="text-gray-400">{{ servicio.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cyber-card {
  background: linear-gradient(45deg, rgba(0,0,0,0.8), rgba(0,255,255,0.1));
  border: 1px solid rgba(0,255,255,0.2);
  padding: 1.5rem;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: cardReveal 0.8s forwards;
}

.cyber-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(0,255,255,0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s;
}

.cyber-card:hover::before {
  transform: translateX(100%);
}

@keyframes cardReveal {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>