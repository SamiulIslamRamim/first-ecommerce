const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-poppins antialised">{children}</body>
    </html>
  );
};
export default RootLayout;
