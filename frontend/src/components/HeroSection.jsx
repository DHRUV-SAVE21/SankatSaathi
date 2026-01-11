import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = ({ onInitialize }) => {
    return (
        <div className="relative z-10 flex flex-col justify-center h-full w-full lg:max-w-[70%] pointer-events-none pt-20 lg:pt-0">
            <div className="pointer-events-auto bg-gradient-to-r from-black/90 via-black/60 to-transparent p-6 md:p-12 rounded-3xl backdrop-blur-sm border border-white/5 shadow-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-4 mb-6"
                >
                    <div className="h-[2px] w-12 bg-crisis-red shadow-[0_0_10px_#FF3B30]"></div>
                    <span className="text-crisis-red font-mono tracking-[0.2em] text-xs md:text-sm font-bold uppercase drop-shadow-md">Crisis Management Protocol</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-xl"
                >
                    PLANETARY <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">RESILIENCE</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-base sm:text-lg md:text-xl text-gray-300 font-body leading-relaxed max-w-xl mb-10 border-l-2 border-crisis-red/50 pl-6"
                >
                    Advanced crisis coordination and real-time global monitoring system for next-generation emergency response.
                    Deploy resources, track incidents, and save lives with AI-driven precision.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    onClick={onInitialize}
                    className="group relative px-8 py-4 bg-crisis-red text-white font-display font-bold text-base tracking-widest uppercase overflow-hidden hover:bg-red-600 transition-all duration-300 shadow-[0_0_20px_rgba(255,59,48,0.3)] hover:shadow-[0_0_30px_rgba(255,59,48,0.6)]"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        Initialize System
                        <Zap className="w-5 h-5 group-hover:fill-white transition-colors" />
                    </span>
                </motion.button>

                <div className="mt-12 flex items-center gap-8 opacity-80">
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-display font-bold text-white">00:03s</span>
                        <span className="text-[10px] font-mono uppercase text-crisis-cyan tracking-wider">Data Latency</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/20"></div>
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-display font-bold text-white">100%</span>
                        <span className="text-[10px] font-mono uppercase text-green-500 tracking-wider">Uptime</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
