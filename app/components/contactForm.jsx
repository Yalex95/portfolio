

export const ContactForm = () => {
  return (
    <>
      <form id="contact" className="row g-3">
        <input
          className="w-100 p-2 rounded border-0"
          type="text"
          name="from_name"
          id="from_name"
          placeholder="Name"
        />

        <input
          className="w-100 p-2 rounded border-0"
          type="email"
          name="reply_to"
          id="reply_to"
          placeholder="Email"
        />

        <textarea
          className="w-100 p-2 rounded border-0"
          name="message"
          placeholder="Your Message"
          rows="5"
        />

        <input className="roundedtext-uppercase " type="submit" />
      </form>
    </>
  );
};
