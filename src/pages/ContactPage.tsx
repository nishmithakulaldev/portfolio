import { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}
const ContactPage = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", form);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValid =
    form.name.trim() !== "" &&
    form.email.includes("@") &&
    form.message.trim() !== "";

  if (submitted) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your message has been received. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
      <p className="text-gray-600 mb-8">
        Have a question or want to work together? Send me a message.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Your message"
          />
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`py-3 rounded-lg font-medium transition-colors ${
            isValid
              ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
export default ContactPage;
