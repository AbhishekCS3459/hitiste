const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
