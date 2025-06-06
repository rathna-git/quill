import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Animated background */}
      <div className="fixed inset-0 bg-background overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5876ef]/30 via-[#3a2f7c]/20 to-[#5876ef]/30" />
        
        {/* Simple animated orbs */}
        <div className="absolute w-[20px] h-[20px] rounded-full bg-[#5876ef]/60 animate-float1" style={{ top: '10%', left: '5%' }} />
        <div className="absolute w-[15px] h-[15px] rounded-full bg-[#3a2f7c]/60 animate-float2" style={{ top: '30%', right: '5%' }} />
        <div className="absolute w-[18px] h-[18px] rounded-full bg-[#5876ef]/60 animate-float3" style={{ bottom: '10%', left: '20%' }} />
        <div className="absolute w-[12px] h-[12px] rounded-full bg-[#3a2f7c]/60 animate-float1" style={{ top: '60%', left: '15%' }} />
        <div className="absolute w-[16px] h-[16px] rounded-full bg-[#5876ef]/60 animate-float2" style={{ top: '20%', left: '40%' }} />
        <div className="absolute w-[14px] h-[14px] rounded-full bg-[#3a2f7c]/60 animate-float3" style={{ bottom: '30%', right: '20%' }} />
        <div className="absolute w-[11px] h-[11px] rounded-full bg-[#5876ef]/60 animate-float1" style={{ top: '70%', right: '10%' }} />
        <div className="absolute w-[19px] h-[19px] rounded-full bg-[#3a2f7c]/60 animate-float2" style={{ top: '40%', left: '70%' }} />
        <div className="absolute w-[10px] h-[10px] rounded-full bg-[#5876ef]/60 animate-float3" style={{ top: '15%', left: '25%' }} />
        <div className="absolute w-[21px] h-[21px] rounded-full bg-[#3a2f7c]/60 animate-float1" style={{ top: '50%', left: '60%' }} />
        <div className="absolute w-[8px] h-[8px] rounded-full bg-[#5876ef]/60 animate-float2" style={{ bottom: '40%', right: '30%' }} />
        <div className="absolute w-[23px] h-[23px] rounded-full bg-[#3a2f7c]/60 animate-float3" style={{ top: '25%', left: '85%' }} />
        <div className="absolute w-[7px] h-[7px] rounded-full bg-[#5876ef]/60 animate-float1" style={{ bottom: '20%', left: '45%' }} />
        <div className="absolute w-[24px] h-[24px] rounded-full bg-[#3a2f7c]/60 animate-float2" style={{ top: '80%', left: '35%' }} />
        <div className="absolute w-[6px] h-[6px] rounded-full bg-[#5876ef]/60 animate-float3" style={{ top: '45%', right: '40%' }} />
        <div className="absolute w-[5px] h-[5px] rounded-full bg-[#3a2f7c]/60 animate-float1" style={{ top: '5%', left: '50%' }} />
        <div className="absolute w-[4px] h-[4px] rounded-full bg-[#5876ef]/60 animate-float2" style={{ top: '35%', left: '15%' }} />
        <div className="absolute w-[6px] h-[6px] rounded-full bg-[#3a2f7c]/60 animate-float3" style={{ bottom: '5%', right: '15%' }} />
        <div className="absolute w-[4px] h-[4px] rounded-full bg-[#5876ef]/60 animate-float1" style={{ top: '55%', left: '80%' }} />
        <div className="absolute w-[7px] h-[7px] rounded-full bg-[#3a2f7c]/60 animate-float2" style={{ top: '75%', left: '55%' }} />
        <div className="absolute w-[3px] h-[3px] rounded-full bg-[#5876ef]/60 animate-float3" style={{ top: '85%', right: '25%' }} />
        <div className="absolute w-[8px] h-[8px] rounded-full bg-[#3a2f7c]/60 animate-float1" style={{ top: '65%', left: '90%' }} />
        <div className="absolute w-[2px] h-[2px] rounded-full bg-[#5876ef]/60 animate-float2" style={{ top: '90%', left: '75%' }} />
        <div className="absolute w-[11px] h-[11px] rounded-full bg-[#3a2f7c]/60 animate-float3" style={{ top: '95%', left: '10%' }} />
        <div className="absolute w-[3px] h-[3px] rounded-full bg-[#5876ef]/60 animate-float1" style={{ top: '15%', left: '95%' }} />
        <div className="absolute w-[9px] h-[9px] rounded-full bg-[#3a2f7c]/60 animate-float2" style={{ top: '50%', right: '5%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#3a2f7c] to-[#5876ef] bg-clip-text text-transparent">
              Welcome to Quill
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your intelligent note companion — designed to help you capture, organize, and refine ideas effortlessly. 
              With built-in AI features like smart summaries, tone adjustment, and contextual suggestions, Quill turns simple notes 
              into powerful insights.</p>
            <p className="text-xl text-muted-foreground leading-relaxed">Stay focused. Write smarter.</p>
            
            <div className="flex justify-center gap-4 pt-4">
              <Link 
                href="/dashboard" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#3a2f7c] to-[#5876ef] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3 rounded-lg border border-[#3a2f7c] text-[#3a2f7c] font-medium hover:bg-[#3a2f7c] hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 