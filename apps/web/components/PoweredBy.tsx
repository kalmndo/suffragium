import Link from "next/link";

const PoweredBy = () => {
  return (
    <div className={"p-2 text-xs text-right"}>
      <Link
        href={'/'}
        target="_blank"
        className="text-bookinglight opacity-50 hover:opacity-100 dark:text-white">
        <div className="flex">
          powered by
          <p className="font-semibold pl-1">Suffragium</p>

        </div>
      </Link>
    </div >
  );
};

export default PoweredBy;

