<script lang="ts">
  let status: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  let errorMsg = '';

  const ACCESS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY as string | undefined;

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!ACCESS_KEY) {
      errorMsg = 'Contact form is not configured yet. Please email us directly.';
      status = 'error';
      return;
    }

    status = 'loading';
    errorMsg = '';

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const name = (data.get('name') as string ?? '').trim();
    const email = (data.get('email') as string ?? '').trim();
    const message = (data.get('message') as string ?? '').trim();

    if (!name || !email || !message) {
      errorMsg = 'Please fill in all required fields.';
      status = 'error';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorMsg = 'Please enter a valid email address.';
      status = 'error';
      return;
    }

    data.set('access_key', ACCESS_KEY);
    // Prevent Web3Forms from redirecting
    data.set('redirect', 'false');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        status = 'success';
        form.reset();
      } else {
        errorMsg = json.message ?? 'Something went wrong. Please try again.';
        status = 'error';
      }
    } catch {
      errorMsg = 'Network error. Please try again or email us directly.';
      status = 'error';
    }
  }

  function reset() {
    status = 'idle';
    errorMsg = '';
  }
</script>

{#if status === 'success'}
  <div class="text-center py-12">
    <div class="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <svg class="w-8 h-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
    <h3 class="font-serif text-2xl font-bold text-navy mb-2">Message Sent!</h3>
    <p class="text-gray-500 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
    <button on:click={reset} class="mt-6 inline-block text-sm text-gold font-semibold hover:underline">
      Send another message
    </button>
  </div>
{:else}
  <form on:submit={handleSubmit} class="space-y-5">
    {#if status === 'error'}
      <div class="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
        {errorMsg}
      </div>
    {/if}

    <div class="grid sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-navy mb-1.5" for="cf-name">Full Name *</label>
        <input type="text" id="cf-name" name="name" required class="input-field" placeholder="Jane Doe" />
      </div>
      <div>
        <label class="block text-sm font-medium text-navy mb-1.5" for="cf-email">Email Address *</label>
        <input type="email" id="cf-email" name="email" required class="input-field" placeholder="jane@example.com" />
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-navy mb-1.5" for="cf-subject">Subject</label>
      <input type="text" id="cf-subject" name="subject" class="input-field" placeholder="How can we help?" />
    </div>

    <div>
      <label class="block text-sm font-medium text-navy mb-1.5" for="cf-message">Message *</label>
      <textarea id="cf-message" name="message" required rows={5} class="input-field resize-none" placeholder="Tell us more…"></textarea>
    </div>

    <!-- Honeypot spam protection -->
    <input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off" />

    <button type="submit" class="w-full btn-primary" disabled={status === 'loading'}>
      {status === 'loading' ? 'Sending…' : 'Send Message'}
    </button>
  </form>
{/if}
