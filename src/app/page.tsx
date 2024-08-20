export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 md:p-24 bg-[#8ACE00]">
      <h1 className="text-[40px] md:text-[100px] text-black font-brat mb-[20px] blur-[1px]">Can my dog eat...</h1>

      <form className="flex items-center max-w-sm mx-auto">
        <label htmlFor="simple-search" className="sr-only">Search</label>
          <input type="text" id="simple-search" className="bg-transparent text-black text-sm border border-black border-b-2 border-t-0 border-l-0 border-r-0 focus:ring-black block w-full md:w-[100vw] ps-2 py-2.5 placeholder:text-black" placeholder="Search for food..." required />
        <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-[#8ACE00] bg-black rounded-lg border border-black hover:bg-[#8ACE00] hover:text-white focus:ring-4 focus:outline-none">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

    </main>
  );
}
