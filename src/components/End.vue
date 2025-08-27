<script setup></script>
<template>
  <section>
    <div class="grid grid-cols-4 items-start mt-30">
      <div class="gap-4 flex flex-col">
        <p class="font-bold">Garden Care</p>
        <p class="text-gray-400 max-w-60">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div class="gap-4 flex flex-col">
        <p class="font-bold">Plant Renovation</p>
        <p class="text-gray-400 max-w-60">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div class="gap-4 flex flex-col">
        <p class="font-bold">Watering Graden</p>
        <p class="text-gray-400 max-w-60">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div class="gap-4 flex flex-col">
        <p class="font-bold">Would you like to join newsletters?</p>
        <div class="flex w-full max-w-sm items-center gap-1.5">
          <Input id="email" type="email" placeholder="Email" />
          <Button type="submit"> Subscribe </Button>
        </div>
        <p class="text-gray-400">
          We usually post offers and challenges in newsletter. We’re your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!
        </p>
      </div>
    </div>
    <div class="grid grid-cols-4 mt-10">
      <div><img src="../assets/logo.png" alt="" /></div>
      <div class="flex gap-2 items-center cursor-pointer">
        <img class="max-w-10" src="../assets/location.svg" alt="" />
        <p class="max-w-50">70 West Buckingham Ave. Farmingdale, NY 11735</p>
      </div>
      <div class="flex gap-2 items-center cursor-pointer">
        <img class="max-w-10" src="../assets/mail.svg" alt="" />
        <p>contact@greenshop.com</p>
      </div>
      <div class="flex gap-2 items-center cursor-pointer">
        <img class="max-w-10" src="../assets/phone.svg" alt="" />
        <p>+88 01911 717 490</p>
      </div>
    </div>
    <div class="grid grid-cols-4 mt-10 mb-10">
      <div class="gap-3 flex flex-col">
        <p class="font-bold text-xl">My Account</p>
        <p>My Account</p>
        <p>Our stores</p>
        <p>Contact us</p>
        <p>Career</p>
        <p>Specials</p>
      </div>
      <div class="gap-3 flex flex-col">
        <p class="font-bold text-xl">Help & Guide</p>
        <p>Help Center</p>
        <p>How to Buy</p>
        <p>Shipping & Delivery</p>
        <p>Product Policy</p>
        <p>How to Return</p>
      </div>
      <div class="gap-3 flex flex-col">
        <p class="font-bold text-xl">Categories</p>
        <p>House Plants</p>
        <p>Potter Plants</p>
        <p>Seeds</p>
        <p>Small Plants</p>
        <p>Accessories</p>
      </div>
      <div class="flex flex-col gap-4">
        <p>Social Media</p>
        <div class="flex gap-4">
          <img src="../assets/facebook.svg" alt="" /><img
            src="../assets/instagram.svg"
            alt=""
          /><img src="../assets/twitter.svg" alt="" /><img
            src="../assets/youtube.svg"
            alt=""
          />
        </div>
        <p>We accept</p>
        <div class="flex gap-4">
          <img src="../assets/paypal.svg" alt="" /><img
            src="../assets/mastercard.svg"
            alt=""
          /><img src="../assets/visa.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
  <p class="flex justify-center pb-4">© 2025 GreenShop. All Rights Reserved.</p>
</template>
