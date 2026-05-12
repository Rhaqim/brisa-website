<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let cloudName = '';
  export let uploadPreset = 'brisa_uploads';
  export let currentUrl = '';
  export let label = 'Upload Image';
  /** If set, the URL will be written to this DOM input's value after upload */
  export let targetInputId = '';

  const dispatch = createEventDispatcher<{ upload: string }>();

  let uploading = false;
  let error = '';
  let preview = currentUrl;

  async function handleFile(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    // Basic validation
    if (!file.type.startsWith('image/')) {
      error = 'Please select an image file.';
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      error = 'Image must be under 10MB.';
      return;
    }

    error = '';
    uploading = true;
    preview = URL.createObjectURL(file);

    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('upload_preset', uploadPreset);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: 'POST', body: fd }
      );

      if (!res.ok) throw new Error('Upload failed');

      const data = await res.json();
      const url: string = data.secure_url;
      preview = url;
      dispatch('upload', url);
      if (targetInputId) {
        const el = document.getElementById(targetInputId) as HTMLInputElement | null;
        if (el) el.value = url;
      }
    } catch (err) {
      error = 'Upload failed. Please try again.';
      preview = currentUrl;
    } finally {
      uploading = false;
    }
  }
</script>

<div class="space-y-3">
  <label class="block text-sm font-medium text-navy">{label}</label>

  <!-- Current image preview -->
  {#if preview}
    <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-warm-100 border border-warm-200">
      <img src={preview} alt="Preview" class="w-full h-full object-cover" />
      {#if uploading}
        <div class="absolute inset-0 bg-navy/60 flex items-center justify-center">
          <div class="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      {/if}
    </div>
  {:else}
    <div class="w-full aspect-video rounded-xl bg-warm-100 border-2 border-dashed border-warm-200 flex flex-col items-center justify-center gap-2 text-gray-400">
      <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <span class="text-sm">No image selected</span>
    </div>
  {/if}

  <!-- Upload button -->
  <label class="relative cursor-pointer">
    <input
      type="file"
      accept="image/*"
      class="sr-only"
      on:change={handleFile}
      disabled={uploading}
    />
    <span
      class="inline-flex items-center gap-2 bg-navy text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-navy-800 transition-colors
        {uploading ? 'opacity-60 cursor-not-allowed' : ''}"
    >
      {#if uploading}
        <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Uploading…
      {:else}
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
        Choose image
      {/if}
    </span>
  </label>

  {#if error}
    <p class="text-red-500 text-sm">{error}</p>
  {/if}

  <p class="text-gray-400 text-xs">JPG, PNG, WebP, max 10MB. Images are hosted on Cloudinary.</p>
</div>
