<script setup>
import { Button } from "@/components/ui/button";
</script>
<template>
  <section class="flex items-center justify-between px-47 py-6">
    <div><img class="max-w-60" src="../assets/logo.png" alt="" /></div>
    <div class="flex gap-8 text-lg font-medium">
      <RouterLink to="Dashboard">
        <div class="cursor-pointer">Home</div>
      </RouterLink>
      <div class="cursor-pointer">Shop</div>
      <div class="cursor-pointer">Plant Care</div>
      <div class="cursor-pointer">Blogs</div>
    </div>
    <div class="flex items-center gap-6">
      <div class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
            stroke-width="0.5"
            stroke="currentColor"
          />
        </svg>
      </div>
      <div class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 48 48"
        >
          <g fill="none">
            <path d="M39 32H13L8 12h36z" />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"
            />
            <circle
              cx="13"
              cy="39"
              r="3"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            />
            <circle
              cx="39"
              cy="39"
              r="3"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            />
          </g>
        </svg>
      </div>
      <Button class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"
            stroke-width="0.5"
            stroke="currentColor"
          />
        </svg>
        Login
      </Button>
    </div>
  </section>
</template>
