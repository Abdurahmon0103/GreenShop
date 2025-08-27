<script setup>
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus, ShoppingCart, Heart } from "lucide-vue-next";
import End from "@/components/End.vue";
const selec = ref(null);
const selectPage = (page) => {
  selec.value = page;
};

const select = ref(null);

const selectImg = (id) => {
  select.value = id;
};

const liked = ref(false);

const toggleLike = () => {
  liked.value = !liked.value;
};

const selected = ref(null);
const selectBtn = (btn) => {
  selected.value = btn;
};

const qty = ref(1);
function increase() {
  qty.value++;
}
function decrease() {
  if (qty.value > 1) qty.value--;
}
</script>

<template>
  <section class="container mx-auto p-6 grid grid-cols-1 gap-10">
    <section class="my-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/"> Home </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Shop</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>
    <section class="grid grid-cols-2 gap-10">
      <div class="flex gap-4 items-center">
        <div class="flex flex-col gap-4 w-24">
          <img
            v-for="n in 4"
            :key="n"
            src="@/assets/Flower6.png"
            @click="selectImg(n)"
            :class="[
              'border rounded-lg cursor-pointer hover:scale-105 transition',
              select === n ? 'border-green-600' : 'border-0',
            ]"
          />
        </div>
        <Card class="flex-1 flex items-center justify-center">
          <CardContent class="p-6">
            <img src="@/assets/Flower6.png" alt="Product" class="rounded-xl" />
          </CardContent>
        </Card>
      </div>
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Barberton Daisy</h2>
        <p class="text-green-600 text-xl font-bold">$119.00</p>

        <div class="flex items-center gap-2">
          <span class="text-yellow-400">★★★★☆</span>
          <p class="text-sm text-gray-500">19 Customer Review</p>
        </div>

        <p class="text-gray-600 max-w-96">
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.
        </p>
        <div class="flex gap-2">
          <Button
            variant="outline"
            @click="selectBtn('btn1')"
            :class="[
              'rounded-full h-10 w-10',
              selected === 'btn1'
                ? 'text-green-600 border-green-600 hover:text-green-600'
                : 'text-black',
            ]"
            >S</Button
          >
          <Button
            variant="outline"
            @click="selectBtn('btn2')"
            :class="[
              'rounded-full h-10 w-10',
              selected === 'btn2'
                ? 'text-green-600 border-green-600 hover:text-green-600'
                : 'text-black',
            ]"
            >M</Button
          >
          <Button
            variant="outline"
            @click="selectBtn('btn3')"
            :class="[
              'rounded-full h-10 w-10',
              selected === 'btn3'
                ? 'text-green-600 border-green-600 hover:text-green-600'
                : 'text-black',
            ]"
            >L</Button
          >
          <Button
            variant="outline"
            @click="selectBtn('btn4')"
            :class="[
              'rounded-full h-10 w-10',
              selected === 'btn4'
                ? 'text-green-600 border-green-600 hover:text-green-600'
                : 'text-black',
            ]"
            >XL</Button
          >
        </div>

        <!-- Quantity + Actions -->
        <div class="flex items-center gap-4 mt-4">
          <div class="flex items-center border rounded-lg">
            <button @click="decrease" class="p-2">
              <Minus class="w-4 h-4" />
            </button>
            <Input
              type="number"
              v-model="qty"
              class="w-16 text-center border-0 focus:ring-0"
            />
            <button @click="increase" class="p-2">
              <Plus class="w-4 h-4" />
            </button>
          </div>

          <Button class="bg-green-600 hover:bg-green-700 text-white">
            BUY NOW
          </Button>
          <Button variant="outline" class="flex gap-2">
            <ShoppingCart class="w-4 h-4" /> ADD TO CART
          </Button>
          <Button
            @click="toggleLike"
            variant="outline"
            class="rounded-full transition-colors"
            :class="liked ? 'text-red-500' : 'text-gray-500'"
          >
            <Heart
              class="w-4 h-4"
              :class="liked ? 'fill-red-500' : 'fill-transparent'"
            />
          </Button>
        </div>
        <div class="text-sm text-gray-500 space-y-1 mt-4">
          <p><span class="font-medium">SKU:</span> 1995751877966</p>
          <p><span class="font-medium">Categories:</span> Potter Plants</p>
          <p><span class="font-medium">Tags:</span> Home, Garden, Plants</p>
        </div>
        <div class="flex gap-4 mt-3 items-center">
          <span class="text-gray-500">Share this products:</span>
          <div class="flex gap-3 text-gray-600 cursor-pointer">
            <img src="@/assets/facebook.svg" alt="" /><img
              src="@/assets/instagram.svg"
              alt=""
            /><img src="@/assets/twitter.svg" alt="" /><img
              src="@/assets/linkedin.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section class="w-full mt-20">
      <div class="flex flex-col gap-y-10">
        <div class="flex gap-5">
          <button
            @click="selectPage('page1')"
            :class="[
              'text-xl font-bold text-black cursor-pointer pb-4',
              selec === 'page1'
                ? 'text-green-600 border-b-3 border-green-600'
                : 'text-black',
            ]"
          >
            Product Description
          </button>
          <button
            @click="selectPage('page2')"
            :class="[
              'text-xl font-bold text-black cursor-pointer pb-4',
              selec === 'page2'
                ? 'text-green-600 border-b-3 border-green-600'
                : 'text-black',
            ]"
          >
            Reviews (19)
          </button>
        </div>
        <div class="flex flex-col gap-y-10">
          <p class="text-gray-600">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.
          </p>
          <div>
            <p class="font-bold">Living Room:</p>
            <p class="text-gray-600">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p class="font-bold">Dinning Room:</p>
            <p class="text-gray-600">
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
          </div>
          <div>
            <p class="font-bold">Office:</p>
            <p class="text-gray-600">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
    <p class="text-xl font-bold text-green-600 my-20">Releted Product</p>
    <section class="flex items-center justify-between">
      <div class="w-73 cursor-pointer">
        <div class="max-w-[292px] max-h-[292px] overflow-hidden">
          <img
            class="transition-all duration-150 hover:scale-110"
            src="@/assets/Flower2.png"
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
            src="@/assets/Flower3.png"
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
            src="@/assets/Flower4.png"
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
            src="@/assets/Flower5.png"
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
            src="@/assets/Flower6.png"
            alt=""
          />
        </div>
        <p>Aluminum Plant</p>
        <p class="text-green-600 font-bold">$179.00</p>
      </div>
    </section>
    <section><End></End></section>
  </section>
</template>
