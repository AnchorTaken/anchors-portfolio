import { useState, useEffect } from "react";
// Import to fetch api

import axios from "axios";

function Contact() {
  const [contactActive, setContactActive] = useState(false);
  // Create a submit form
  const API = "http://localhost:1337/api/contacts";
  const token =
    "c839beea5ab9415a7ec0645587986d31e80c65d60a1d4d77c44ac7e821f943f0081a3f0d2ba060363a5332dd8c91bdaf711a30bb575dcd2712a5d00a0492bb347c8833b7b3be9618c1287302642a4265a74529b9d6b7a2d86ac16d167407f815f35d397fce7e8b11892014ae1d0b41ffaa7321af4601e9630d94f4ad97940483";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { name, email, phone, subject, message } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API, {
        data: {
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message,
        },
        headers: {
          "content-type": "text/plain;  charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div data-aos="fade-in" data-aos-delay="700">
      <div
        className={
          contactActive
            ? "container mx-auto contact active"
            : "container mx-auto contact"
        }
      >
        <div className="top mb-5 mx-auto w-fit">
          <div className="flex w-fit m-auto">
            <div
              className="number mr-5 title sm text-accent font-mc"
              data-aos="fade-down"
            >
              04.
            </div>
            <div
              className="title sm text-white font-mc"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              Get in touch
            </div>
          </div>
          <div className="my-5 w-fit font-normal text-white">
            <p>
              Interested in what I can do ? Shoot me a message. I get
              notifications when form below is used ;)
            </p>

            <button
              className={contactActive ? "btn-pixel-no" : "btn-pixel"}
              onClick={() =>
                setContactActive((prevContactActive) => !prevContactActive)
              }
            >
              <div
                className={
                  contactActive
                    ? "animate__bounceIn animate__animated"
                    : "animate__fadeIn animate__animated"
                }
              >
                {contactActive ? "Send me something below" : "Say Hello!"}
              </div>
            </button>
          </div>
        </div>

        {/* Contact form */}
        <div
          className={
            contactActive
              ? "contact-form z-10 relative mb-20 animate__fadeInUpBig animate__animated"
              : "contact-form animate__fadeOutDownBig animate__animated contact-out"
          }
        >
          <form action="w-7/12 block" onSubmit={onSubmit}>
            <div className="flex">
              <div className="w-1/2 pr-2 mb-5">
                <label
                  htmlFor="name"
                  className={formData.name !== "" ? "active" : "nothing"}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChange}
                  placeholder="Name"
                  className="input"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className={formData.email !== "" ? "active" : "nothing"}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email"
                  className="input"
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 pr-2 mb-5">
                <label
                  htmlFor="phone"
                  className={formData.phone !== "" ? "active" : "nothing"}
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                  placeholder="Phone"
                  className="input"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="subject"
                  className={formData.subject !== "" ? "active" : "nothing"}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={onChange}
                  placeholder="Subject"
                  className="input"
                />
              </div>
            </div>
            <div className="">
              <div className="w-full">
                <label
                  htmlFor="message"
                  className={formData.message !== "" ? "active" : "nothing"}
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  onChange={onChange}
                  placeholder="Message"
                  className="input"
                />
              </div>
              <div className="mt-10">
                <button className="btn-show-me btn-send">Send </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
