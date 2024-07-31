export default function Button({ children, ...props }) {
  return (
    <button className="min-w-[100px] bg-blue-500 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded-full" >
      {children}
    </button>
  );
}
