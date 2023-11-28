import { Navigationbar } from "./_components/navigationbar";

const RootPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full ">
      <Navigationbar />

      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default RootPageLayout;
