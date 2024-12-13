import { ComponentProps, For } from "solid-js";
import { A } from "@solidjs/router";
import { Button } from "~/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "~/components/ui/sidebar";
import { AddMemberModal } from "./AddMemberModal";
import { store } from "~/lib/persist";

export function AppSidebar(props: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader class="font-bold text-center pt-8">
        FairShare
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel class="text-md">Rooms</SidebarGroupLabel>
          <SidebarGroupContent>
            <For each={store}>
              {(item) => (
                <div class="p-3">
                  <Button as={A} href={item.id} variant={"link"}>{item.name}</Button>
                </div>
              )}
            </For>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel class="text-md gap-3">
            Participants <AddMemberModal />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <For each={store}>
              {(item) => (
                <div class="p-3 space-y-3">
                  <For each={item.members}>
                    {(member) => <h1>{member.name}</h1>}
                  </For>
                </div>
              )}
            </For>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
