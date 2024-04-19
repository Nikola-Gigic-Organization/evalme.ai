const LogoutButton = () => {
  return (
    <button type="submit" className="group space-x-0.5 font-bold uppercase">
      <span>/</span>
      <span className="transition-colors duration-150 group-hover:text-rose-500">
        logout
      </span>
    </button>
  );
};

export default LogoutButton;
