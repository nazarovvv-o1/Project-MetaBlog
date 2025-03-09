import Link from "next/link";

export default function ViewAll() {
  return (
    <div className="text-center">
      <Link
        href={"/"}
        className="py-3 px-5 mb-20 rounded-md inline-block text-[#696A75] dark:text-[#A1A1AA] border border-[rgb(105,106,117,0.30)] dark:border-[#3F3F46] transition-all duration-300 hover:bg-[#696A75] hover:text-white dark:hover:bg-[#A1A1AA] dark:hover:text-black hover:border-[#696A75] dark:hover:border-[#A1A1AA]"
      >
        View All Post
      </Link>
    </div>
  );
}
