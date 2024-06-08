interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return <div className="h-full dark:bg-[#1f1f1f]">{children}</div>;
};
interface PublicLayoutProps {}

export default PublicLayout;
