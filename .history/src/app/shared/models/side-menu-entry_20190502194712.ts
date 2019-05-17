
export class SideMenuEntry {
    name: string;
    routerLink: string;
    dropdown: Array<SideMenuEntry> = [];
}
