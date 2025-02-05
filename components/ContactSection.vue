
<template>
  <section id="contacto" class="py-20 relative z-10">
    <div class="container mx-auto px-4 text-center">
      <h2 class="glitch-title text-4xl font-bold mb-8">
        Contáctanos
      </h2>
      <p class="cyber-text-fade text-xl mb-12">
        Estamos listos para llevar tu visión al siguiente nivel
      </p>

      <div class="email-container mb-12">
        <div class="cyber-terminal">
          <span class="terminal-prompt">></span>
          <span class="terminal-text">nexenterprise@gmail.com</span>
          <button @click="copyEmail" class="copy-btn">
            <span class="btn-text">Copiar Email</span>
            <span class="btn-glitch"></span>
          </button>
        </div>
      </div>

      <p class="text-gray-400 mb-6">Síguenos en nuestras redes:</p>
      <div class="social-grid">
        <a v-for="red in redes"
           :key="red.nombre"
           :href="red.url"
           class="social-icon"
           :title="red.nombre">
          <i :class="'fab fa-' + red.icono"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const redes = [
  { nombre: 'Discord', icono: 'discord', url: '#' },
  { nombre: 'Twitter', icono: 'twitter', url: '#' },
  { nombre: 'Instagram', icono: 'instagram', url: '#' },
  { nombre: 'LinkedIn', icono: 'linkedin', url: '#' }
];

const copyEmail = () => {
  navigator.clipboard.writeText('contacto@nex.com');
  // Aquí podrías añadir una notificación de copiado exitoso
};
</script>

<style scoped>
.cyber-terminal {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 255, 255, 0.3);
  padding: 1rem 2rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  animation: terminalAppear 1s forwards;
}

.terminal-prompt {
  color: #00ffff;
  animation: blink 1s infinite;
}

.terminal-text {
  color: #fff;
  font-family: monospace;
}

.copy-btn {
  background: transparent;
  border: 1px solid rgba(0, 255, 255, 0.5);
  color: #00ffff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
}

.copy-btn:hover {
  background: rgba(0, 255, 255, 0.1);
  border-color: #00ffff;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.social-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.social-icon {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s;
  position: relative;
  animation: iconFloat 1s forwards;
}

.social-icon::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 1px solid rgba(0, 255, 255, 0);
  border-radius: 50%;
  transition: all 0.3s;
}

.social-icon:hover {
  color: #00ffff;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
  transform: translateY(-3px);
}

.social-icon:hover::before {
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
}

@keyframes terminalAppear {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes iconFloat {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cyber-text-fade {
  opacity: 0;
  animation: textFade 1s 0.5s forwards;
}

@keyframes textFade {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>