import Link from "next/link";

const BlogCard = ({ href, bg, title, subtitle, height = "h-[585px]" }) => (
  <Link
    href={href}
    className={`
      relative ${height} transition-[transform] duration-300 ease-in-out
      w-full cursor-pointer bg-cover bg-center flex flex-col justify-end
      px-4 pb-[20px] gap-[10px]
    `}
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-40" />
    <p className="fsans-400 text-[22px] leading-[130%] text-white relative z-50">
      {title}
    </p>
    <p className="fsans-400 text-[16px] leading-[130%] text-white opacity-50 relative z-50">
      {subtitle}
    </p>
    <button className="relative z-50">
      <img className="h-10 w-10" src="/buttonarrows/bentor1.svg" alt="Next" />
    </button>
  </Link>
);

export default BlogCard;
