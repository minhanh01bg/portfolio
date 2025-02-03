import { type ReactNode } from "react";

export default function EmailButton({
    emailHash,
    children
} : {
    emailHash: string
    children: ReactNode
}) {
    return (
        <button
            onClick={() => {
                try {
                    const c = confirm("Confirm you want to email Christian.")

                    if (c) {
                        // Decode Base64 value to attempt to prevent spam bots from getting ahold of the email so easily.
                        // Most spam bots don't even utilize JavaScript as well.
                        const email = atob(emailHash)

                        window.location.href = `mailto:${email}`
                    }
                } catch (err) {
                    console.error(`Failed to unhash email: ${err}`)
                    alert("Error getting email address.")
                }
            }}
        >
            {children}
        </button>
    )
}