import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
export default function TopBar() {
    return (
        <nav className="h-16 w-full border-b-[1px] flex items-center p-4">
            <div className="w-1/3">
                <TextField.Root>
                    <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                    </TextField.Slot>
                    <TextField.Input
                        placeholder="Search for pets, services, etc."
                        className="font-roboto"
                    />
                </TextField.Root>
            </div>
        </nav>
    );
}
