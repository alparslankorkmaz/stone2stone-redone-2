"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm("xdorzape");
  if (state.succeeded) {
    return (
      <div className="flex justify-center items-center text-5xl font-semibold text-green-700">
        <h3> Message sent successfully!</h3>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="lg:w-11/12">
          <h3 className="font-semibold text-2xl lg:text-5xl mb-4">
            Leave us a message
          </h3>
          <div className="grid grid-cols-2 gap-5">
            {/* NAME */}
            <div className="col-span-2 flex flex-col">
              <label htmlFor="name" className="p-3 text-lg">
                Name
              </label>
              <input
                required
                id="name"
                type="text"
                name="name"
                className="form-input rounded-lg p-3 focus:border-s2s-orange focus:outline-none focus:ring-0 border-white"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            {/* EMAIL */}
            <div className="col-span-2 flex flex-col">
              <label htmlFor="email" className="p-3 text-lg">
                Email Address
              </label>
              <input
                required
                id="email"
                type="email address"
                name="email"
                className="form-input rounded-lg p-3 focus:border-s2s-orange focus:outline-none focus:ring-0 border-white"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            {/* PHONE */}
            <div className="col-span-2 flex flex-col">
              <label htmlFor="phone" className="p-3 text-lg">
                Contact Number
              </label>
              <input
                required
                id="phone"
                type="tel"
                name="phone"
                className="form-input rounded-lg p-3 focus:border-s2s-orange focus:outline-none focus:ring-0 border-white"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>

            {/* COMPANY */}
            <div className="col-span-1 flex flex-col">
              <label htmlFor="company" className="p-3 text-lg">
                Company
              </label>
              <input
                required
                id="company"
                type="text"
                name="company"
                className="form-input rounded-lg p-3 focus:border-s2s-orange focus:outline-none focus:ring-0 border-white"
              />
              <ValidationError
                prefix="Company"
                field="company"
                errors={state.errors}
              />
            </div>
            {/* JOB TITLE */}
            <div className="col-span-1 flex flex-col">
              <label htmlFor="jobtitle" className="p-3 text-lg">
                Job Title
              </label>
              <input
                required
                id="jobtitle"
                type="text"
                name="jobtitle"
                className="form-input rounded-lg p-3 focus:border-s2s-orange focus:outline-none focus:ring-0 border-white"
              />
              <ValidationError
                prefix="Company"
                field="company"
                errors={state.errors}
              />
            </div>
            {/* MESSAGE */}
            <div className="col-span-2 flex flex-col">
              <label htmlFor="message" className="p-3 text-lg">
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                rows={10}
                className="form-input rounded-lg p-3 focus:border-s2s-orange focus:outline-none focus:ring-0 border-white"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex justify-end col-span-2 mt-5">
              <button
                type="submit"
                className="text-white font-semibold text-xl px-20 py-2 w-fit rounded-lg bg-s2s-purple hover:bg-s2s-orange duration-200"
                disabled={state.submitting}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
