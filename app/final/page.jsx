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
      theme: '03',
      problemStatement: 'T3PS01',
      teamName: 'Tech Titanz',
      teamID: 'T3PS01T01',
      leaderName: 'Keerthana P',
      collegeName: 'Sri Eshwar College of Engineering'
    },
    {
      serial: 2,
      theme: '03',
      problemStatement: 'T3PS01',
      teamName: 'The Neural Ninjas',
      teamID: 'T3PS01T07',
      leaderName: 'Pratham Munjal',
      collegeName: 'S.R.M Institute Of Science & Technology'
    },
    {
      serial: 3,
      theme: '03',
      problemStatement: 'T3PS01',
      teamName: 'Wind Driven Crew',
      teamID: 'T3PS01T11',
      leaderName: 'Arunoth Symen A',
      collegeName: 'Christ (Deemed to be University)'
    },
    {
      serial: 4,
      theme: '03',
      problemStatement: 'T3PS02',
      teamName: 'AI Rebels',
      teamID: 'T3PS02T06',
      leaderName: 'Brinda M',
      collegeName: 'Rathinam College of Arts and Science'
    },
    {
      serial: 5,
      theme: '03',
      problemStatement: 'T3PS02',
      teamName: 'THUNDERS',
      teamID: 'T3PS02T15',
      leaderName: 'Prakashraj M',
      collegeName: 'Coimbatore Institute Of Technology'
    },
    {
      serial: 6,
      theme: '03',
      problemStatement: 'T3PS03',
      teamName: 'DevDynamos',
      teamID: 'T3PS03T03',
      leaderName: 'Aravindh Prabu',
      collegeName: 'Sri Ramakrishna Engineering College'
    },
    {
      serial: 7,
      theme: '03',
      problemStatement: 'T3PS03',
      teamName: 'Tech Army',
      teamID: 'T3PS03T07',
      leaderName: 'Sanjai J',
      collegeName: 'Sri Krishna College of Engineering and Technology'
    },
    {
      serial: 8,
      theme: '03',
      problemStatement: 'T3PS03',
      teamName: 'ECO LEDGENCE',
      teamID: 'T3PS03T09',
      leaderName: 'Karmuhilan DB',
      collegeName: 'Rathinam College Of Arts And Science'
    },
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
        <div className="mt-8 text-center text-white">
          <p className="text-lg md:text-xl lg:text-3xl">For Theme 1 & 2 results will be announced soon..</p>
          <p className="text-lg md:text-xl lg:text-3xl">And all the selected teams will receive mail on 06.08.2024</p>
        </div>
        <div className="container mx-auto p-4 md:p-12">
          <div className="overflow-x-auto rounded-md">
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
                    <td className="py-6 px-12 border-b">{winner.collegeName}</td>
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
