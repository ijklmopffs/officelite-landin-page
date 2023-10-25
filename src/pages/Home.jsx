import logo from "../../assets/shared/logo.svg";
import bgFooter from "../../assets/home/bg-pattern-footer.svg";
import bgHeader from "../../assets/home/bg-pattern-header.svg";
import bgPattern from "../../assets/home/bg-pattern-pricing.svg";
import illustration from "../../assets/home/illustration-charts.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main className="max-w-[1110px] mx-auto p-4">
        <nav>
          <img src={logo} alt="" />
        </nav>

        <section className="my-20 flex flex-col-reverse md:flex-row justify-between text-start">
          <div>
            <h1 className="font-bold text-6xl text-[#333950] w-[30rem] mb-3">
              A simple solution to complex tasks is coming soon
            </h1>
            <p className="w-96 text-lg text-[#747b95] my-4">
              Say goodbye to inefficient juggling of multiple apps, teams, and
              projects. Officelite is the new collaboration platform built with
              an intuitive interface to improve productivity.
            </p>
            <Link to="/signup">
              <button className="bg-[#5175ff] text-white px-6 py-2 hover:opacity-50 rounded-full font-bold">
                Get Started
              </button>
            </Link>
          </div>
          <div
            style={{ backgroundImage: `url('${bgHeader}')` }}
            className="bg-cover bg-no-repeat bg-right-top"
          >
            <img src={illustration} alt="" />
          </div>
        </section>

        <section className="my-40 flex flex-col md:flex-row items-center gap-10 justify-center relative mb-[-10rem]">
          <div className="shadow-xl rounded-xl w-80 bg-white">
            <div>
              <p className="font-bold text-xl text-[#333950]">Basic</p>
              <h2 className="font-bold text-6xl text-[#333950] mt-10">Free</h2>
              <p className="text-[#333950] my-5">Up to 5 users for free</p>
            </div>
            <div className="text-[#747b95] my-5">
              <p>Basic document collaboration</p>
              <p className="my-8">2 GB storage</p>
              <p>Great security and transport</p>
            </div>
            <button className="my-5 bg-[#979797]/50 text-[#5175ff] px-6 hover:opacity-50 py-4 font-bold rounded-full">
              Try for free
            </button>
          </div>

          <div
            className="shadow-xl rounded-xl w-80 bg-[#5175ff] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${bgPattern}')` }}
          >
            <p className="font-bold text-xl text-white">Pro</p>
            <h2 className="font-bold text-6xl text-white mt-10">$9.99</h2>
            <p className="text-white my-5">Per user, billed monthly</p>
            <div className="text-white my-5">
              <p>All essential integrations</p>
              <p className="my-8">50 GB storage</p>
              <p>More control and insights</p>
            </div>
            <button className="my-5 bg-white text-[#5175ff] px-6 hover:opacity-50 py-4 font-bold rounded-full">
              Try for free
            </button>
          </div>

          <div className="shadow-xl rounded-xl w-80 bg-white">
            <p className="font-bold text-xl text-[#333950]">Ultimate</p>
            <h2 className="font-bold text-6xl text-[#333950] mt-10">$19.99</h2>
            <p className="text-[#333950] my-5">Per user, billed monthly</p>
            <div className="text-[#747b95] my-5">
              <p>Robust work management</p>
              <p className="my-8">100 GB storage</p>
              <p>VIP support</p>
            </div>
            <button className="my-5 bg-[#979797]/50 text-[#5175ff] px-6 hover:opacity-50 py-4 font-bold rounded-full">
              Try for free
            </button>
          </div>
        </section>
      </main>

      <footer
        className="bg-[#25293a] p-[10rem] bg-cover bg-no-repeat md:text-start"
        style={{ backgroundImage: `url('${bgFooter}')` }}
      >
        <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-20 gap-10 md:gap-0 items-center">
          <div>
            <p className="uppercase text-white font-bold">
              coming <span className="text-[#5175ff]"> 4 nov 2020</span>
            </p>
            <div className="mt-5 flex items-center gap-2">
              <div className="flex flex-col items-center bg-[#333950] w-fit p-2 rounded-xl">
                <p className="font-bold text-6xl text-white">47</p>
                <span className="font-bold text-[#747b95]">days</span>
              </div>
              <div className="flex flex-col items-center bg-[#333950] w-fit p-2 rounded-xl">
                <p className="font-bold text-6xl text-white">07</p>
                <span className="font-bold text-[#747b95]">hours</span>
              </div>
              <div className="flex flex-col items-center bg-[#333950] w-fit p-2 rounded-xl">
                <p className="font-bold text-6xl text-white">56</p>
                <span className="font-bold text-[#747b95]">mins</span>
              </div>
              <div className="flex flex-col items-center bg-[#333950] w-fit p-2 rounded-xl">
                <p className="font-bold text-6xl text-white">14</p>
                <span className="font-bold text-[#747b95]">sec</span>
              </div>
            </div>
          </div>

          <Link to="/signup">
            <button className="bg-[#5175ff] text-white px-6 py-2 hover:opacity-50 rounded-full font-bold">
              Get Started
            </button>
          </Link>
        </div>
      </footer>
    </>
  );
}
