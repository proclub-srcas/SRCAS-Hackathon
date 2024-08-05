// pages/winners.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterAnimation from "@/components/FooterAnimation";
import TextAnimation from "@/components/TextAnimation";
import "./page.css";

export const metadata = {
  title: "Winners | SRCAS Hackathon",
  description: "List of winners of SRCAS Hackathon.",
  keywords: "Winners, SRCAS Hackathon, SRCAS, Hackathon",
  openGraph: {
    title: "Winners | SRCAS Hackathon",
    description: "List of winners of SRCAS Hackathon.",
    url: "https://srcashackathon.live/winners",
    images: "https://github.com/proclub-srcas/SRCAS-Hackathon/blob/main/public/srcas-hack-og.png",
    siteName: "SRCAS Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function Winners() {
  const winners = [
    {
      serial: 1,
      theme: 'Education and Empowerment',
      problemStatement: 'T1PS01',
      teamName: 'qwerty',
      teamID: 'T1PS01T01',
      leaderName: 'Ram Kumar',
      collegeName: 'abc College of Arts & Science',
    },
    {
      serial: 2,
      theme: 'Sustainability',
      problemStatement: 'Reduce Carbon Footprint',
      teamName: 'Green Warriors',
      teamID: 'TW001',
      leaderName: 'John Doe',
      collegeName: 'ABC University',
    },
    {
      serial: 3,
      theme: 'Health and Wellness',
      problemStatement: 'T2PS03',
      teamName: 'Health Heroes',
      teamID: 'T2PS03T02',
      leaderName: 'Jane Smith',
      collegeName: 'XYZ Institute of Technology',
    },
    // Add more fake details as needed
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#101010] flex flex-col min-h-screen p-4 md:pb-64 lg:px-0 md:pt-24 pt-16">
        <div className="w-full h-full flex flex-col gap-24 px-4 pt-20 md:px-8 xl:px-20 2xl:px-40">
          <div className="flex flex-col justify-between items-start sm:items-center gap-12 md:gap-0 md:flex-row md:items-start">
            <TextAnimation text="Finalists of SRCAS Hackathon!" />
            <img
              className="w-44 h-44 md:hidden lg:block xl:h-60 xl:w-60 rotatingContainer"
              src="/hacksphereLogo.png"
              alt="Get in touch"
            />
          </div>
        </div>
        <div className="container mx-auto p-12 px-2">
          <div className="overflow-x-auto rounded-md mx-20">
            <table className="min-w-full border border-yellow-500 bg-white">
              <thead>
                <tr className="bg-yellow-800 text-white">
                  <th className="py-2 px-4 border-b">Serial No.</th>
                  <th className="py-2 px-4 border-b">Theme</th>
                  <th className="py-2 px-4 border-b">Problem Statement</th>
                  <th className="py-2 px-4 border-b">Team Name</th>
                  <th className="py-2 px-4 border-b">Team ID</th>
                  <th className="py-2 px-4 border-b">Team Leader Name</th>
                  <th className="py-2 px-4 border-b">College Name</th>
                </tr>
              </thead>
              <tbody>
                {winners.map((winner, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{winner.serial}</td>
                    <td className="py-2 px-4 border-b">{winner.theme}</td>
                    <td className="py-2 px-4 border-b">{winner.problemStatement}</td>
                    <td className="py-2 px-4 border-b">{winner.teamName}</td>
                    <td className="py-2 px-4 border-b">{winner.teamID}</td>
                    <td className="py-2 px-4 border-b">{winner.leaderName}</td>
                    <td className="py-2 px-4 border-b">{winner.collegeName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div className="flex flex-col justify-between gap-20 md:flex-row px-4 md:px-8 xl:px-20 2xl:px-40">
          <p className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] text-white font-normal md:leading-[8rem] lg:leading-[10rem] tracking-tighter md:tracking-[-0.2rem]">
            Code to
            <br /> Innovate!
          </p>
          <FooterAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
}
