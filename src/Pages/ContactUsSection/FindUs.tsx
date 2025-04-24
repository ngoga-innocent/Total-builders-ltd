// import React from 'react'
import { BsBuildingsFill } from "react-icons/bs";
import { useState } from "react";
import { url } from "../../url";
const FindUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch(`${url}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setResponseMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // clear form
      } else {
        setResponseMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setResponseMessage("❌ Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-screen py-6 md:py-20 ">
      <div className="w-[90vw] md:w-[80vw] mx-auto flex flex-col items-center">
        <div className="flex flex-row items-center gap-x-2">
          <BsBuildingsFill />
          <p className="">Map</p>
        </div>
        <h4 className="text-2xl md:text-5xl py-3">Find Us On Google</h4>
        <p>Locate and visit us or send us a message for next project!</p>
        <div className="w-[100%] flex flex-col gap-y-3 gap-x-4 md:flex-row md:gap-x-12 py-12 md:py-20">
          <div className="flex-1 w-[90vw] md:w-[40vw] h-[90vh] md:h-[80vh] rounded-2xl overflow-clip">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.984244716037!2d30.071500401275202!3d-1.9549582184369891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca689327873a5%3A0x261a284b41a40b31!2sKimihurura%2C%20Kigali!5e0!3m2!1sen!2srw!4v1745265609633!5m2!1sen!2srw"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex-1 flex flex-col py-6 md:py-10 bg-[#FEF9E1] rounded-2xl px-4 md:px-8">
            <h1 className="text-xl md:text-3xl py-4">Submit a Request</h1>
            <form onSubmit={handleSubmit} className="gap-y-4 flex flex-col">
              <div className="flex flex-col">
                <p>Name *</p>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                  className="border border-[#0f172a] rounded p-2 bg-white"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="flex flex-col">
                <p>Email *</p>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange} // ✅ This was missing
                  value={formData.email}
                  required
                  className="border border-[#0f172a] rounded p-2 bg-white"
                  placeholder="Enter email address"
                />
              </div>
              <div className="flex flex-col">
                <p>Phone Number *</p>
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  required
                  className="border border-[#0f172a] rounded p-2 bg-white"
                  placeholder="Enter Phone number"
                />
              </div>
              <div className="flex flex-col">
                <p>Message *</p>
                <textarea
                  name="message"
                  onChange={handleChange} // ✅ This was missing
                  value={formData.message}
                  required
                  rows={4}
                  cols={50}
                  className="border border-[#0f172a] rounded p-2 bg-white"
                  placeholder="Write your message here"
                />
              </div>
              <button
                type="submit"
                className="py-4 px-7 md:px-10 rounded-full bg-[#FD9800] text-[#0f172a] w-fit font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
              {responseMessage && (
                <p className="text-sm mt-2">{responseMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
