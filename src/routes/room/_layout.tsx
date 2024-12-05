import { ParentProps } from "solid-js";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
  SidebarProvider,
  SidebarGroupLabel,
} from "~/components/ui/sidebar";
import { AddMemberModal } from "~/components/AddMemberModal";

export function Layout(props: ParentProps) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
            FairShare
        </SidebarHeader>
        <SidebarContent>
        <SidebarGroup>
            <AddMemberModal />
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel class="text-sm">Rooms</SidebarGroupLabel>
          </SidebarGroup>
          <SidebarGroup>
            <h1>Participants</h1>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <main>
        <SidebarTrigger />
        {props.children}
      </main>
    </SidebarProvider>
  );
}
