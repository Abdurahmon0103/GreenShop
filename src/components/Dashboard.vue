<script setup>
import { ref } from "vue";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Cards from "@/components/Cards.vue";
import End from "@/components/End.vue";

const modelValue = ref([0, 500]);
</script>
<template>
  <section class="container mx-auto">
    <section class="flex justify-between items-center">
      <div class="flex flex-col gap-6">
        <div><p class="text-xl">Welcome to green shop</p></div>
        <div>
          <p class="text-8xl font-black">
            LET'S MAKE A BETTER
            <span class="text-green-600">PLANET</span>
          </p>
        </div>
        <div>
          <p class="text-lg text-gray-500 w-3/4">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
        </div>
        <div><Button class="w-40 h-10 mt-10">Shop Now</Button></div>
      </div>
      <div>
        <img src="../assets/Flower0.png" alt="" />
      </div>
    </section>
    <div class="flex gap-15">
      <section class="min-w-[310px] flex flex-col gap-10 bg-[#FBFBFB] px-6">
        <div>
          <div class="flex flex-col gap-4">
            <p class="text-lg font-bold">Categories</p>
            <p
              class="pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between"
            >
              House Plants<span>(33)</span>
            </p>
            <p
              class="pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between"
            >
              Potter Plants<span>(12)</span>
            </p>
            <p
              class="pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between"
            >
              Seeds<span>(65)</span>
            </p>
            <p
              class="pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between"
            >
              Small Plants<span>(39)</span>
            </p>
            <p
              class="pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between"
            >
              Big Plants<span>(23)</span>
            </p>
            <p
              class="pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between"
            >
              Succulents<span>(17)</span>
            </p>
            <p
              class="pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between"
            >
              Trerrariums<span>(19)</span>
            </p>
            <p
              class="pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between"
            >
              Gardening<span>(13)</span>
            </p>
            <p
              class="pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between"
            >
              Accessories<span>(18)</span>
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-2xl font-bold">Price Range</p>
            <div class="cursor-pointer">
              <Slider
                v-model="modelValue"
                :max="2000"
                :step="1"
                :class="cn('w-full', $attrs.class ?? '')"
              />
            </div>
            <div class="flex gap-1 text-green-600 items-center font-bold">
              <p class="">
                <span class="text-black font-normal">Price:</span> ${{
                  modelValue[0]
                }}
              </p>
              <p class="">-</p>
              <p class="">${{ modelValue[1] }}</p>
            </div>
            <Button class="w-1/3 font-bold cursor-pointer">Filter</Button>
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-lg font-bold">Size</p>
            <p
              class="pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between"
            >
              Small<span>(119)</span>
            </p>
            <p
              class="pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between"
            >
              Medium<span>(86)</span>
            </p>
            <p
              class="pl-4 hover:text-green-600 cursor-pointer transition-all duration-150 flex justify-between"
            >
              Large<span>(78)</span>
            </p>
            <img class="" src="../assets/sale.png" alt="" />
          </div>
        </div>
      </section>
      <section class="w-full">
        <Cards />
      </section>
    </div>
    <section class="flex justify-between mt-30">
      <div class="flex items-center justify-between min-w-[586px]">
        <div class="max-w-[384px] max-h-[384px] overflow-hidden">
          <img
            class="max-h-96 transition-all duration-150 hover:scale-105"
            src="../assets/Flower5.png"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-7 items-end">
          <p class="text-3xl font-bold max-w-60">Summer cactus & succulents</p>
          <p class="text-gray-500 max-w-96">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <Button>Find more ⟶</Button>
        </div>
      </div>
      <div class="flex items-center justify-between min-w-[586px]">
        <div class="max-w-[384px] max-h-[384px] overflow-hidden">
          <img
            class="max-h-96 transition-all duration-150 hover:scale-105"
            src="../assets/Flower3.png"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-7 items-end">
          <p class="text-3xl font-bold max-w-60">Styling Trends & much more</p>
          <p class="text-gray-500 max-w-96">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <Button>Find more ⟶</Button>
        </div>
      </div>
    </section>
    <section class="mt-20">
      <div class="flex flex-col gap-10 items-center">
        <div class="flex flex-col items-center gap-6">
          <p class="text-2xl font-bold">Our Blog Posts</p>
          <p class="text-gray-400">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
        </div>
        <div class="grid grid-cols-4 gap-x-10 justify-center items-center">
          <div class="flex flex-col gap-2">
            <div class="max-w-[340px] overflow-hidden">
              <img
                class="transition-all duration-150 hover:scale-110"
                src="../assets/image1.png"
                alt=""
              />
            </div>
            <p class="text-green-600 font-normal text-sm">
              September 12 I Read in 6 minutes
            </p>
            <p class="text-2xl font-semibold max-w-60">
              Cactus & Succulent Care Tips
            </p>
            <p class="text-gray-400 max-w-70">
              Cacti are succulents are easy care plants for any home or patio.
            </p>
            <Button variant="ghost">Read more ⟶</Button>
          </div>
          <div class="flex flex-col gap-2">
            <div class="max-w-[340px] overflow-hidden">
              <img
                class="transition-all duration-150 hover:scale-110"
                src="../assets/image2.png"
                alt=""
              />
            </div>
            <p class="text-green-600 font-normal text-sm">
              September 13 I Read in 2 minutes
            </p>
            <p class="text-2xl font-semibold max-w-60">
              Top 10 Succulents for Your Home
            </p>
            <p class="text-gray-400 max-w-70">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <Button variant="ghost">Read more ⟶</Button>
          </div>
          <div class="flex flex-col gap-2">
            <div class="max-w-[340px] overflow-hidden">
              <img
                class="transition-all duration-150 hover:scale-110"
                src="../assets/image3.png"
                alt=""
              />
            </div>
            <p class="text-green-600 font-normal text-sm">
              September 15 I Read in 3 minutes
            </p>
            <p class="text-2xl font-semibold max-w-60">
              Cacti & Succulent Care Tips
            </p>
            <p class="text-gray-400 max-w-70">
              Cacti and succulents thrive in containers and because most are...
            </p>
            <Button variant="ghost">Read more ⟶</Button>
          </div>
          <div class="flex flex-col gap-2">
            <div class="max-w-[340px] overflow-hidden">
              <img
                class="transition-all duration-150 hover:scale-110"
                src="../assets/image4.png"
                alt=""
              />
            </div>
            <p class="text-green-600 font-normal text-sm">
              September 15 I Read in 2 minutes
            </p>
            <p class="text-2xl font-semibold max-w-60">
              Best Houseplants Room by Room
            </p>
            <p class="text-gray-400 max-w-70">
              The benefits of houseplants are endless. In addition to...
            </p>
            <Button variant="ghost">Read more ⟶</Button>
          </div>
        </div>
      </div>
    </section>
  </section>
  <section class="px-50"><End></End></section>
</template>
