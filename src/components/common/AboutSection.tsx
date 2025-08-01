'use client';

import * as React from "react";

export default function AboutSection() {
  return (
    <div id="about" className="w-full bg-cyan-50 dark:bg-slate-950">
      <section className="py-16 px-4 text-center max-w-7xl mx-auto">
        {/* Main headline with gradient */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About TokenRadar Labs
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto">
          Forging next-generation open-source web3 tools that empower blockchain communities 
          with real-time data and seamless user experiences.
        </p>
        
        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Our Mission */}
          <div className="bg-gradient-to-br from-white to-cyan-50/50 dark:bg-slate-800/60 dark:from-transparent dark:to-transparent rounded-lg border shadow-md hover:shadow-lg transition-shadow p-8 text-left">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              TokenRadar-xyz Tools creates elegant, developer-focused solutions that make
              blockchain technology more accessible, actionable, and engaging. We bridge
              the gap between complex market data and user-friendly interfaces.
            </p>
            <ul className="space-y-4 text-left">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-slate-700 dark:text-slate-200">Real-time market intelligence</span>
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-cyan-400 rounded-full mr-3"></span>
                <span className="text-slate-700 dark:text-slate-200">Community-first approach</span>
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
                <span className="text-slate-700 dark:text-slate-200">Open-source innovation</span>
              </li>
            </ul>
          </div>
          
          {/* Card 2: Key Projects */}
          <div className="bg-gradient-to-br from-white to-cyan-50/50 dark:bg-slate-800/60 dark:from-transparent dark:to-transparent rounded-lg border shadow-md hover:shadow-lg transition-shadow p-8 text-left">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Key Projects</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium text-blue-500 mb-1">TokenRadar</h4>
                <p className="text-slate-600 dark:text-slate-300">Real-time token tracking and price alert system for Discord communities.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-cyan-500 mb-1">Market Analytics</h4>
                <p className="text-slate-600 dark:text-slate-300">Comprehensive market analysis tools with customizable dashboards.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-purple-500 mb-1">Web3 Integration</h4>
                <p className="text-slate-600 dark:text-slate-300">Seamless blockchain integration solutions for developers and projects.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {/* Metric 1: Active Users */}
          <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl shadow-md hover:shadow-lg transition-shadow dark:from-blue-500/20 dark:to-purple-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">10K+</h3>
            <p className="text-slate-600 dark:text-slate-300 font-medium">Active Users</p>
          </div>
          
          {/* Metric 2: Discord Servers */}
          <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl shadow-md hover:shadow-lg transition-shadow dark:from-purple-500/20 dark:to-pink-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">500+</h3>
            <p className="text-slate-600 dark:text-slate-300 font-medium">Discord Servers</p>
          </div>
          
          {/* Metric 3: Real-Time Data */}
          <div className="p-6 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl shadow-md hover:shadow-lg transition-shadow dark:from-pink-500/20 dark:to-red-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400">24/7</h3>
            <p className="text-slate-600 dark:text-slate-300 font-medium">Real-Time Data</p>
          </div>
          
          {/* Metric 4: Uptime */}
          <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl shadow-md hover:shadow-lg transition-shadow dark:from-cyan-500/20 dark:to-blue-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400">99.9%</h3>
            <p className="text-slate-600 dark:text-slate-300 font-medium">Uptime</p>
          </div>
        </div>
      </section>
    </div>
  );
} 