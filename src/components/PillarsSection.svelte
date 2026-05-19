<script lang="ts">
  interface Pillar {
    title: string;
    body: string;
  }

  export let pillars: Pillar[] = [
    {
      title: 'Financial Empowerment',
      body: 'We provide grants and microloans to women entrepreneurs, supporting business start-ups and expansions so women can achieve lasting economic independence.',
    },
    {
      title: 'Entrepreneurship Development',
      body: 'Through business training, capacity-building, and mentorship from experienced professionals, we connect women to networks and market opportunities.',
    },
    {
      title: 'Healthcare & Wellness',
      body: 'We run health awareness campaigns and wellness outreach programmes to ensure women and their communities have the care and knowledge they need.',
    },
    {
      title: 'Skill Acquisition',
      body: 'Our vocational training programmes equip women with practical, income-generating skills — creating pathways to self-reliance and dignity.',
    },
  ];

  const icons = [
    // Financial empowerment – coins/banknotes
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>`,
    // Entrepreneurship – briefcase
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>`,
    // Healthcare – heart
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>`,
    // Skill acquisition – wrench/tool
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>`,
  ];

  const colors = [
    { bg: 'bg-navy/5',   icon: 'text-navy',   border: 'border-navy/10' },
    { bg: 'bg-forest/5', icon: 'text-forest', border: 'border-forest/10' },
    { bg: 'bg-gold/10',  icon: 'text-gold-700', border: 'border-gold/20' },
    { bg: 'bg-navy/10',  icon: 'text-navy',   border: 'border-navy/20' },
  ];
</script>

<section class="py-24 lg:py-32 bg-warm-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="max-w-2xl mb-16 reveal reveal-up">
      <p class="section-tag">What We Do</p>
      <h2 class="font-serif text-4xl sm:text-5xl font-bold text-navy leading-tight">
        Our programmes, your future
      </h2>
    </div>

    <!-- Pillars grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each pillars as pillar, i}
        <div
          class="group relative bg-white rounded-3xl p-8 border {colors[i].border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal reveal-up"
          style="transition-delay: {i * 160}ms"
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
