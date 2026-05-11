<script lang="ts">
  interface Pillar {
    title: string;
    body: string;
  }

  export let pillars: Pillar[] = [
    {
      title: 'Empowerment',
      body: 'We engage in youth and women empowerment programs, vocational training, skill acquisition and career talks, and offer educational scholarships to less privileged children.',
    },
    {
      title: 'Encouragement',
      body: "We support aged people, build and finance old people's homes, support motherless and orphanage homes, and contribute to the development of the elderly.",
    },
    {
      title: 'Enlightenment',
      body: "We run parenting seminars and workshops that increase parents' knowledge, skills, confidence, and sense of empowerment in the parenting role.",
    },
  ];

  const icons = [
    // Hands raised (empowerment)
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>`,
    // Heart / support
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>`,
    // Light bulb (enlightenment)
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>`,
  ];

  const colors = [
    { bg: 'bg-navy/5', icon: 'text-navy', border: 'border-navy/10' },
    { bg: 'bg-forest/5', icon: 'text-forest', border: 'border-forest/10' },
    { bg: 'bg-gold/10', icon: 'text-gold-700', border: 'border-gold/20' },
  ];
</script>

<section class="py-24 lg:py-32 bg-warm-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="max-w-2xl mb-16">
      <p class="section-tag">What We Do</p>
      <h2 class="font-serif text-4xl sm:text-5xl font-bold text-navy leading-tight">
        Three pillars of lasting change
      </h2>
    </div>

    <!-- Pillars grid -->
    <div class="grid md:grid-cols-3 gap-8">
      {#each pillars as pillar, i}
        <div
          class="group relative bg-white rounded-3xl p-8 border {colors[i].border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Number -->
          <div class="absolute top-6 right-8 font-serif text-6xl font-bold text-warm-200 select-none">
            {String(i + 1).padStart(2, '0')}
          </div>

          <!-- Icon -->
          <div class="w-14 h-14 rounded-2xl {colors[i].bg} {colors[i].icon} flex items-center justify-center mb-6">
            {@html icons[i]}
          </div>

          <h3 class="font-serif text-2xl font-bold text-navy mb-4">{pillar.title}</h3>
          <p class="text-gray-600 leading-relaxed text-sm">{pillar.body}</p>

          <!-- Bottom accent -->
          <div class="mt-8 pt-6 border-t border-warm-200">
            <a
              href="/our-works"
              class="inline-flex items-center gap-2 text-sm font-semibold text-navy/60 group-hover:text-navy transition-colors"
            >
              Learn more
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
