import { AppSidebar } from "./app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { useParams } from "@solidjs/router";
import { getRoomById, store } from "~/lib/persist";
import { For } from "solid-js";
import { Button } from "~/components/ui/button";

export default function RoomId() {
  const roomId = useParams().id;
  const room = getRoomById(roomId)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header class="py-4">
          <SidebarTrigger class="md:hidden lg:hidden"/>
          <h1 class="text-xl text-center">{room?.name}</h1>
        </header>
        <main class="w-full">
          
          <For each={room?.transactions}>{(items) => (
            <div>
              <h1>{items.amount}</h1>
            </div>
          )}</For>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
