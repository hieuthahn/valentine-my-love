import MainScreen from "@/components/MainScreen";

export default function Home() {
  return (
    <main style={{
      backgroundImage: "url('./bg.jpeg')",
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
    }} className="flex min-h-dvh h-vh min-w-dvw w-vw flex-col items-center justify-center">
      <MainScreen />
    </main>
  );
}
