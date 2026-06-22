import LandingHeader from './LandingHeader';
import LandingFooter from './LandingFooter';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <LandingHeader />
      <main className="flex-1 pt-16">{children}</main>
      <LandingFooter />
    </div>
  );
}
