import { motion, type Variants } from "framer-motion";
import { Mail, Phone, ArrowRight, Sparkles } from "lucide-react"

function App() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full min-w-sm bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden px-4 borer">


      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo with enhanced styling */}
        <motion.div
          className="relative mb-2 min-w-sm"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >

          {/* <div className="relative h-fit w-fit bg-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl z-10"> */}
          <img
            src="/side.png"
            alt="Heritage Access Logo"
            className="w-[400px] h-[200] md:w-[800px] md:h-[400px] mx-auto drop-shadow-2xl relative z-10"
          />
          {/* </div> */}
        </motion.div>

        {/* Enhanced title with gradient text */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-full border border-orange-300/20 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span className="text-sm font-medium text-slate-600">This website is under construction</span>
          </motion.div>

          {/*<h1 className="text-4xl md:text-7xl font-bold text-[#00687a] bg-clip-text mb-4 leading-tight">
            Heritage Access
          </h1>
          */}

          <motion.p
            // className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed"
            className="text-3xl md:text-6xl text-[#00687a] bg-clip-text mb-4 leading-tight"
            variants={itemVariants}
          >
            Keeping heritage alive
          </motion.p>
        </motion.div>

        {/* Enhanced contact cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-4 w-full max-w-2xl mb-8"
          variants={itemVariants}
        >
          <motion.a
            href="mailto:info@heritageaccess.org"
            className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-lg group-hover:shadow-cyan-500/25 transition-shadow">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 mb-1">Email Us</h3>
                <p className="text-cyan-600 group-hover:text-blue-600 transition-colors">info@heritageaccess.org</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.a>

          <motion.a
            href="tel:+1234567890"
            className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl shadow-lg group-hover:shadow-orange-500/25 transition-shadow">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 mb-1">Call Us</h3>
                <p className="text-orange-600 group-hover:text-red-600 transition-colors">+1 (234) 567-890</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.a>
        </motion.div>

        {/* Newsletter signup */}
        {/* <motion.div */}
        {/*   className="w-full max-w-md" */}
        {/*   variants={itemVariants} */}
        {/* > */}
        {/*   <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl"> */}
        {/*     <h3 className="text-lg font-semibold text-slate-800 mb-2 text-center">Stay Updated</h3> */}
        {/*     <p className="text-sm text-slate-600 mb-4 text-center">Be the first to know when we launch</p> */}
        {/*     <div className="flex gap-2"> */}
        {/*       <input */}
        {/*         type="email" */}
        {/*         placeholder="Enter your email" */}
        {/*         className="flex-1 px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all placeholder:text-slate-400" */}
        {/*       /> */}
        {/*       <motion.button */}
        {/*         className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all" */}
        {/*         whileHover={{ scale: 1.05 }} */}
        {/*         whileTap={{ scale: 0.95 }} */}
        {/*       > */}
        {/*         Notify Me */}
        {/*       </motion.button> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </motion.div> */}


        {/* Enhanced footer */}
        <motion.footer
          className="relative w-full z-10 backdrop-blur-xl border-t border-white/10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto px-3 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <span className="font-bold text-[#00687a]">Heritage Access Ltd.</span>
              </div>

              <div className="flex items-center gap-6 text-slate-400 text-sm">
                <span>© {new Date().getFullYear()} All rights reserved</span>
              </div>
            </div>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </motion.footer>


      </motion.div>
    </div>
  )

}
export default App
