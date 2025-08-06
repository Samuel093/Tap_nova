import { motion } from "framer-motion";

export default function GetDemoSection() {
  return (
    <section className="py-15 sm:my-16 my-6 sm:px-16 px-6 sm:py-12  
    lg:px-12 rounded-[20px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white 
        rounded-2xl shadow-lg p-8 sm:p-10 flex flex-col lg:flex-row 
        items-start lg:items-center justify-between gap-6"
      >
        {/* Text Section */}
        <div className="flex-1 flex flex-col w-[100%] h-[100%] sm:px-16 px-6 
        sm:py-12 py-4 ">
          <div className="flex-row justify-start items-start ">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-[550px] mt-5 text-sm sm:text-base text-white/90">
              Let's discuss how TapNova can help you build secure, scalable
              software solutions that drive growth and efficiency.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <form className="w-full lg:w-auto flex flex-col gap-2">
          <div className="flex w-full flex-col sm:flex-row rounded-full
           overflow-hidden bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 sm:py-3 text-gray-800
               placeholder-gray-400 outline-none"
              required
            />
            <button
              type="submit"
              className="hidden sm:block bg-white text-blue-600 font-medium
               px-6 py-2 sm:py-3 hover:bg-gray-100 transition-all"
            >
              Get a Demo
            </button>
          </div>
          <p className="text-xs text-white/80 pl-6">
            We care about your data. Read our{" "}
            <a href="/privacy-policy" className="underline hover:text-white">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </motion.div>
    </section>
  );
}
