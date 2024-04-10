import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import { Button } from "../shadcn/ui/button";

interface AppbarProps {
    user?: {
        name?: string | null;
        image?: string | null;
    },
    title?: string,
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    title,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between border-b px-4">
        <div className="text-lg flex flex-col justify-center">
            {title}
        </div>
        <div className="flex gap-4 justify-center items-center">
            <Avatar>
                <AvatarImage src={user?.image }/>
                <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}