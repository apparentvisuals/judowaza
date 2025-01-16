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

## General

<div class="technique-layout">
  <img src="https://placehold.co/600x400?text=Overall" />
  <ul>
      <li>Kuzushi - show understanding of the off-balancing for each technique</li>
      <li>Kake - demonstration does not require full power but understanind of using the whole body in sync</li>
      <li :class="level < 2 ? 'exclude' : ''">Point 3</li>
      <li :class="level < 2 ? 'exclude' : ''">Point 4</li>
      <li :class="level < 3 ? 'exclude' : ''">Point 5</li>
      <li :class="level < 3 ? 'exclude' : ''">Point 6</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Uke" />
  <ul>
      <li>Strikes should aim for top of forehead</li>
      <li>Maintain straight body for all standing throws</li>
      <li :Class="level < 2 ? 'exclude': ''">Body should make full contact at same time during breakfall</li>
  </ul>
  <img src="https://placehold.co/600x400?text=Tori" />
  <ul>
      <li>Wait for Uke to grip</li>
      <li>Be at starting position for every technique first</li>
  </ul>
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
      <li>Show direction of kuzushi (back) on second step using slight pull</li>
      <li>Throw to 45, hands go from shoulder to hip maitaining balance</li>
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

* [IJF KATA - Criterias for evaluation Jan 2024](https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2024/01/IJF_KATA_EVALUATION_Jan_2024-E-1706106369.pdf)
* [Kodokan Kata - Nage-no-kata ENG](https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2020/05/Nage_no_Kata_2nd_20150415-1589-1589187841.pdf)
* [Kodokan Kata - Nage-no-kata FRA](https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2020/07/Nage-no-kata_FRA-1596187174-1596187174.pdf)
* [Kodokan Kata - Nage-no-kata YouTube](https://www.youtube.com/watch?v=6HpFXUKxcDw)

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