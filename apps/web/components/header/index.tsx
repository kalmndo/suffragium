interface Header {
  title: string;
  subtitle: string;
}

export default function Header(props: Header) {
  return (
    <div className="pt-12 pb-8">
      <h3 className="font-popppins font-semibold text-xl text-black tracking-tight">
        {props.title}
      </h3>
      <p className="text-sm font-light text-gray-500">{props.subtitle}</p>
      <hr className="w-full h-px mt-6 bg-red-600"></hr>
    </div>
  );
}
