<template>
  <section class="flex justify-center py-28 md:px-16 px-0" id="contact">
    <div class=" w-11/12 md:w-11/12 lg:w-10/12 flex justify-center md:justify-left">
      <div class="lg:w-3/5 ">
        <p class="uppercase text-base text-[#a15aff] mb-2 title">{{ $t("contactText") }}</p>
        <h5 class="uppercase mb-4 text-[#1b023c]">
          {{ $t("contactMeSub") }}<br />
          {{ $t("contactMeSubtitle") }}
        </h5>
        <p class="mb-5 text-[#011b32]">{{ $t("contactMeDesc") }}</p>

        <form id="contact-form" >
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
<script setup>

// TODO: integrate mail third party
</script>
<style>
#contact p.title {
  font-family: "Sansation";
  font-weight: 700;
}
#contact h5 {
  font-family: "Inter";
  font-size: 18px;
  font-weight: 700;
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
@media (max-width: 600px){
  
#contact-form .form-group {
  grid-template-columns: 1fr;
}
}
</style>
