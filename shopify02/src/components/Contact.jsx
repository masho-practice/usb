import React from "react";

const Contact = () => {
  return (
    <div className="py-16 bg-slate-100 grid gap-8 sm:grid-cols-2 px-3 sm:px-6 md:px-20 lg:px-32">
      <div className="py-8">
        <h1 className="text-3xl text-gray-500 py-3">TIKVAH-ETHIOPIA</h1>
        <p className="text-gray-500 text-sm px-4">
          Tikvah Ethiopia means Hope of Ethiopia. Our channel is working mainly
          on three basic issues. The first is to provide timely and reliable
          information to its family, thereby contributing to the fact that our
          Chanel’s family is not deceived by false information. The second is
          charity work, which has been done to help and protect many of our
          infirm people by coordinating with our families. The last and third is
          to empower young people. In this way, it is working to inspire young
          people to strive for a good cause and to create enlightenment among
          this generation.
        </p>
      </div>

      <div className="sm:order-3 ">
        <h1>CONTACT US</h1>
        <p>Addis Ababa, Ethiopia</p>
        <p>
          <span>Phone:</span> +251 0000 3630
        </p>
        <p>
          <span>Email:</span> contact@gmail.com
        </p>
      </div>
      <div className="w-full ">
        <h1>SEND US A MESSAGE</h1>
        <p>Drop us a message here, we will respond as soon as possible.</p>

        <form action="POST" className="flex flex-col font-serif mx-auto space-y-4   ">
          <input className="py-3 px-3" type="text" required placeholder="your name" />

          <input
            className="py-3 px-3"
            type="email"
            required
            placeholder="your email"
          />

          <input className="py-3 px-3" type="number" placeholder="your phone number" />
          <textarea placeholder="your message"/>

          <button type="submit" className="text-white bg-[#9900cc] rounded py-2 my-4 mx-auto px-6">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
