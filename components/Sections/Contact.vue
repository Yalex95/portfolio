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
          <!-- <span v-if="message" class="error">{{ message }}</span> -->
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
<script setup></script>
<style>
#contact {
  padding: 100px 0 72px;
}
#contact p.title {
  color: #a15aff;
  font-family: "Sansation";
  font-size: 16px;
  font-weight: 700;
}
#contact h5 {
  color: #1b023c;
  font-family: "Inter";
  font-size: 18px;
  font-weight: 700;
  /* margin: 0; */
}
#contact p {
  color: #011b32;
}
#contact #contact-form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}
#contact #contact-form input,
#contact #contact-form textarea {
  border-radius: 5px;
  border: 1px solid #a15aff;
  background: #f9f9f9;
  padding: 15px;
}
#contact-form .form-group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  gap: 10px;
}
</style>
