import ModeController from "./ModeController";

const Header = () => {
  return (
    <header className="flex sticky z-100 items-center justify-between lg:z-10 bg-bg dark:bg-darkBlue transition-all lg:fixed left-0 top-0 lg:h-full lg:flex-col lg:rounded-[0_20px_20px_0]">
      <a href="/">
        <img src="/logo-tablet.png" alt="logo" className="md:h-full" />
      </a>
      <article className="flex items-center gap-6 transition-all lg:flex-col md:gap-8">
        <ModeController />
        <article className="p-5 border-l border-border md:p-6 transition-all lg:border-l-0 lg:border-t lg:border-border">
          <img src="/default-avatar.png" alt="avatar" />
        </article>
      </article>
    </header>
  );
};

export default Header;
