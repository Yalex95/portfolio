<template>
  <section class="flex justify-center" id="contact">
    <div class="w-10/12 flex">
      <div class="w-3/5">
        <p class="uppercase title mb-2">{{ $t("contactText") }}</p>
        <h5 class="uppercase mb-4">
          {{ $t("contactMeSub") }}<br />
          {{ $t("contactMeSubtitle") }}
        </h5>
        <p class="mb-5">{{ $t("contactMeDesc") }}</p>

        <form id="contact-form">
      <span v-if="message" class="error">{{ message }}</span>
          <input type="text" name="user_name" placeholder="Full Name *" />
          <div class="form-group">
            <input type="email" name="user_email" placeholder="E-mail *" />
            <input type="text" name="user_phone" placeholder="Phone Number *" />
          </div>
          <textarea
            placeholder="Your Message"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button class="btn-purple-border active">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>
