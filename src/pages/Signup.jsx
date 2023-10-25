import logo from "../../assets/shared/logo.svg";
import bg from "../../assets/sign-up/bg-pattern-side.svg";

export default function Signup() {
  return (
    <>
      <main className="max-w-[1110px] mx-auto p-4">
        <nav>
          <img src={logo} alt="" />
        </nav>

        <section
          className="my-20 lg:text-start gap-10 lg:gap-0 flex 
        justify-between flex-col items-center lg:items-start lg:flex-row"
        >
          <div>
            <h1 className="font-bold text-6xl text-[#333950] w-[30rem] mb-3">
              Work smarter. Save time.
            </h1>
            <p className="md:w-96 md:mx-auto lg:mx-0 text-lg text-[#747b95] my-4">
              Easily manage your projects. Get on the list and receive in-app
              perks available only to early subscribers. We are moving into
              final development and getting ready for official launch soon.
            </p>
            <div
              className="flex flex-col lg:flex-row justify-between mt-10 
            md:mt-20 gap-10 lg:gap-0 items-center"
            >
              <div>
                <p className="uppercase font-bold">
                  coming <span className="text-[#5175ff]"> 4 nov 2020</span>
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <div className="flex flex-col items-center bg-[#979797]/30 w-fit p-2 rounded-xl">
                    <p className="font-bold text-6xl text-[#5175ff]">47</p>
                    <span className="font-bold text-[#747b95]">days</span>
                  </div>
                  <div className="flex flex-col items-center bg-[#979797]/30 w-fit p-2 rounded-xl">
                    <p className="font-bold text-6xl text-[#5175ff]">07</p>
                    <span className="font-bold text-[#747b95]">hours</span>
                  </div>
                  <div className="flex flex-col items-center bg-[#979797]/30 w-fit p-2 rounded-xl">
                    <p className="font-bold text-6xl text-[#5175ff]">56</p>
                    <span className="font-bold text-[#747b95]">mins</span>
                  </div>
                  <div className="flex flex-col items-center bg-[#979797]/30 w-fit p-2 rounded-xl">
                    <p className="font-bold text-6xl text-[#5175ff]">14</p>
                    <span className="font-bold text-[#747b95]">sec</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col shadow-2xl rounded-xl p-4 h-fit bg-white">
            <input
              type="text"
              placeholder="Name"
              className="border-solid p-4 w-96 focus:outline-none bg-transparent border-b-[1px] border-b-gray-500"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="border-solid p-4 w-96 focus:outline-none bg-transparent border-b-[1px] border-b-gray-500"
            />
            <select
              name="options"
              id="options"
              className="border-solid cursor-pointer p-4 w-96 focus:outline-none bg-transparent border-b-[1px] border-b-gray-500"
            >
              <option value="">Basic Pack Free</option>
              <option value="">Pro Pack $9.99</option>
              <option value="">Ultimate Pack $19.99</option>
            </select>
            <input
              type="text"
              placeholder="Phone Number"
              className="border-solid p-4 w-96 focus:outline-none bg-transparent border-b-[1px] border-b-gray-500"
            />
            <input
              type="text"
              placeholder="Company"
              className="border-solid p-4 w-96 focus:outline-none bg-transparent border-b-[1px] border-b-gray-500"
            />
            <button className="w-full text-white font-bold rounded-full px-6 py-4 bg-[#5175ff] my-10">
              Get on this list
            </button>
          </div>
          <div
            className="bg-[#25293a] hidden lg:block md:h-screen md:w-96 bg-cover relative bottom-40 right-52 -z-10"
            style={{ backgroundImage: `url('${bg}')` }}
          ></div>
        </section>
      </main>
    </>
  );
}
