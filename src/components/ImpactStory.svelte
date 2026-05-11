<script lang="ts">
  interface Story {
    name: string;
    story: string;
    location?: string;
    image_url?: string;
  }

  export let story: Story | null = null;
</script>

{#if story}
  <section class="py-24 lg:py-32 bg-navy overflow-hidden relative">
    <!-- Background decorations -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-forest/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Story text -->
        <div>
          <p class="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase mb-6">
            <span class="w-6 h-0.5 bg-gold"></span>
            Impact Story
          </p>

          <!-- Quote mark -->
          <div class="font-serif text-8xl text-gold/20 leading-none mb-4 select-none">"</div>

          <blockquote class="font-serif text-2xl sm:text-3xl text-white leading-relaxed mb-8 -mt-6">
            {story.story}
          </blockquote>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <span class="font-serif text-gold font-bold text-xl">
                {story.name?.charAt(0) ?? 'B'}
              </span>
            </div>
            <div>
              <div class="font-semibold text-white">{story.name}</div>
              {#if story.location}
                <div class="text-sm text-white/50">{story.location}</div>
              {/if}
            </div>
          </div>
        </div>

        <!-- Image / decorative side -->
        <div class="relative">
          {#if story.image_url}
            <img
              src={story.image_url}
              alt={story.name}
              class="w-full aspect-square object-cover rounded-3xl shadow-2xl"
              loading="lazy"
            />
          {:else}
            <!-- Decorative card pattern when no image -->
            <div class="relative">
              <div class="absolute top-6 left-6 right-0 bottom-0 rounded-3xl border border-gold/20"></div>
              <div class="absolute top-3 left-3 right-3 bottom-3 rounded-3xl border border-white/5"></div>
              <div class="bg-white/5 border border-white/10 rounded-3xl p-10 text-white/60">
                <div class="text-6xl mb-4">🌍</div>
                <p class="text-sm leading-relaxed">
                  We are present in communities across Nigeria, with plans to expand to other African nations.
                </p>
                <div class="mt-6 flex flex-wrap gap-2">
                  {#each ['Nigeria', 'Ghana', 'Kenya', 'Rwanda', 'Cameroon'] as country}
                    <span class="text-xs bg-white/10 text-white/60 px-3 py-1 rounded-full">{country}</span>
                  {/each}
                  <span class="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full">+ More coming</span>
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
{/if}
