import { ImSoundcloud2 } from "react-icons/im";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`text-[32px] ${className}`}>
      <ImSoundcloud2 />
    </div>
  );
}
