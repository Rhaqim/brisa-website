<script lang="ts">
  export let title = 'Meet Brisa Women\'s Foundation';
  export let body = '';
  export let imageUrl = '';
</script>

<section class="py-24 lg:py-32 bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <!-- Text -->
      <div class="reveal reveal-left">
        <p class="section-tag">Our Mission</p>
        <h2 class="font-serif text-4xl sm:text-5xl font-bold text-navy mb-6 leading-tight">
          {title}
        </h2>
        <div class="w-12 h-1 bg-gold mb-8 rounded-full"></div>
        <p class="text-gray-600 text-lg leading-relaxed mb-8">
          {body}
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="/about" class="btn-primary">
            Our Story
          </a>
          <a href="/our-works" class="btn-outline border-navy text-navy hover:text-white hover:bg-navy">
            See Our Work
          </a>
        </div>
      </div>

      <!-- Image -->
      <div class="relative reveal reveal-right">
        <!-- Decorative background shape -->
        <div class="absolute -top-6 -right-6 w-72 h-72 bg-gold/10 rounded-3xl -z-10"></div>
        <div class="absolute -bottom-6 -left-6 w-48 h-48 bg-forest/10 rounded-3xl -z-10"></div>

        {#if imageUrl}
          <img
            src={imageUrl}
            alt="Brisa Women's Foundation — empowering women across Africa"
            class="relative rounded-2xl object-cover w-full aspect-[4/5] shadow-2xl"
            loading="lazy"
          />
        {:else}
          <div class="relative rounded-2xl bg-warm-100 w-full aspect-[4/5] flex items-center justify-center">
            <span class="text-gray-400 text-sm">No image set</span>
          </div>
        {/if}

        <!-- Floating badge -->
        <div class="absolute -bottom-4 -left-4 bg-navy text-white rounded-2xl px-6 py-4 shadow-xl">
          <div class="font-serif text-3xl font-bold text-gold">1 in 6</div>
          <div class="text-xs text-white/70 mt-0.5 max-w-[120px]">women live below the poverty line</div>
        </div>
      </div>
    </div>
  </div>
</section>
