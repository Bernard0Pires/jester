export default function SubmitButton({ onClick, children }: SubmitButton) {
  return (
    <button onClick={onClick} className="bg-yellow-200 mt-5 rounded-xl p-1">
      {children}
    </button>
  );
}
