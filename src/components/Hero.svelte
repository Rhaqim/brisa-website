<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let imageUrl: string;
  export let ctaText: string;
  export let ctaUrl: string;
  export let secondaryCtaText = 'Learn More';
  export let secondaryCtaUrl = '/about';

  export let stats: { number: string; label: string }[] = [
    { number: '500+', label: 'Women Empowered' },
    { number: '50+', label: 'Communities Reached' },
    { number: '200+', label: 'Scholarships Granted' },
    { number: '12+', label: 'Years of Impact' },
  ];
</script>

<section
  class="relative min-h-screen flex flex-col"
  style="background-image: url('{imageUrl}'); background-size: cover; background-position: center top;"
  aria-label="Hero section"
>
  <!-- Dark overlay with gradient -->
  <div
    class="absolute inset-0"
    style="background: linear-gradient(135deg, rgba(15,31,61,0.88) 0%, rgba(15,31,61,0.65) 50%, rgba(13,110,79,0.40) 100%);"
  ></div>

  <!-- Decorative pattern overlay -->
  <div class="absolute inset-0 opacity-5" style="background-image: url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>

  <!-- Main content -->
  <div class="relative flex-1 flex items-center justify-center px-4 pt-24 pb-16">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Tag -->
      <div
        class="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-8 backdrop-blur-sm"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-gold"></span>
        Empowering Women Since 2020
        <span class="w-1.5 h-1.5 rounded-full bg-gold"></span>
      </div>

      <!-- Headline -->
      <h1
        class="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-[1.1] mb-6"
      >
        {title}
      </h1>

      <!-- Sub-headline -->
      <p class="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
        {subtitle}
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={ctaUrl}
          target={ctaUrl.startsWith('http') ? '_blank' : '_self'}
          rel={ctaUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
          class="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-full text-sm transition-all duration-200 hover:bg-gold-400 hover:shadow-xl hover:-translate-y-0.5"
        >
          {ctaText}
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
        <a
          href={secondaryCtaUrl}
          class="inline-flex items-center justify-center border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all duration-200 hover:bg-white hover:text-navy hover:border-white"
        >
          {secondaryCtaText}
        </a>
      </div>
    </div>
  </div>

  <!-- Stats bar -->
  <div class="relative z-10 border-t border-white/10 backdrop-blur-md bg-navy/40">
    <div class="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/20">
      {#each stats as stat}
        <div class="text-center lg:px-6">
          <div class="font-serif text-3xl sm:text-4xl font-bold text-gold">{stat.number}</div>
          <div class="text-xs sm:text-sm text-white/70 mt-1 font-medium">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-white/40">
    <span class="text-xs font-medium tracking-widest uppercase">Scroll</span>
    <div class="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
  </div>
</section>
