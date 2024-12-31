const Button = ({ onClick, isLink, isPrimary, link, children, ...props }) => {
  return (
    <button
      className={`rounded px-10 py-4 leading-none ${
        isPrimary
          ? "text-white bg-[#DB4444]"
          : "bg-transparent border-[1px] border-[#000]/50"
      }`}>
      {children}
    </button>
  );
};

export default Button;
