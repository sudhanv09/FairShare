import { AppSidebar } from "./app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { useParams } from "@solidjs/router";
import { getRoomById } from "~/lib/persist";
import { EntryList } from "./entry-list";
import { Summary } from "./summary";

export default function RoomId() {
  const roomId = useParams().id;
  const room = getRoomById(roomId);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header class="py-4">
          <SidebarTrigger class="md:hidden lg:hidden" />
          <h1 class="text-xl text-center">{room?.name}</h1>
        </header>
        <main class="w-full grid grid-cols-3">
          <div class="col-span-2">
            <EntryList room={room}/>
          </div>
          <Summary />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
