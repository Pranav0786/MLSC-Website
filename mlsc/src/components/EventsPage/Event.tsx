import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Headings from '../Hedings'
import EventBtn from "./EventBtn"

interface TimelineItem {
  title: string
  text: string
  link: string
  description: string
}

const timelineData: TimelineItem[] = [
  {
    title: "Azure Xplore",
    text: "Register Now",
    link: "" ,
    description: "Explore cloud computing and Microsoft Azure by starting with foundational concepts and Azure services. Gain hands-on experience in setting up and managing resources, and learn to build and deploy applications using Azure's tools for practical development.",
  },
  {
    title: "Cyber Wars",
    text: "Coming soon...",
    link: "" ,
    description: "Dive into the world of cybersecurity with Cyber Wars, where you'll explore essential strategies for defending against cyber threats. Engage in hands-on activities and simulations to understand the intricacies of security protocols and threat management. Enhance your skills in safeguarding digital environments through interactive sessions and expert insights.",
  },
  {
    title: "Synergy Summit",
    text: "Coming soon...",
    link: "" ,
    description: "Join us at the Synergy Summit, a premier event focusing on collaboration and innovation across various industries. Connect with thought leaders and industry experts to explore emerging trends and best practices. Participate in dynamic discussions and workshops to drive synergy and foster collaborative solutions.",
  },
  {
    title: "AI Nexus",
    text: "Coming soon...",
    link: "" ,
    description: "AI Nexus delves into the cutting-edge developments in artificial intelligence. Discover the latest advancements and applications of AI technologies through expert presentations and hands-on sessions. Learn how AI is transforming industries and gain insights into practical implementations and future trends.",
  },
]

const TimelineItem: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const controls = useAnimation()
  const isEven = index % 2 === 0

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center mb-8 md:mb-12 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        className="w-full md:w-5/12 mb-4 md:mb-0 flex flex-col items-center md:items-start"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: isEven ? 50 : -50 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg mb-4 md:hidden"
          variants={{
            visible: { scale: 1, opacity: 1 },
            hidden: { scale: 0, opacity: 0 },
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span className="text-white font-bold">{index + 1}</span>
        </motion.div>

        <div
          className={`p-4 md:p-6 rounded-lg shadow-lg bg-gradient-to-br w-full flex flex-col ${
            isEven
              ? "from-blue-500 to-purple-600 text-white"
              : "from-green-400 to-cyan-500 text-white"
          } ${isEven ? "xl:justify-start" : "xl:items-start"} md:items-start`}
        >
          <p className="text-2xl font-bold mb-2  text-yellow-300 md:text-left text-center">
            {item.title}
          </p>
          <p className="text-md font-semibold md:text-left text-justify text-gray-200">
            {item.description}
          </p>
          <div className="h-4"></div> {/* This will push the button to the end */}
          <div className="w-full flex justify-center xl:justify-end">
            <EventBtn text={item.text} link={item.link} />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-0.5 h-8 md:h-0.5 md:w-2/12 bg-gradient-to-b md:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 my-2 md:my-0"
        variants={{
          visible: { scaleY: [0, 1], scaleX: [0, 1], opacity: 1 },
          hidden: { scaleY: 0, scaleX: 0, opacity: 0 },
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg hidden md:flex"
        variants={{
          visible: { scale: 1, opacity: 1 },
          hidden: { scale: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <span className="text-white font-bold">{index + 1}</span>
      </motion.div>
    </motion.div>
  )
}

export default function MobileOptimizedTimeline() {
  return (
    <div className="w-full md:w-9/12 mx-auto p-8 md:p-6 rounded-xl mt-40">
      <Headings heading={"Event Tracker"} />
      <div className="min-h-10"></div>
      <div className="relative">
        <div className="opacity-0 xl:opacity-100 absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500"></div>
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}
