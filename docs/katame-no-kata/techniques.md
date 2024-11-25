---
sidebar: false
---

# Katame-no-kata

<div class="relative my-6">
  <label for="difficulty" class="sr-only">Difficulty</label>
  <input id="difficulty" type="range" min="1" max="3" step="1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" v-model="level" />
  <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Beginner</span>
  <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">Intermediate</span>
  <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Advanced</span>
</div>

## Entrance

<div class="technique-layout">
  <img src="https://placehold.co/600x400" />
  <ul>
      <li>Point 1</li>
      <li>Point 2</li>
      <li :class="level < 2 ? 'exclude' : ''">Point 3</li>
      <li :class="level < 2 ? 'exclude' : ''">Point 4</li>
      <li :class="level < 3 ? 'exclude' : ''">Point 5</li>
      <li :class="level < 3 ? 'exclude' : ''">Point 6</li>
  </ul>
</div>

## Osae-waza

<div class="technique-layout">
  <img src="https://placehold.co/600x400?text=Kesa-gatame" />
  <ul>
      <li>Point 1</li>
      <li>Point 2</li>
      <li :class="level < 2 ? 'exclude' : ''">Point 3</li>
      <li :class="level < 2 ? 'exclude' : ''">Point 4</li>
      <li :class="level < 3 ? 'exclude' : ''">Point 5</li>
      <li :class="level < 3 ? 'exclude' : ''">Point 6</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Kata-gatame" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Kami-shiho-gatame" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Yoko-shiho-gatame" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Kuzure-kami-shiho-gatame" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
</div>

## Shime-waza

<div class="technique-layout">
  <img src="https://placehold.co/600x400?text=Kata-juji-jime" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Hadaka-jime" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Okuri-eri-jime" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Kataha-jime" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Gyaku-juji-jime" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
</div>

## Kansetsu-waza

<div class="technique-layout">
  <img src="https://placehold.co/600x400?text=Ude-garami"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Ude-hishigi-juji-gatame"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Ude-hishigi-ude-gatame"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Ude-hishigi-hiza-gatame"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Ashi-garami"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
</div>

## Exit

<div class="technique-layout">
  <img src="https://placehold.co/600x400" />
  <ul>
      <li>Point 1</li>
      <li>Point 2</li>
      <li :class="level < 2 ? 'exclude' : ''">Point 3</li>
      <li :class="level < 2 ? 'exclude' : ''">Point 4</li>
      <li :class="level < 3 ? 'exclude' : ''">Point 5</li>
      <li :class="level < 3 ? 'exclude' : ''">Point 6</li>
  </ul>
</div>

## References

<script setup>
import { ref } from 'vue';

const level = ref(1);
</script>

<style lang="pcss">
.technique-layout {
  @apply grid gap-4 pt-8;
}
@media (min-width: 768px) {
  .technique-layout {
    @apply grid-cols-2;
  }
}
@media (min-width: 1600px) {
  .technique-layout {
    grid-template-columns: 600px 1fr;
  }
}
.exclude {
  @apply opacity-50;
}
</style>