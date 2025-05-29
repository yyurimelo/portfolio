import { Dispatch } from "react";

// components
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
} from "@space/components/ui/responsive-dialog";
import { Separator } from "@space/components/ui/separator";

// icons
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

type Props = {
  open: boolean;
  setOpen: Dispatch<boolean>;
};

export function DialogContact({ open, setOpen }: Props) {
  return (
    <ResponsiveDialog open={open} onOpenChange={setOpen}>
      <ResponsiveDialogContent className="lg:max-w-[500px]">
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle>Vamos trabalhar juntos?</ResponsiveDialogTitle>
        </ResponsiveDialogHeader>
        <section className="space-y-3">
          <Separator />
          <div className="flex gap-2 justify-between items-center">
            <Mail className="size-5" />
            <a href="mailto:yuri.devsy@gmail.com" className="underline">
              yuri.devsy@gmail.com
            </a>
          </div>
          <Separator />
          <div className="flex gap-2 justify-between items-center">
            <Linkedin className="size-5" />
            <a href="https://www.linkedin.com/in/yyurimelo/">yyurimelo</a>
          </div>
          <Separator />
          <div className="flex gap-2 justify-between items-center">
            <Github className="size-5" />
            <a href="https://github.com/yyurimelo">yyurimelo</a>
          </div>
          <Separator />
          <div className="flex gap-2 justify-between items-center">
            <Instagram className="size-5" />
            <a href="https://www.instagram.com/yyurimelo/">@yyurimelo</a>
          </div>
        </section>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
