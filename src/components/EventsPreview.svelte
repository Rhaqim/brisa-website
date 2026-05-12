<script lang="ts">
  interface Event {
    id: string;
    title: string;
    description?: string;
    date: string;
    location?: string;
    image_url?: string;
    status: string;
  }

  export let events: Event[] = [];

  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function formatMonth(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase();
  }

  function formatDay(dateStr: string) {
    return new Date(dateStr).getDate();
  }
</script>

<section class="py-24 lg:py-32 bg-warm-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 reveal reveal-up">
      <div>
        <p class="section-tag">Events</p>
        <h2 class="font-serif text-4xl sm:text-5xl font-bold text-navy leading-tight">
          Upcoming events
        </h2>
      </div>
      <a
        href="/events"
        class="inline-flex items-center gap-2 text-sm font-semibold text-navy/60 hover:text-navy transition-colors shrink-0"
      >
        All events
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>

    {#if events.length > 0}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each events.slice(0, 3) as event, i}
          <article class="group bg-white rounded-2xl overflow-hidden border border-warm-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal reveal-up"
                 style="transition-delay: {i * 160}ms">
            {#if event.image_url}
              <div class="overflow-hidden aspect-[16/9]">
                <img
                  src={event.image_url}
                  alt={event.title}
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            {:else}
              <div class="aspect-[16/9] bg-gradient-to-br from-navy to-forest flex items-center justify-center">
                <svg class="w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                </svg>
              </div>
            {/if}

            <div class="p-6">
              <!-- Date badge -->
              <div class="flex items-center gap-3 mb-4">
                <div class="text-center bg-gold/10 border border-gold/20 rounded-xl px-3 py-1.5 min-w-[50px]">
                  <div class="text-gold text-xs font-bold tracking-widest">{formatMonth(event.date)}</div>
                  <div class="font-serif text-navy text-xl font-bold leading-none">{formatDay(event.date)}</div>
                </div>
                {#if event.location}
                  <div class="flex items-center gap-1 text-gray-500 text-xs">
                    <svg class="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {event.location}
                  </div>
                {/if}
              </div>

              <h3 class="font-serif text-xl font-bold text-navy mb-2 group-hover:text-forest transition-colors">
                {event.title}
              </h3>

              {#if event.description}
                <p class="text-gray-500 text-sm leading-relaxed line-clamp-2">{event.description}</p>
              {/if}
            </div>
          </article>
        {/each}
      </div>
    {:else}
      <div class="text-center py-20 text-gray-400">
        <svg class="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
        </svg>
        <p class="font-medium">No upcoming events yet.</p>
        <p class="text-sm mt-1">Check back soon.</p>
      </div>
    {/if}
  </div>
</section>
