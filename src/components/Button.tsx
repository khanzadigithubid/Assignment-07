interface ButtonProps {
  button: string;
  className?: string; 
}

export default function Button({ button, className }: ButtonProps) {
  return (
    <button className={`px-6 py-4 rounded ${className || "bg-gray-500 text-white hover:bg-gray-700"}`}>
      {button}
    </button>
  );
}
