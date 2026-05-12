<script lang="ts">
  export let title = 'Join Us in Changing Lives';
  export let body = 'Every contribution, whether time, resources, or funds, helps us reach more women and children across Africa and beyond.';
  export let donateUrl = 'https://dashboard.flutterwave.com/donate/obcebpoam3cu';
</script>

<section class="py-24 lg:py-32 bg-gradient-to-br from-forest to-navy relative overflow-hidden">
  <!-- Decorations -->
  <div class="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 blur-3xl"></div>
  <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/10 rounded-full translate-y-1/2 blur-3xl"></div>

  <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal reveal-up">
    <p class="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase mb-6">
      <span class="w-6 h-0.5 bg-gold"></span>
      Partner With Us
      <span class="w-6 h-0.5 bg-gold"></span>
    </p>

    <h2 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
      {title}
    </h2>

    <p class="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
      {body}
    </p>

    <!-- Action options -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {#each [
        { icon: '💰', label: 'Donate', href: donateUrl, external: true },
        { icon: '🤝', label: 'Volunteer', href: '/volunteer', external: false },
        { icon: '📅', label: 'Sponsor Events', href: '/events', external: false },
        { icon: '📰', label: 'Follow Our Blog', href: '/blog', external: false },
      ] as option}
        <a
          href={option.href}
          target={option.external ? '_blank' : '_self'}
          rel={option.external ? 'noopener noreferrer' : undefined}
          class="group bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-2xl px-4 py-5 transition-all duration-200 text-white text-center"
        >
          <div class="text-2xl mb-2">{option.icon}</div>
          <div class="font-semibold text-sm">{option.label}</div>
        </a>
      {/each}
    </div>

    <!-- Primary CTA -->
    <a
      href={donateUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 bg-gold text-navy font-bold px-10 py-4 rounded-full text-base hover:bg-gold-400 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
    >
      Donate Today
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </a>
  </div>
</section>
