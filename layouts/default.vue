<template>
  <div class="min-h-screen bg-gray-900 text-gray-100 relative">
    <div class="fixed inset-0 bg-grid z-0"></div>
    <div class="fixed inset-0 bg-gradient-radial z-0"></div>
    <NavBar />
    <slot />
  </div>
</template>
<style>
.bg-grid {
  background-image:
      linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
}

.bg-gradient-radial {
  background: radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.15) 0%, rgba(128, 0, 255, 0.1) 50%, transparent 100%);
  animation: pulse 10s infinite;
}

@keyframes pulse {
  0% { opacity: 0.5; }
  50% { opacity: 0.8; }
  100% { opacity: 0.5; }
}
</style>