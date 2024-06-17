import { Input } from "@/components/shadcn/input";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen">
      <div className="flex flex-col justify-center h-full gap-2 text-center">
        <h1 className="text-3xl font-bold">
          Узнайте какая погода в вашем{" "}
          <span className="text-amber-600 font-black">городе</span>
        </h1>
        <h2 className="text-xl font-semibold">
          Просто начните вводить место в поле ниже
        </h2>
        <div className="flex items-center gap-2 mt-4">
          <Input className="bg-zinc-200 outline-none ring-offset-amber-600 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:border-1 focus-visible:ring-amber-600 text-zinc-900 font-medium text-lg h-16  rounded-xl duration-150 border-solid border-2 border-zinc-200  hover:border-amber-600 w-full" />
          <button
            className="h-16 min-w-24 w-24 flex justify-center items-center bg-zinc-900 border-solid border-2 border-zinc-200 rounded-xl text-zinc-200 text-2xl hover:border-amber-600 hover:text-amber-600 duration-150"
            type="button"
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </main>
  );
}
