import React from "react";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { serverUrl } from "../App";

function Auth() {
  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      const result = await axios.post(
        serverUrl + "/api/auth/google",
        {
          name: user.displayName,
          email: user.email,
        },
        { withCredentials: true },
      );

      console.log("Backend Response:", result.data);
    } catch (error) {
      console.error("REAL ERROR:", error.response?.data || error.message);
    }
  };
  return (
    <div className="min-h-screen overflow-hidden bg-white text-black px-8">
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="max-w-7xl mx-auto mt-8
        rounded-2xl 
        bg-black/80 backdrop-blur-xl
        border border-white/10 
        px-8 py-6 
        shadow-[0_20px_45px_rgba(0,0,0,0.6)]"
      >
        <h1
          className="text-2xl font-bold
            bg-linear-to-r from-white via-grey-300 to-white
            bg-clip-text text-transparent"
        >
          Exam Notes AI
        </h1>

        <p className="text-sm text-gray-300 mt-1">
          {" "}
          AI-powered exam-oriented notes & revision
        </p>
      </motion.header>

      <main
        className="max-w-7xl mx-auto py-16 
flex flex-col lg:flex-row 
items-center justify-between gap-16"
      >
        {/* LEFT CONTENT  */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl 
      font-extrabold leading-tight
      bg-gradient-to-br from-black via-gray-700 to-black
      bg-clip-text text-transparent"
          >
            Unlock Smart <br /> AI Notes
          </h1>

          <motion.button
            onClick={handleGoogleAuth}
            whileHover={{
              y: -6,
              scale: 1.05,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="mt-8 px-8 py-3 rounded-xl
      flex items-center justify-center lg:justify-start gap-3
      bg-black text-white font-semibold text-lg
      shadow-lg"
          >
            <FcGoogle size={22} />
            Continue with Google
          </motion.button>

          <p
            className="mt-6 max-w-xl text-base sm:text-lg
      text-gray-600 mx-auto lg:mx-0"
          >
            You get <span className="font-semibold">50 FREE credits</span> to
            create exam notes, project notes, charts, graphs and download clean
            PDFs — instantly using AI.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Start with 50 credits • Upgrade anytime • Instant access
          </p>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Feature
              icon="🎁"
              title="50 Free Credits"
              des="Get 50 FREE credits to start instantly."
            />
            <Feature
              icon="📘"
              title="Exam Notes"
              des="Revision-ready, high-yield notes."
            />
            <Feature
              icon="📂"
              title="Project Notes"
              des="Well-structured downloadable PDFs."
            />
            <Feature
              icon="📊"
              title="Charts & Graphs"
              des="AI-generated visual learning tools."
            />
          </div>
        </div>
      </main>
    </div>
  );
}
function Feature({ icon, title, des }) {
  return (
    <motion.div
      whileHover={{ y: -12, rotateX: 8, rotateY: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative rounded-2xl p-6 
  bg-gradient-to-br from-black/90 via-black/80 to-black/90 
  backdrop-blur-2xl 
  border border-white/10 
  shadow-[0_30px_80px_rgba(0,0,0,0.7)]
  text-white"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute -inset-0 rounded-2xl 
     bg-gradient-to-br  from-white/10 to-transparent 
    opacity-0 hover:opacity-100 transition-opacity 
    pointer-events-none"
      />
      <div className="relative z-10 " style={{ transform: "translateZ(30px)" }}>
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{des}</p>
      </div>
    </motion.div>
  );
}

export default Auth;
