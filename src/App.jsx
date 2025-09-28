import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('marksData.json');

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/80 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <NavBar />
          {/* <DaisyNav /> */}
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Analytics Dashboard
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive insights into pricing, performance, and results
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pricing Options Card */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/10">
            <div className="p-6 border-b border-gray-700/50">
              <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pricing Plans
              </h2>
              <p className="text-gray-400 mt-1">Compare our subscription options</p>
            </div>
            <div className="p-6">
              <Suspense fallback={
                <div className="flex justify-center items-center h-64">
                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className="w-16 h-16 border-4 border-gray-700 rounded-full"></div>
                      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-cyan-500 border-r-purple-500 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-gray-400 font-medium">Loading pricing options...</p>
                  </div>
                </div>
              }>
                <PricingOptions pricingPromise={pricingPromise} />
              </Suspense>
            </div>
          </div>

          {/* Marks Chart Card */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:shadow-purple-500/10">
            <div className="p-6 border-b border-gray-700/50">
              <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Performance Metrics
              </h2>
              <p className="text-gray-400 mt-1">Track your academic progress</p>
            </div>
            <div className="p-6">
              <Suspense fallback={
                <div className="flex justify-center items-center h-64">
                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className="w-16 h-16 border-4 border-gray-700 rounded-full"></div>
                      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-purple-500 border-r-pink-500 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-gray-400 font-medium">Loading performance data...</p>
                  </div>
                </div>
              }>
                <MarksChart marksPromise={marksPromise} />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Results Chart Section */}
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden transition-all duration-300 hover:border-gray-600/50">
          <div className="p-6 border-b border-gray-700/50">
            <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Results Analysis
            </h2>
            <p className="text-gray-400 mt-1">Comprehensive results overview and trends</p>
          </div>
          <div className="p-6">
            <ResultsChart />
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>© 2023 Analytics Dashboard. All rights reserved.</p>
            <p className="mt-2 text-sm">Designed with precision and care</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App