import { For } from "solid-js";
import { store } from "~/lib/persist";
import { cn } from "~/lib/utils";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import { AddMemberModal } from "./AddMemberModal";

export function Sidebar() {
  return (
    <aside class="container w-1/2">
      <h1>Rooms</h1>
      <div>
        <For each={store}>
          {(item) => (
            <a
              href={`/room/${item.id}`}
              class={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  class: "text-sm",
                }),
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
            >
              {item.name}
            </a>
          )}
        </For>
        <Separator />
      </div>
      <div>
        <div class="flex gap-12 items-center">
          <h1>Members</h1>
          <AddMemberModal />
        </div>
      </div>
    </aside>
  );
}
