export const ContactForm = () => {
  return (
    <>
      <form id="contact" className=" row g-3" >
        <div className="col-md-6">
          <input
            className="w-100 p-2 rounded border-0"
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Name"
          />
        </div>
        <div className="col-md-6">
          <input
            className="w-100 p-2 rounded border-0"
            type="email"
            name="reply_to"
            id="reply_to"
            placeholder="Email"
          />
        </div>
        <div className="col-md-12">
          <textarea
            className="w-100 p-2 rounded border-0"
            name="message"
            placeholder="Your Message"
            rows="5"
          />
        </div>
        <div className="col-md-12">
          <input
            className="w-25 btn rounded btn-light text-uppercase w-25 m-auto"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </>
  );
};
