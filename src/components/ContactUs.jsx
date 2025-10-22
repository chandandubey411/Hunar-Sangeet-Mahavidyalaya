import React, { useState } from "react";
import FloatingContactMenu from "./FloatingContactMenu";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);

    const payload = {
      access_key: "657cee21-e6ad-473e-83b9-0fafeeb73ef3", // Replace with your Web3Forms key
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }).then((r) => r.json());

      if (res.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setFormErrors({});
      } else {
        alert("Submission failed: " + (res.message || "Please try again"));
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong submitting the form ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-16 px-6 md:px-20 lg:px-40 bg-gradient-to-br from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] flex items-center pt-[120px]">
      <section className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-black bg-opacity-70 rounded-3xl shadow-2xl p-5 md:p-10 text-white backdrop-blur-md"
          noValidate
        >
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] bg-clip-text text-transparent mb-10 text-center drop-shadow-xl">
            Contact Us
          </h1>
          {isSubmitted && (
            <p className="mb-6 text-green-300 font-semibold">
              ✅ Thank you for contacting us! We will get back to you soon.
            </p>
          )}

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block font-semibold mb-2 text-pink-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF4FA0] text-black ${
                formErrors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.name && (
              <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block font-semibold mb-2 text-pink-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF4FA0] text-black ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.email && (
              <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block font-semibold mb-2 text-pink-300"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF4FA0] text-black ${
                formErrors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.phone && (
              <p className="text-red-400 text-sm mt-1">{formErrors.phone}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block font-semibold mb-2 text-pink-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF4FA0] text-black resize-none ${
                formErrors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.message && (
              <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition w-full font-semibold disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Contact Information & Map */}
        <div className="flex flex-col space-y-8 justify-center">
          <div className="bg-black bg-opacity-70 rounded-3xl shadow-2xl p-8 text-white backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] bg-clip-text text-transparent text-center">
              Get in Touch
            </h2>
            <p className="mb-4">
              <strong>Address:</strong> B11, behind Sleepwell, near Hotel Sunshine Park, Rampuri, Chander Nagar, Surya Nagar, Ghaziabad, Uttar Pradesh 201011
            </p>
            <p className="mb-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:creativeartandmusicschool@gmail.com" className="text-pink-400 underline">
                creativeartandmusicschool@gmail.com
              </a>
            </p>
            <p className="mb-4">
              <strong>Phone:</strong>{" "}
              <a href="tel:+917303064817" className="text-pink-400 underline">
                +91 7303064817
              </a>
            </p>
            <p className="mb-6">
              <strong>Operating Hours:</strong> Tuesday – Sunday: 11 AM to 8 PM, Monday: Closed
            </p>
            <a
              href="https://maps.app.goo.gl/B1ArG2DK1rhwVAMe6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#FF4FA0] via-[#8C52FF] to-[#43C6DB] text-white px-6 py-3 rounded font-bold hover:scale-105 transition"
              aria-label="Find us on Google Maps"
            >
              View on Map
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg h-72">
            <iframe
              title="Hunar Sangeet Mahavidyalaya Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8496820369737!2d77.3236569!3d28.664219199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5fd77bba43%3A0x9322f76017f47a89!2sHunar%20Sangeet%20Mahavidyalaya%20Surya%20Nagar%20Ghaziabad!5e0!3m2!1sen!2sin!4v1760595367368!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <FloatingContactMenu/>
    </main>
  );
};

export default ContactPage;
