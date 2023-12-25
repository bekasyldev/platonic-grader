"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, Table } from "lucide-react";
const variants = [
  { label: "SRO/Practice", value: "en" },
  { label: "Lecture/SRO/Practice", value: "fr" },
  { label: "Lecture/SRO/Lab/Practice", value: "de" },
  { label: "SRO/Lab/Practice", value: "es" },
] as const;

const FormSchema = z.object({
  variant: z.string({
    required_error: "Please select a variant.",
  }),
});

export function Choice() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(`You submitted the following values: ${data}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="variant"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Variants</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? variants.find(
                            (variant) => variant.value === field.value
                          )?.label
                        : "Select variant of grades"}
                      <Table className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {variants.map((variant) => (
                        <CommandItem
                          value={variant.label}
                          key={variant.value}
                          onSelect={() => {
                            form.setValue("variant", variant.value);
                          }}
                        >
                          {variant.label}
                          <Check
                            className={cn(
                              "ml-auto h-4 w-4",
                              variant.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
