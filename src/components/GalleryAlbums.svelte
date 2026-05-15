<script lang="ts">
  interface GalleryImage {
    id: string;
    url: string;
    alt_text?: string;
    caption?: string;
    category?: string;
  }

  export let images: GalleryImage[] = [];
  export let showAlbumTabs = true;

  // Derive sorted unique albums from the images
  $: albums = [...new Set(images.map(img => img.category ?? 'General').filter(Boolean))].sort();
  $: allAlbums = ['All', ...albums];

  let activeAlbum = 'All';

  $: filtered = activeAlbum === 'All'
    ? images
    : images.filter(img => (img.category ?? 'General') === activeAlbum);
</script>

<section class="py-24 lg:py-32 bg-warm-50 overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 reveal reveal-up">
      <div>
        <p class="section-tag">Gallery</p>
        <h2 class="font-serif text-4xl sm:text-5xl font-bold text-navy leading-tight">
          Our work in pictures
        </h2>
      </div>
    </div>

    <!-- Album filter tabs -->
    {#if showAlbumTabs && allAlbums.length > 1}
      <div class="flex flex-wrap gap-2 mb-10 reveal reveal-up">
        {#each allAlbums as album}
          <button
            type="button"
            on:click={() => (activeAlbum = album)}
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {activeAlbum === album
              ? 'bg-navy text-white shadow-sm'
              : 'bg-white text-navy/60 border border-warm-200 hover:border-navy/30 hover:text-navy'}"
          >
            {album}
            {#if album !== 'All'}
              <span class="ml-1 opacity-50 text-xs">
                ({images.filter(img => (img.category ?? 'General') === album).length})
              </span>
            {/if}
          </button>
        {/each}
      </div>
    {/if}

    {#if filtered.length > 0}
      <!-- Masonry-style grid -->
      <div class="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        {#each filtered as image, i (image.id)}
          <div
            class="group break-inside-avoid overflow-hidden rounded-2xl reveal reveal-scale"
            style="transition-delay: {(i % 8) * 60}ms"
          >
            <div class="relative">
              <img
                src={image.url}
                alt={image.alt_text ?? 'Brisa Women\'s Foundation'}
                class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <!-- Caption + album overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3"
              >
                {#if image.caption}
                  <p class="text-white text-sm font-medium leading-snug">{image.caption}</p>
                {/if}
                {#if image.category && image.category !== 'General'}
                  <span class="mt-1 inline-block text-gold text-xs font-semibold tracking-wide uppercase">
                    {image.category}
                  </span>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-24 text-navy/30">
        <p class="text-lg">No images in this album yet.</p>
      </div>
    {/if}
  </div>
</section>
