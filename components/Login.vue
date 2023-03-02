<template>
  <div
    class="bg-[#0d0208] before:animate-pulse before:bg-[#003b00] before:from-gray-900 overflow-hidden before:via-[#008f11] before:bg-[#008f11] before:absolute"
  >
    <div id="myDIV">
      <div
        class="w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute"
      >
        <div
          class="w-full sm:w-1/2 lg:2/3 px-6 bg-gray-800 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4 rounded-lg"
        >
          <div
            class="w-full flex justify-center text-[#008f11] text-xl mb:2 md:mb-5"
          >
            Sign In
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-xs font-medium text-white"
              >ID</label
            >
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-xs font-medium text-white"
              >Password</label
            >
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              required
            />
          </div>
          <button
            class="mt-4 md:mt-10 w-full flex justify-center text-sm md:text-xl border-2 border-green-800 py-2 rounded-md text-[#008f11]"
            @click="this.submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const para = document.createElement("div");
    para.className =
      "flex flex-wrap gap-0.5 h-screen items-center justify-center  relative";
    let el =
      '<div class = "  transition-colors duration-[1.5s] hover:duration-[0s] border-[#00FF00] h-[calc(5vw-2px)] w-[calc(5vw-2px)] md:h-[calc(4vw-2px)] md:w-[calc(4vw-2px)] lg:h-[calc(3vw-4px)] lg:w-[calc(3vw-4px)] bg-gray-900 hover:bg-[#00FF00]"></div>';
    for (var k = 1; k <= 1000; k++) {
      el +=
        '<div class = " transition-colors duration-[1.5s] hover:duration-[0s] border-[#008f11] h-[calc(5vw-2px)] w-[calc(5vw-2px)] md:h-[calc(4vw-2px)] md:w-[calc(4vw-2px)] lg:h-[calc(3vw-4px)] lg:w-[calc(3vw-4px)] bg-gray-900 hover:bg-[#008f11]"></div>';
    }

    para.innerHTML = el;
    document.getElementById("myDIV").appendChild(para);
  },
  methods: {
    submit() {
      alert("login");
    },
  },
};
</script>
<style>
</style>