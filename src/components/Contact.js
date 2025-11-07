import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("myzbrnpn"); // ← your Formspree ID
  const [showThankYou, setShowThankYou] = useState(false);

  // when the form is successfully submitted
  useEffect(() => {
    if (state.succeeded) {
      setShowThankYou(true);

      // show thank you message for 5 seconds, then return to form
      const timer = setTimeout(() => {
        setShowThankYou(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section className="py-16 lg:section lg:mb-[180px] mt-[50px] " id="contact">
      <div className="container mx-auto lg:mt-[220px]">
        {showThankYou ? (
          // ✅ Thank You Message
          <div className="text-center flex flex-col items-center justify-center min-h-[400px]">
            <h2 className="text-[30px] lg:text-[50px] font-semibold text-accent">
              🎉 Thanks for your message!
            </h2>
            <p className="text-white mt-4 text-lg">
              I’ll get back to you soon.
            </p>
          </div>
        ) : (
          // ✅ Original Form
          <div className="flex flex-col lg:flex-row lg:mb-[200px]">
            {/* Left Side */}
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex justify-start items-center"
            >
              <div>
                <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                  Get in touch
                </h4>
                <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                  Let's work <br /> together!
                </h2>
              </div>
            </motion.div>

            {/* Right Side - Formspree form */}
            <motion.form
              onSubmit={handleSubmit}
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            >
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />

              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <textarea
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                name="message"
                placeholder="Your message"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="btn btn-lg"
              >
                {state.submitting ? "Sending..." : "Send message"}
              </button>
            </motion.form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
