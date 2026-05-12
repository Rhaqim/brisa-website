<script lang="ts">
  interface GalleryImage {
    id: string;
    url: string;
    alt_text?: string;
    caption?: string;
  }

  export let images: GalleryImage[] = [];
</script>

<section class="py-24 lg:py-32 bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 reveal reveal-up">
      <div>
        <p class="section-tag">Gallery</p>
        <h2 class="font-serif text-4xl sm:text-5xl font-bold text-navy leading-tight">
          Moments of impact
        </h2>
      </div>
      <a
        href="/our-works"
        class="inline-flex items-center gap-2 text-sm font-semibold text-navy/60 hover:text-navy transition-colors shrink-0"
      >
        View all work
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>

    {#if images.length > 0}
      <!-- Asymmetric masonry-style grid -->
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {#each images.slice(0, 6) as image, i}
          <div
            class="group overflow-hidden rounded-2xl {i === 0 ? 'row-span-2' : ''} {i === 3 ? 'col-span-2 lg:col-span-1' : ''} reveal reveal-scale"
            style="transition-delay: {i * 80}ms"
          >
            <div class="relative w-full h-full {i === 0 ? 'min-h-[320px]' : 'min-h-[200px]'}">
              <img
                src={image.url}
                alt={image.alt_text ?? 'Brisa Foundation'}
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <!-- Caption overlay -->
              {#if image.caption}
                <div
                  class="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                >
                  <p class="text-white text-sm font-medium">{image.caption}</p>
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <!-- Placeholder grid when no images -->
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {#each Array(6) as _, i}
          <div
            class="rounded-2xl bg-warm-100 {i === 0 ? 'row-span-2 min-h-[320px]' : 'min-h-[200px]'} flex items-center justify-center"
          >
            <svg class="w-8 h-8 text-warm-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>
