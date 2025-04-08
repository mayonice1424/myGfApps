import { ExternalPathString, Link } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import { ComponentProps } from "react";
import { Platform } from "react-native";

// Correct the type definition for href to accept ExternalPathString
type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string | ExternalPathString; // Allowing href to be a string or ExternalPathString
};

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href as ExternalPathString} // Casting href to ExternalPathString
      onPress={async (event) => {
        if (Platform.OS !== "web") {
          event.preventDefault();
          await openBrowserAsync(href);
        }
      }}
    />
  );
}
