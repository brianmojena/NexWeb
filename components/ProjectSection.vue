<template>
  <section id="proyectos" class="py-20 relative z-10">
    <div class="container mx-auto px-4">
      <h2 class="glitch-title text-4xl font-bold mb-12 text-center">
        Proyectos Destacados
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(proyecto, index) in proyectos"
             :key="proyecto.titulo"
             class="proyecto-card"
             :style="{ animationDelay: `${index * 0.2}s` }">
          <div class="image-container">
            <img :src="proyecto.imagen"
                 :alt="proyecto.titulo"
                 class="w-full h-64 object-cover" />
            <div class="cyber-overlay"></div>
          </div>
          <div class="content-overlay">
            <h3 class="text-xl font-bold mb-2 cyber-text">{{ proyecto.titulo }}</h3>
            <p class="text-gray-300">{{ proyecto.descripcion }}</p>
            <button class="cyber-btn mt-4" @click="openModal(proyecto)">Ver más</button>
          </div>
        </div>
      </div>

      <!-- Project Modal -->
      <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div class="absolute inset-0 bg-black/80" @click="closeModal"></div>
        <div class="relative bg-gray-900 p-6 rounded-lg border border-cyan-500/50 max-w-lg w-full">
          <button class="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
          <h3 class="text-2xl font-bold mb-4 text-cyan-400">{{ selectedProject.titulo }}</h3>
          <img :src="selectedProject.imagen" :alt="selectedProject.titulo" class="w-full mb-4 rounded">
          <p class="text-gray-300 mb-4">{{ selectedProject.descripcion }}</p>
          <div class="flex justify-end">
            <button class="cyber-btn" @click="closeModal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  proyectos: {
    type: Array,
    required: true
  }
});

const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedProject.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
.proyecto-card {
  position: relative;
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  opacity: 0;
  animation: slideUp 0.8s forwards;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.cyber-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      45deg,
      rgba(0, 255, 255, 0.1),
      rgba(255, 0, 255, 0.1)
  );
  opacity: 0;
  transition: opacity 0.3s;
}

.content-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.7),
      transparent
  );
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.3s;
}

.proyecto-card:hover .content-overlay {
  transform: translateY(0);
  opacity: 1;
}

.proyecto-card:hover .cyber-overlay {
  opacity: 1;
}

.cyber-text {
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.cyber-btn {
  background: transparent;
  border: 1px solid #00ffff;
  color: #00ffff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.cyber-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 255, 0.2),
      transparent
  );
  transition: left 0.3s;
}

.cyber-btn:hover::before {
  left: 100%;
}

.cyber-btn:hover {
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
