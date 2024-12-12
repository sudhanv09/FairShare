import { ComponentProps, For, ParentProps } from "solid-js";
import { A } from "@solidjs/router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "~/components/ui/sidebar";
import { AddMemberModal } from "~/components/AddMemberModal";
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
                  <A href={item.id}>{item.name}</A>
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
