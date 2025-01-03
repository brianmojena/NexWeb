
<template>
  <nav class="fixed w-full z-50 bg-black/30 backdrop-blur-lg border-b border-cyan-500/20">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold cyberpunk-logo">
          nex
        </div>
        <div class="hidden md:flex space-x-8">
          <NuxtLink v-for="item in ['Inicio', 'Servicios', 'Proyectos', 'Contacto']"
                    :key="item"
                    :to="'#' + item.toLowerCase()"
                    class="nav-link">
            {{ item }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.cyberpunk-logo {
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  position: relative;
  animation: glitch 5s infinite;
}

.nav-link {
  position: relative;
  transition: all 0.3s;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #00ffff;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  text-shadow: 0 0 10px #00ffff;
  color: #00ffff;
}

@keyframes glitch {
  0% { transform: skew(0deg); }
  20% { transform: skew(0deg); }
  21% { transform: skew(-5deg); }
  22% { transform: skew(5deg); }
  23% { transform: skew(0deg); }
  100% { transform: skew(0deg); }
}
</style>