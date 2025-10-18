import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"; // oder deinen Alert-Componenten
import { usePage } from "@inertiajs/react";
import { SharedPageProps } from "@/types";

export default function HeaderAlert() {
  const { flash, announcement } = usePage<SharedPageProps>().props;

  // priority: Backend Flash > Announcement Prop
  // const message = flash?.alert || announcement;
  const message = "Hallo Welt";

  if (!message) return null;

  return (
    <Alert className="absolute top-0 left-0 right-0 mb-4 bg-white/30 backdrop-blur container mx-auto rounded-none rounded-xl-bl rounded-xl-br">
        <AlertTitle>Ankündigung</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}