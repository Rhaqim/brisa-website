<script lang="ts">
  import { onMount } from 'svelte';

  export let transparent = false;

  let scrolled = false;
  let menuOpen = false;

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 60;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/our-works', label: 'Our Works' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/events', label: 'Events' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  $: isLight = transparent && !scrolled;
  $: navClass = scrolled
    ? 'bg-white shadow-sm'
    : transparent
      ? 'bg-transparent'
      : 'bg-white shadow-sm';
  $: textColor = isLight ? 'text-white' : 'text-navy';
  $: linkHoverClass = isLight
    ? 'hover:text-gold-300 text-white/90'
    : 'hover:text-gold-700 text-navy/70';
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {navClass}"
  aria-label="Main navigation"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="/" class="flex-shrink-0" aria-label="Brisa Women's Foundation — home">
        {#if isLight}
          <img
            src="/logo-dark-bg.png"
            alt="Brisa Women's Foundation"
            class="h-10 w-auto"
            width="320"
            height="100"
          />
        {:else}
          <img
            src="/logo-light-white-bg.png"
            alt="Brisa Women's Foundation"
            class="h-10 w-auto"
            width="320"
            height="100"
          />
        {/if}
      </a>

      <!-- Desktop nav links -->
      <div class="hidden lg:flex items-center gap-8">
        {#each links as link}
          <a
            href={link.href}
            class="text-sm font-medium transition-colors duration-200 {linkHoverClass}"
          >
            {link.label}
          </a>
        {/each}
      </div>

      <!-- Desktop CTA -->
      <div class="hidden lg:flex items-center gap-4">
        <a
          href="https://dashboard.flutterwave.com/donate/obcebpoam3cu"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-gold text-navy font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-gold-600 hover:shadow-md"
        >
          Donate Now
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="lg:hidden p-2 rounded-lg transition-colors {textColor}"
        on:click={() => (menuOpen = !menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {#if menuOpen}
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div class="lg:hidden bg-white border-t border-warm-200 shadow-lg animate-slide-down">
      <div class="px-4 py-5 space-y-1">
        {#each links as link}
          <a
            href={link.href}
            on:click={() => (menuOpen = false)}
            class="block px-3 py-2.5 rounded-lg text-navy/80 font-medium text-sm hover:bg-warm-100 hover:text-navy transition-colors"
          >
            {link.label}
          </a>
        {/each}
        <div class="pt-3 border-t border-warm-200 mt-3">
          <a
            href="https://dashboard.flutterwave.com/donate/obcebpoam3cu"
            target="_blank"
            rel="noopener noreferrer"
            class="block w-full text-center bg-gold text-navy font-semibold px-6 py-3 rounded-full text-sm"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  {/if}
</nav>
