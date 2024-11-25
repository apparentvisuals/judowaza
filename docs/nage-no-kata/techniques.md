---
sidebar: false
---

# Nage-no-kata

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

## Te-waza

<div class="technique-layout">
  <img src="https://placehold.co/600x400?text=Uki-otoshi" />
  <ul>
      <li>Point 1</li>
      <li>Point 2</li>
      <li :class="level < 2 ? 'exclude' : ''">Point 3</li>
      <li :class="level < 2 ? 'exclude' : ''">Point 4</li>
      <li :class="level < 3 ? 'exclude' : ''">Point 5</li>
      <li :class="level < 3 ? 'exclude' : ''">Point 6</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Seoi-nage" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Kata-guruma" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
</div>

## Koshi-waza
<div class="technique-layout">
  <img src="https://placehold.co/600x400?text=Uki-goshi" />
  <ul>
      <li >1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Harai-goshi" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Tsuri-komi-goshi" />
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
</div>

## Ashi-waza

<div class="technique-layout">
  <img src="https://placehold.co/600x400?text=Okuri-ashi-harai"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Sasae-tsurikomi-ashi"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Uchi-mata"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
</div>

## Ma-sutemi-waza

<div class="technique-layout">
  <img src="https://placehold.co/600x400?text=Tomoe-nage"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Ura-nage"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Sumi-gaeshi"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
</div>

## Yoko-sutemi-waza

<div class="technique-layout">
  <img src="https://placehold.co/600x400?text=Yoko-gake"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Yoko-guruma"/>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Uki-waza"/>
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