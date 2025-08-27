<script setup>
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
</script>
<template>
  <div class="container">
    <section class="flex justify-between">
      <div class="flex gap-8">
        <p>All Plants</p>
        <p>New Arrivals</p>
        <p>Sale</p>
      </div>
      <div>
        <p class="flex gap-3 items-center">
          Short by:
          <Select>
            <SelectTrigger class="w-[100px] border-0 shadow-none">
              <SelectValue placeholder="Default sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Default sorting">Default sorting</SelectItem>
                <SelectItem value="By price">By price</SelectItem>
                <SelectItem value="By size">By size</SelectItem>
                <SelectItem value="Sale">Sale</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </p>
      </div>
    </section>
    <div class="flex flex-col gap-20 items-end">
      <section class="grid grid-cols-3 gap-x-32 gap-y-30 items-center">
        <div class="w-73 cursor-pointer">
          <div class="max-w-[292px] max-h-[292px] overflow-hidden">
            <img
              class="transition-all duration-150 hover:scale-110"
              src="../assets/Flower1.png"
              alt=""
            />
          </div>
          <p>Barberton Daisy</p>
          <p class="text-green-600 font-bold">$119.00</p>
        </div>
        <div class="w-73 cursor-pointer">
          <div class="max-w-[292px] max-h-[292px] overflow-hidden">
            <img
              class="transition-all duration-150 hover:scale-110"
              src="../assets/Flower2.png"
              alt=""
            />
          </div>
          <p>Angel Wing Begonia</p>
          <p class="text-green-600 font-bold">$169.00</p>
        </div>
        <div class="w-73 cursor-pointer">
          <div class="max-w-[292px] max-h-[292px] overflow-hidden">
            <img
              class="transition-all duration-150 hover:scale-110"
              src="../assets/Flower3.png"
              alt=""
            />
          </div>
          <p>African Violet</p>
          <p class="text-green-600 font-bold">$199.00</p>
        </div>
        <div class="w-73 cursor-pointer">
          <div class="max-w-[292px] max-h-[292px] overflow-hidden">
            <img
              class="max-h-[292px] transition-all duration-150 hover:scale-110"
              src="../assets/Flower4.png"
              alt=""
            />
          </div>
          <p>Beach Spider Lily</p>
          <p class="text-green-600 font-bold">$129.00</p>
        </div>
        <div class="w-73 cursor-pointer">
          <div class="max-w-[292px] max-h-[292px] overflow-hidden">
            <img
              class="transition-all duration-150 hover:scale-110"
              src="../assets/Flower5.png"
              alt=""
            />
          </div>
          <p>Blushing Bromeliad</p>
          <p class="text-green-600 font-bold">$139.00</p>
        </div>
        <div class="w-73 cursor-pointer">
          <div class="max-w-[292px] max-h-[292px] overflow-hidden">
            <img
              class="transition-all duration-150 hover:scale-110"
              src="../assets/Flower6.png"
              alt=""
            />
          </div>
          <p>Aluminum Plant</p>
          <p class="text-green-600 font-bold">$179.00</p>
        </div>
        <div class="w-73 cursor-pointer">
          <div class="max-w-[292px] max-h-[292px] overflow-hidden">
            <img
              class="transition-all duration-150 hover:scale-110"
              src="../assets/Flower7.png"
              alt=""
            />
          </div>
          <p>Bird's Nest Fern</p>
          <p class="text-green-600 font-bold">$99.00</p>
        </div>
        <div class="w-73 cursor-pointer">
          <div class="max-w-[292px] max-h-[292px] overflow-hidden">
            <img
              class="transition-all duration-150 hover:scale-110"
              src="../assets/Flower8.png"
              alt=""
            />
          </div>
          <p>Broadleaf Lady Palm</p>
          <p class="text-green-600 font-bold">$59.00</p>
        </div>
        <div class="w-73 cursor-pointer">
          <div class="max-w-[292px] max-h-[292px] overflow-hidden">
            <img
              class="transition-all duration-150 hover:scale-110"
              src="../assets/Flower9.png"
              alt=""
            />
          </div>
          <p>Chinese Evergreen</p>
          <p class="text-green-600 font-bold">$39.00</p>
        </div>
      </section>
      <div>
        <Pagination
          v-slot="{ page }"
          :items-per-page="10"
          :total="40"
          :default-page="1"
        >
          <PaginationContent v-slot="{ items }">
            <PaginationPrevious />

            <template v-for="(item, index) in items" :key="index">
              <PaginationItem
                v-if="item.type === 'page'"
                :value="item.value"
                :is-active="item.value === page"
              >
                {{ item.value }}
              </PaginationItem>
            </template>

            <PaginationEllipsis :index="4" />

            <PaginationNext />
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  </div>
</template>
